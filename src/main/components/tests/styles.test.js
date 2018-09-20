import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import { StyledMainComponent } from '../styles';

describe('StyledMainComponent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledMainComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
