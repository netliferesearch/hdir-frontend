import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { debounce } from 'lodash';
import InputSearch from './InputSearch'
import ChapterHeading from './ChapterHeading'
import NavList from './NavList'
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
  const [toggleMoreRecommendations, setToggleMoreRecommendations] = useState(false);
  const [toggleMoreChapters, setToggleMoreChapters] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState('');
  const liveSearchUrl = 'https://helsedir-helsenett-xptest.enonic.cloud/_/service/helsedirektoratet/realtimesearch';

  if (collapsed && !toggled) {
    setToggled(true);
  }

  function toggle() {
    setToggled(!toggled);
  }

  const doSearch = debounce((formData) =>
    fetch(`${liveSearchUrl}`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setSearchResults(data);
        setToggleMoreRecommendations(false);
        setToggleMoreChapters(false);
      })
    , 300)

  const debouncedChange = useCallback(
    (value) => {
      if (value.length > 2) {
        setSearchString(value);
        let formData = new FormData();
        formData.append('contentId', productId);
        formData.append('searchQuery', value);
        formData.append('malgruppe', malgruppe);
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
    { collapsed ? (
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
          icon={!toggled ? '../icons/search.svg' : '../icons/close.svg'}>
          {
            toggled ? 'Skjul søk' : `Søk i ${label}`
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
                    toggleMoreRecommendations ? (
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
                    toggleMoreChapters ? (
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
