import React from 'react';
import PropTypes from 'prop-types';

const SquareImage = props => (
  <div className="b-square-image" role="img" aria-label={props.alt}>
    <div
      className="b-square-image__background"
      style={{ backgroundImage: `url(${props.src})` }}
    />
    <div className="b-square-image__image-wrapper">
      <div
        className="b-square-image__image"
        style={{ backgroundImage: `url(${props.src})` }}
      />
    </div>
  </div>
);

SquareImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default SquareImage;
