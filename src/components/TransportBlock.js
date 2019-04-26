import React from 'react';
import PropTypes from 'prop-types';

const Statistics = props => (
  <a className="b-transport-block" href="#a">
    <h2 className="h3">{props.title}</h2>
    {props.text && <div className="l-mt-1">{props.text}</div>}
  </a>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string
};

export default Statistics;
