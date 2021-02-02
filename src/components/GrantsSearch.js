import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { debounce } from 'lodash';
import InputSearch from './InputSearch'
import ChapterHeading from './ChapterHeading'
import List from './List'
import Loading from './Loading'
import Button from './Button'

const GrantsSearch = ({ label, flatTree, endpoint, dummyData, dummyDataExpired }) => {
  const [toggled, setToggled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggleMore, setToggleMore] = useState(false);
  const [toggleMore2, setToggleMore2] = useState(false);
  const [activeResults, setActiveResults] = useState([]);
  const [activeResultsLimited, setActiveResultsLimited] = useState([]);
  const [activeResultsRest, setActiveResultsRest] = useState([]);
  const [expiredResults, setExpiredResults] = useState([]);
  const [expiredResultsLimited, setExpiredResultsLimited] = useState([]);
  const [expiredResultsRest, setExpiredResultsRest] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState('');
  const liveSearchUrl = endpoint
    ? endpoint
    : 'https://helsedir-helsenett-xptest.enonic.cloud/retningslinjer/adhd/_/service/helsedirektoratet/realtimesearch';

  // const doSearch = (formData) =>
  const fetchResults = (formData) => 
    fetch(`${liveSearchUrl}`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log('data', data)
        setSearchResults(data);
        setToggleMore(false);
        setLoading(false);
      });

  const doSearch = useMemo(() => debounce(fetchResults, 500, true), [debouncedChange]);
  
  const debouncedChange = useCallback(
    (value) => {
      if (value.length > 2) {
        setSearchString(value);
        setLoading(true);
        let formData = new FormData();
        formData.append('searchQuery', value);
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

  useEffect(() => {
    if (dummyData) {
      setSearchResults(dummyData)
    }
    setActiveResults(
      searchResults && searchResults.filter(item => !item.fields.expired)
    );
    // Split arrays in two, so we can have "See all" toggle buttons
    setActiveResultsLimited(
      searchResults && searchResults.filter(item => !item.fields.expired).splice(0, 7)
    );
    setActiveResultsRest(
      searchResults && searchResults.filter(item => !item.fields.expired).splice(7)
    );
    setExpiredResults(
      searchResults && searchResults.filter(item => item.fields.expired)
    );
    setExpiredResultsLimited(
      searchResults && searchResults.filter(item => item.fields.expired).splice(0, 7)
    );
    setExpiredResultsRest(
      searchResults && searchResults.filter(item => item.fields.expired).splice(7)
    );
    
    console.log('dummyData 1', dummyData)
    console.log('activeResults', activeResults)
    console.log('resultsActiveModified', activeResultsLimited)
    console.log('expiredResults', expiredResults)

  }, [searchResults]);

  console.log('dummyData 2', dummyData)

  return (
    <>
      <div className="b-product-search">
        <InputSearch
          id="tilskuddsok"
          label={label}
          autoFocus={true}
          showSuggestions={false}
          fnChange={debouncedChange}
        />
      </div>
      
      {loading ? (
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

      { // When there are search results
        searchString.length > 0 && searchResults.length > 0 && (
          <div className="l-mb-4 results">
              {
                searchString && searchResults.length > 0 ? (
                <h2 className="b-product-search__title">
                  {searchResults.length} treff på «{searchString}»
                </h2>
                ) : null
              }
            <List
              list={activeResults}
            />
          </div>
      )}

      { // When NO search results
        searchString.length > 0 && !loading && searchResults.length === 0 ? (
          <div className="l-mb-4">
            <div className="col-xs-12 l-mt-2 l-mb-3">
              <p>0 treff på «{searchString}»</p>
            </div>
          </div>
        ) : null
      }

      { // Default
        searchString.length === 0 && (
        <Tabs>
          <TabList>
            <Tab>Pågående <span className="react-tabs__tab-count react-tabs__tab-count--green">{activeResults.length}</span></Tab>
            <Tab>Utløpt <span className="react-tabs__tab-count react-tabs__tab-count--red">{expiredResults.length}</span></Tab>
          </TabList>
          <TabPanel>
            <List
                list={toggleMore ? activeResults : activeResultsLimited}
              />
              { activeResultsRest.length > 0 && !toggleMore ? (
                <div className="l-mt-1">
                  <Button onClick={() => setToggleMore(!toggleMore)} secondary>Vis alle ({activeResults.length})</Button>
                </div>
              ) : null }
          </TabPanel>
          <TabPanel>
            <List
                list={toggleMore2 ? expiredResults : expiredResultsLimited}
              />
              {expiredResultsRest.length > 0 && !toggleMore ? (
              <div className="l-mt-1">
                <Button onClick={() => setToggleMore(!toggleMore)} secondary>Vis alle ({expiredResults.length})</Button>
              </div>
            ) : null}
          </TabPanel>
        </Tabs>
        ) 
      }
      

    

     
    </>
  );
}

GrantsSearch.propTypes = {
  label: PropTypes.string,
  flatTree: PropTypes.string,
  endpoint: PropTypes.string,
  dummyData: PropTypes.array,
  dummyDataExpired: PropTypes.array,
};

export default GrantsSearch;
