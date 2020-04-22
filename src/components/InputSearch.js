import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import classNames from 'classnames';
import URLSearchParams from 'url-search-params';
import useInterval from '../js/hooks/useInterval';
import { debounce } from 'lodash';
import uuidv4 from 'uuid/v4';

import stripStringForHtmlUtil from './../utils/stripStringForHtmlUtil';

const searchPageUrl = process.env.REACT_APP_ENONICXP_SEARCH_RESULT_PAGE
  ? process.env.REACT_APP_ENONICXP_SEARCH_RESULT_PAGE
  : '/søkeresultat';
const searchSuggestionUrl = process.env.REACT_APP_ENONICXP_SEARCH_ENDPOINT
  ? process.env.REACT_APP_ENONICXP_SEARCH_ENDPOINT
  : '/.netlify/functions/simpleSearch';

const renderSuggestion = suggestion => (
  <div>
    {suggestion.title && (
      <div className="suggestion-title">
        {suggestion.title}{' '}
        {suggestion.category && (
          <div className="suggestion-category">{suggestion.category}</div>
        )}
        {suggestion.file && (
          <div className="suggestion-download">{suggestion.file}</div>
        )}
      </div>
    )}
    {suggestion.intro && (
      <div className="suggestion-intro">{stripStringForHtmlUtil(suggestion.intro)}</div>
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
  const inputElement = useRef(null);
  
  /* We are using callback to make throtte work in this component function */
  const delayedSuggestionsFetchRequested = useCallback(debounce((value) => onSuggestionsFetchRequested(value), 200), []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('searchquery');
    setValue(searchQuery ? searchQuery : '')
  }, []);

  useInterval(() => {
    setPlaceholderIndex(
      placeholderIndex < props.exampleSuggestions.length - 1
        ? placeholderIndex + 1
        : 0
    );
  }, 2000);
  
  const id = uuidv4();

  const renderInputComponent = inputProps => (
    <div className="b-input-search">
      {props.label && (
        <label
          id="search-input-label"
          for={id}
          className={classNames({
            'b-input-search__label': true,
            'b-input-search__label--dark': props.dark
          })}
        >
          {props.label}
        </label>
      )}
      <div className="b-input-search__inputs">
        {!value && (
          <div className="b-input-search__placeholder" aria-hidden>
            {props.exampleSuggestions.length
              ? props.exampleSuggestions[placeholderIndex]
              : ''}
          </div>
        )}
        <input
          title="Søk"
          aria-labelledby="search-input-label"
          id={id}
          {...inputProps}
          autoFocus={props.autoFocus}
          role="search"
          className={classNames({
            'b-input-search__field': true,
            'b-input-search__field--dark': props.dark
          })}
        />
        <button
          className="b-input-search__button"
          type="button"
          aria-hidden
          onClick={triggerSearch}
        />
      </div>
    </div>
  );

  function triggerSearch() {
    const encodedValue = encodeURI(value);
    window.location = `${searchPageUrl}?searchquery=${encodedValue}`;
  }

  function onChange(event, { newValue }) {
    if (!props.showSuggestions) {
      props.fnChange(newValue)
    }
    setValue(newValue);
  }
  
  function onSuggestionSelected(event, { suggestion }) {
    // Last row clicked, don't send GTM tag
    if (suggestion.skip) {
      window.location = suggestion.url;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'autosuggest',
      'category': 'Autosuggestion click',
      'action': suggestion.url,
      'label': value,
      'value': suggestion.index
    });
    window.location = suggestion.url;
  }

  // Autosuggest will call this function every time you need to update suggestions.
  const onSuggestionsFetchRequested = ({ value }) => {
    if (value && value.length >= 3) {
      const encodedValue = encodeURI(value);
      fetch(`${searchSuggestionUrl}?searchQuery=${encodedValue.toLowerCase()}`)
        .then(res => res.json())
        .then(data => {
          // Adding indexes to suggestions, so we know where in the list the item is
          const suggestionsWithIndexes = data.map((item, index) => ({index: index + 1, ...item}));
          if (suggestionsWithIndexes.length) {
            setSuggestions([
              ...suggestionsWithIndexes,
              {
                // The last row that is highlighted
                skip: true,
                ...suggestionsWithIndexes[data.length - 1],
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
    ref: inputElement,
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
    <>
      <div aria-hidden>
        <Autosuggest
          suggestions={props.showSuggestions ? suggestions : []}
          onSuggestionsFetchRequested={delayedSuggestionsFetchRequested}
          onSuggestionsClearRequested={() => setSuggestions([])}
          onSuggestionSelected={onSuggestionSelected}
          renderInputComponent={renderInputComponent}
          getSuggestionValue={suggestion => suggestion.title}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
      {/* Screen readers gets a simplified form for now */}
      <form
        onSubmit={e => {
          e.preventDefault();
          triggerSearch();
        }}
      >
        <label htmlFor="side-søk" className="visually-hidden" tabIndex="-1">
          Søk på siden
        </label>
        <input
          type="search"
          id="side-søk"
          tabIndex="-1"
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
          className="visually-hidden"
        />
        <button type="submit" className="visually-hidden" tabIndex="-1">
          Søk
        </button>
      </form>
    </>
  );
};

InputSearch.propTypes = {
  label: PropTypes.string,
  dark: PropTypes.bool,
  showSuggestions: PropTypes.bool,
  autoFocus: PropTypes.bool,
  fnChange: PropTypes.func,
  exampleSuggestions: PropTypes.arrayOf(PropTypes.string)
};

InputSearch.defaultProps = {
  showSuggestions: true,
  exampleSuggestions: [],
};

export default InputSearch;
