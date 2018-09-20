import React from 'react';
import { shallow } from 'enzyme';

import { BackdropComponent } from '../BackdropComponent';

describe('render', () => {
  it('renders correctly', () => {
    const props = {
      backdropPath: '/123.jpg'
    };
    const wrapper = shallow(<BackdropComponent {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
