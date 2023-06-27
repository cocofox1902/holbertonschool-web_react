import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import App, { mapStateToProps } from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import sinonChai from 'sinon-chai';
import { spy } from 'sinon';
import AppContext from './AppContext';

chai.use(sinonChai);

configure({ adapter: new Adapter() });

describe('Testing the <App /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('<App /> is rendered without crashing', () => {
    expect(wrapper.exists()).to.be.true;
  });

  it('<App /> contains the <Notifications /> Component', () => {
    expect(wrapper.find(Notifications)).to.have.lengthOf(1);
  });

  it('<App /> contains the <Header /> Component', () => {
    expect(wrapper.contains(<Header />)).to.be.true;
  });

  it('<App /> contains the <Login /> Component', () => {
    expect(wrapper.contains(<Login logIn={wrapper.instance().logIn} />)).to.be
      .true;
  });

  it('<App /> contains the <Footer /> Component', () => {
    expect(wrapper.contains(<Footer />)).to.be.true;
  });

  it("<App /> doesn't contain <CourseList />", () => {
    expect(wrapper.find(CourseList)).to.have.lengthOf(0);
  });
});

describe('Testing the <App /> when isLoggedIn is true', () => {
  let props = {
    isLoggedIn: true,
  };

  let component = shallow(<App {...props} />);

  component.setState({
    user: {
      email: '',
      password: '',
      isLoggedIn: true,
    },
  });

  expect(component.contains(<Login />)).to.be.false;
  expect(component.find(CourseList)).to.have.lengthOf(1);
});

describe('Verify if logOut is correctly called by checking the state', () => {
  const appComp = mount(<App />);
  appComp.setState({
    user: {
      email: 'hello@gmail.com',
      password: '666satan',
      isLoggedIn: true,
    },
    logOut: () => {},
  });
  appComp.instance().logOut();
  expect(appComp.state().user.isLoggedIn).to.be.false;
});

describe('Verify <App /> on state change', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('verify that the default state for displayDrawer is false & after calling handleDisplayDrawer, the state.displayDrawer should now be true', () => {
    expect(wrapper.state('displayDrawer')).to.be.false;
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).to.be.true;
  });

  it('verify that after calling handleHideDrawer, the state.displayDrawer is updated to be false', () => {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).to.be.false;
  });
  it('verify that handleLogout updates the state correctly', () => {
    wrapper.instance().handleLogout();
    expect(wrapper.state('user')).to.deep.equal({});
  });

  it('verify that markNotificationAsRead updates the state correctly', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
      { id: 3, type: 'urgent', value: 'Notification 3' },
    ];

    wrapper.setState({ notifications });

    wrapper.instance().markNotificationAsRead(2);

    const updatedNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2', isRead: true },
      { id: 3, type: 'urgent', value: 'Notification 3' },
    ];

    expect(wrapper.state('notifications')).to.deep.equal(updatedNotifications);
  });

  it('verify that the logIn function updates the state correctly', () => {
    const user = {
      email: 'test@example.com',
      password: 'password',
    };

    wrapper.instance().logIn(user);

    expect(wrapper.state('user')).to.deep.equal(user);
  });
});

describe('mapStateToProps', () => {
  it('verify that the mapStateToProps function returns the correct object', () => {
    const state = {
      isLoggedIn: true,
      notifications: [],
    };

    const mappedProps = mapStateToProps(state);

    expect(mappedProps).to.deep.equal(state);
  });
});
