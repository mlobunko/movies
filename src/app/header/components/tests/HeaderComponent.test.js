import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../HeaderComponent';

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
