import React from 'react';
import classNames from 'classnames';

const searchTrayClasses = open =>
  classNames({
    'b-search-tray': true,
    'b-search-tray--blue': true,
    'b-search-tray--open': open
  });

const SearchTray = props => {
  return (
    <div className={searchTrayClasses(props.open)}>
      <div className="b-search-tray__item">{props.children}</div>
    </div>
  );
};

export default SearchTray;
