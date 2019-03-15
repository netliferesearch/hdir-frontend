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
    this.openSelector = this.openSelector.bind(this);
    this.closeSelector = this.closeSelector.bind(this);
  }

  setSelectorOpen = open => () => {
    this.setState({ open: open }, () => {
      // open ? this.domNode.focus() : this.domNode.blur();
    });
  };

  openSelector = this.setSelectorOpen(true);
  closeSelector = this.setSelectorOpen(false);

  componentDidMount() {
    this.domNode.addEventListener('blur', this.closeSelector);
  }

  componentWillUnmount() {
    this.domNode.removeEventListener('blur', this.closeSelector);
  }

  render() {
    return (
      <div
        className="b-multi-selector"
        ref={ref => {
          this.domNode = ref;
        }}
        tabIndex="0"
      >
        <button
          className="b-multi-selctor__select"
          onClick={this.state.open ? this.closeSelector : this.openSelector}
        >
          {this.state.open ? 'Lukk' : 'Åpne'}
        </button>
        {this.state.open && (
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
              <Button secondary small onClick={this.closeSelector}>
                Bekreft temaer
              </Button>
              <Button plain small onClick={this.closeSelector}>
                Avbryt
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

MultiSelector.propTypes = {};

export default MultiSelector;
