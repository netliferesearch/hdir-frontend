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
        <Link to="/kapittel" className="b-main-header__link">
          Kapittel
        </Link>
        <Link to="/produkt" className="b-main-header__link">
          Produkt
        </Link>
        {/*<Link to="/søkeresultat" className="b-main-header__link">
          SERP
        </Link>*/}
        <Link to="/søkeresultat2" className="b-main-header__link">
          Enkel SERP
        </Link>
        <Link to="/artikkel" className="b-main-header__link">
          Artikkel
        </Link>
        <Link to="/normerende-innhold" className="b-main-header__link">
          Normerende
        </Link>
        <Link to="/høringer-forside" className="b-main-header__link">
          Høringer forside
        </Link>
        <Link to="/høringer" className="b-main-header__link">
          Høringer
        </Link>
        <Link to="/anbefaling" className="b-main-header__link">
          Anbefaling
        </Link>
        <Link to="/rundskriv" className="b-main-header__link">
          Rundskriv
        </Link>
        <Link to="/rundskriv-forside" className="b-main-header__link">
          Rundskriv forside
        </Link>
        <Link to="/rapport" className="b-main-header__link">
          Rapport
        </Link>
      </nav>
    </div>
  );
};

export default ContentLabel;
