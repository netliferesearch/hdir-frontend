import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import CheckboxGroup from './CheckboxGroup';
import Button from './Button';

const MultiSelector = props => {
  const [open, setOpen] = useState(false);
  const element = useRef();

  const openSelector = () => setOpen(true);
  const closeSelector = () => setOpen(false);

  useEffect(() => {
    const handleClose = e => {
      if (e.key === 'Escape') closeSelector();
    };
    if (open) {
      document.addEventListener('keydown', handleClose);
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('keydown', handleClose);
      document.removeEventListener('mousedown', handleClick);
    }
    return () => {
      document.removeEventListener('keydown', handleClose);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [open]);

  const handleClick = e => {
    if (element.current.contains(e.target)) {
      // do nothing when we click inside the element
      return;
    }
    // close it if we click outside
    closeSelector();
  };

  return (
    <div className="b-multi-selector" ref={element}>
      <button
        className="b-multi-selctor__select"
        onClick={open ? closeSelector : openSelector}
      >
        {open ? 'Lukk' : 'Åpne'}
      </button>
      {open && (
        <div className="b-multi-selector__box">
          <div className="b-multi-selector__checkboxes">
            <CheckboxGroup
              name="statistikktype"
              options={[
                {
                  value: 'Kommunalt pasient- og brukerregister',
                  label: 'Kommunalt pasient- og brukerregister'
                },
                {
                  value: 'Kvalitetsindikator',
                  label: 'Kvalitetsindikator'
                },
                {
                  value: 'Norsk pasientregister',
                  label: 'Norsk pasientregister'
                },
                {
                  value: 'Kommunalt pasient- og brukerregister',
                  label: 'Kommunalt pasient- og brukerregister'
                },
                {
                  value: 'Kvalitetsindikator',
                  label: 'Kvalitetsindikator'
                },
                {
                  value: 'Norsk pasientregister',
                  label: 'Norsk pasientregister'
                },
                {
                  value: 'Kommunalt pasient- og brukerregister',
                  label: 'Kommunalt pasient- og brukerregister'
                },
                {
                  value: 'Kvalitetsindikator',
                  label: 'Kvalitetsindikator'
                },
                {
                  value: 'Norsk pasientregister',
                  label: 'Norsk pasientregister'
                }
              ]}
            />
          </div>
          <div className="b-multi-selector__buttons">
            <Button secondary small onClick={closeSelector}>
              Bekreft temaer
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

MultiSelector.propTypes = {};

export default MultiSelector;
