import React from 'react';
import PropTypes from 'prop-types';
import NavList from './NavList';

const MainHeaderMobileNav = ({ name, showNav, links }) => {
  return (
    <div className="l-container" role="dialog">
      <nav
        className="b-main-header__menu-overlay"
        aria-label="Header-navigasjon"
        role="navigation"
        id="mobile-menu"
      >
        <div className="b-main-header__menu-overlay-header">
          <a
            href="/"
            className="b-main-header__logo b-main-header__logo--small"
          >
            {name}
          </a>

          <button
            className="b-button b-button--small b-button--secondary-dark"
            onClick={() => showNav(false)}
            aria-controls="mobile-menu"
            aria-expanded="true"
          >
            Lukk meny
          </button>
        </div>
        <div className="l-mt-1">
          <div className="b-main-header__menu-overlay-links">
            <NavList
              list={links.map(item => ({
                title: item.name,
                url: item.href
              }))}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

MainHeaderMobileNav.propTypes = {
  name: PropTypes.string.isRequired,
  showNav: PropTypes.func.isRequired,
  links: PropTypes.arrayOf(PropTypes.object)
};

export default MainHeaderMobileNav;
