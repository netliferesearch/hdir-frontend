import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumbs = props => (
  <nav className="b-breadcrumbs">
    {props.paths.map(path =>
      path.href ? (
        <a href={path.href} className="b-breadcrumbs__link">
          {path.name}
        </a>
      ) : (
        <span className="b-breadcrumbs__location">{path.name}</span>
      )
    )}
  </nav>
);

Breadcrumbs.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string
    })
  )
};

export default Breadcrumbs;
