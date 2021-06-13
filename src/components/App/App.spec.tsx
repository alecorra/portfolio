import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('portfolio App component', () => {
  it('renders', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.app').exists()).toBe(true);
  });
});
