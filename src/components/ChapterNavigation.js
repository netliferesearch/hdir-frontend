import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const chapterNavigationClasses = chapter =>
  classNames({
    'b-chapter-navigation': true,
    'b-chapter-navigation__first': chapter === 'first',
    'b-chapter-navigation__last': chapter === 'last',
    'b-chapter-navigation__middle': chapter === 'middle'
  });

const ChapterNavigation = props => (
  <section className={chapterNavigationClasses(props.status)}>
    <div> Venstre boks, noe header og test</div>
    {props.chapter === 'first' ||
      (props.chapter === 'middle' && <div>next</div>)}
    {props.chapter === 'last' ||
      (props.chapter === 'middle' && <div>prev</div>)}
    <div className="b-chapter-navigation__first">{props.nextHeading}</div>
  </section>
);

ChapterNavigation.propTypes = {
  chapter: PropTypes.oneOf('first', 'last', 'middle'),
  nextHeading: PropTypes.string,
  nextText: PropTypes.string,
  nextUrl: PropTypes.string,
  prevHeading: PropTypes.string,
  prevText: PropTypes.spring,
  prevUrl: PropTypes.string
};

export default ChapterNavigation;
