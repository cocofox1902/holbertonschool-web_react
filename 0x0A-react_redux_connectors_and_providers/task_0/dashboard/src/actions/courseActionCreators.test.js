import { selectCourse, unSelectCourse } from './courseActionCreators';
import { ADD_COURSE, REMOVE_COURSE } from '../constants/courseActionTypes';

describe('selectCourse', () => {
  it('returns an action object with the ADD_COURSE type and the given index', () => {
    const index = 1;
    const result = selectCourse(index);
    expect(result).toEqual({ type: ADD_COURSE, index });
  });
});

describe('unSelectCourse', () => {
  it('returns an action object with the REMOVE_COURSE type and the given index', () => {
    const index = 2;
    const result = unSelectCourse(index);
    expect(result).toEqual({ type: REMOVE_COURSE, index });
  });
});
