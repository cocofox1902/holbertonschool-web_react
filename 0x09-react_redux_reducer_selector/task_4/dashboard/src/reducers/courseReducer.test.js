import Immutable from 'immutable';
import courseReducer from './courseReducer';
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual(Immutable.List());
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'Course 1' },
        { id: 2, name: 'Course 2' },
      ],
    };
    const expectedState = Immutable.List([
      { id: 1, name: 'Course 1', isSelected: false },
      { id: 2, name: 'Course 2', isSelected: false },
    ]);
    expect(courseReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE', () => {
    const state = Immutable.List([
      { id: 1, name: 'Course 1', isSelected: false },
      { id: 2, name: 'Course 2', isSelected: false },
    ]);
    const action = { type: SELECT_COURSE, index: 1 };
    const expectedState = Immutable.List([
      { id: 1, name: 'Course 1', isSelected: false },
      { id: 2, name: 'Course 2', isSelected: true },
    ]);
    expect(courseReducer(state, action)).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE', () => {
    const state = Immutable.List([
      { id: 1, name: 'Course 1', isSelected: false },
      { id: 2, name: 'Course 2', isSelected: true },
    ]);
    const action = { type: UNSELECT_COURSE, index: 1 };
    const expectedState = Immutable.List([
      { id: 1, name: 'Course 1', isSelected: false },
      { id: 2, name: 'Course 2', isSelected: false },
    ]);
    expect(courseReducer(state, action)).toEqual(expectedState);
  });
});
