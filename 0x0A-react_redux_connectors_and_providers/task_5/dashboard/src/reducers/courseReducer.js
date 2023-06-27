import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';
import Immutable from 'immutable';
import { coursesNormalizer, } from '../schema/courses'; 

const initialState = Immutable.List();

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      let editedData = [];
      action.data.map((course) => {
        editedData.push({ ...course, isSelected: false });
      });
      editedData = coursesNormalizer(editedData);
      return state.merge(editedData);
    case SELECT_COURSE:
      return state.update(
        state.findIndex((course) => course.id === action.index),
        (course) => ({ ...course, isSelected: true })
      );
    case UNSELECT_COURSE:
      return state.update(
        state.findIndex((course) => course.id === action.index),
        (course) => ({ ...course, isSelected: false })
      );
    default:
      return state;
  }
};

export default courseReducer;
