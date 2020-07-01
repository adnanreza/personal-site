import React from 'react';
import { shallow } from 'enzyme';
import Resume from '../../components/pages/Resume';

test('renders Resume page correctly', () => {
  const wrapper = shallow(<Resume />);
  expect(wrapper).toMatchSnapshot();
});
