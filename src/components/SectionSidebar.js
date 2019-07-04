import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import shortid from 'shortid';
import Stickyfill from 'stickyfilljs';
import { detect } from 'detect-browser';
import createUniqueHeaders from './../utils/createUniqueHeadersUtil';

// Looks at the scroll position updates the active heading state based on the position
function findActiveHeading(headings, scrollPos, setActiveHeading) {
  // 20px gives us some headroom above the heading, so it always becomes active when linked to
  const headingSpace = 20;

  // Makes the nodeList to an array of htmlElements
  const htmlHeadings = [...headings];
  const scrolledPastItems = htmlHeadings.filter(
    h => h.offsetTop < scrollPos() + headingSpace
  );

  setActiveHeading(scrolledPastItems.length);
}

const hasItems = arr => (arr && arr.length) ? true : false;

const activeChild = children =>
  children ? children.some(x => x.active) : false;

const linkClasses = (small, active, children) =>
  classNames({
    'b-section-sidebar__link': true,
    'b-section-sidebar__link--small': small,
    'b-section-sidebar__link--active': active || activeChild(children)
  });

const sectionSidebarClasses = bottom =>
  classNames({
    'b-section-sidebar': true,
    'b-section-sidebar--bottom': bottom
  });

// Part of the component as it own component, we also make it use itself.
const ListItem = ({ props }) => {
  return (
    <>{
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      }<a
        href={!props.active && props.url ? props.url : ''}
        role={props.active ? 'presentation' : ''}
        className={linkClasses(props.small, props.active, props.children)}
      >
        {props.title && (
          <div className="b-section-sidebar__title">{props.title}</div>
        )}
        {(props.prefix || props.description) && (
          <div className="b-section-sidebar__meta">
            {props.prefix && (
              <div className="b-section-sidebar__prefix" role="presentation">
                {props.prefix}
              </div>
            )}
            {props.description && (
              <div className="b-section-sidebar__description">
                {props.description}
              </div>
            )}
          </div>
        )}
      </a>
      {props.children &&
        props.children.map(child => (
          <ListItem
            props={{ ...child, small: true }}
            key={shortid.generate()}
          />
        ))}
    </>
  );
};

const SectionSidebar = props => {
  const [headings, setHeadings] = useState([]);
  const [activeHeading, setActiveHeading] = useState(0);
  const [bottom, setBottom] = useState(false);
  const sidebarRef = useRef(null);

  const nearBottom = () => {
    const position = window.pageYOffset;
    const documentHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;
    // If we have scrolled to the bottom of (75% window height) of the page (body)
    if (position > documentHeight - windowHeight * 1.75) {
      setBottom(true);
    } else {
      setBottom(false);
    }
  };

  useEffect(() => {
    // Fetches all headings on mount, if we don't have a list
    if (!hasItems(props.list) && !hasItems(headings)) {
      setHeadings([...document.querySelectorAll('.t-body-text h2')]);
    }
    if (hasItems(headings)) {
      Stickyfill.add(sidebarRef.current);
    }
    if (!hasItems(props.list)) {
      // Returns a new function that is a debounce with our function and its arguments
      const createDebounceFunction = (func, ...args) =>
        debounce(() => {
          func(...args);
        }, 16.66);

      // pageYOffset is not a function. To keep the fundActiveHeading function pure, we let it run the this function from an argument, so we can easily test it in the future.
      // setActiveHeading updates our state once it run in findActiveHeading. A function in an event listener can't return any value.
      const findActiveHeadingDebounce = createDebounceFunction(
        findActiveHeading,
        headings,
        () => window.pageYOffset,
        setActiveHeading
      );

      const nearBottomDebounce = createDebounceFunction(nearBottom);

      window.addEventListener('scroll', findActiveHeadingDebounce);
      // Use this fallback function only for IE
      // Even with sticky polyfill IE has problems with tall sticky elements
      if (detect() && detect().name === 'ie') {
        window.addEventListener('scroll', nearBottomDebounce);
      }

      return () => {
        window.removeEventListener('scroll', findActiveHeadingDebounce);
        if (detect() && detect().name === 'ie') {
          window.removeEventListener('scroll', nearBottomDebounce);
        }
      };
    }
  }, [props.list, headings]);

  // If we don't have any headings, make a list of the present h2 headings
  if (!hasItems(props.list)) {
    createUniqueHeaders([...document.querySelectorAll('h2')]);
  }
  
  // Creates a list with links with either the headings, or the list it received
  const list = !hasItems(props.list)
    ? headings.map(h => ({
        description: h.innerText,
        prefix: '↓',
        url: `#${h.id}`
      }))
    : props.list;

  const renderContent = () => (
    <>
      <div className={sectionSidebarClasses(bottom)} ref={sidebarRef}>
        <div
          className={classNames({
            'b-section-sidebar__heading': true,
            'b-section-sidebar__heading--thick': !hasItems(props.list)
          })}
        >
          {props.icon && (
            <img
              src={props.icon}
              alt=""
              role="presentation"
              className="b-section-sidebar__icon"
              aria-hidden
            />
          )}
          {props.heading && props.headingUrl ? (
            <a href={props.headingUrl} id="section-sidebar-heading">
              {props.heading}
            </a>
          ) : (
            <span id="section-sidebar-heading">{props.heading}</span>
          )}
        </div>
        <nav aria-describedby="section-sidebar-heading">
          {list.map((item, index) => {
            if (!hasItems(props.list)) {
              return (
                <ListItem
                  props={{
                    ...item,
                    active: activeHeading === index + 1
                  }}
                  key={shortid.generate()}
                />
              );
            }
            return <ListItem props={item} key={shortid.generate()} />;
          })}
        </nav>
      </div>
    </>
  );

  return (
    <>
      {(hasItems(props.list) || hasItems(headings))
        ?
        renderContent()
        :
        null
      }
    </>
  );
};

SectionSidebar.propTypes = {
  heading: PropTypes.string,
  headingUrl: PropTypes.string,
  icon: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      prefix: PropTypes.string,
      url: PropTypes.string.isRequired,
      active: PropTypes.bool,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
          prefix: PropTypes.string,
          url: PropTypes.string.isRequired,
          active: PropTypes.bool
        })
      )
    })
  )
};

export default SectionSidebar;
