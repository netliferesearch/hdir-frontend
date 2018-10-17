import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';

import ContentLabel from './ContentLabel';

const FeatureList = props => {
  const parentClasses = classNames({
    'b-feature-list': true,
    'b-feature-list--secondary-state': props.secondary
  });

  return (
    <section className={parentClasses}>
      <h2 className="h2 h2--light b-feature-list__heading">
        {props.icon && <div className="b-feature-list__icon" />}
        <span className="b-feature-list__heading-text">{props.heading}</span>
      </h2>
      <ul className="b-feature-list__items">
        {props.list.map(item => (
          <li className="b-feature-list__item" key={shortid.generate()}>
            <a href={item.url} className="b-feature-list__item-link">
              {item.linkText}
            </a>
            {item.contentLabel && (
              <ContentLabel>{item.contentLabel}</ContentLabel>
            )}
          </li>
        ))}
      </ul>
      <a href="#">Les alle</a>
    </section>
  );
};

FeatureList.propTypes = {
  heading: PropTypes.string,
  icon: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      linkText: PropTypes.string,
      url: PropTypes.string,
      contentLabel: PropTypes.string
    })
  ),
  secondary: PropTypes.bool
};

export default FeatureList;
