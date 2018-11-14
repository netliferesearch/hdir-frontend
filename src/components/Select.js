import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';

const selectClasses = stacked =>
  classNames({ 'b-select': true, 'b-select--stacked': stacked });

const Select = props => (
  <div className={selectClasses(props.stacked)}>
    <label htmlFor="contentCustomizer" className="b-select__label">
      {props.label}
    </label>
    <select name="contentCustomizer" className="b-select__select">
      {/* This value is suppose to be empty.
          It should also have the attribute selected. defaultValue should be value.
          JSX requires we write it this way.
      */}
      <option defaultValue="" disabled className="b-select__option">
        {props.placeholder}
      </option>
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
  stacked: PropTypes.bool
};

Select.defaultProps = {
  placeholder: 'Velg'
};

export default Select;
