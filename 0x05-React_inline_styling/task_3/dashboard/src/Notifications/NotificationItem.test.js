import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe("Testing <NotificationItem /> Component", () => {
  let wrapper;

  it("<NotificationItem /> is rendered without crashing", () => {
    wrapper = shallow(<NotificationItem shouldRender />);
    expect(wrapper.exists()).toBe(true);
  });

  it("<NotificationItem /> renders the correct HTML by passing type and value props", () => {
    const props = {
      type: "default",
      value: "New resume",
      html: undefined
    };
    const component = shallow(<NotificationItem {...props} shouldRender />);
    expect(component.contains(<li data-priority-type={props.type}>{props.value}</li>)).toBe(true);
  });

  it("<NotificationItem /> renders the correct HTML by passing dummy html props", () => {
    const props = {
      type: "urgent",
      html: { __html: "<p>test</p>" },
    };
    const component = shallow(<NotificationItem {...props} />);
    expect(component.contains(<li data-priority-type={props.type} dangerouslySetInnerHTML={props.html} />)).toBe(true);
  });

  it("Verifies that when clicking on the component, 'markAsRead' is called with the right ID argument", () => {
    const props = {
      type: "urgent",
      html: { __html: "<p>test</p>" },
      markAsRead: (id) => { console.log(`Notification ${id} has been marked as read`); }
    };
    wrapper = shallow(<NotificationItem {...props} />);
    console.log = jest.fn();
    wrapper.find('li').simulate('click');
    expect(console.log).toHaveBeenCalledWith(`Notification ${props.id} has been marked as read`);
  });
});
