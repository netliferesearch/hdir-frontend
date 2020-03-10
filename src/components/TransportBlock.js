import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ title, text }) => (
  <a className="b-transport-block" href="#a">
    <h2 className="h3">{title}</h2>
    {text && <div className="l-mt-1">{text}</div>}
  </a>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string
};

export default Statistics;
