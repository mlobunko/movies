import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import { StyledHeader } from '../styles';

describe('StyledHeader', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
