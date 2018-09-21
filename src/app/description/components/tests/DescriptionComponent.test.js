import React from 'react';
import { shallow } from 'enzyme';

import { DescriptionComponent } from '../DescriptionComponent';

const props = {
  title: 'family',
  tagline: 'abcd',
  overview: 'overview',
  genres: 'drama',
  productionCompanies: 'flower',
  releaseDate: '02-02-2004',
  runtime: '89',
  revenue: '222',
  voteAvarage: '4.2'
};

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DescriptionComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
