import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import zenscroll from 'zenscroll';
import Collapsible from './Collapsible';
import Heading from './Heading';
import Quote from './Quote';
import Button from './Button';

const buttonClasses = (active, size) =>
  classNames({
    'b-collapsible__button': true,
    'b-collapsible__button--active': active,

    'b-collapsible__button--small': size === 'small'
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
      submitted: this.state.submitted
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
        className="b-collapsible__content b-collapsible__content--small "
        ref={ref => (this.domNode = ref)}
      >
        <button
          className={buttonClasses(this.state.collapsed, props.size)}
          aria-expanded={this.state.collapsed}
          aria-controls="collapsible-0"
          onClick={this.toggleCollapse}
        >
          <p>{props.subheading}</p>
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
          className="l-mt-1"
        >
          <div hidden={this.state.toggled}>
            <form enctype="text/plain">
              Fyll inn e-postadressen din for å motta varsler om endringer.<br />
              <input
                className="b-subscribe__field l-mb-2 l-mt-1"
                type="text"
                name="mail"
              />
              <br />
              <p>
                Du får straks en e-post som bekrefter ditt abonnement. Der
                finner du også mulighet til å melde deg selv av
              </p>
              <Button
                className={buttonClasses(this.state.submit, props.size)}
                aria-expanded={this.state.collapsed}
                aria-controls="collapsible-0"
                onClick={this.toggleSubmit}
              >
                Abonner
              </Button>
            </form>
          </div>
          <div className="b-subscribe__quote">
            <Quote>
              <p>
                Abonnementet ditt er registrert. Du får straks e-post fra oss.
                <br />
              </p>
            </Quote>
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
  size: PropTypes.oneOf(['small']),
  smallContent: PropTypes.bool
};

Collapsible.defaultProps = {
  size: 'small'
};

export default Subscribe;
