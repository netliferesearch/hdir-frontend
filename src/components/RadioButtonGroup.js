import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';

const legendClasses = border =>
  classNames({
    'b-radio-button-group__legend': true,
    'b-radio-button-group__legend--border': border
  });

const RadioButtonGroup = ({ heading, options, name, border }) => (
  <fieldset className="b-radio-button-group">
    {heading && (
      <legend className={legendClasses(border)}>{heading}</legend>
    )}
    {options.map(option => {
      return (
        <label className="b-radio-button-group__label" key={shortid.generate()}>
          <input
            name={name}
            type="radio"
            className="b-radio-button-group__input"
            value={option.value}
            disabled={option.disabled}
          />
          <i className="b-radio-button-group__indicator" />
          {option.label}
        </label>
      );
    })}
  </fieldset>
);

RadioButtonGroup.propTypes = {
  heading: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      disabled: PropTypes.bool
    })
  )
};

export default RadioButtonGroup;
