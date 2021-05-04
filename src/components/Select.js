import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';

const selectClasses = (stacked, simple, custompos, zIndex) =>
  classNames({
    'b-select': true,
    'b-select--stacked': stacked,
    'b-select--custom-position': custompos,
    'b-select--simple': simple,
    'b-select--positive-z-index': zIndex
  });

const selectElementClasses = simple =>
  classNames({
    'b-select__select': true,
    'b-select__select--simple': simple
  });

const Select = ({
  stacked,
  custompos,
  simple,
  label,
  placeholder,
  placeholderSelected,
  options,
  zIndex
}) => (
  <div className={selectClasses(stacked, simple, custompos, zIndex)}>
    <label htmlFor="profession-selector" className="b-select__label">
      {label}
    </label>
    <select id="profession-selector" defaultValue={placeholderSelected ? 'default' : ''} className={selectElementClasses(simple)}>
      {/* This value is suppose to be empty.
          It should also have the attribute selected. defaultValue should be value.
          JSX requires we write it this way.
      */}
      {placeholder && (
        <option defaultValue="" disabled value="default" className="b-select__option" >
          {placeholder}
        </option>
      )}
      {options.map(option => (
        <option key={shortid.generate()} className="b-select__option" value={option.title}>
          {option.title}
        </option>
      ))}
    </select>
  </div>
);

Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderSelected: PropTypes.bool,
  options: PropTypes.array,
  stacked: PropTypes.bool,
  custompos: PropTypes.bool,
  simple: PropTypes.bool,
  zIndex: PropTypes.bool
};

export default Select;
