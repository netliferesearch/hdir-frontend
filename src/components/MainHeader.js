import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputSearch from './InputSearch';
import SearchTray from './SearchTray';
import NavList from './NavList';
import shortid from 'shortid';
import searchIcon from '../static/base64/search';

const MainHeader = props => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleClose = e => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    if (searchOpen) {
      document.addEventListener('keydown', handleClose);
    } else {
      document.removeEventListener('keydown', handleClose);
    }
    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  }, [searchOpen]);

  function toggleSearch() {
    setSearchOpen(!searchOpen);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }

  return (
    <>
      {searchOpen && (
        <SearchTray
          open={searchOpen}
          id="searchTray"
          role="region"
          aria-live="polite"
        >
          <div className="l-container">
            <InputSearch
              dark
              autoFocus={searchOpen}
              label={props.label}
              exampleSuggestions={props.exampleSuggestions}
            />
          </div>
        </SearchTray>
      )}
      <div className="l-container">
        <div className="b-main-header">
          <a href="/" className="b-main-header__logo-link">
            <div className="l-hide-to-md">
              <div className="b-main-header__logo" aria-label={props.name}>
                {props.name}
              </div>
            </div>
            <div className="l-hide-from-md">
              <div
                className="b-main-header__logo b-main-header__logo--small"
                aria-label={props.name}
              >
                {props.name}
              </div>
            </div>
          </a>

          {mobileNavOpen && (
            <div className="l-container">
              <nav
                className="b-main-header__menu-overlay"
                aria-label="Header-navigasjon"
              >
                <div className="b-main-header__menu-overlay-header">
                  <a
                    href="/"
                    className="b-main-header__logo b-main-header__logo--small"
                    aria-label={props.name}
                  />

                  <button
                    className="b-button b-button--small b-button--secondary"
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  >
                    Lukk søk
                  </button>
                </div>
                <div className="b-main-header__menu-overlay-links">
                  <NavList
                    list={props.links.map(item => ({
                      title: item.name,
                      url: item.href
                    }))}
                  />
                </div>
              </nav>
            </div>
          )}

          <div className="l-hide-to-lg">
            <nav className="b-main-header__nav" aria-label="Header navigation">
              {props.links.map(link => (
                <a
                  href={link.href}
                  className="b-main-header__link"
                  key={shortid.generate()}
                >
                  {link.name}
                </a>
              ))}
              {!props.hideSearch && !searchOpen && (
                <button
                  onClick={toggleSearch}
                  className="b-button b-button--secondary-dark b-button--small"
                  aria-controls="searchTray"
                >
                  Søk{' '}
                  <img
                    src={searchIcon}
                    alt=""
                    className="b-icon b-icon--small"
                    role="presentation"
                  />
                </button>
              )}
              {!props.hideSearch && searchOpen && (
                <button
                  onClick={toggleSearch}
                  className="b-button b-button--secondary-dark b-button--small"
                >
                  Lukk søk
                </button>
              )}
            </nav>
          </div>

          <div className="l-hide-from-lg">
            <nav className="b-main-header__nav" aria-label="Header navigation">
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="b-button b-button--secondary-dark b-button--small"
              >
                Meny
              </button>
              <div className="l-inline-space" />
              {!props.hideSearch && !searchOpen && (
                <button
                  onClick={toggleSearch}
                  className="b-button b-button--secondary-dark b-button--small"
                >
                  Søk{' '}
                  <img
                    src={searchIcon}
                    alt=""
                    className="b-icon b-icon--small"
                    role="presentation"
                  />
                </button>
              )}
              {!props.hideSearch && searchOpen && (
                <button
                  onClick={toggleSearch}
                  className="b-button b-button--secondary-dark b-button--small"
                >
                  Lukk søk
                </button>
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

MainHeader.propTypes = {
  hideSearch: PropTypes.bool,
  name: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  exampleSuggestions: PropTypes.arrayOf(PropTypes.string)
};

MainHeader.defaultProps = {
  exampleSuggestions: []
};

export default MainHeader;
