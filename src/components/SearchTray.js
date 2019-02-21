import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const searchTrayClasses = open =>
  classNames({
    'b-search-tray': true,
    'b-search-tray--blue': true,
    'b-search-tray--open': open
  });

const SearchTray = props => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div className={searchTrayClasses(open)}>
      <div className="b-search-tray__item">{props.children}</div>
    </div>
  );
};

export default SearchTray;
