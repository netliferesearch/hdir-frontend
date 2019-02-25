import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import classNames from 'classnames';
import URLSearchParams from 'url-search-params';

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

    this.triggerSearch = this.triggerSearch.bind(this);
    this.renderInputComponent = this.renderInputComponent.bind(this);
  }

  triggerSearch() {
    window.location = `${searchPageUrl}?searchquery=${this.state.value}`;
  }

  componentDidUpdate(prevProps) {
    if (this.props.autoFocus !== prevProps.autoFocus) {
      // Find the input field and focus on it.
      // This is used when we open the search from the header.
      document.querySelector('.b-input-search__field').focus();
    }
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('searchquery');
    // Goes through the suggestions, and put them in the input search field, as placeholder
    const interval = setInterval(() => {
      const index = this.state.placeholderSuggestionIndex;
      this.setState({
        placeholderSuggestionIndex:
          index < placeholderSuggestions.length - 1 ? index + 1 : 0
      });
    }, 2000);

    this.setState({
      placeholderInterval: interval,
      value: searchQuery ? searchQuery : ''
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

  renderInputComponent(inputProps) {
    return (
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
          onClick={this.triggerSearch}
        />
      </div>
    );
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    fetch(`${searchSuggestionUrl}?searchQuery=${value}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          suggestions: [
            ...data,
            data.length && {
              // This row is the blue (or orange) suggestion at the bottom
              ...data[data.length - 1],
              title: value,
              category: '',
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
    // Autosuggest will pass through all these props to the input.
    const inputProps = placeholder => ({
      placeholder: placeholder,
      dark: this.props.dark,
      value: this.state.value,
      onChange: this.onChange,
      onKeyDown: event => {
        // 13 = enter key
        if (event.keyCode === 13 && this.state.value) {
          // If the search query is not equal to any of the suggestions, we go to the SERP
          // We also want to ignore the last suggestion, since it is not really a suggestion
          if (
            !this.state.suggestions.some((x, index) => {
              if (index !== this.state.suggestions.length - 1) {
                return x.title === this.state.value;
              } else return false;
            })
          ) {
            this.triggerSearch();
          }
        }
      }
    });

    return (
      <Autosuggest
        suggestions={this.props.showSuggestions ? this.state.suggestions : []}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.onSuggestionSelected}
        renderInputComponent={this.renderInputComponent}
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
  showSuggestions: PropTypes.bool,
  autoFocus: PropTypes.bool
};

InputSearch.defaultProps = {
  type: 'search',
  label: '',
  showSuggestions: true
};

export default InputSearch;
