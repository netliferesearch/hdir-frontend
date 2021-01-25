import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Timeline = ({ label, items }) => {
  
  return (
    <section className="l-mb-2">
      <h2>{label}</h2>
      <div className="b-timeline">
        <ul className="b-timeline__list">
          {
            items ? items.map(item => (
              <li className="b-timeline__item">
                {item.label}
                <br />
                {item.date}
              </li>
            )) : null
          }
        </ul>
      </div>
    </section>
  )
};

Timeline.propTypes = {
  items: PropTypes.array,
  label: PropTypes.string,
};

export default Timeline;
