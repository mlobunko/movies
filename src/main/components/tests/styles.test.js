import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import { StyledContent, StyledMainComponent } from '../styles';

describe('StyledContent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledContent />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledMainComponent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledMainComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
