import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import zenscroll from 'zenscroll';
import Alert from './Alert';

import Heading from './Heading';

const buttonClasses = (active, size, subtle) =>
  classNames({
    'b-collapsible__button': true,
    'b-collapsible__button--active': active,
    'b-collapsible__button--subtle': subtle,
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

const collapsibleClasses = (size, subtle) =>
  classNames({
    'b-collapsible': true,
    'b-collapsible--subtle': subtle,
    'b-collapsible--medium': size === 'medium',
    'b-collapsible--small': size === 'small'
  });

const contentClasses = smallContent =>
  classNames({
    'b-collapsible__content': true,
    'b-collapsible__content--small': smallContent
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
        className={collapsibleClasses(props.size, props.subtle)}
        ref={ref => (this.domNode = ref)}
      >
        <button
          className={buttonClasses(
            this.state.collapsed,
            props.size,
            props.subtle
          )}
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
        {props.subheading &&
          !props.subheadingContent && (
            <div className="b-collapsible__subheading l-mt-1">
              {props.subheading}
            </div>
          )}
        {props.subheading &&
          props.subheadingContent && (
            <div className="b-collapsible__subheading-collapsible l-mt-1">
              <Collapsible
                heading={props.subheading}
                subtle={props.subheadingContent}
                size="small"
                smallContent
              >
                <p>{props.subheadingContent}</p>
              </Collapsible>
            </div>
          )}
        {!this.state.collapsed &&
          props.alert && (
            <div className="l-mt-1">
              <Alert status="success" small>
                {props.alert}
              </Alert>
            </div>
          )}

        <div
          id="collapsible-0"
          aria-hidden={!this.state.collapsed}
          hidden={!this.state.collapsed}
          className={contentClasses(props.smallContent)}
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
  subheadingContent: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  smallContent: PropTypes.bool,
  subtle: PropTypes.bool,
  alert: PropTypes.string
};

Collapsible.defaultProps = {
  size: 'large'
};

export default Collapsible;
