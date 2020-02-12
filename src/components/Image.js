import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const imageClasses = ratio =>
  classNames({
    'b-image': true,
    'b-image--16-9': ratio === '16:9'
  });

const Image = ({ ratio, src, alt }) => (
  <div className={imageClasses(ratio)}>
    <img src={src} alt={alt} />
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  ratio: PropTypes.oneOf(['', '16:9'])
};

export default Image;
