import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ className, children, h }) => {
  if (h === 'h1')
    return <h1 className={className}>{children}</h1>;
  else if (h === 'h2')
    return <h2 className={className}>{children}</h2>;
  else if (h === 'h3')
    return <h3 className={className}>{children}</h3>;
  else if (h === 'h4')
    return <h4 className={className}>{children}</h4>;
  else if (h === 'h5')
    return <h5 className={className}>{children}</h5>;
  else if (h === 'h6')
    return <h6 className={className}>{children}</h6>;
  else if (h === 'h0')
    return <div className={className}>{children}</div>;
  else return '';
};

Heading.propTypes = {
  h: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h0']).isRequired,
  className: PropTypes.string
};

export default Heading;
