import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from './Heading';

const headingClasses = (line, url) =>
  classNames({
    'b-chapter-heading': true,
    'b-chapter-heading--link': url,
    // top is the default
    'b-chapter-heading--line-bottom': line === 'bottom',
    'b-chapter-heading--line-none': line === 'none'
  });

const bigHeader = h =>
  classNames({
    h1: h === 'h1',
    h2: h === 'h2'
  });

const smallHeader = h =>
  classNames({
    h3: h === 'h1',
    h4: h === 'h2'
  });

// Is H2 as wrapper an OK assumption?
// TODO: Add the Heading-component instead
const ChapterHeading = props => (
  <>
    {props.url ? (
      <a href={props.url} className={headingClasses(props.line, props.url)}>
        <Heading h={props.h}>
          {props.subheading && (
            <span className={smallHeader(props.h)}>{props.subheading}</span>
          )}
          <div className="b-chapter-heading__main-heading">
            <span className={bigHeader(props.h)}>{props.heading}</span>
          </div>
        </Heading>
      </a>
    ) : (
      <div className={headingClasses(props.line)}>
        <Heading h={props.h}>
          {props.subheading && (
            <span className={smallHeader(props.h)}>{props.subheading}</span>
          )}
          <div className="b-chapter-heading__main-heading">
            <span className={bigHeader(props.h)}>{props.heading}</span>
          </div>
        </Heading>
      </div>
    )}
  </>
);

ChapterHeading.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  line: PropTypes.oneOf(['top', 'bottom', 'none']).isRequired,
  h: PropTypes.oneOf(['h1', 'h2']).isRequired,
  url: PropTypes.string
};

ChapterHeading.defaultProps = {
  line: 'top',
  h: 'h2'
};

export default ChapterHeading;
