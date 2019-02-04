import React from 'react';
import PropTypes from 'prop-types';
import InputSearch from './InputSearch';
import SearchTray from './SearchTray';
import NavList from './NavList';
import shortid from 'shortid';

class MainHeader extends React.Component {
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
          <div className="l-container">
            <p className="t--white">
              Søk etter reningslinjer, anbefalinger, lover, statistikk,
              tilskudd...
            </p>
            <InputSearch dark />
          </div>
        </SearchTray>
        <div className="l-container">
          <div className="b-main-header">
            <a href="/" className="b-main-header__logo-link">
              <div className="l-hide-to-md">
                <div
                  className="b-main-header__logo"
                  aria-label={this.props.name}
                >
                  {this.props.name}
                </div>
              </div>
              <div className="l-hide-from-md">
                <div
                  className="b-main-header__logo b-main-header__logo--small"
                  aria-label={this.props.name}
                >
                  {this.props.name}
                </div>
              </div>
            </a>

            {this.state.mobileNavOpen && (
              <div className="l-container">
                <nav className="b-main-header__menu-overlay">
                  <div className="b-main-header__menu-overlay-header">
                    <div
                      className="b-main-header__logo b-main-header__logo--small"
                      aria-label={this.props.name}
                    />
                    <button
                      className="b-button b-button__button b-button__button--small b-button__button--secondary"
                      onClick={this.toggleMobileNav}
                    >
                      Lukk
                    </button>
                  </div>
                  <div className="b-main-header__menu-overlay-links">
                    <NavList
                      list={[
                        { title: 'Om Helsedirektoratet', url: '#' },
                        { title: 'English', url: '#' }
                      ]}
                    />
                  </div>
                </nav>
              </div>
            )}

            <div className="l-hide-to-lg">
              <nav className="b-main-header__nav">
                {this.props.links.map(link => (
                  <a
                    href={link.href}
                    className="b-main-header__link"
                    key={shortid.generate()}
                  >
                    {link.name}
                  </a>
                ))}
                {!this.props.hideSearch && (
                  <button
                    onClick={this.toggleSearch}
                    className="b-button b-button__button b-button__button--secondary-dark b-button__button--small"
                  >
                    {this.state.searchButtonText}{' '}
                    {!this.state.searchOpen && (
                      <img
                        src="./icons/search.svg"
                        alt=""
                        className="b-icon b-icon--small"
                      />
                    )}
                  </button>
                )}
              </nav>
            </div>

            <div className="l-hide-from-lg">
              <nav className="b-main-header__nav">
                <button
                  onClick={this.toggleMobileNav}
                  className="b-button b-button__button b-button__button--secondary-dark b-button__button--small"
                >
                  Meny
                </button>
                <div className="l-inline-space" />
                {!this.props.hideSearch && (
                  <button
                    onClick={this.toggleSearch}
                    className="b-button b-button__button b-button__button--secondary-dark b-button__button--small"
                  >
                    {this.state.searchButtonText}{' '}
                    {!this.state.searchOpen && (
                      <img
                        src="./icons/search.svg"
                        alt=""
                        className="b-icon b-icon--small"
                      />
                    )}
                  </button>
                )}
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

MainHeader.propTypes = {
  hideSearch: PropTypes.bool,
  name: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object)
};

export default MainHeader;
