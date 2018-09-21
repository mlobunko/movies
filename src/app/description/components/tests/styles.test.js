import React from 'react';
import { shallow } from 'enzyme';
import 'styled-components';

import {
  StyledDescription,
  StyledLabel,
  StyledList,
  StyledRow,
  StyledRowLeft,
  StyledRowRight,
  StyledTagline
} from '../styles';

describe('StyledDescription', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledDescription />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledLabel', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledLabel />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledList />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledRow', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledRow />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledRowLeft', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledRowLeft />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledRowRight', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledRowRight />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledTagline', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledTagline />);
    expect(wrapper).toMatchSnapshot();
  });
});
