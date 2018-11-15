import React from 'react';
import PropTypes from 'prop-types';

const CheckboxGroup = props => (
  <div className="b-checkbox-group">
    {props.heading && (
      <div>
        <strong>{props.heading}</strong>
      </div>
    )}
    {props.options.map(option => {
      return (
        <label className="b-checkbox-group__label">
          <input
            name={props.name}
            type="checkbox"
            className="b-checkbox-group__input"
            value={option.value}
            disabled={option.disabled}
          />
          {option.label}
          <i class="b-checkbox-group__indicator" />
        </label>
      );
    })}
  </div>
);

CheckboxGroup.propTypes = {
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

export default CheckboxGroup;
