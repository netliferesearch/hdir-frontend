import React from 'react';
import PropTypes from 'prop-types';

/*
** Timeline: A script in the vanilla-js repo checks for number of items, and adds a
** class corresponding to that number. The CSS then places the items accordingly.
** Yes it uses flexbox, but it also needs some custom placement to make sure all the
** dots in the timeline are placed with equal spacing.
*/

/*
** Timeline: A script in the vanilla-js repo checks for number of items, and adds a 
** class corresponding to that number. The CSS then places the items accordingly.
** Yes it uses flexbox, but it also needs some custom placement to make sure all the 
** dots in the timeline are placed with equal spacing.  
*/

/*
** Timeline: A script in the vanilla-js repo checks for number of items, and adds a 
** class corresponding to that number. The CSS then places the items accordingly.
** Yes it uses flexbox, but it also needs some custom placement to make sure all the 
** dots in the timeline are placed with equal spacing.  
*/

const Timeline = ({ label, items }) => {
  return (
    <section className="l-mb-2">
      <h2>{label}</h2>
      <div className="b-timeline">
        <ul className="b-timeline__list">
          { items ? items.map((item,i) => (
              <li className="b-timeline__item" key={`${item.date}_${i}`}>
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
