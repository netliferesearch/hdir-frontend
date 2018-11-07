import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const chapterNavigationClasses = status =>
  classNames({
    'b-chapter-navigation': true,
    'b-chapter-navigation__first': chapter === 'first',
    'b-chapter-navigation__last': chapter === 'last',
    'b-chapter-navigation__middle': chapter === 'middle'
  });

const ChapterNavigation = props => (
  <section className={chapterNavigationClasses(props.status)}>
    <div className={boxIconClasses(props.status)} />
    <div className="b-alert__content">{props.children}</div>
  </section>
);

ChapterNavigation.propTypes = {
  status: PropTypes.oneOf('first', 'last', 'middle')
};

export default ChapterNavigation;
