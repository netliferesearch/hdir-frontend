import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const boxClasses = color =>
  classNames({
    'b-box': true,
    'b-box--green': color === 'green',
    'b-box--white': color === 'white'
  });

const Box = props => (
  <section className={boxClasses(props.color)}>{props.children}</section>
);

Box.propTypes = {
  color: PropTypes.oneOf('green', 'white')
};

export default Box;
