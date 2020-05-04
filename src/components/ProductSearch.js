import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputSearch from './InputSearch'
import ChapterHeading from './ChapterHeading'
import NavList from './NavList'
import Button from './Button'

const mainClasses = () =>
  classNames({
    'b-product-search': true,
  });

const contentClasses = (toggled) =>
  classNames({
    'b-product-search': true,
    'b-product-search__content': toggled,
    'b-product-search--hidden': !toggled
  });

const ProductSearch = ({ label, productId }) => {
  const [toggled, setToggled] = useState(false);
  const [searchResults, setSearchResults] = useState('');
  const [searchString, setSearchString] = useState('');
  const liveSearchUrl = 'https://helsedir-helsenett-xptest.enonic.cloud/_/service/helsedirektoratet/realtimesearch';
  
  function toggle() {
    setToggled(!toggled);
  }

  function change(value) {
    setSearchString(value);
    fetch(`${liveSearchUrl}?searchQuery=${value.toLowerCase()}&contentId=${productId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setSearchResults(data)
      })
    }

  function endofstring(searchStr, findStr) {
    return searchStr.lastIndexOf(findStr) > 0 ? searchStr.lastIndexOf(findStr) + findStr.length : -1;
  }

  const hightlightWords = (string, match) => {
    if (match.length < 4) {
      return string;
    }
    const matchedPos = string.indexOf(match);
    const matchedWord = string.split(" ").find(function (v) {
      return v.indexOf(match) > -1;
    });
    console.log('matchedWord', matchedWord)
    const formatMatchedWord = <strong>{matchedWord}</strong>
    const pre = string.substring(0, matchedPos) || null;
    const postIndex = endofstring(string, matchedWord);
    const post = string.substring(postIndex, string.length)
    return [
      pre, formatMatchedWord, post
    ]
  }

  const dummydata = [
    {
      title: hightlightWords("Lavterskel tilbud", searchString),
      meta: '1. Fellesdel: Ledelse, styring og brukermedvirkning',
      url: '#a'
    },
    {
      title: hightlightWords("Tilpasset tilbud", searchString),
      meta: '1. Fellesdel: Ledelse, styring og brukermedvirkning',
      url: '#a'
    },
    {
      title: hightlightWords('Tannehelsetjenesten', searchString),
      meta: '1. Fellesdel: Ledelse, styring og brukermedvirkning',
      url: '#a'
    },
    {
      title: hightlightWords("Oversikt over tilbud", searchString),
      meta: '1. Fellesdel: Ledelse, styring og brukermedvirkning',
      url: '#a'
    },
  ]

  console.log(dummydata)

  const fullLabel = `Søk i ${label}`
  
  return (
    <>
      <div className={mainClasses()}>
        <Button 
          onClick={toggle}
          clean
          icon={!toggled ? '../icons/search.svg' : '../icons/'}>
          {
            toggled ? 'Skjul søk' : fullLabel
          }
        </Button>
        <div className={contentClasses(toggled)}>
          {toggled}
          <InputSearch
            label={fullLabel}
            autoFocus={toggled}
            showSuggestions={false}
            fnChange={toggled ? change : null}
            productId={productId}
          />
        </div>
      </div>
      { toggled && (
        <>
          <h2>6 treff på «{searchString}» i retningslinjen</h2>
          <div className="col-xs-12 l-mt-3">
            <ChapterHeading
              heading="Anbefalinger"
              h={'h3'}
              clean
            />
            <hr className="b-hr b-hr--blue" />
            <NavList
              noArrow
              list={dummydata}
            />
          </div>
          <div className="col-xs-12 l-mt-3 l-mb-3">
            <ChapterHeading
              heading="Kapitler"
              h={'h3'}
              clean
            />
            <hr className="b-hr b-hr--blue" />
            <NavList
              noArrow
              list={[
                {
                  title: '4.1 Veiing og måling',
                  url: '#a'
                },
              ]}
            />
          </div>
        </>
      )}
    </>
  );
}

ProductSearch.propTypes = {
  label: PropTypes.string,
  productId: PropTypes.string,
};

export default ProductSearch;
