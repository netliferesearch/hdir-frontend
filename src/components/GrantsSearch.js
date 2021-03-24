import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputSearch from './InputSearch'
import { debounce } from 'lodash';
import ChapterHeading from './ChapterHeading'
import List from './List'
import Loading from './Loading'
import Button from './Button'

const GrantsSearch = ({
  id,
  label,
  flatTree,
  endpoint,
  initial = null,
  contentId,
  malgruppe,
  categories,
  collapsed
}) => {
  const [searchResults, setSearchResults] = useState(null);
  const [searchString, setSearchString] = useState('');
  const [loading, setLoading] = useState(false);
  const [tabContent, setTabContent] = useState(null);
  const [toggleMore, setToggleMore] = useState([]);
  // const [data, setData] = useState(initial);
  const [formDropValue, setFormDropValue] = useState(malgruppe || '');
  const [formCheckValue, setFormCheckValue] = useState(categories || []);
  const liveSearchUrl = endpoint
    ? endpoint
    : 'https://helsedir-helsenett-xptest.enonic.cloud/retningslinjer/adhd/_/service/helsedirektoratet/realtimesearch';

  // const fetchResultsBySearch = (formData) =>
  //   fetch(liveSearchUrl, {
  //     method: 'POST',
  //     body: formData
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       // Transform array of objects, to object
  //       console.log('data', data)
  //       const results = data.reduce(
  //         (obj, item) => Object.assign(obj, item), {});

  //       setSearchResults(results);
  //       setToggleMore(false);
  //       setLoading(false);
  //     });

  const fetchResultsBySeach = () => {
    fetch(liveSearchUrl + '?length=100' + '&searchQuery=' + searchString + '&id=' + id)
      .then(res => res.json())
      .then(data => {

        // Transform array of objects, to object
        const results = data.reduce(
          (obj, item) => Object.assign(obj, item), {});
        console.log('results', results)
        setSearchResults(results);
        setToggleMore(false);
        setLoading(false);
      });
  }

  const fetchResultsWizard = () => {
    fetch(liveSearchUrl + '?length=100' + '&dropValue=' + formDropValue + '&checkValue=' + formCheckValue + '&id=' + id)
      .then(res => res.json())
      .then(data => {

        // Transform array of objects, to object
        const results = data.reduce(
          (obj, item) => Object.assign(obj, item), {});
        console.log('results', results)
        setSearchResults(results);
        setToggleMore(false);
        setLoading(false);
      });
  }

  // const doSearch = useMemo(() => debounce(fetchResultsBySeach, 350, true), [debouncedChange]);

  const debouncedChange = useCallback(
    (value) => {
      if (value.length > 2) {
        setSearchString(value);
        setLoading(true);
        fetchResultsBySeach();
      }
      if (value.length === 0) {
        setSearchResults(null);
        setSearchString('');
      }
    },
    [searchResults],
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
            setFormDropValue(e.target.value);
          }

        });
      }

      if (inputType === 'checkboxes') {
        const inputs = step.querySelectorAll('input[type="checkbox"]');
        const submit = step.querySelector('button[data-submit]');

        submit.addEventListener("click", function (e) {
          let values = []
          inputs.forEach(input => {
            if (input.checked) {
              values.push(input.value)
            }
            if (!input.checked && values.find(cat => cat === input.value)) {
              values.filter(value => !input.value)
            }
          });
          setFormCheckValue(values)
        });
      }
    });

  }, []);

  useEffect(() => {
    // Wizard mode, trigger search on category/malgruppe changes
    if (!initial && (formDropValue || formCheckValue.length > 0)) {
      setLoading(true);
      // let formData = new FormData();
      // formData.append('searchQuery', '');
      // formData.append('flatTree', flatTree);
      // formData.append('radioValue', formDropValue);
      // formData.append('checkValue', formCheckValue);
      fetchResultsWizard();
    }
  }, [formDropValue, formCheckValue]);

  // useEffect(() => {
  //   if (initial && searchString.length === 0) {
  //     if (typeof initial === 'string' || initial instanceof String) {
  //       const data = initial.toString().replace(/\\"/g, '"')
  //       setTimeout(() => {
  //         // setSearchResults(JSON.parse(data))
  //       }, 400)
  //       return
  //     }
  //   }
  // },[searchString, searchResults]);

  const changeToggleMore = (name, value) => {
    setToggleMore(prevObj => {
      return {
        ...prevObj,
        [name]: value
      }
    })
  }

  useEffect(() => {
    const data = searchResults ? searchResults : initial
    const keys = data ? Object.keys(data) : []

    setToggleMore(keys.map(key => {
      return (
        {
          [key]: false
        }
      )
    }))
    
  }, [])

  const tabs = (data) => {
    console.log('data', data)
    console.log('isArray', Array.isArray(data))
    if (Array.isArray(data)) {
      return false
    }
    const keys = data ? Object.keys(data) : []
    // setKeys(data ? Object.keys(data) : [])
    return keys.map(key => {
      console.log('key', key)

      /*
      ** If the current items are of type "Utgått", add expired property,
      ** so it will be displayed with a red color in the list.
      */
      const allData = data ? data[key].map(item => {
        return {
          ...item,
          fields: {
            ...item.fields,
            expired: key === 'Utløpt'
          }
        }
      }) : []

      /*
      ** If there are less than 8 results, display all. Otherwise, add a toggle all button.
      */
      const splicedData = allData.length > 7 ? allData.slice(0, 7) : null
      console.log('allData', allData)
      return (
        <TabPanel>
          <List
            list={toggleMore[key] || allData.length < 8 ? allData : splicedData}
          />
          {!toggleMore[key] && allData.length > 7 ? (
            <div className="l-mt-1">
              <Button onClick={() => changeToggleMore(key, true)} secondary>Vis alle</Button>
            </div>
          ) : null}
        </TabPanel>
      )
    })
  }

  useEffect(() => {

   
  }, [searchResults, toggleMore])

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
        ) : null}
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


      { // INITIAL RESULTS / DEFAULT
        searchString.length < 3 && initial && !searchResults ? (
          <Tabs>
            <TabList>
              {Object.keys(initial).map(key => (
                <Tab>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  { key === 'Pågående' ? (
                    <span className="react-tabs__tab-count react-tabs__tab-count--green">{initial[key].length}</span>
                  ) : null}
                  { key === 'Utløpt' ? (
                    <span className="react-tabs__tab-count react-tabs__tab-count--red">{initial[key].length}</span>
                  ) : null}
                </Tab>
              ))}
            </TabList>
            {tabs(initial)}
          </Tabs>
        ) : null}


      { // SEARCH RESULTS
        searchResults ? (
          <div className="l-mb-4 results">
            { searchString.length > 2 && searchResults && !loading ? (
              <h2 className="b-product-search__title">
                {searchResults.length} treff på «{searchString}»
              </h2>
            ) : null}
            <Tabs>
              <TabList>
                {Object.keys(searchResults).map(key => (
                  <Tab>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    { key === 'Pågående' ? (
                      <span className="react-tabs__tab-count react-tabs__tab-count--green">{searchResults[key].length}</span>
                    ) : null}
                    { key === 'Utløpt' ? (
                      <span className="react-tabs__tab-count react-tabs__tab-count--red">{searchResults[key].length}</span>
                    ) : null}
                  </Tab>
                ))}
              </TabList>
              {tabs(searchResults)}
            </Tabs>
          </div>
        ) : null}



      { // NO SEARCH RESULTS
        searchString.length > 0 && !loading && searchResults.length === 0 ? (
          <div className="l-mb-4">
            <div className="col-xs-12 l-mt-2 l-mb-3">
              <p>0 treff på «{searchString}»</p>
            </div>
          </div>
        ) : null
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
