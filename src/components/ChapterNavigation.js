import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const chapterNavigationClasses = status =>
  classNames({
    'b-alert': true,
    'b-alert--success': status === 'success',
    'b-alert--warning': status === 'warning',
    'b-alert--danger': status === 'danger',
    'b-alert--info': status === 'info'
  });

const boxIconClasses = status =>
  classNames({
    'b-alert__icon': true,
    'b-alert__icon--success': status === 'success'
  });

const ChapterNavigation = props => (
  <section className={chapterNavigationClasses(props.status)}>
    <div className={boxIconClasses(props.status)} />
    <div className="b-alert__content">{props.children}</div>
  </section>
);

ChapterNavigation.propTypes = {
  status: PropTypes.oneOf('firstChapter', 'lastChapter', 'middleChapter')
};

export default ChapterNavigation;
