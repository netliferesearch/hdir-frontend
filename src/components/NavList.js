import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavList = props => {
  return (
    <nav className="b-nav-list">
      <div className="b-nav-list__heading">Innhold på denne siden:</div>
      <ul className="b-nav-list__items">
        <li
          className={classNames({
            'b-nav-list__item': true,
            'b-nav-list__item--anchor': !props.anchor
          })}
        >
          <a
            href="#"
            className={classNames({
              'b-nav-list__link': true,
              'b-nav-list__link--anchor': props.anchor
            })}
          >
            Bakgrunn
          </a>
        </li>
        <li
          className={classNames({
            'b-nav-list__item': true,
            'b-nav-list__item--anchor': !props.anchor
          })}
        >
          <a
            href="#"
            className={classNames({
              'b-nav-list__link': true,
              'b-nav-list__link--anchor': props.anchor
            })}
          >
            Forebyggende arbeid
          </a>
        </li>
        <li
          className={classNames({
            'b-nav-list__item': true,
            'b-nav-list__item--anchor': !props.anchor
          })}
        >
          <a
            href="#"
            className={classNames({
              'b-nav-list__link': true,
              'b-nav-list__link--anchor': props.anchor
            })}
          >
            Arbeid bidrar til raskere bedring
          </a>
        </li>
        <li
          className={classNames({
            'b-nav-list__item': true,
            'b-nav-list__item--anchor': !props.anchor
          })}
        >
          <a
            href="#"
            className={classNames({
              'b-nav-list__link': true,
              'b-nav-list__link--anchor': props.anchor
            })}
          >
            Politisk satsing
          </a>
        </li>
      </ul>
      <a href="#" className="b-nav-list__more-link">
        <strong>Les mer</strong>
      </a>
    </nav>
  );
};

NavList.propTypes = {
  anchor: PropTypes.bool
};

export default NavList;
