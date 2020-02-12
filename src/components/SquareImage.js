import React from 'react';
import PropTypes from 'prop-types';

const SquareImage = ({ alt, src }) => (
  <div className="b-square-image" role="img" aria-label={alt}>
    <div
      className="b-square-image__background"
      style={{ backgroundImage: `url(${src})` }}
    />
    <div className="b-square-image__image-wrapper">
      <div
        className="b-square-image__image"
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
  </div>
);

SquareImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default SquareImage;
