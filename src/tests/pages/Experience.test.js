import React from 'react';
import { shallow } from 'enzyme';
import Experience from '../../components/pages/Experience';

test('renders Experience page correctly', () => {
  const wrapper = shallow(<Experience />);
  expect(wrapper).toMatchSnapshot();
});
