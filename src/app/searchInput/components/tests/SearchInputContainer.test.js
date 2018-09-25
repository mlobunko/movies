import React from 'react';
import { shallow } from 'enzyme';

import { SearchInputContainer } from '../SearchInputContainer';
import * as selectors from '../../selectors';

jest.mock('../../selectors', () => ({
  getIdFromSelected: jest.fn(),
  getSuggestionValue: jest.fn()
}));

const initialProps = {
  getSuggestionValue: jest.fn(),
  suggestions: [],
  makeRequestForDetails: jest.fn(),
  makeRequestForSearch: jest.fn(),
  setSuggestions: jest.fn()
};

const initialState = {
  value: '',
  suggestions: []
};

beforeEach(() => {
  jest.resetAllMocks();
});

describe('render', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SearchInputContainer {...initialProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('methods', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getDerivedStateFromProps', () => {
    it('change state if new suggestions are not equal to old state', () => {
      const newState = {
        value: '',
        suggestions: ['a', 'b']
      };
      const newProps = {
        ...initialProps,
        suggestions: newState.suggestions
      };
      const wrapper = shallow(<SearchInputContainer {...initialProps} />);
      wrapper.setProps(newProps);
      expect(wrapper.state()).toEqual(newState);
    });
  });

  describe('onChange', () => {
    it('change state', () => {
      const newState = {
        ...initialState,
        value: '123'
      };
      const e = {};
      const obj = {
        newValue: newState.value
      };
      const wrapper = shallow(<SearchInputContainer {...initialProps} />);
      wrapper.instance().onChange(e, obj);
      expect(wrapper.state()).toEqual(newState);
    });
  });

  describe('onSuggestionsFetchRequested', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    it('dont call makeRequestForSearch, value.length less than 2', () => {
      const inputValue = {
        value: ' 1 '
      };
      const wrapper = shallow(<SearchInputContainer {...initialProps} />);
      wrapper.instance().onSuggestionsFetchRequested(inputValue);
      expect(
        wrapper.instance().props.makeRequestForSearch
      ).toHaveBeenCalledTimes(0);
    });

    it('call makeRequestForSearch with right argument', () => {
      const inputValue = {
        value: ' 123 '
      };
      const expectedArg = '123';

      const wrapper = shallow(<SearchInputContainer {...initialProps} />);
      wrapper.instance().onSuggestionsFetchRequested(inputValue);
      expect(
        wrapper.instance().props.makeRequestForSearch
      ).toHaveBeenCalledWith(expectedArg);
    });
  });

  describe('onSuggestionSelected', () => {
    it('call makeRequestForDetails with right argument', () => {
      selectors.getIdFromSelected.mockReturnValue('a');
      const e = {};
      const inputValue = {
        suggestion: 'a'
      };
      const wrapper = shallow(<SearchInputContainer {...initialProps} />);
      wrapper.instance().onSuggestionSelected(e, inputValue);
      expect(
        wrapper.instance().props.makeRequestForDetails
      ).toHaveBeenCalledWith('a');
    });
  });

  describe('onSuggestionsClearRequested', () => {
    it('change suggestions in state to empty array', () => {
      const state = {
        ...initialState,
        suggestions: ['a', 'b', 'c']
      };
      const wrapper = shallow(<SearchInputContainer {...initialProps} />);
      wrapper.setState(state);
      wrapper.instance().onSuggestionsClearRequested();
      expect(wrapper.state().suggestions).toEqual([]);
    });
  });
});
