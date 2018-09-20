import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import {
  StyledPoster,
  StyledPosterContainer,
  StyledPosterContent,
  StyledTrailer,
  StyledTrailerContainer,
  StyledTrailerContent
} from '../styles';

const posterPath = 'abc';
const trailerPath = 'cba';

describe('StyledPoster', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledPoster posterPath={posterPath} />);
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

describe('StyledTrailer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledTrailer trailerPath={trailerPath} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledTrailerContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledTrailerContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('StyledTrailerContent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<StyledTrailerContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
