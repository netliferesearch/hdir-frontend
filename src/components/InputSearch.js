import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import classNames from 'classnames';

const searchPageUrl = process.env.REACT_APP_ENONICXP_SEARCH_RESULT_PAGE
  ? process.env.REACT_APP_ENONICXP_SEARCH_RESULT_PAGE
  : '/søkeresultat';
const searchSuggestionUrl = process.env.REACT_APP_ENONICXP_SEARCH_ENDPOINT
  ? process.env.REACT_APP_ENONICXP_SEARCH_ENDPOINT
  : '/.netlify/functions/simpleSearch';

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.title;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.title && (
      <div className="suggestion-title">
        {suggestion.title}{' '}
        {suggestion.category && (
          <div className="suggestion-category">{suggestion.category}</div>
        )}
      </div>
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
      className="b-input-search__button"
      onClick={() => {
        triggerSearch(inputProps.value);
      }}
    />
  </div>
);

const triggerSearch = query => {
  // eslint-disable-next-line
  window.location = `${searchPageUrl}?searchquery=${query}`;
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
  'Lars Erik Pedersen'
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

  onSuggestionSelected = (e, { suggestion }) => {
    window.location = suggestion.url;
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    fetch(`${searchSuggestionUrl}?searchQuery=${value}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          suggestions: [
            ...data,
            {
              intro: `Se alle resultater for "${value}"`,
              url: `${searchPageUrl}?searchquery=${value}`
            }
          ]
        });
      })
      .catch(ex => {
        this.setState({
          suggestions: []
        });
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
        onSuggestionSelected={this.onSuggestionSelected}
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
