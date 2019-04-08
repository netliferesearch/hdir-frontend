import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CheckboxGroup from './CheckboxGroup';
import Button from './Button';

const MultiSelector = props => {
  const [options, setOptions] = useState(props.options);
  const [open, setOpen] = useState(false);
  const element = useRef();

  const openSelector = () => setOpen(true);
  const closeSelector = () => {
    setOpen(false);
    // Resets the options to prop values if its closed
    setOptions(props.options);
  };

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
  }, [open]);

  const handleOutsideClick = e => {
    // close it if we click outside
    if (!element.current.contains(e.target)) {
      closeSelector();
    }
  };

  const selectClasses = open =>
    classNames({
      'b-multi-selector__select': true,
      'b-multi-selector__select--open': open
    });

  return (
    <div className="b-multi-selector" ref={element}>
      <button
        className={selectClasses(open)}
        onClick={open ? closeSelector : openSelector}
        aria-expanded={open}
      >
        {props.buttonText}
      </button>
      {open && (
        <div className="b-multi-selector__box">
          <div className="b-multi-selector__checkboxes">
            <CheckboxGroup
              name="statistikktype"
              options={options}
              handleChange={setOptions}
            />
          </div>
          <div className="b-multi-selector__buttons">
            <Button
              secondary
              small
              onClick={() => {
                props.handleChange(options);
                closeSelector();
              }}
            >
              {props.confirmText}
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
  buttonText: PropTypes.string,
  confirmText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func
};

export default MultiSelector;
