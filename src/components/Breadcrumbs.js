import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const Breadcrumbs = ({ paths, border }) => (
  <nav className={`b-breadcrumbs ${border ? 'b-breadcrumbs--border' : ''}`} aria-label="Brødsmulesti">
    {paths.map(path =>
      path.href ? (
        <a
          href={path.href}
          className="b-breadcrumbs__link"
          key={shortid.generate()}
        >
          {path.name}
        </a>
      ) : (
        <span className="b-breadcrumbs__location" key={shortid.generate()}>
          {path.name}
        </span>
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
  ),
  border: PropTypes.bool
};

export default Breadcrumbs;
