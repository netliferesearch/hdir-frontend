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
    {props.options.map((option, index) => {
      return (
        <label className="b-checkbox-group__label" key={shortid.generate()}>
          <input
            name={props.name}
            type="checkbox"
            className="b-checkbox-group__input"
            value={option.value}
            checked={option.checked}
            onChange={() =>
              // Returns an updates list with the item toggeled
              props.handleChange(
                props.options.map((option, i) => {
                  if (i === index) {
                    return {
                      ...option,
                      checked: !option.checked
                    };
                  }
                  return option;
                })
              )
            }
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
  handleChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      disabled: PropTypes.bool,
      checked: PropTypes.bool
    })
  )
};

export default CheckboxGroup;
