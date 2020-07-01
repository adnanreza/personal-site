import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../../components/pages/Contact';

test('renders Contact page correctly', () => {
  const wrapper = shallow(<Contact />);
  expect(wrapper).toMatchSnapshot();
});
