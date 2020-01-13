import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const boxClasses = (color, square, noPadding, tinyPadding) =>
  classNames({
    'b-box': true,
    'b-box--square': square,
    'b-box--no-padding': noPadding,
    'b-box--tiny-padding': tinyPadding,
    'b-box--green': color === 'green',
    'b-box--white': color === 'white',
    'b-box--transparent': color === 'transparent',
    'b-box--blue': color === 'blue',
    'b-box--blue-dark': color === 'blueDark',
    'b-box--yellow': color === 'yellow'
  });

const Box = props => (
  <section className={boxClasses(props.color, props.square, props.noPadding, props.tinyPadding)}>
    {props.children}
  </section>
);

Box.propTypes = {
  square: PropTypes.bool,
  noPadding: PropTypes.bool,
  tinyPadding: PropTypes.bool,
  color: PropTypes.oneOf([
    '',
    'green',
    'grey',
    'white',
    'blue',
    'blueDark',
    'yellow',
    'transparent'
  ])
};

export default Box;
