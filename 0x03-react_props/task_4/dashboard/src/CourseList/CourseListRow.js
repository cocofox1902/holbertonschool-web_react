import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = () => {
    render()
    let isHeader = false
    let textFirstCell, textSecondCell = null;

    if (isHeader == true && textSecondCell == null) {
        return (
            <tr>
                <th colSpan="2">{textFirstCell}</th>
            </tr>
        )
    }
    else if (isHeader == true && textSecondCell != null) {
        return (
            <tr>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
            </tr>
        )
    }
    else if (isHeader == false) {
        return (
            <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </tr>
        )
    }
};

export default CourseListRow;