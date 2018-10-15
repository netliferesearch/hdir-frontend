import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from './Heading';

const buttonClasses = active =>
  classNames({
    'b-collapsible__button': true,
    'b-collapsible__button--active': active
  });

class Collapsible extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { props } = this;
    return (
      <div className="b-collapsible">
        <button
          className={buttonClasses(this.state.collapsed)}
          aria-expanded={this.state.collapsed}
          aria-controls="collapsible-0"
          onClick={this.toggleCollapse}
        >
          <Heading h2 className="b-collapsible__heading h3">
            Kvinner med svangerskapsdiabetes bør få kostråd og rådgivning basert
            på kostanamnese ved behandling av svangerskapsdiabetes
          </Heading>
        </button>
        <div className="l-mt-2">
          <span className="b-collapsible__subheading">
            <strong>Sterk</strong> anbefaling
          </span>
        </div>
        <div
          id="collapsible-0"
          aria-hidden={!this.state.collapsed}
          hidden={!this.state.collapsed}
          className="b-collapsible__content"
        >
          {props.children}
        </div>
      </div>
    );
  }
}

Collapsible.propTypes = {
  heading: PropTypes.string
};

export default Collapsible;
