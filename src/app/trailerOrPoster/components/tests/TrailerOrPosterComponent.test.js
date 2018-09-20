import React from 'react';
import { shallow } from 'enzyme';

import { TrailerOrPosterComponent } from '../TrailerOrPosterComponent';

describe('render', () => {
  it('posterPath true', () => {
    const wrapper = shallow(<TrailerOrPosterComponent posterPath={'abc'} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('trailerPath true', () => {
    const wrapper = shallow(<TrailerOrPosterComponent trailerPath={'cba'} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('trailerPath false, posterPath false', () => {
    const wrapper = shallow(<TrailerOrPosterComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
