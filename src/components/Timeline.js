import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const timelineClasses = (items) =>
  classNames({
    'b-timeline': true,
    'b-timeline--four': items === 4,
    'b-timeline--five': items === 5,
    'b-timeline--six': items === 6,
  });


const Timeline = ({ label, items }) => {

  return (
    <section className="l-mb-2">
      <h2>{label}</h2>
      <div className={timelineClasses(items.length)}>
        <ul className="b-timeline__list">
          { items ? items.map(item => (
              <li className="b-timeline__item">
                <span className="b-timeline__label">
                  {item.label}
                  <br />
                  {item.date}
                </span>
              </li>
            )) : null }
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
