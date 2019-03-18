import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';

const legendClasses = border =>
  classNames({
    'b-checkbox-group__legend': true,
    'b-checkbox-group__legend--border': border
  });

const CheckboxGroup = props => (
  <fieldset className="b-checkbox-group">
    {props.heading && (
      <legend className={legendClasses(props.border)}>{props.heading}</legend>
    )}
    {props.options.map(option => {
      return (
        <label className="b-checkbox-group__label" key={shortid.generate()}>
          <input
            name={props.name}
            type="checkbox"
            className="b-checkbox-group__input"
            value={option.value}
            disabled={option.disabled}
          />
          <i className="b-checkbox-group__indicator" />
          {option.label}
        </label>
      );
    })}
  </fieldset>
);

CheckboxGroup.propTypes = {
  heading: PropTypes.string,
  name: PropTypes.string,
  border: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      disabled: PropTypes.bool
    })
  )
};

export default CheckboxGroup;
