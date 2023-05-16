import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });
describe('Testing the <App /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('<App /> is rendered without crashing', () => {
    expect(wrapper).to.not.be.an('undefined');
  });

  it('It should contain the Notifications component', () => {
    expect(wrapper.find('Notifications')).to.have.lengthOf(1);
  });

  it('It should contain the Header component', () => {
    expect(wrapper.find('Header')).to.have.lengthOf(1);
  });

  it('It should contain the Login component', () => {
    expect(wrapper.find('Login')).to.have.lengthOf(1);
  });

  it('It should contain the Footer component', () => {
    expect(wrapper.find('Footer')).to.have.lengthOf(1);
  });
});
