import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SectionSidebar = props => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (props.usePageHeadings) {
      setHeadings([...document.querySelectorAll('.t-body-text h2')]);
    }
  }, []);

  const list = props.usePageHeadings
    ? headings.map(x => ({
        title: x.innerText,
        url: '#'
      }))
    : props.list;

  const ListItem = ({ props }) => {
    const linkClasses = small =>
      classNames({
        'b-section-sidebar__link': true,
        'b-section-sidebar__link--small': small
      });
    return (
      <>
        <a href={props.url} className={linkClasses(props.small)}>
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
            <ListItem props={{ ...child, small: true }} />
          ))}
      </>
    );
  };

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
        {list.map(item => (
          <ListItem props={item} />
        ))}
      </nav>
    </div>
  );
};

SectionSidebar.propTypes = {
  heading: PropTypes.string,
  icon: PropTypes.string,
  usePageHeadings: PropTypes.bool,
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
