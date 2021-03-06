import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CheckboxGroup from './CheckboxGroup';
import Button from './Button';

const MultiSelector = ({ 
  options: optionsProp,
  buttonText, 
  confirmText, 
  checkboxGroupName, 
  handleChange 
}) => {
  const [options, setOptions] = useState(optionsProp);
  const [open, setOpen] = useState(false);
  const boxElement = useRef();
  const buttonElement = useRef();

  const openSelector = () => setOpen(true);
  const closeSelector = useCallback(() => {
    setOpen(false);
    // Resets the options to prop values if its closed
    setOptions(options);
  }, [options]);

  const handleOutsideClick = useCallback(
    e => {
      // close it if we click outside
      // Ignores the outside click if we click the open/close button, or else we will close it on mouse down, and open it on mouse up.
      if (
        !boxElement.current.contains(e.target) &&
        !buttonElement.current.contains(e.target)
      ) {
        closeSelector();
      }
    },
    [closeSelector]
  );

  useEffect(() => {
    const handleClose = e => {
      if (e.key === 'Escape') closeSelector();
    };
    if (open) {
      document.addEventListener('keydown', handleClose);
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('keydown', handleClose);
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('keydown', handleClose);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [open, closeSelector, handleOutsideClick]);

  const selectClasses = open =>
    classNames({
      'b-multi-selector__select': true,
      'b-multi-selector__select--open': open
    });

  return (
    <div className="b-multi-selector">
      <button
        className={selectClasses(open)}
        onClick={open ? closeSelector : openSelector}
        aria-expanded={open}
        ref={buttonElement}
      >
        {buttonText}
      </button>
      {open && (
        <div className="b-multi-selector__box" ref={boxElement}>
          <div className="b-multi-selector__checkboxes">
            <CheckboxGroup
              name={checkboxGroupName}
              options={options}
              handleChange={setOptions}
            />
          </div>
          <div className="b-multi-selector__buttons">
            <Button
              secondary
              small
              onClick={() => {
                handleChange(options, checkboxGroupName);
                closeSelector();
              }}
            >
              {confirmText}
            </Button>
            <Button plain small onClick={closeSelector}>
              Avbryt
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

MultiSelector.propTypes = {
  buttonText: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
  checkboxGroupName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func
};

MultiSelector.defaultProps = {
  handleChange: value => {
    console.warn('missing property function in MultiSelector', value);
  }
};

export default MultiSelector;
