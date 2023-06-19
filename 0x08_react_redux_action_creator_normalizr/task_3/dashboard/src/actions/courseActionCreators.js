import { ADD_COURSE, REMOVE_COURSE } from '../constants/courseActionTypes';

function selectCourse(index) {
  return {
    type: ADD_COURSE,
    index: index,
  };
}

function unSelectCourse(index) {
  return {
    type: REMOVE_COURSE,
    index: index,
  };
}

module.exports = {
  selectCourse,
  unSelectCourse,
};
