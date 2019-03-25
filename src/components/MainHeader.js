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
            <InputSearch
              dark
              autoFocus={this.state.searchOpen}
              label={this.props.label}
              exampleSuggestions={this.props.exampleSuggestions}
            />
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
                <nav
                  className="b-main-header__menu-overlay"
                  aria-label="Header-navigasjon"
                >
                  <div className="b-main-header__menu-overlay-header">
                    <a
                      href="/"
                      className="b-main-header__logo b-main-header__logo--small"
                      aria-label={this.props.name}
                    />

                    <button
                      className="b-button b-button--small b-button--secondary"
                      onClick={this.toggleMobileNav}
                    >
                      Lukk
                    </button>
                  </div>
                  <div className="b-main-header__menu-overlay-links">
                    <NavList
                      list={this.props.links.map(item => ({
                        title: item.name,
                        url: item.href
                      }))}
                    />
                  </div>
                </nav>
              </div>
            )}

            <div className="l-hide-to-lg">
              <nav
                className="b-main-header__nav"
                aria-label="Header navigation"
              >
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
                    className="b-button b-button--secondary-dark b-button--small"
                  >
                    {this.state.searchButtonText}{' '}
                    {!this.state.searchOpen && (
                      <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzLjEgKDcyNjMxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5zZWFyY2g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSJzZWFyY2giIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAxLjAwMDAwMCkiIHN0cm9rZT0iIzAyNTE2OSI+CiAgICAgICAgICAgIDxnIGlkPSJJbnRlcmZhY2UtRXNzZW50aWFsX194MkZfX1NlYXJjaF9feDJGX19zZWFyY2giIHN0cm9rZS13aWR0aD0iMS4wNDM0Ij4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cF8zNzIiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJzZWFyY2giPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4zLDE2LjcgQzEyLjksMTYuNyAxNi42LDEzIDE2LjYsOC40IEMxNi42LDMuOCAxMywwIDguMywwIEMzLjcsMCAwLDMuNyAwLDguMyBDMCwxMi45IDMuNywxNi43IDguMywxNi43IFoiIGlkPSJPdmFsXzI4OCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQuMiwxNC4zIEwyNCwyNCIgaWQ9IlNoYXBlXzE4NzIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTguNSwzIEM1LjUsMyAzLDUuNSAzLDguNSIgaWQ9Ik92YWxfMjg4XzJfIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
                        className="b-icon b-icon--small"
                        role="presentation"
                      />
                    )}
                  </button>
                )}
              </nav>
            </div>

            <div className="l-hide-from-lg">
              <nav
                className="b-main-header__nav"
                aria-label="Header navigation"
              >
                <button
                  onClick={this.toggleMobileNav}
                  className="b-button b-button--secondary-dark b-button--small"
                >
                  Meny
                </button>
                <div className="l-inline-space" />
                {!this.props.hideSearch && (
                  <button
                    onClick={this.toggleSearch}
                    className="b-button b-button--secondary-dark b-button--small"
                  >
                    {this.state.searchButtonText}{' '}
                    {!this.state.searchOpen && (
                      <img
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUzLjEgKDcyNjMxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5zZWFyY2g8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSJzZWFyY2giIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAxLjAwMDAwMCkiIHN0cm9rZT0iIzAyNTE2OSI+CiAgICAgICAgICAgIDxnIGlkPSJJbnRlcmZhY2UtRXNzZW50aWFsX194MkZfX1NlYXJjaF9feDJGX19zZWFyY2giIHN0cm9rZS13aWR0aD0iMS4wNDM0Ij4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cF8zNzIiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJzZWFyY2giPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4zLDE2LjcgQzEyLjksMTYuNyAxNi42LDEzIDE2LjYsOC40IEMxNi42LDMuOCAxMywwIDguMywwIEMzLjcsMCAwLDMuNyAwLDguMyBDMCwxMi45IDMuNywxNi43IDguMywxNi43IFoiIGlkPSJPdmFsXzI4OCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQuMiwxNC4zIEwyNCwyNCIgaWQ9IlNoYXBlXzE4NzIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTguNSwzIEM1LjUsMyAzLDUuNSAzLDguNSIgaWQ9Ik92YWxfMjg4XzJfIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
                        className="b-icon b-icon--small"
                        role="presentation"
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
  links: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.string,
  exampleSuggestions: PropTypes.arrayOf(PropTypes.string)
};

MainHeader.defaultProps = {
  exampleSuggestions: []
};

export default MainHeader;
