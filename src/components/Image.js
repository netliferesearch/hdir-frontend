import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const imageClasses = ratio =>
  classNames({
    'b-image': true,
    'b-image--16-9': ratio === '16:9'
  });

const Image = props => (
  <div className={imageClasses(props.ratio)}>
    <img src={props.src} alt={props.alt} />
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  ratio: PropTypes.oneOf(['', '16:9'])
};

export default Image;
