/*
  ~ ~ ~ IMPORTANT ~ ~ ~

  This component is NOT part of a React application made available to the backend!
  It should therefore have no conditional logic related to rendering - as it does now.

  That kind of logic is currently applied through vanilla javascript, here:
  https://github.com/netliferesearch/hdir-vanilla-js/blob/master/src/collapsible.js

*/

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import zenscroll from 'zenscroll';

import uuidv4 from 'uuid/v4';

import Alert from './Alert';
import Heading from './Heading';

const buttonClasses = (active, size, subtle, button) =>
  classNames({
    'b-collapsible__button': true,
    'b-collapsible__button--active': active,
    'b-collapsible__button--subtle': subtle,
    'b-collapsible__button--tiny': size === 'tiny',
    'b-collapsible__button--small': size === 'small',
    'b-collapsible__button--medium': size === 'medium',
    'b-button b-button--secondary': button,
  });

const headingClasses = (size, bold) =>
  classNames({
    'b-collapsible__heading': true,
    h2: size === 'large',
    h3: size === 'medium',
    normal: size === 'small',
    normal: size === 'tiny',
    // These additional 'bold' classes are here because HDIR wants to keep semantic choices whilst
    //  still having control over 'bold' styles on headings.
    //  Note that one has to explicitly specify if the 'bold' prop is false. Leaving it undefined
    //  won't set the 'h0--hormal' class to the heading
    'h0--bold': bold === true,
    'h0--normal': bold === false
  });

const collapsibleClasses = (size, subtle, noBorder, background, active) =>
  classNames({
    'b-collapsible': true,
    'b-collapsible--subtle': subtle,
    'b-collapsible--active': active,
    'b-collapsible--background': background,
    'b-collapsible--medium': size === 'medium',
    'b-collapsible--small': size === 'small',
    'b-collapsible--tiny': size === 'tiny',
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
  
  const id = props.id || uuidv4();
  
  const headingSelector = () => {
    if (props.h) {
      return props.h;
    } else {
      if (props.size === 'large') return 'h2';
      else if (props.size === 'medium') return 'h3';
      else if (props.size === 'small') return 'h4';
      else if (props.size === 'tiny') return 'h5';
    }
  };

  return (
    <div
      data-parent-id={id}
      className={collapsibleClasses(props.size, props.subtle, props.noBorder, props.background, collapsed)}
      ref={parentElement}
    >
      {props.category && (
        <div className="b-collapsible__category">{props.category}</div>
      )}
      <button
        className={buttonClasses(collapsed, props.size, props.subtle)}
        aria-expanded={collapsed}
        aria-controls={id}
        onClick={e => setCollapsed(!collapsed)}
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
        collapsed
          ?
          <div className="b-collapsible__subheading-collapsible l-mt-1">
            <Collapsible
              heading={props.subheading}
              subtle={Boolean(props.subheadingContent)}
              size="small"
              bold={props.bold}
              smallContent
            >
              <p>{props.subheadingContent}</p>
            </Collapsible>
          </div>
          :
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
        id={id}
        aria-hidden={!collapsed}
        hidden={!collapsed}
        className={contentClasses(props.smallContent)}
      >
        {props.children}
      </div>
      { props.background && collapsed &&
        (
          <div className="b-collapsible__footer">
            <button
              className={buttonClasses(collapsed, 'secondary', false, true)}
              aria-expanded={collapsed}
              aria-controls={id}
              onClick={e => setCollapsed(!collapsed)}
              >
              Lukk
            </button>
            { props.date ? 
              <div className="b-collapsible__meta-date">
                {props.date}
              </div>
            : null}
          </div>
        )
      }
    </div>
  );
};

Collapsible.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  subheadingContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  date: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'tiny']),
  h: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  smallContent: PropTypes.bool,
  subtle: PropTypes.bool,
  category: PropTypes.string,
  noBorder: PropTypes.bool,
  alert: PropTypes.string,
  collapsed: PropTypes.bool,
  code: PropTypes.string,
  id: PropTypes.string,
  bold: PropTypes.bool,
  background: PropTypes.bool
};

Collapsible.defaultProps = {
  size: 'large',
  collapsed: false,
  background: false
};

export default Collapsible;
