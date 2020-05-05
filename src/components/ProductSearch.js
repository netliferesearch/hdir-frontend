import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputSearch from './InputSearch'
import Button from './Button'

const mainClasses = () =>
  classNames({
    'b-product-search': true,
  });

const contentClasses = (toggled) =>
  classNames({
    'b-product-search': true,
    'b-product-search__content': toggled,
    'hidden': !toggled
  });

const ProductSearch = ({ label, fnChange }) => {
  const [toggled, setToggled] = useState(false);
  
  function toggle(event) {
    event.preventDefault();
    setToggled(!toggled);
  }
  
  return (
    <div className={mainClasses()}>
      <button 
        id="product-search-trigger"
        onClick={toggle}
        className="b-button b-button--clean">
        <span
          className="b-link__icon"
          role="presentation"
          style={{ background: 'url(../icons/search.svg)'}}
        ></span>
        <span className="b-button__underline">{ toggled ? 'Skjul søk' : label }</span>
      </button>
      <div id="product-search" className={contentClasses(toggled)}>
        <InputSearch
          id="product-search-input"
          label={label}
          autoFocus={toggled}
          showSuggestions={false}
          fnChange={toggled ? fnChange : null}
        />
      </div>
    </div>
  );
}

ProductSearch.propTypes = {
  label: PropTypes.string,
  fnChange: PropTypes.func,
};

export default ProductSearch;
