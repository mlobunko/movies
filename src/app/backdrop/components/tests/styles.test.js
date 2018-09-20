import React from 'react';
import { shallow } from 'enzyme';
import 'enzyme-to-json';

import { StyledBackdropComponent } from '../styles';

describe('StyledBackdropComponent', () => {
  it('renders correctly, props.backdropPath true', () => {
    const backdropPath = '/6xKCYgH16UuwEGAyroLU6p8HLIn.jpg';
    const wrapper = shallow(
      <StyledBackdropComponent backdropPath={backdropPath} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly, props.backdropPath false', () => {
    const wrapper = shallow(<StyledBackdropComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
