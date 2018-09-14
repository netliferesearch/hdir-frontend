import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'C#',
    year: 2000
  },
  {
    name: 'C#2',
    year: 2100
  },
  {
    name: 'Elm',
    year: 2012
  }
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
    <div className="test-icon" />
  </div>
);

const renderInputComponent = inputProps => (
  <div className="b-input-search">
    <input {...inputProps} className="b-input-search__field" />
    <button className="b-input-search__button" />
  </div>
);

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
    const { props } = this;

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
        onSuggestionSelected={() => {
          // eslint-disable-next-line
          location.reload();
        }}
        renderInputComponent={renderInputComponent}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );

    /*
    return (
      <div className="b-input-search">
        {props.label && (
          <label
            htmlFor={props.id}
            className="b-input-search__label b-input-search__label--inverted"
          >
            {props.label}
          </label>
        )}
        <input
          id={props.id}
          type={props.type}
          className="b-input-search__field b-input-search__field--inverted"
        />
        <button className="b-input-search__button b-input-search__button--inverted">
          SØK
        </button>
      </div>
    );
    */
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
