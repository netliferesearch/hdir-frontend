import React from 'react';
import PropTypes from 'prop-types';

const Heading = props => {
  if (props.h1) return <h1>props.children</h1>;
  else if (props.h2)
    return <h2 className={props.className}>{props.children}</h2>;
  else if (props.h3)
    return <h3 className={props.className}>{props.children}</h3>;
  else if (props.h4)
    return <h4 className={props.className}>{props.children}</h4>;
  else if (props.h5)
    return <h5 className={props.className}>{props.children}</h5>;
  else if (props.h6)
    return <h6 className={props.className}>{props.children}</h6>;
  else return '';
};

Heading.propTypes = {
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h5: PropTypes.bool,
  h6: PropTypes.bool,
  className: PropTypes.string
};

export default Heading;
