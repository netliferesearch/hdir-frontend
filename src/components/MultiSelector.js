import React from 'react';
import PropTypes from 'prop-types';

import CheckboxGroup from './CheckboxGroup';
import Button from './Button';

class MultiSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div className="b-multi-selector">
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
            <Button secondary small>
              Bekreft temaer
            </Button>
            <Button plain small>
              Avbryt
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

MultiSelector.propTypes = {};

export default MultiSelector;
