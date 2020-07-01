import React from 'react';
import { shallow } from 'enzyme';
import Teaching from '../../components/pages/Teaching';

test('renders Teaching page correctly', () => {
  const wrapper = shallow(<Teaching />);
  expect(wrapper).toMatchSnapshot();
});
