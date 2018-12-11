import React from 'react';
import { Link } from 'react-router-dom';

const ContentLabel = props => {
  return (
    <div className="b-main-header">
      <Link to="/" className="b-main-header__logo-link">
        <div className="l-hide-to-md">
          <img
            src="./logo.svg"
            alt="Helsedirektoratet"
            className="b-main-header__logo"
          />
        </div>
        <div className="l-hide-from-md">
          <img
            src="http://placehold.it/50x50"
            className="b-main-header__logo"
            alt="Helsedirektoratet"
          />
        </div>
      </Link>

      <div className="l-hide-to-lg">
        <nav className="b-main-header__nav">
          <Link to="/" className="b-main-header__link">
            Avtale
          </Link>
          <Link to="/" className="b-main-header__link">
            Refusjon
          </Link>
          <Link to="/" className="b-main-header__link">
            Takst
          </Link>
          <Link to="/" className="b-main-header__link">
            Pasienten
          </Link>
          <Link to="/" className="b-main-header__link">
            Om Helfo
          </Link>
          <Link to="/" className="b-main-header__link">
            English
          </Link>
          <button className="b-main-header__button">
            Søk
            <img src="http://placehold.it/50x50" alt="" />
          </button>
        </nav>
      </div>
      <div className="l-hide-from-lg">
        <nav className="b-main-header__nav">
          <div className="">H S</div>
        </nav>
      </div>
    </div>
  );
};

export default ContentLabel;
