import React from 'react';
import { shallow } from 'enzyme';

import { PosterComponent } from '../PosterComponent';

describe('render', () => {
  it('posterPath true', () => {
    const wrapper = shallow(<PosterComponent posterPath={'abc'} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('posterPath false', () => {
    const wrapper = shallow(<PosterComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
