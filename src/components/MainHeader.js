import React from 'react';
import { Link } from 'react-router-dom';

const ContentLabel = props => {
  return (
    <div className="b-main-header">
      <img
        src="./logo.svg"
        alt="Helsedirektoratet"
        className="b-main-header__logo"
      />

      <nav className="b-main-header__nav">
        <Link to="/" className="b-main-header__link">
          Menypunkt
        </Link>
        <Link to="/søkeresultat" className="b-main-header__link">
          Menypunkt
        </Link>
        <Link to="/artikkel" className="b-main-header__link">
          Menypunkt
        </Link>
      </nav>
    </div>
  );
};

export default ContentLabel;
