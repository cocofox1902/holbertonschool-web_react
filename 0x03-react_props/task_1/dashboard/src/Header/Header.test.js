import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Test Header.js', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders an img element with the class App-header-logo', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img.App-header-logo')).toHaveLength(1);
  });

  it('renders an h1 element with the class App-header-title', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1.App-header-title')).toHaveLength(1);
  });
});
