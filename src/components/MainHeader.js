import React from 'react';
import { Link } from 'react-router-dom';

const ContentLabel = props => {
  return (
    <div className="b-main-header">
      <Link to="/" className="b-main-header__logo-link">
        <img
          src="./logo.svg"
          alt="Helsedirektoratet"
          className="b-main-header__logo"
        />
      </Link>

      <nav className="b-main-header__nav" style={{ fontSize: '12px' }}>
        <Link to="/" className="b-main-header__link">
          Frontpage
        </Link>
      </nav>
    </div>
  );
};

export default ContentLabel;
