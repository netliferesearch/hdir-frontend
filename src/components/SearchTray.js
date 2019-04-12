import React from 'react';

const SearchTray = props => {
  return (
    <div className="b-search-tray b-search-tray--blue">
      <div className="b-search-tray__item">{props.children}</div>
    </div>
  );
};

export default SearchTray;
