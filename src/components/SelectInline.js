import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const SelectInline = props => (
  <div className="b-select-inline">
    <label htmlFor="contentCustomizer" className="b-select-inline__label">
      {props.label}
    </label>
    <select name="contentCustomizer" className="b-select-inline__select">
      {/* This value is suppose to be empty.
          It should also have the attribute selected. defaultValue should be value.
          JSX requires we write it this way. 
      */}
      <option defaultValue="" disabled className="b-select-inline__option">
        {props.placeholder}
      </option>
      {props.options.map(option => (
        <option key={shortid.generate()} className="b-select-inline__option">
          {option}
        </option>
      ))}
    </select>
  </div>
);

SelectInline.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string)
};

SelectInline.defaultProps = {
  placeholder: 'Velg'
};

export default SelectInline;
