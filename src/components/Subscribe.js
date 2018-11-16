import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import zenscroll from 'zenscroll';
import Collapsible from './Collapsible';
import Heading from './Heading';

const buttonClasses = (active, size) =>
  classNames({
    'b-collapsible__button': true,
    'b-collapsible__button--active': active,

    'b-collapsible__button--small': size === 'small'
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
    'b-collapsible--small': size === 'small'
  });

const contentClasses = smallContent =>
  classNames({
    'b-collapsible__content': true,
    'b-collapsible__content--small': smallContent
  });

class Subscribe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);

    this.state = {
      submitted: false
    };
    this.toggleSubmit = this.toggleSubmit.bind(this);
  }

  toggleSubmit() {
    this.setState({
      submitted: !this.state.submitted
    });
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
        {props.subheading &&
          !props.subheadingContent && (
            <div className="b-collapsible__subheading l-mt-1">
              {props.subheading}
            </div>
          )}

        <div
          id="collapsible-0"
          aria-hidden={!this.state.collapsed}
          hidden={!this.state.collapsed}
          className={contentClasses(props.smallContent)}
        >
          <div hidden={!this.state.toggled}>
            <form
              action="mailto:someone@example.com"
              method="post"
              enctype="text/plain"
            >
              Fyll inn e-postadressen din for å motta varsler om endringer.<br />
              <input type="text" name="mail" />
              <br />
              <button
                className={buttonClasses(this.state.submit, props.size)}
                aria-expanded={this.state.collapsed}
                aria-controls="collapsible-0"
                onClick={this.toggleSubmit}
                small
              >
                Abonner
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Subscribe.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  subheadingContent: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  smallContent: PropTypes.bool
};

Collapsible.defaultProps = {
  size: 'small'
};

export default Subscribe;
