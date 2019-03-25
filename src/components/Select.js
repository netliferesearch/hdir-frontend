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

const Select = props => (
  <div className={selectClasses(props.stacked, props.simple)}>
    <label htmlFor="profession-selector" className="b-select__label">
      {props.label}
    </label>
    <select
      id="profession-selector"
      className={selectElementClasses(props.simple)}
    >
      {/* This value is suppose to be empty.
          It should also have the attribute selected. defaultValue should be value.
          JSX requires we write it this way.
      */}
      {props.placeholder && (
        <option defaultValue="" disabled className="b-select__option">
          {props.placeholder}
        </option>
      )}
      {props.options.map(option => (
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
