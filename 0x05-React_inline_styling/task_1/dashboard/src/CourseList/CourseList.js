import React, { Component } from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  courseList: {
    margin: '20px auto',
    width: '85%',
    border: '1px solid lightgrey',
  },
  tableHeader: {
    borderBottom: '2px solid lightgrey',
  },
});

class CourseList extends Component {
  render() {
    const { listCourses } = this.props;

    if (!listCourses || listCourses.length === 0) {
      return <div>No course available yet</div>;
    } else {
      return (
        <table className={css(styles.courseList)}>
          <thead>
            <CourseListRow textFirstCell="Available courses" isHeader={true} />
            <CourseListRow
              textFirstCell="Course name"
              textSecondCell="Credit"
            />
          </thead>
          <tbody>
            {listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isHeader={false}
              />
            ))}
          </tbody>
        </table>
      );
    }
  }
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
