import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const textWrapperClasses = flex =>
  classNames({
    'b-statistics__text-wrapper': true,
    'b-statistics__text-wrapper--flex': flex
  });

const Statistics = props => (
  <div className="b-statistics">
    {props.icon && (
      <img className="b-statistics__icon" src={props.icon} alt="" />
    )}
    <div className={textWrapperClasses(props.flexText)}>
      {props.bigText && (
        <div className="b-statistics__big-text">{props.bigText}</div>
      )}
      {props.smallText && (
        <div className="b-statistics__small-text">{props.smallText}</div>
      )}
    </div>
  </div>
);

Statistics.propTypes = {
  bigText: PropTypes.string,
  smallText: PropTypes.string,
  icon: PropTypes.string,
  flexText: PropTypes.bool
};

export default Statistics;
