import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Heading from './Heading';

const headingClasses = (line, url, clean) =>
  classNames({
    'b-chapter-heading': true,
    'b-chapter-heading--link': url,
    // top is the default
    'b-chapter-heading--line-bottom': line === 'bottom',
    'b-chapter-heading--line-none': line === 'none',
    'b-chapter-heading--clean': clean
  });

const bigHeader = h =>
  classNames({
    h1: h === 'h1',
    h2: h === 'h2',
    h3: h === 'h3'
  });

const smallHeader = h =>
  classNames({
    h3: h === 'h1',
    h4: h === 'h2',
    h5: h === 'h3'
  });

// Is H2 as wrapper an OK assumption?
// TODO: Add the Heading-component instead
const ChapterHeading = ({ url, line, h, subheading, heading, clean }) => (
  <>
    {url ? (
      <a href={url} className={headingClasses(line, url, clean)}>
        <Heading h={h}>
          {subheading && (
            <span className={smallHeader(h)}>{subheading}</span>
          )}
          <div className="b-chapter-heading__main-heading">
            <span className={bigHeader(h)}>{heading}</span>
          </div>
        </Heading>
      </a>
    ) : (
      <div className={headingClasses(line, false, clean)}>
        <Heading h={h}>
          {subheading && (
            <span className={smallHeader(h)}>{subheading}</span>
          )}
          <div className="b-chapter-heading__main-heading">
            <span className={bigHeader(h)}>{heading}</span>
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
  h: PropTypes.oneOf(['h1', 'h2', 'h3']).isRequired,
  url: PropTypes.string,
  clean: PropTypes.bool,
};

ChapterHeading.defaultProps = {
  line: 'top',
  h: 'h2'
};

export default ChapterHeading;
