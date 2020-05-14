import React, { useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { debounce } from 'lodash';
import InputSearch from './InputSearch'
import ChapterHeading from './ChapterHeading'
import NavList from './NavList'
import Loading from './Loading'
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

const ProductSearch = ({ label, productId, collapsed, flatTree, malgruppe }) => {
  const [toggled, setToggled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toggleMoreRecommendations, setToggleMoreRecommendations] = useState(false);
  const [toggleMoreChapters, setToggleMoreChapters] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState('');
  const liveSearchUrl = 'https://helsedir-helsenett-xptest.enonic.cloud/retningslinjer/adhd/_/service/helsedirektoratet/realtimesearch';

  useEffect(() => {
    if (collapsed === true && toggled === false) {
      setToggled(true);
    }
  }, []);

  function toggle() {
    setToggled(!toggled);
  }

  // const doSearch = (formData) =>
  const fetchResults = (formData) => 
    fetch(`${liveSearchUrl}`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setSearchResults(data);
        console.log(data);
        setToggleMoreRecommendations(false);
        setToggleMoreChapters(false);
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
        formData.append('searchQuery', value);
        formData.append('malgruppe', malgruppe);
        formData.append('flatTree', flatTree);
        doSearch(formData);
        console.log(value)
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
  const modifiedResult = () => ({
    total: searchResults.total || null,
    anbefaling: 
      searchResults.anbefaling && searchResults.anbefaling.length > 0 ? searchResults.anbefaling.map(result => {
        return {
          title: getHighlightedText(result.title, searchString),
          meta: result.chapter,
          url: result.url
        }
      }) : [],
    kapittel:
      searchResults.kapittel && searchResults.kapittel.length > 0 ? searchResults.kapittel.map(result => {
        return {
          title: getHighlightedText(result.title, searchString),
          meta: '',
          url: result.url
        }
      }) :[]
  })

  // Split arrays in two, so we can have "See all" toggle buttons
  const recommendations = modifiedResult().anbefaling.splice(0, 7);
  const recommendationsRest = modifiedResult().anbefaling.length > 7 ? modifiedResult().anbefaling.splice(7) : null;
  const chapters = modifiedResult().kapittel.splice(0, 7);
  const chaptersRest = modifiedResult().kapittel.length > 7 ? modifiedResult().kapittel.splice(7) : null;

  return (
    <>
    { collapsed === true ? (
      <div className={mainClasses(collapsed)}>
        <div className={contentClasses(true)}>
          <InputSearch
            id="produktsok"
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
          icon={!toggled === true ? '../icons/search.svg' : '../icons/close.svg'}>
          {
            toggled === true ? 'Skjul søk' : `Søk i ${label}`
          }
        </Button>
        <div className={contentClasses(toggled)}>
          <InputSearch
            id="produktsok"
            label={`Søk i ${label}`}
            autoFocus={toggled}
            showSuggestions={false}
            fnChange={toggled ? debouncedChange : null}
            productId={productId}
          />
        </div>
      </div>
    )}
      
      {loading === true ? (
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

      {toggled === true && searchString.length > 0 && modifiedResult().total > 0 && (
        <div className="l-mb-4">
            {
              searchString === true && modifiedResult().total > 0 ? (
              <h2 className="b-product-search__title">
                {modifiedResult().total} treff på «{searchString}» i {label}
              </h2>
              ) : null
            }
            {
            recommendations.length > 0 ? (
                <div className="col-xs-12 l-mt-2">
                  <ChapterHeading
                    heading="Anbefalinger"
                    h={'h3'}
                    clean
                  />
                  <hr className="b-hr b-hr--blue" />
                  <NavList
                    noArrow
                  list={recommendations}
                  />
                  {
                    recommendationsRest ? (
                    <div className="l-mt-1">
                      <Button onClick={() => setToggleMoreRecommendations(!toggleMoreRecommendations)} secondary>Vis alle ({modifiedResult().anbefaling.length})</Button>
                    </div>
                    ) : null
                  }
                  
                  {
                    toggleMoreRecommendations === true ? (
                    <NavList
                      noArrow
                      list={recommendationsRest}
                    />
                    ) : null
                  }
                </div>
              ) : null
            }
            {
              chapters.length > 0 ? (
                <div className="col-xs-12 l-mt-2 l-mb-3">
                  <ChapterHeading
                    heading="Kapitler"
                    h={'h3'}
                    clean
                  />
                  <hr className="b-hr b-hr--blue" />
                  <NavList
                    noArrow
                    list={chapters}
                  />
                  {
                    chaptersRest ? (
                      <div className="l-mt-1">
                      <Button onClick={() => setToggleMoreChapters(!toggleMoreChapters)} secondary>Vis alle ({modifiedResult().kapittel.length})</Button>
                      </div>
                    ) : null
                  }
                  {
                    toggleMoreChapters === true ? (
                      <NavList
                        noArrow
                        list={chaptersRest}
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

ProductSearch.propTypes = {
  label: PropTypes.string,
  productId: PropTypes.string,
  collapsed: PropTypes.bool,
};

export default ProductSearch;
