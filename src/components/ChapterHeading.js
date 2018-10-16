import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const headingClasses = (lineBottom, overflow) =>
  classNames({
    'b-chapter-heading': true,
    'b-chapter-heading--line-bottom': lineBottom,
    'b-chapter-heading--overflow': overflow
  });

// Is H2 as wrapper an OK assumption?
// TODO: Add the Heading-component instead
const ChapterHeading = props => (
  <a href="#" className={headingClasses(props.lineBottom, props.overflow)}>
    <h2>
      <span className="h4">{props.subheading}</span>
      <br />
      <span className="h2 b-chapter-heading__main-heading">
        {props.heading}
      </span>
    </h2>
  </a>
);

ChapterHeading.protoTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  lineBottom: PropTypes.bool,
  overflow: PropTypes.bool
};

export default ChapterHeading;
