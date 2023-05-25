import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CourseListRow from './CourseListRow';

configure({ adapter: new Adapter() });

describe('Testing the <CourseListRow /> Component', () => {
  it("Test if it renders one cell with colSpan=2 when textSecondCell doesn't exist and isHeader is true", () => {
    const props = {
      isHeader: true,
      textFirstCell: 'dumbstring',
    };

    const component = shallow(<CourseListRow {...props} />);

    expect(
      component.contains(
        <tr className="headerRow">
          <th colSpan={2}>{props.textFirstCell}</th>
        </tr>
      )
    ).to.equal(true);
  });

  it('Test if it renders 2 cells when textSecondCell exists and isHeader is true', () => {
    const props = {
      isHeader: true,
      textFirstCell: 'dumbstring',
      textSecondCell: 'dumbstring',
    };

    const component = shallow(<CourseListRow {...props} />);

    expect(
      component.contains(
        <tr className="headerRow">
          <th>{props.textFirstCell}</th>
          <th>{props.textSecondCell}</th>
        </tr>
      )
    ).to.equal(true);
  });

  it('Test if it renders 2 <td> within a <tr> element when isHeader is false', () => {
    const props = {
      isHeader: false,
      textFirstCell: 'dumbstring',
      textSecondCell: 'dumbstring',
    };

    const component = shallow(<CourseListRow {...props} />);

    expect(
      component.contains(
        <tr className="defaultRow">
          <td>{props.textFirstCell}</td>
          <td>{props.textSecondCell}</td>
        </tr>
      )
    ).to.equal(true);
  });
});
