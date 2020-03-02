import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const textWrapperClasses = flex =>
  classNames({
    'b-statistics__text-wrapper': true,
    'b-statistics__text-wrapper--flex': flex
  });

const Statistics = ({ icon, flexText, bigText, smallText }) => (
  <div className="b-statistics">
    {icon && (
      <img
        className="b-statistics__icon"
        src={icon}
        alt=""
        role="presentation"
      />
    )}
    <div className={textWrapperClasses(flexText)}>
      {bigText && (
        <div className="b-statistics__big-text">{bigText}</div>
      )}
      {smallText && (
        <div className="b-statistics__small-text">{smallText}</div>
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
