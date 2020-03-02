import React from 'react';

const SearchTray = ({ children }) => {
  return (
    <div className="b-search-tray b-search-tray--blue">
      <div className="b-search-tray__item">{children}</div>
    </div>
  );
};

export default SearchTray;
