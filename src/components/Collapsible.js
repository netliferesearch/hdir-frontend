import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import zenscroll from 'zenscroll';

import uuidv4 from 'uuid/v4';

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

const headingClasses = (size, bold) =>
  classNames({
    'b-collapsible__heading': true,
    h3: size === 'large',
    h4: size === 'medium',
    normal: size === 'small',
    'h0--bold': bold // a hack :( one special case they want the header to be bold
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
    if (collapsed && !props.collapsed) {
      zenscroll.intoView(parentElement.current, 300);
    }
  }, [collapsed, props.collapsed]);

  useEffect(() => {
    setCollapsed(props.collapsed);
  }, [props.collapsed]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const headingSelector = () => {
    if (props.h) {
      return props.h;
    } else {
      if (props.size === 'large') return 'h2';
      else if (props.size === 'medium') return 'h3';
      else if (props.size === 'small') return 'h0';
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
        <Heading h={headingSelector()} className={headingClasses(props.size, props.bold)}>
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
        collapsed ? (
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
        ) :
        <p className="b-collapsible__meta-heading">{props.subheading}</p>
      )}
      {!collapsed && props.alert && (
        <div className="l-mt-1">
          <Alert status="success" small>
            {props.alert}
          </Alert>
        </div>
      )}

      <div
        id={uuidv4()}
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
  subheadingContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  h: PropTypes.oneOf(['h0', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  smallContent: PropTypes.bool,
  subtle: PropTypes.bool,
  category: PropTypes.string,
  noBorder: PropTypes.bool,
  alert: PropTypes.string,
  collapsed: PropTypes.bool,
  code: PropTypes.string,
  id: PropTypes.string,
  bold: PropTypes.bool
};

Collapsible.defaultProps = {
  size: 'large',
  collapsed: false
};

export default Collapsible;
