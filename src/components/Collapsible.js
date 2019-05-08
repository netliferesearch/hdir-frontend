import React, { useState, useEffect, useRef } from 'react';
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

const collapsibleClasses = (size, subtle, noBorder) =>
  classNames({
    'b-collapsible': true,
    'b-collapsible--subtle': subtle,
    'b-collapsible--medium': size === 'medium',
    'b-collapsible--small': size === 'small',
    'b-collapsible--no-border': noBorder
  });

const contentClasses = smallContent =>
  classNames({
    'b-collapsible__content': true,
    'b-collapsible__content--small': smallContent
  });

const Collapsible = props => {
  const [collapsed, setCollapsed] = useState(false);
  const parentElement = useRef(null);

  useEffect(() => {
    if (
      window.location.hash.slice(1, window.location.hash.length) === props.id
    ) {
      setCollapsed(true);
    }
  }, [props.id]);

  useEffect(() => {
    if (collapsed) {
      zenscroll.intoView(parentElement.current, 300);
    }
  }, [collapsed]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const headingSelector = () => {
    if (props.h) {
      return props.h;
    } else {
      if (props.size === 'large') return 'h2';
      else if (props.size === 'medium') return 'h3';
      else if (props.size === 'small') return 'none';
    }
  };

  const id = props.id || 'changeThis_everyIdShouldBeUnique';

  return (
    <div
      className={collapsibleClasses(props.size, props.subtle, props.noBorder)}
      ref={parentElement}
    >
      {props.category && (
        <div className="b-collapsible__category">{props.category}</div>
      )}
      <button
        className={buttonClasses(collapsed, props.size, props.subtle)}
        aria-expanded={collapsed}
        aria-controls={id}
        onClick={toggleCollapse}
      >
        <Heading h={headingSelector()} className={headingClasses(props.size)}>
          {props.heading}
          {props.code && (
            <div className="b-collapsible__code">{props.code}</div>
          )}
        </Heading>
      </button>
      {props.subheading && !props.subheadingContent && (
        <div className="b-collapsible__subheading l-mt-1">
          {props.subheading}
        </div>
      )}
      {!props.subheading && props.subheadingContent && (
        <div className="l-mt-1"> {props.subheadingContent}</div>
      )}
      {props.subheading && props.subheadingContent && (
        <div className="b-collapsible__subheading-collapsible l-mt-1">
          <Collapsible
            heading={props.subheading}
            subtle={Boolean(props.subheadingContent)}
            size="small"
            smallContent
          >
            <p>{props.subheadingContent}</p>
          </Collapsible>
        </div>
      )}
      {!collapsed && props.alert && (
        <div className="l-mt-1">
          <Alert status="success" small>
            {props.alert}
          </Alert>
        </div>
      )}

      <div
        id={id}
        aria-hidden={!collapsed}
        hidden={!collapsed}
        className={contentClasses(props.smallContent)}
      >
        {props.children}
      </div>
    </div>
  );
};

Collapsible.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  subheadingContent: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  h: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  smallContent: PropTypes.bool,
  subtle: PropTypes.bool,
  category: PropTypes.string,
  noBorder: PropTypes.bool,
  alert: PropTypes.string,
  code: PropTypes.string,
  id: PropTypes.string
};

Collapsible.defaultProps = {
  size: 'large'
};

export default Collapsible;
