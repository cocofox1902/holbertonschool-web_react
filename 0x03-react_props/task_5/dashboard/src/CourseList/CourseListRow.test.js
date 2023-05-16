import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CourseListRow from './CourseListRow';

configure({ adapter: new Adapter() });

describe('Test <CourseListRow />', () => {
  it("Test", () => {
    let props = {
      isHeader: true,
      textFirstCell: 'dumbstring',
    };

    let component = shallow(<CourseListRow {...props} />);

    expect(
      component.contains(
        <tr>
          <th colSpan={2}>{props.textFirstCell}</th>
        </tr>
      )
    ).to.equal(true);
  });

  it('Test', () => {
    let props = {
      isHeader: true,
      textFirstCell: 'dumbstring',
      textSecondCell: 'dumbstring',
    };

    let component = shallow(<CourseListRow {...props} />);

    expect(
      component.contains(
        <tr>
          <th>{props.textFirstCell}</th>
          <th>{props.textSecondCell}</th>
        </tr>
      )
    ).to.equal(true);
  });

  it('Test', () => {
    let props = {
      isHeader: false,
      textFirstCell: 'dumbstring',
      textSecondCell: 'dumbstring',
    };

    let component = shallow(<CourseListRow {...props} />);

    expect(
      component.contains(
        <tr>
          <td>{props.textFirstCell}</td>
          <td>{props.textSecondCell}</td>
        </tr>
      )
    ).to.equal(true);
  });
});
