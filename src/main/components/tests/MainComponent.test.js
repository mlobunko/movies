import React from 'react';
import { shallow } from 'enzyme';

import { MainComponent } from '../MainComponent';

describe('render', () => {
  it('renders correctly, error true', () => {
    const wrapper = shallow(<MainComponent error={'error'} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly, error false', () => {
    const wrapper = shallow(<MainComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
