import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import zenscroll from 'zenscroll';

import Heading from './Heading';

const buttonClasses = (active, size) =>
  classNames({
    'b-collapsible__button': true,
    'b-collapsible__button--active': active,
    'b-collapsible__button--small': size === 'small',
    'b-collapsible__button--medium': size === 'medium'
  });

const headingClasses = size =>
  classNames({
    'b-collapsible__heading': true,
    h3: size === 'large',
    h4: size === 'medium',
    normal: size === 'small'
  });

const collapsibleClasses = size =>
  classNames({
    'b-collapsible': true,
    'b-collapsible--medium': size === 'medium',
    'b-collapsible--small': size === 'small'
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

  componentDidMount() {
    /*
    this.setState({
      collapsed: false
    });
    */
  }

  componentDidUpdate() {
    zenscroll.intoView(this.domNode, 300);
  }

  render() {
    const { props } = this;
    return (
      <div
        className={collapsibleClasses(props.size)}
        ref={ref => (this.domNode = ref)}
      >
        <button
          className={buttonClasses(this.state.collapsed, props.size)}
          aria-expanded={this.state.collapsed}
          aria-controls="collapsible-0"
          onClick={this.toggleCollapse}
        >
          <Heading
            h={
              (props.size === 'large' && 'h2') ||
              (props.size === 'medium' && 'h3') ||
              (props.size === 'small' && 'none')
            }
            className={headingClasses(props.size)}
          >
            {props.heading}
          </Heading>
        </button>
        {props.subheading && (
          <div className="l-mt-2">
            <span className="b-collapsible__subheading">
              {props.subheading}
            </span>
          </div>
        )}

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
  subheading: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Collapsible.defaultProps = {
  size: 'large'
};

export default Collapsible;
