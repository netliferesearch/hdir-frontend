import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const searchTrayClasses = open =>
  classNames({
    'b-search-tray': true,
    'b-search-tray--blue': true,
    'b-search-tray--open': open
  });

const SearchTray = props => (
  <div className={searchTrayClasses(props.open)} aria-hidden={!props.open}>
    <div className="b-search-tray__item">{props.children}</div>
  </div>
);

SearchTray.propTypes = {
  open: PropTypes.bool
};

export default SearchTray;
