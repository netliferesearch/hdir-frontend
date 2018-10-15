import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const headingClasses = lineBottom =>
  classNames({
    'b-chapter-heading': true,
    'b-chapter-heading--line-bottom': lineBottom
  });

// Is H2 as wrapper an OK assumption?
// TODO: Add the Heading-component instead
const ChapterHeading = props => (
  <h2 className={headingClasses(props.lineBottom)}>
    <a href="#" className="b-chapter-heading__link">
      <span className="h4">{props.subheading}</span>
      <br />
      <span className="h2 b-chapter-heading__main-heading">
        {props.heading}
      </span>
    </a>
  </h2>
);

ChapterHeading.protoTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  lineBottom: PropTypes.bool
};

export default ChapterHeading;
