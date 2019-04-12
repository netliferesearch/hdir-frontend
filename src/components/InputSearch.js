import React, { useState, useEffect, useRef } from 'react';
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

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.title && (
      <div className="suggestion-title">
        {suggestion.title}{' '}
        {suggestion.category && (
          <div className="suggestion-category">{suggestion.category}</div>
        )}
        {suggestion.file && (
          <div className="suggestion-download">{suggestion.file} ↓</div>
        )}
      </div>
    )}
    {suggestion.intro && (
      <div className="suggestion-intro">{suggestion.intro}</div>
    )}
    {suggestion.topic && (
      <div className="suggestion-topic">{suggestion.topic}</div>
    )}
  </div>
);

const InputSearch = props => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholderInterval, setPlaceholderInterval] = useState(null);
  const inputElement = useRef(null);

  function triggerSearch() {
    const encodedValue = encodeURI(value);
    window.location = `${searchPageUrl}?searchquery=${encodedValue}`;
  }

  function onChange(event, { newValue }) {
    setValue(newValue);
  }

  function onSuggestionSelected(event, { suggestion }) {
    window.location = suggestion.url;
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('searchquery');
    // Goes through the suggestions, and put them in the input search field, as placeholder
    const interval = setInterval(() => {
      const index = placeholderIndex;
      setPlaceholderIndex(
        index < props.exampleSuggestions.length - 1 ? index + 1 : 0
      );
    }, 2000);

    setPlaceholderInterval(interval);
    setValue(searchQuery ? searchQuery : '');

    return () => {
      clearInterval(placeholderInterval);
    };
  }, []);

  useEffect(() => {
    props.autoFocus
      ? inputElement.current.focus()
      : inputElement.current.blur();
  }, [props.autoFocus]);

  const renderInputComponent = inputProps => (
    <div className="b-input-search">
      {props.label && (
        <div
          id="search-input-label"
          className={classNames({
            'b-input-search__label': true,
            'b-input-search__label--dark': props.dark
          })}
        >
          {props.label}
        </div>
      )}
      <div className="b-input-search__inputs">
        <input
          title="Søk"
          aria-labelledby="search-input-label"
          {...inputProps}
          ref={inputElement}
          className={classNames({
            'b-input-search__field': true,
            'b-input-search__field--dark': props.dark
          })}
        />
        <button
          className="b-input-search__button"
          aria-label="Søk"
          onClick={triggerSearch}
        />
      </div>
    </div>
  );

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  function onSuggestionsFetchRequested({ value }) {
    const encodedValue = encodeURI(value);
    if (value.length >= 3) {
      fetch(`${searchSuggestionUrl}?searchQuery=${encodedValue.toLowerCase()}`)
        .then(res => res.json())
        .then(data => {
          if (data.length) {
            setSuggestions([
              ...data,
              {
                // This row is the blue (or orange) suggestion at the bottom
                ...data[data.length - 1],
                title: value,
                category: '',
                file: '',
                topic: '',
                intro: `Se alle resultater for "${value}"`,
                url: `${searchPageUrl}?searchquery=${value}`
              }
            ]);
          } else {
            setSuggestions([]);
          }
        })
        .catch(ex => {
          setSuggestions([]);
        });
    } else {
      setSuggestions([]);
    }
  }

  const inputProps = {
    value: value,
    onChange: onChange,
    onKeyDown: event => {
      // 13 = enter key
      if (event.keyCode === 13 && value) {
        // If the search query is not equal to any of the suggestions, we go to the SERP
        // We also want to ignore the last suggestion, since it is not really a suggestion
        if (
          !suggestions.some((x, index) => {
            if (index !== suggestions.length - 1) {
              return x.title === value;
            } else return false;
          })
        ) {
          triggerSearch();
        }
      }
    }
  };

  return (
    <Autosuggest
      suggestions={props.showSuggestions ? suggestions : []}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={() => setSuggestions([])}
      onSuggestionSelected={onSuggestionSelected}
      renderInputComponent={renderInputComponent}
      getSuggestionValue={suggestion => suggestion.title}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

InputSearch.propTypes = {
  label: PropTypes.string,
  dark: PropTypes.bool,
  showSuggestions: PropTypes.bool,
  autoFocus: PropTypes.bool,
  exampleSuggestions: PropTypes.arrayOf(PropTypes.string)
};

InputSearch.defaultProps = {
  showSuggestions: true,
  exampleSuggestions: []
};

export default InputSearch;
