import React from 'react';
import PropTypes from 'prop-types';

const RadioButtons = props => (
  <div className="b-radio-buttons">
    <div>
      <strong>{props.heading}</strong>
    </div>
    {props.options.map(option => {
      return (
        <label className="b-radio-buttons__label">
          <input
            name={props.radioGroupName}
            type="radio"
            className="b-radio-buttons__input"
            value={option.value}
            disabled={option.disabled}
          />
          {option.label}
          <i class="b-radio-buttons__indicator" />
        </label>
      );
    })}
  </div>
);

RadioButtons.propTypes = {
  heading: PropTypes.string,
  radioGroupName: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      disabled: PropTypes.bool
    })
  )
};

export default RadioButtons;
