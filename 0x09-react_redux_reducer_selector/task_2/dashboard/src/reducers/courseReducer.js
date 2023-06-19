import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.List();

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return Immutable.List(
        action.data.map((course) => ({ ...course, isSelected: false }))
      );
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
