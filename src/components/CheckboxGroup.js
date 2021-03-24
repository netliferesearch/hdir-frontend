import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';

const legendClasses = border =>
  classNames({
    'b-checkbox-group__legend': true,
    'b-checkbox-group__legend--border': border
  });
  
  // Sorts values alphabetically
  const sort = (values) => {
    return values.sort((a, b) => ('' + a.label).replace(/\W/g, '').localeCompare(b.label.replace(/\W/g, '')))
  }

const CheckboxGroup = ({ heading, border, options, name, handleChange }) => (
  <fieldset className="b-checkbox-group">
    {heading && (
      <legend className={legendClasses(border)}>{heading}</legend>
    )}
    {sort(options).map((option, index) => {
      return (
        <label className="b-checkbox-group__label" key={shortid.generate()}>
          <input
            name={name}
            type="checkbox"
            className="b-checkbox-group__input"
            value={option.label}
            checked={option.checked}
            onChange={() =>
              // Returns an updates list with the item toggeled
              handleChange(
                sort(options).map((newOption, i) =>
                  i === index
                    ? {
                        ...newOption,
                        checked: !newOption.checked
                      }
                    : newOption
                )
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

CheckboxGroup.defaultProps = {
  handleChange: value => {
    console.warn('missing property function in CheckboxGroup', value);
  }
};

export default CheckboxGroup;
