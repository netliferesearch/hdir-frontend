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

const IconWithText = ({size, icon, text}) => (
  <div className={wrapperClasses(size)}>
    <img
      src={icon}
      alt=""
      role="presentation"
      className={imageClasses(size)}
      aria-hidden
    />
    <div className="b-icon-with-text__text-wrapper">
      <span className="b-icon-with-text__text">{props.text}</span>
      <a className="b-icon-with-text__text" href={props.link}>{props.subtext}</a>
    </div>
  </div>
);

IconWithText.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  link: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'small'])
};

IconWithText.defaultProps = {
  size: 'medium',
  subtext: '',
  link: '',
};

export default IconWithText;
