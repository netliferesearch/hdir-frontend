import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const FilterList = ({ list }) => {
  const [selected, setSelected] = useState(
    list.length ? list[0] : []
  );

  function select(event, item) {
    event.preventDefault();
    setSelected(item);
  }

  return (
    <div className="b-filter-list">
      <ul className="b-filter-list__list">
        {list.map(item => (
          <li className="b-filter-list__list-item" key={shortid.generate()}>
            <a
              href="#a"
              className={classNames({
                'b-filter-list__list-item-link': true,
                'b-filter-list__list-item-link--active': item === selected
              })}
              onClick={e => {
                select(e, item);
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

FilterList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FilterList;
