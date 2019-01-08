import React from 'react';
import { Link } from 'react-router-dom';
import InputSearch from './InputSearch';
import SearchTray from './SearchTray';

class ContentLabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchOpen: false,
      searchButtonText: 'Søk',
      mobileNavOpen: false
    };

    this.toggleSearch = this.toggleSearch.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }

  toggleSearch() {
    this.setState({
      searchOpen: !this.state.searchOpen,
      searchButtonText: !this.state.searchOpen ? 'Lukk søk' : 'Søk'
    });
  }

  toggleMobileNav() {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen
    });
  }

  render() {
    return (
      <>
        <SearchTray open={this.state.searchOpen}>
          <p>
            Søk etter reningslinjer, anbefalinger, lover, statistikk,
            tilskudd...
          </p>
          <InputSearch id="x" dark />
        </SearchTray>
        <div className="b-main-header">
          <div className="l-container">
            <Link to="/" className="b-main-header__logo-link">
              <div className="l-hide-to-md">
                <img
                  src="./hdir_logo.svg"
                  alt="Helsedirektoratet"
                  className="b-main-header__logo"
                />
              </div>
              <div className="l-hide-from-md">
                <img
                  src="./hdir_logo_small.svg"
                  className="b-main-header__logo b-main-header__logo--small"
                  alt="Helsedirektoratet"
                />
              </div>
            </Link>

            {this.state.mobileNavOpen && (
              <nav className="b-main-header__menu-overlay">
                <div className="b-main-header__menu-overlay-header">
                  <img
                    src="./hdir_logo_small.svg"
                    className="b-main-header__logo b-main-header__logo--small"
                    alt="Helsedirektoratet"
                  />
                  <button
                    className="b-button b-button__button b-button__button--small b-button__button--secondary"
                    onClick={this.toggleMobileNav}
                  >
                    Lukk
                  </button>
                </div>
                <div>
                  <a href="#">Om Helsedirektoratet</a>
                </div>
                <div className="l-mt-2">
                  <a href="#">English</a>
                </div>
              </nav>
            )}

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
                <div className="">
                  <button onClick={this.toggleMobileNav}>Meny</button>
                  <button onClick={this.toggleSearch}>
                    {this.state.searchButtonText}
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContentLabel;
