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

import uuidv4 from 'uuid/v4';

import Alert from './Alert';
import Heading from './Heading';

const buttonClasses = (active, size, tag, button, primary) =>
  classNames({
    'b-collapsible__button': true,
    'b-collapsible__button--active': active,
    'b-collapsible__button--tag': tag,
    'b-collapsible__button--tiny': size === 'tiny',
    'b-collapsible__button--small': size === 'small',
    'b-collapsible__button--medium': size === 'medium',
    'b-collapsible__button--secondary-dark': size === 'primary',
    'b-button b-button--secondary': button,
    'b-button b-button--primary': primary,
  });

const headingClasses = (size, bold) =>
  classNames({
    'b-collapsible__heading': true,
    h2: size === 'large',
    h3: size === 'medium',
    normal: size === 'small' || size === 'tiny',
    // These additional 'bold' classes are here because HDIR wants to keep semantic choices whilst
    //  still having control over 'bold' styles on headings.
    //  Note that one has to explicitly specify if the 'bold' prop is false. Leaving it undefined
    //  won't set the 'h0--hormal' class to the heading
    'h0--bold': bold === true,
    'h0--normal': bold === false
  });

const collapsibleClasses = (size, tag, noBorder, background, active, metaContent) =>
  classNames({
    'b-collapsible': true,
    'b-collapsible--tag': tag,
    'b-collapsible--active': active,
    'b-collapsible--background': background,
    'b-collapsible--medium': size === 'medium',
    'b-collapsible--small': size === 'small',
    'b-collapsible--tiny': size === 'tiny',
    'b-collapsible--no-border': noBorder,
    'b-collapsible--columns': metaContent
  });

const contentClasses = (smallContent, metaContent) =>
  classNames({
    'b-collapsible__content': true,
    'b-collapsible__content--small': smallContent,
    'b-collapsible__content--meta': metaContent,

  });

const Collapsible = props => {
  const [collapsed, setCollapsed] = useState(false);
  const parentElement = useRef(null);
  const id = props.id || uuidv4();

  useEffect(() => {
    if (
      window.location.hash.slice(1, window.location.hash.length) === props.id
    ) {
      setCollapsed(true);
    }
  }, [props.id]);

  useEffect(() => {
    if (collapsed && !props.collapsed) {
      // zenscroll.intoView(parentElement.current, 300);
      const newHash = `#${id}`;


      // When collapsed, add hash to url
      window.history.replaceState(null, null, newHash);
      return;
    }
    // Clean hash
    // window.history.replaceState(null, null, window.location.pathname);
    // eslint-disable-next-line
  }, [collapsed, props.collapsed]);

  useEffect(() => {
    setCollapsed(props.collapsed);
  // eslint-disable-next-line
  }, [props.collapsed]);

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
      className={collapsibleClasses(props.size, props.tag, props.noBorder, props.background, collapsed, props.metaContent)}
      ref={parentElement}
    >
      {props.category && (
        <div className="b-collapsible__category">{props.category}</div>
      )}
      <button
        className={buttonClasses(collapsed, props.size, props.tag)}
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
      { props.tag && (
        props.tag.description ? (
          <button className="b-collapsible__tag"><span>{props.tag.title}</span></button>
          ) : (
          <div className="b-collapsible__tag b-collapsible__tag--no-action"><span>{props.tag.title}</span></div>
        )
        )}
      {props.tag && props.tag.description && (
          <div className="b-collapsible__tag-content">{props.tag.description}</div>
        )}

      { props.dateFrom || props.dateTo ?
        <div className="b-collapsible__meta-date b-collapsible__meta-date--from-to">
          {props.dateFrom && (
            <div className="b-collapsible__meta-date-from">
              Gyldig fra: {props.dateFrom}
            </div>
          )}
          {props.dateTo && (
            <div className="b-collapsible__meta-date-to">
              Gyldig til: {props.dateTo}
            </div>
          )}
        </div>
        : null}

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
          <Collapsible
            heading={props.subheading}
            tag={Boolean(props.subheadingContent)}
            size="small"
            bold={props.bold}
            smallContent
          >
            <p>{props.subheadingContent}</p>
          </Collapsible>
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

      {props.metaContent ? (
        <div className="b-collapsible__meta-content-mobile">
          {props.metaContent}
        </div>
      ) : null}

      <div
        id={id}
        aria-hidden={!collapsed}
        hidden={!collapsed}
        className={contentClasses(props.smallContent, props.metaContent)}
      >

        {props.children}

        {props.archiveLink && (
          <p>
            <a href="#!" className="b-collapsible__link">
              Se tidligere utgaver
            </a>
          </p>
        )}
      </div>

      {props.metaContent ? (
        <div className="b-collapsible__meta-content">
          {props.metaContent}
        </div>
      ) : null}

      { props.background && collapsed &&
        (
          <div className="b-collapsible__footer">

          {props.metaContent ? (
            <button
              className={buttonClasses(collapsed, false, false, false, true)}
              aria-expanded={collapsed}
              aria-controls={id}
              onClick={e => setCollapsed(!collapsed)}
            >
              Neste
            </button>
          ) : null}

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
              {props.date}<span className="hide-mobile">&nbsp; | &nbsp;</span>
                <a href="#!" className="b-page-meta__link">
                  Se tidligere versjoner
                </a>
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
  metaContent: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  date: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'tiny']),
  h: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  smallContent: PropTypes.bool,
  tag: PropTypes.object,
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
