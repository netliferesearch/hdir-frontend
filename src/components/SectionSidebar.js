import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import shortid from 'shortid';
import Stickyfill from 'stickyfilljs';
import { detect } from 'detect-browser';
import createUniqueHeaders from './../utils/createUniqueHeadersUtil';

// We need to iterate the parent elements to get the real offsetTop
const getOffsetTop = element => {
  let offsetTop = 0;
  while (element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}

// Looks at the scroll position updates the active heading state based on the position
function findActiveHeading(headings, scrollPos, setActiveHeading) {
  // 20px gives us some headroom above the heading, so it always becomes active when linked to
  const headingSpace = 20;

  // Makes the nodeList to an array of htmlElements
  const htmlHeadings = [...headings];
  const scrolledPastItems = htmlHeadings.filter(
    h => getOffsetTop(h) < scrollPos() + headingSpace
  );

  setActiveHeading(scrolledPastItems.length);
}

const hasItems = arr => (arr && arr.length) ? true : false;

const activeChild = children =>
  children ? children.some(x => x.active) : false;

const linkClasses = ({small = false, active = false, children = false, parent = false} = {}) =>
  classNames({
    'b-section-sidebar__link': parent,
    'b-section-sidebar__link--small': small,
    'b-section-sidebar__link--active': active,
    'b-section-sidebar__link--children': children
  });

const subLinkClasses = ({active = false} = {}) =>
  classNames({
    'b-section-sidebar__sub-link': true,
    'b-section-sidebar__sub-link--active': active
  });

const sectionSidebarClasses = bottom =>
  classNames({
    'b-section-sidebar': true,
    'b-section-sidebar--bottom': bottom
  });

// Part of the component as it own component, we also make it use itself.
const ListItem = ({ props }) => {

  // On click, we find the corresponding heading
  // We add tabindex, so tabindex order isn't broken. Then we focus on it.
  const setFocus = () => {
    const heading = document.getElementById(props.url.replace('#','')) || '';
    heading && heading.setAttribute('tabindex', -1);
    setTimeout(function(){
      heading && heading.focus();
    }, 0);
  }
  const renderItemContent = (
    (props.prefix || props.description) && (
      <div className="b-section-sidebar__meta">
        {props.prefix && (
            <span className="b-section-sidebar__meta-prefix">{props.prefix}</span>
        )}
        {props.description && (
            props.description
        )}
      </div>
    )
  )
  const renderItemContentChildren = (
    <>
      {props.children && props.children.map(child => (
        <a
          className={subLinkClasses({active: child.active})}
          key={shortid.generate()}
          href={child.url}>
        {child.description}
        </a>
      ))}
      {props.readMoreLabel &&
        (
          <span
            className={subLinkClasses({active: false})} 
            key={shortid.generate()}>
            {props.readMoreLabel}
            </span>
          )
      }
    </>
  );
  const renderItemActive = (
      renderItemContent
  );
  const renderItemInactive = (
    <span
      className={linkClasses()}
    >
      {renderItemContent}
    </span>
  );
  return (
    <div 
      className={linkClasses({
        small: props.small,
        children: props.children,
        active: props.active,
        parent: true
      })}>
      <a
        href={props.url}
        onClick={setFocus}
      >
        {(!props.active && props.url)
          ?
          renderItemInactive
          :
          renderItemActive
        }
      </a>
        {renderItemContentChildren}
    </div>
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
      if (!hasItems(headings)) {
        setHeadings([...document.querySelectorAll('.l-article h2')]);
      }
    }
    // Gives all headings a url-safe id based on its text
    if (!hasItems(props.list) && hasItems(headings)) {
      // Util that create unique id for the h2 tags
      createUniqueHeaders(headings)
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

  // Gives all headings a url-safe id based on its text
  if (!hasItems(props.list) && hasItems(headings)) {
    // Util that create unique id for the h2 tags
    createUniqueHeaders(headings);
  }
  

  // Creates a list with links with either the headings, or the list it received
  // Bugfix for IE: Remove # symbol from text
  const list = !hasItems(props.list)
    ? headings.map(h => ({
        description: h.innerText.replace('#', ''),
        prefix: '↓',
        url: `#${h.id}`
      }))
    : props.list;

  const theList = [];
  const renderContent = () => (
    <>
      <div className={sectionSidebarClasses(bottom)} ref={sidebarRef}>
        <div
          className={classNames({
            'b-section-sidebar__heading': props.heading,
            'b-section-sidebar__heading--thick': !hasItems(props.list)
          })}
        >
          {props.icon && (
            <img
              src={props.icon}
              alt={props.iconAltText ? props.iconAltText : ''}
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
        <nav aria-describedby="section-sidebar-heading" role="navigation">
          {list.map((item, index) => {
            if (!hasItems(props.list)) {
              theList.push(
                <ListItem
                  props={{
                    ...item,
                    active: activeHeading === index + 1
                  }}
                  key={shortid.generate()}
                />
              );
            } else {
              theList.push(
                <ListItem
                  props={{
                    ...item
                  }}
                  key={shortid.generate()}
                />
              );
            }
            return null;
          })}
          {theList}
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
  iconAltText: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      prefix: PropTypes.string,
      url: PropTypes.string.isRequired,
      readMoreLabel: PropTypes.string,
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
