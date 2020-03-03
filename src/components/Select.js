import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';

const selectClasses = (stacked, simple) =>
  classNames({
    'b-select': true,
    'b-select--stacked': stacked,
    'b-select--simple': simple
  });

const selectElementClasses = simple =>
  classNames({
    'b-select__select': true,
    'b-select__select--simple': simple
  });

const Select = ({ stacked, simple, label, placeholder, options }) => (
  <div className={selectClasses(stacked, simple)}>
    <label htmlFor="profession-selector" className="b-select__label">
      {label}
    </label>
    <select
      id="profession-selector"
      className={selectElementClasses(simple)}
    >
      {/* This value is suppose to be empty.
          It should also have the attribute selected. defaultValue should be value.
          JSX requires we write it this way.
      */}
      {placeholder && (
        <option defaultValue="" disabled className="b-select__option">
          {placeholder}
        </option>
      )}
      {options.map(option => (
        <option key={shortid.generate()} className="b-select__option">
          {option}
        </option>
      ))}
    </select>
  </div>
);

Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  stacked: PropTypes.bool,
  simple: PropTypes.bool
};

export default Select;
