import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

import searchSuggestions from '../data/searchSuggestions';

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();

  return inputValue.length < 3
    ? []
    : searchSuggestions.filter(lang =>
        lang.title.toLowerCase().includes(inputValue)
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.title;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    <div>
      <div>
        <span className="suggestion__meta">{suggestion.type}</span>
        <div className="test-icon" />
      </div>
      <div className="suggestion-title">{suggestion.title}</div>
      <div className="suggestion-intro">{suggestion.intro}</div>
      <div>
        {suggestion.codes.map(code => (
          <span className="b-content-label--gray">{code}</span>
        ))}
      </div>
    </div>
  </div>
);

const renderInputComponent = inputProps => (
  <div className="b-input-search">
    <input {...inputProps} className="b-input-search__field" />
    <button className="b-input-search__button" onClick={triggerSearch} />
  </div>
);

const triggerSearch = () => {
  // eslint-disable-next-line
  location.reload();
};

class InputSearch extends React.Component {
  constructor(props) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    // const { props } = this;

    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Søk',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={triggerSearch}
        renderInputComponent={renderInputComponent}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

InputSearch.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string
};

InputSearch.defaultProps = {
  type: 'search',
  label: ''
};

export default InputSearch;
