import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InputSearch from './InputSearch';
import SearchTray from './SearchTray';
import NavList from './NavList';

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
          <p className="t--white">
            Søk etter reningslinjer, anbefalinger, lover, statistikk,
            tilskudd...
          </p>
          <InputSearch dark />
        </SearchTray>
        <div className="l-container">
          <div className="b-main-header">
            <Link to="/" className="b-main-header__logo-link">
              <div className="l-hide-to-md">
                <div
                  className="b-main-header__logo"
                  ariaLabel={this.props.name}
                >
                  {this.props.name}
                </div>
              </div>
              <div className="l-hide-from-md">
                <div
                  className="b-main-header__logo b-main-header__logo--small"
                  ariaLabel={this.props.name}
                >
                  {this.props.name}
                </div>
              </div>
            </Link>

            {this.state.mobileNavOpen && (
              <div className="l-container">
                <nav className="b-main-header__menu-overlay">
                  <div className="b-main-header__menu-overlay-header">
                    <div
                      className="b-main-header__logo b-main-header__logo--small"
                      ariaLabel={this.props.name}
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
                  <a href={link.href} className="b-main-header__link">
                    {link.name}
                  </a>
                ))}
                {!this.props.hideSearch && (
                  <button
                    onClick={this.toggleSearch}
                    className="b-button b-button__button b-button__button--small"
                  >
                    {this.state.searchButtonText}
                  </button>
                )}
              </nav>
            </div>

            <div className="l-hide-from-lg">
              <nav className="b-main-header__nav">
                <button
                  onClick={this.toggleMobileNav}
                  className="b-button b-button__button b-button__button--secondary b-button__button--small"
                >
                  Meny
                </button>
                <button
                  onClick={this.toggleSearch}
                  className="b-button b-button__button b-button__button--small"
                >
                  {this.state.searchButtonText}
                </button>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

MainHeader.propTypes = {
  hideSearch: PropTypes.bool
};

export default MainHeader;
