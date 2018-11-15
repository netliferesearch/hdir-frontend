import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const RadioButtonGroup = props => (
  <div className="b-radio-button-group">
    {props.heading && (
      <div>
        <strong>{props.heading}</strong>
      </div>
    )}
    {props.options.map(option => {
      return (
        <label className="b-radio-button-group__label" key={shortid.generate()}>
          <input
            name={props.name}
            type="radio"
            className="b-radio-button-group__input"
            value={option.value}
            disabled={option.disabled}
          />
          {option.label}
          <i className="b-radio-button-group__indicator" />
        </label>
      );
    })}
  </div>
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
