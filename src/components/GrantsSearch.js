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
  const [tabIndex, setTabIndex] = useState(0);
  const [toggleMore, setToggleMore] = useState([]);
  // const [data, setData] = useState(initial);
  const [formDropValue, setFormDropValue] = useState(malgruppe || '');
  const [formRadioValue, setFormRadioValue] = useState('');
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

  const fetchResultsBySearch = () => {
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
    const dropValueQuery = formDropValue ? '&dropValue=' + formDropValue : ''
    const checkValueQuery = formCheckValue ? '&checkValue=' + formCheckValue : ''
    const radioValueQuery = formRadioValue ? '&radioValue=' + formRadioValue : ''
    console.log(dropValueQuery, checkValueQuery, radioValueQuery)
    fetch(liveSearchUrl + '?length=100' + dropValueQuery + checkValueQuery + radioValueQuery + '&id=' + id)
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

  // const doSearch = useMemo(() => debounce(fetchResultsBySearch, 350, true), [debouncedChange]);

  const debouncedChange = useCallback(
    (value) => {
      if (value.length > 2) {
        setSearchString(value);
        setLoading(true);
        fetchResultsBySearch();
      }
      if (value.length === 0) {
        setSearchResults(null);
        setSearchString('');
      }
    },
    [searchResults],
  );

  useEffect(() => {
    /*
    ** WIZARD MODE
    ** When used on wizard page, collect values from the form inputs, update state,
    ** then trigger new search.
    */
    const steps = [
      ...document.querySelectorAll("section[data-step]")
    ];
    steps.forEach(step => {
      const inputType = step.dataset.inputType;
      const key = step.dataset.key;

      if (inputType === 'dropValue') {
        const input = step.querySelector('select');

        input.addEventListener("change", function (e) {
          // Get the values
          if (key) {
            setFormDropValue(e.target.value);
            // fetchResultsWizard();
          }

        });
      }

      if (inputType === 'checkValue') {
        const inputs = step.querySelectorAll('input[type="checkbox"]');
        const submit = step.querySelector('button[data-submit]');
        
        submit && submit.addEventListener("click", function (e) {
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
          // fetchResultsWizard();
        });
      }

      if (inputType === 'radioValue') {
        const radios = step.querySelectorAll('input[type="radio"]');

        radios.forEach(input => {
          input.addEventListener("change", function (e) {
            setFormRadioValue(e.target.value);
            // fetchResultsWizard();
          });
        })
        
      }
    });

  }, []);

  useEffect(() => {
    // Wizard mode, trigger search on category/malgruppe changes
    if (!initial) {
      setLoading(true);
      // let formData = new FormData();
      // formData.append('searchQuery', '');
      // formData.append('flatTree', flatTree);
      // formData.append('radioValue', formDropValue);
      // formData.append('checkValue', formCheckValue);
      fetchResultsWizard();
    }
  }, [formDropValue, formCheckValue, formRadioValue]);

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

  const getTotal = (results) => {
    const numbers = Object.entries(results).map(cat => cat[1].length)
    return numbers.reduce((a, b) => a + b, 0)
  }

  const tabs = (data) => {
    const keys = data ? Object.keys(data) : []
    return keys.map(key => {
      
      /*
      ** If the current items are of type "Utgått", add expired property,
      ** so it will be displayed with a red color in the list.
      ** Fallback is a generic modifier.
      */
     const allData = data ? data[key].map(item => {
       return {
         ...item,
         fields: {
           ...item.fields,
           expired: key === 'Utløpt',
           generic: key !== 'Utløpt' && key !== 'Pågående'
          }
        }
      }) : []
      console.log('allData', allData)

      /*
      ** If there are less than 8 results, display all. Otherwise, add a toggle all button.
      */
      const splicedData = allData.length > 7 ? allData.slice(0, 7) : null
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
                {getTotal(searchResults)} treff på «{searchString}»
              </h2>
            ) : null}
            <Tabs selectedIndex={0} onSelect={index => setTabIndex(index)}>
              <TabList>
                {Object.keys(searchResults).map(key => (
                  <Tab key={key}>
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
        searchString.length > 0 && !loading && !searchResults ? (
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
