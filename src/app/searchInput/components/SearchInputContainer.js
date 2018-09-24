import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';

import RenderSuggestion from './RenderSuggestion';
import * as actions from '../actions';
import * as selectors from '../selectors';
import { StyledContainer, theme } from './styles';

export class SearchInputContainer extends React.Component {
  state = {
    value: '',
    suggestions: []
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.suggestions !== prevState.suggestions) {
      return {
        suggestions: nextProps.suggestions
      };
    } else return null;
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    const valueForSearch = value.trim();
    if (valueForSearch.length >= 2) {
      this.props.makeRequestForSearch(valueForSearch);
    }
  };

  onSuggestionSelected = (event, { suggestion }) => {
    this.props.makeRequestForDetails(selectors.getIdFromSelected(suggestion));
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Search Movie Title...',
      value,
      onChange: this.onChange
    };
    return (
      <StyledContainer>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={selectors.getSuggestionValue}
          renderSuggestion={RenderSuggestion}
          inputProps={inputProps}
          theme={theme}
        />
      </StyledContainer>
    );
  }
}

const mapStateToProps = state => ({
  getSuggestionValue: selectors.getSuggestionValue,
  suggestions: selectors.getSuggestionsFromState(state)
});

const mapDispatchToProps = {
  makeRequestForDetails: actions.makeRequestForDetails,
  makeRequestForSearch: actions.makeRequestForSearch,
  setSuggestions: actions.setSuggestions
};

SearchInputContainer.displayName = 'SearchInputContainer';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInputContainer);

SearchInputContainer.propTypes = {
  getSuggestionValue: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
  makeRequestForDetails: PropTypes.func.isRequired,
  makeRequestForSearch: PropTypes.func.isRequired,
  setSuggestions: PropTypes.func.isRequired
};
