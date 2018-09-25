import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import { StyledContainer } from '../styles';

describe('StyledContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
