import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const listItemClasses = (anchor, type, columns) =>
  classNames({
    'b-nav-list__item': true,
    'b-nav-list__item--anchor': anchor,
    'b-nav-list__item--blue': type === 'nasjonale-faglige-retningslinjer',
    'b-nav-list__item--green': type === 'pakkeforløp',
    'b-nav-list__item--orange': type === 'rundskriv',
    'b-nav-list__item--yellow': type === 'veileder',
    'b-nav-list__item--column': columns
  });

const listItemsClasses = columns =>
  classNames({
    'b-nav-list__items': true,
    'b-nav-list__items--columns': columns
  });

const NavList = props => {
  const { list: list = [] } = props;

  return (
    <nav className={`b-nav-list ${props.className}`} id={props.id}>
      {props.heading && (
        <div className="b-nav-list__heading">{props.heading}</div>
      )}
      <ul className={listItemsClasses(props.columns)}>
        {list.map(item => (
          <li
            className={listItemClasses(props.anchor, item.type, props.columns)}
          >
            <a
              href={item.url}
              className={classNames({
                'b-nav-list__link': true,
                'b-nav-list__link--anchor': props.anchor
              })}
            >
              {item.description && (
                <div className="b-nav-list__item-description">
                  {item.description}
                </div>
              )}
              <div className="b-nav-list__link-title">{item.title}</div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavList.propTypes = {
  anchor: PropTypes.bool,
  heading: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  type: PropTypes.string,
  columns: PropTypes.bool,
  id: PropTypes.string
};

NavList.defaultProps = {
  anchor: false,
  type: '',
  id: ''
};

export default NavList;
