import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { debounce } from 'lodash';
import InputSearch from './InputSearch'
import ChapterHeading from './ChapterHeading'
import List from './List'
import Button from './Button'


const mainClasses = (collapsed) =>
  classNames({
    'b-product-search': true,
    'b-product-search--collapsed': collapsed,
  });

const contentClasses = (toggled) =>
  classNames({
    'b-product-search': true,
    'b-product-search__content': toggled,
    'b-product-search--hidden': !toggled
  });

const ListSearch = ({ label, productId, collapsed, flatTree, malgruppe, dummyData, tema, type, endpoint }) => {
  const [toggled, setToggled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggleMoreResults, setToggleMoreResults] = useState(false);
  const [searchResults, setSearchResults] = useState({
    total: 1,
    results: [
      dummyData
    ]
  });
  const [searchString, setSearchString] = useState('');
  const liveSearchUrl = endpoint
    ? endpoint
    : 'https://helsedir-helsenett-xptest.enonic.cloud/_/service/helsedirektoratet/realtimesearch';

  if (collapsed && !toggled) {
    setToggled(true);
  }

  function toggle() {
    setToggled(!toggled);
  }

  const fetchResults = (formData) => 
    fetch(`${liveSearchUrl}`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        setSearchResults(data);
        setToggleMoreResults(false);
        setLoading(false);
      });

  const doSearch = useMemo(() => debounce(fetchResults, 500, true), [debouncedChange]);
  
  const debouncedChange = useCallback(
    (value) => {
      if (value.length > 2) {
        setSearchString(value);
        setLoading(true);
        let formData = new FormData();
        formData.append('contentId', productId);
        // formData.append('contentId', '86eadeff-b6a8-4945-abe8-b1a098e5da24');
        formData.append('searchQuery', value);
        formData.append('malgruppe', malgruppe);
        formData.append('tema', tema);
        formData.append('type', type);
        formData.append('flatTree', flatTree);
        doSearch(formData);
      }
      if (value.length === 0) {
        setSearchResults('');
        setSearchString('');
      }
    },
    [doSearch],
  );

  const getHighlightedText = (text, highlight) => {
    if (highlight.length < 2) {
      return text;
    }
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return [
      parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <strong>{part}</strong> : part)
    ] 
  }

  // Construct an object containing all results/data
  const modifiedResult = () => {
    if (searchResults.length > 0) {
      return {
      total: searchResults.total || null,
      results: 
        searchResults && searchResults.results.length > 0 ? searchResults.results.map(result => result) : []
      }
    }
    else {
      return {
        total: 0,
        results: []
      }
    }
  }
  // const modifiedResult = () => ({
  //   total: searchResults.total || null,
  //   results: 
  //     searchResults && searchResults.results.length > 0 ? searchResults.results.map(result => {
  //       return {
  //         type: result.type,
  //         url: result.url,
  //         fields: {
  //           heading: getHighlightedText(result.fields.heading, searchString),
  //           deadline: result.fields.deadline
  //         }
  //       }
  //     }) : []
  // })

  // Split arrays in two, so we can have "See all" toggle buttons
  const results = modifiedResult().results.length > 0 ? modifiedResult().results.splice(0, 7) : null;
  const resultsRest = modifiedResult().results.length > 7 ? modifiedResult().results.splice(7) : null;

  return (
    <>
    { collapsed ? (
      <div className={mainClasses(collapsed)}>
        <div className={contentClasses(true)}>
          <InputSearch
            id="listesok"
            label={`Søk i ${label}`}
            autoFocus={toggled}
            showSuggestions={false}
            fnChange={toggled ? debouncedChange : null}
            productId={productId}
          />
        </div>
      </div>
    ) : (
      <div className={mainClasses()}>
        <Button
          onClick={toggle}
          clean
          icon={!toggled ? '../icons/search.svg' : '../icons/close.svg'}>
          {
            toggled ? 'Skjul søk' : `Søk i ${label}`
          }
        </Button>
        <div className={contentClasses(toggled)}>
          <InputSearch
            id="listesok"
            label={`Søk i ${label}`}
            autoFocus={toggled}
            showSuggestions={false}
            fnChange={toggled ? debouncedChange : null}
            productId={productId}
          />
        </div>
      </div>
    )}
      
      { loading ? (
        <div>
          <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50">
            <path fill="#0667c6" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.8s"
                repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      ) : null}

      {toggled && searchString.length > 0 && modifiedResult().total > 0 && (
        <div className="l-mb-4">
            {
              searchString && modifiedResult().total > 0 ? (
              <h2 className="b-product-search__title">
                {modifiedResult().total} treff på «{searchString}» i {label}
              </h2>
              ) : null
            }
            {
            results.length > 0 ? (
                <div className="col-xs-12 l-mt-2">
                  <ChapterHeading
                    heading="Resultater"
                    h={'h3'}
                    clean
                  />
                  <hr className="b-hr b-hr--blue" />
                  <List
                    noArrow
                    list={results}
                  />
                  {
                    resultsRest ? (
                    <div className="l-mt-1">
                      <Button onClick={() => setToggleMoreResults(!toggleMoreResults)} secondary>Vis alle ({modifiedResult().length})</Button>
                    </div>
                    ) : null
                  }
                  
                  {
                    toggleMoreResults ? (
                    <List
                      noArrow
                      list={resultsRest}
                    />
                    ) : null
                  }
                </div>
              ) : null
            }
        </div>
      )}
    </>
  );
}

ListSearch.propTypes = {
  label: PropTypes.string,
  productId: PropTypes.string,
  collapsed: PropTypes.bool,
  malgruppe: PropTypes.string,
  flatTree: PropTypes.any,
  dummyData: PropTypes.object,
};

export default ListSearch;
