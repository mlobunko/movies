import React from 'react';
import { shallow } from 'enzyme';

import { PosterComponent } from '../PosterComponent';

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PosterComponent posterPath={'abc'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
