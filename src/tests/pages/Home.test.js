import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../components/pages/Home';

test('renders Home page correctly', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});
