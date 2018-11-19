import React from 'react';
import PropTypes from 'prop-types';
import SquareImage from './SquareImage';

const PressRelease = props => (
  <a href={props.url} className="b-press-release">
    <div className="b-press-release__image-wrapper">
      <SquareImage src={props.image} alt={props.alt} />
    </div>
    <div className="b-press-release__text-wrapper">
      <div className="b-press-release__info">{props.info}</div>
      <div className="b-press-release__title">{props.title}</div>
      <div className="b-press-release__release-date">{props.releaseDate}</div>
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
