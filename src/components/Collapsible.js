import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import zenscroll from 'zenscroll';

import Heading from './Heading';

const buttonClasses = (active, small) =>
  classNames({
    'b-collapsible__button': true,
    'b-collapsible__button--active': active,
    'b-collapsible__button--small': small
  });

const headingClasses = small =>
  classNames({
    'b-collapsible__heading': true,
    h3: !small,
    h4: small
  });

const collapsibleClasses = small =>
  classNames({
    'b-collapsible': true,
    'b-collapsible--small': small
  });

class Collapsible extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentDidMount() {
    this.setState({
      collapsed: false
    });
  }

  componentDidUpdate() {
    zenscroll.intoView(this.domNode, 300);
  }

  render() {
    const { props } = this;
    return (
      <div
        className={collapsibleClasses(props.small)}
        ref={ref => (this.domNode = ref)}
      >
        <button
          className={buttonClasses(this.state.collapsed, props.small)}
          aria-expanded={this.state.collapsed}
          aria-controls="collapsible-0"
          onClick={this.toggleCollapse}
        >
          <Heading h2 className={headingClasses(props.small)}>
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
  heading: PropTypes.string,
  small: PropTypes.bool
};

export default Collapsible;
