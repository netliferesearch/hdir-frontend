import React from 'react';
import PropTypes from 'prop-types';
import SquareImage from './SquareImage';

const PressRelease = ({ url, image, alt, info, title, releaseDate }) => (
  <a href={url} className="b-press-release">
    <div className="b-press-release__image-wrapper">
      <SquareImage src={image} alt={alt} />
    </div>
    <div className="b-press-release__text-wrapper">
      <div className="b-press-release__info">{info}</div>
      <div className="b-press-release__title">{title}</div>
      <div className="b-press-release__release-date">{releaseDate}</div>
    </div>
  </a>
);

PressRelease.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  releaseDate: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string
};

export default PressRelease;
