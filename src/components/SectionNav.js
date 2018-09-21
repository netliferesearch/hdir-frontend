import React from 'react';
// import PropTypes from 'prop-types';

const SectionNav = props => {
  return (
    <nav className="b-section-nav">
      <div className="b-section-nav__heading">Innhold på denne siden:</div>
      <ul className="b-section-nav__items">
        <li className="b-section-nav__item b-section-nav__item--active">
          <a href="#" className="b-section-nav__link">
            Bakgrunn
          </a>
        </li>
        <li className="b-section-nav__item">
          <a href="#" className="b-section-nav__link">
            Forebyggende arbeid
          </a>
        </li>
        <li className="b-section-nav__item">
          <a href="#" className="b-section-nav__link">
            Arbeid bidrar til raskere bedring
          </a>
        </li>
        <li className="b-section-nav__item">
          <a href="#" className="b-section-nav__link">
            Politisk satsing
          </a>
        </li>
      </ul>
    </nav>
  );
};

SectionNav.propTypes = {};

export default SectionNav;
