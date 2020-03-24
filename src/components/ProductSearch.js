import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputSearch from './InputSearch'
import Button from './Button'

const mainClasses = (label, toggled) =>
  classNames({
    'b-product-search': true,
    'b-product-search__label': label,
    'b-product-search__content': toggled,
  });
  
const buttonClasses = () =>
  classNames({
    'b-button': true,
    'b-button--plain': true,
  });

const ProductSearch = ({ label }) => {
  const [toggled, setToggled] = useState(false);
  
  function toggle(event) {
    event.preventDefault();
    setToggled(!toggled);
  }
  
  return (
    <div className={mainClasses()}>
      <Button 
        onClick={toggle}
        clean
        icon={!toggled ? '../icons/search.svg' : '../icons/'}>
        {
          toggled ? 'Skjul søk' : label
        }
      </Button>
      {
        toggled && (
          <div className={mainClasses(false, toggled)}>
            <InputSearch label={label} autoFocus={toggled} />
          </div>
        )
      }
    </div>
  );
}

ProductSearch.propTypes = {
  label: PropTypes.string,
};

export default ProductSearch;
