import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import {
  StyledPoster,
  StyledPosterContainer,
  StyledPosterContent
} from '../styles';

const posterPath = 'abc';

describe('StyledPoster', () => {
  it('renders correctly, posterPath true', () => {
    const wrapper = shallow(<StyledPoster posterPath={posterPath} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly, posterPath false', () => {
    const wrapper = shallow(<StyledPoster posterPath={''} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledPosterContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledPosterContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledPosterContent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledPosterContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
