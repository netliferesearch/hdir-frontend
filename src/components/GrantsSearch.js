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

const GrantsSearch = ({ 
  id, 
  label, 
  flatTree,
  endpoint, 
  initial, 
  contentId,
  malgruppe,
  categories,
  collapsed
  }) => {
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
  const [formMalgruppe, setFormMalgruppe] = useState('');
  const [formCategories, setFormCategories] = useState([]);
  const liveSearchUrl = endpoint
    ? endpoint
    : 'https://helsedir-helsenett-xptest.enonic.cloud/retningslinjer/adhd/_/service/helsedirektoratet/realtimesearch';
  
  // const doSearch = (formData) =>
  const fetchResults = (formData) => 
    fetch(liveSearchUrl, {
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

  const doSearch = useMemo(() => debounce(fetchResults, 500, true), []);
  
  const debouncedChange = useCallback(
    (value) => {
      if (value.length > 2) {
        setSearchString(value);
        setLoading(true);
        let formData = new FormData();
        formData.append('searchQuery', value);
        formData.append('id', id);
        formData.append('malgruppe', formMalgruppe);
        formData.append('categories', JSON.stringify(formCategories));
        console.log('searching', formData);
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
    // When used on the wizard page, trigger new search when changes are made on the steps
    const steps = [
      ...document.querySelectorAll("section[data-step]")
    ];
    steps.forEach(step => {
      const inputType = step.dataset.inputType;
      const key = step.dataset.key;

      if (inputType === 'select') {
        const input = step.querySelector('select');

        input.addEventListener("change", function (e) {
          // Get the values
          if (key) {
            setFormMalgruppe(e.target.value);
            console.log('setting malgruppe', formMalgruppe)
          }

        });
      }

      if (inputType === 'checkboxes') {
        const inputs = step.querySelectorAll('input[type="checkbox"]');
        const submit = step.querySelector('button[data-submit]');

        submit.addEventListener("click", function (e) {
          inputs.forEach(input => {
            if (input.checked) {
              setFormCategories((cats) => {
                return [
                  ...cats.filter(value => value !== input.value),
                  input.value,
                ]
              })
            } 
            if (!input.checked && formCategories.find(cat => cat === input.value)) {
              setFormCategories((cats) => {
                return [
                  ...cats.filter(value => value !== input.value)
                ]
              })
            }
          });
        });
      }
    });
    
    if (!initial) {
      setLoading(true);
      let formData = new FormData();
      formData.append('searchQuery', '');
      formData.append('flatTree', flatTree);
      formData.append('malgruppe', formMalgruppe);
      formData.append('categories', formCategories);
      doSearch(formData);
    }
  }, [formMalgruppe, formCategories]);

  const isExpired = (fields) => {
    // If no date, it is "løpende"
    if (!date) { return false; }

    const { day, month, year } = date;
    const today = new Date();
    // console.log('today', today)
    // console.log('compared date', new Date(`${day}/${month}/${year}`))

    // Return true if older than today
    if (today > new Date(`${day}/${month}/${year}`)) {
      return true
    }
    return false
  }

  const orderByComingDate = (arr) => {
    return arr.sort(function (a, b) {
      // Check if frist object is present. When it doesn't exists, this means it is "løpende" and should be placed at bottom.
      if (!a.fields.hasOwnProperty("frist")) { return 0; }
      if (!b.fields.hasOwnProperty("frist")) { return 0; }

      // Order the rest by date
      const { day, month, year } = b.fields.frist;
      const { day: aDay, month: aMonth, year: aYear } = a.fields.frist;
      const aDate = new Date(`${aDay}/${aMonth}/${aYear}`);
      const bDate = new Date(`${day}/${month}/${year}`);
      return Number(aDate) - Number(bDate);
    });
  }

  const orderByExpiredDate = (arr) => {
    return arr.sort(function (a, b) {
      const { day, month, year } = b.fields.frist;
      const { day: aDay, month: aMonth, year: aYear } = a.fields.frist;
      const aDate = new Date(`${aDay}/${aMonth}/${aYear}`);
      const bDate = new Date(`${day}/${month}/${year}`);
      return Number(bDate) - Number(aDate);
    });
  }

  useEffect(() => {
    if (initial && searchString.length === 0 && searchResults.length === 0) {
      if (typeof initial === 'string' || initial instanceof String) {
        const data = initial.toString().replace(/\\"/g, '"')
        setSearchResults(JSON.parse(data))
        return
      }
      setSearchResults(initial)
    }

    setActiveResults(
      searchResults ? orderByComingDate(searchResults.filter(item => !isExpired(item.fields.frist))) : []
    );
    // Split arrays in two, so we can have "See all" toggle buttons
    setActiveResultsLimited(
      searchResults ? orderByComingDate(searchResults.filter(item => !isExpired(item.fields.frist))).splice(0, 7) : []
    );
    setActiveResultsRest(
      searchResults ? orderByComingDate(searchResults.filter(item => !isExpired(item.fields.frist))).splice(7) : []
    );
    setExpiredResults(
      searchResults ? orderByExpiredDate(searchResults.filter(item => isExpired(item.fields.frist)).map(item => {
        return {
          ...item,
          fields: {
            expired: true,
            ...item.fields
          },
        }
      })) : []
      );
    setExpiredResultsLimited(
      searchResults ? orderByExpiredDate(searchResults.filter(item => isExpired(item.fields.frist)).map(item => {
        return {
          ...item,
          fields: {
            expired: true,
            ...item.fields
          },
        }
      })).splice(0, 7) : []
    );
    setExpiredResultsRest(
      searchResults ? orderByExpiredDate(searchResults.filter(item => isExpired(item.fields.frist)).map(item => {
        return {
          ...item,
          fields: {
            expired: true,
            ...item.fields
          },
        }
      })).splice(7) : []
    );
  }, [searchResults]);

  return (
    <>
      <div id={id || 'grants-search'} className="b-product-search">
        {!collapsed ? (
          <InputSearch
            id="tilskuddsok"
            label={label}
            autoFocus={true}
            showSuggestions={false}
            fnChange={debouncedChange}
          />
        ) : null }
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
                searchString && searchResults.length > 0 && !loading ? (
                <h2 className="b-product-search__title">
                  {searchResults.length} treff på «{searchString}»
                </h2>
                ) : null
              }
            <Tabs>
              <TabList>
                <Tab>Pågående <span className="react-tabs__tab-count react-tabs__tab-count--green">{activeResults.length}</span></Tab>
                <Tab>Utløpt <span className="react-tabs__tab-count react-tabs__tab-count--red">{expiredResults.length}</span></Tab>
              </TabList>
              <TabPanel>
                <List
                  list={toggleMore ? activeResults : activeResultsLimited}
                />
                {activeResultsRest.length > 0 && !toggleMore ? (
                  <div className="l-mt-1">
                    <Button onClick={() => setToggleMore(!toggleMore)} secondary>Vis alle ({activeResults.length})</Button>
                  </div>
                ) : null}
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
  id: PropTypes.string,
  label: PropTypes.string,
  flatTree: PropTypes.string,
  endpoint: PropTypes.string,
  initial: PropTypes.string,
  contentId: PropTypes.string,
  malgruppe: PropTypes.string,
  categories: PropTypes.array,
  collapsed: PropTypes.bool
};

export default GrantsSearch;
