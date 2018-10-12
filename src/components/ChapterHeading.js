import React from 'react';
import PropTypes from 'prop-types';

// Is H2 as wrapper an OK assumption?
const ChapterHeading = props => (
  <h2 className="b-chapter-heading">
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
  subheading: PropTypes.string
};

export default ChapterHeading;
