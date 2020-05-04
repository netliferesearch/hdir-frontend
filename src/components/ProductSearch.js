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

  const getHighlightedText = (text, highlight) => {
    if (highlight.length < 4) {
      return text;
    }
    // Split on highlight term and include term into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return [
      parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <strong>{part}</strong> : part)
    ] 
  }

  const dummydata = [
    {
      title: getHighlightedText("Lavterskel tilbud", searchString),
      meta: '1. Fellesdel: Ledelse, styring og brukermedvirkning',
      url: '#a'
    },
    {
      title: getHighlightedText("Tilpasset tilbud", searchString),
      meta: '1. Fellesdel: Ledelse, styring og brukermedvirkning',
      url: '#a'
    },
    {
      title: getHighlightedText('Tannehelsetjenesten', searchString),
      meta: '1. Fellesdel: Ledelse, styring og brukermedvirkning',
      url: '#a'
    },
    {
      title: getHighlightedText("Oversikt over tilbud", searchString),
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
