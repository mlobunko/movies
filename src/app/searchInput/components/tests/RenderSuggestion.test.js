import React from 'react';
import { shallow } from 'enzyme';

import { RenderSuggestion } from '../RenderSuggestion';

describe('render', () => {
  it('renders correctly', () => {
    const props = {
      title: 'family'
    };
    const wrapper = shallow(<RenderSuggestion {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
