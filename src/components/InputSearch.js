import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import classNames from 'classnames';

import searchSuggestions from '../data/searchSuggestions';

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();

  return inputValue.length < 3
    ? []
    : [
        ...searchSuggestions.filter(lang =>
          lang.title.toLowerCase().includes(inputValue)
        ),
        { intro: 'Se alle resultater for "Helsestasjon"' }
      ];
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.title;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.title && (
      <div className="suggestion-title">{suggestion.title}</div>
    )}
    {suggestion.intro && (
      <div className="suggestion-intro">{suggestion.intro}</div>
    )}
  </div>
);

const renderInputComponent = inputProps => (
  <div className="b-input-search">
    <input
      {...inputProps}
      className={classNames({
        'b-input-search__field': true,
        'b-input-search__field--dark': inputProps.dark
      })}
    />
    <button
      className={classNames({
        'b-input-search__button': true,
        'b-input-search__button--dark': inputProps.dark
      })}
      onClick={triggerSearch}
    >
      Søk
    </button>
  </div>
);

const triggerSearch = () => {
  // eslint-disable-next-line
  location.reload();
};

const placeholderSuggestions = [
  'Søk på tema',
  'ADHD',
  'Angst',
  'Demens',
  'Søk etter innholdstype',
  'Statistikk',
  'Pakkeforløp',
  'Rundskriv',
  'Søk på kode (ICD-10 og ICPC2)',
  'F41.9',
  'P74',
  'Søk på navn',
  'Lars Erik Pedersen',
  'Leni the Ninja',
  'Ole i Dole'
];

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
      suggestions: [],
      placeholderSuggestionIndex: 0,
      placeholderInterval: null
    };
  }

  componentDidMount() {
    // Goes through the suggestions, and put them in the input search field, as placeholder
    const interval = setInterval(() => {
      const index = this.state.placeholderSuggestionIndex;
      this.setState({
        placeholderSuggestionIndex:
          index < placeholderSuggestions.length - 1 ? index + 1 : 0
      });
    }, 2000);

    this.setState({
      placeholderInterval: interval
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.placeholderInterval);
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
    const inputProps = placeholder => ({
      placeholder: placeholder,
      dark: props.dark,
      value,
      onChange: this.onChange
    });

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={props.showSuggestions ? suggestions : []}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={triggerSearch}
        renderInputComponent={renderInputComponent}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps(
          placeholderSuggestions[this.state.placeholderSuggestionIndex]
        )}
      />
    );
  }
}

InputSearch.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  dark: PropTypes.bool,
  showSuggestions: PropTypes.bool
};

InputSearch.defaultProps = {
  type: 'search',
  label: '',
  showSuggestions: true
};

export default InputSearch;
