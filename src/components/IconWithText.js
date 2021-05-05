import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const imageClasses = size =>
  classNames({
    'b-icon-with-text__image': true,
    'b-icon-with-text__image--small': size === 'small',
  });
const wrapperClasses = size =>
  classNames({
    'b-icon-with-text': true,
    'b-icon-with-text--clean': size === 'clean'
  });

const IconWithText = ({size, icon, text, link, subtext}) => (
  <span className={wrapperClasses(size)}>
    <img
      src={icon}
      alt=""
      role="presentation"
      className={imageClasses(size)}
      aria-hidden
    />
    <span className="b-icon-with-text__text-wrapper">
      <span className="b-icon-with-text__text">{text}</span>
      <a className="b-icon-with-text__text" href={link}>{subtext}</a>
    </span>
  </span>
);

IconWithText.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  link: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'small', 'clean'])
};

IconWithText.defaultProps = {
  size: 'medium',
  subtext: '',
  link: '',
};

export default IconWithText;
