import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import shortid from 'shortid';

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

// Makes a URL-safe string
const urlKebabCase = string =>
  encodeURI(string.replace(/\s+/g, '-').toLowerCase());

// Part of the component as it own component, we also make it use itself.
const ListItem = ({ props }) => {
  const linkClasses = (small, active) =>
    classNames({
      'b-section-sidebar__link': true,
      'b-section-sidebar__link--small': small,
      'b-section-sidebar__link--active': active
    });
  return (
    <>
      <a href={props.url} className={linkClasses(props.small, props.active)}>
        {props.title && (
          <div className="b-section-sidebar__title">{props.title}</div>
        )}
        {(props.prefix || props.description) && (
          <div className="b-section-sidebar__meta">
            {props.prefix && (
              <div className="b-section-sidebar__prefix">{props.prefix}</div>
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

  // Fetches all headings on mount, if we don't have a list
  useEffect(() => {
    if (!props.list) {
      setHeadings([...document.querySelectorAll('.t-body-text h2')]);
    }
  }, []);

  useEffect(() => {
    if (!props.list) {
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

      window.addEventListener('scroll', findActiveHeadingDebounce);

      return () => {
        window.removeEventListener('scroll', findActiveHeadingDebounce);
      };
    }
  });

  // Gives all headings a url-safe id based on its text
  if (!props.list) {
    headings.forEach(item => {
      item.setAttribute('id', urlKebabCase(item.innerText));
    });
  }

  // Creates a list with links with either the headings, or the list it received
  const list = !props.list
    ? headings.map(h => ({
        title: h.innerText,
        url: `#${urlKebabCase(h.innerText)}`
      }))
    : props.list;

  return (
    <div className="b-section-sidebar">
      <div className="b-section-sidebar__heading">
        {props.icon && (
          <img
            src={props.icon}
            className="b-section-sidebar__icon"
            aria-hidden
          />
        )}
        {props.heading && <span>{props.heading}</span>}
      </div>
      <nav>
        {list.map((item, index) => {
          if (!props.list) {
            return (
              <ListItem
                props={{ ...item, active: activeHeading === index + 1 }}
                key={shortid.generate()}
              />
            );
          }
          return <ListItem props={item} key={shortid.generate()} />;
        })}
      </nav>
    </div>
  );
};

SectionSidebar.propTypes = {
  heading: PropTypes.string,
  icon: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      prefix: PropTypes.string,
      url: PropTypes.string.isRequired,
      active: PropTypes.bool,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string,
          prefix: PropTypes.string,
          url: PropTypes.string,
          active: PropTypes.bool
        })
      )
    })
  )
};

export default SectionSidebar;
