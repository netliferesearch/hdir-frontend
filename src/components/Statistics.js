import React from 'react';
import PropTypes from 'prop-types';

const Statistics = props => (
  <div className="b-statistics">
    <img className="b-statistics__icon" src={props.icon} alt="" />
    <div>
      <div className="b-statistics__big-text">{props.bigText}</div>
      <div className="b-statistics__small-text">{props.smallText}</div>
    </div>
  </div>
);

Statistics.propTypes = {
  bigText: PropTypes.string,
  smallText: PropTypes.string,
  icon: PropTypes.string
};

export default Statistics;
