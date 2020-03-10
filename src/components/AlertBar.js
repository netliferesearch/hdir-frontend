import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';

const headingClasses = alertLevel =>
  classNames({
    'b-alert-bar__heading': true,
    h1: alertLevel === 'high',
    h2: alertLevel === 'medium',
    h3: alertLevel === 'low'
  });

const alertClasses = alertLevel =>
  classNames({
    'b-alert-bar': true,
    'b-alert-bar--high': alertLevel === 'high',
    'b-alert-bar--medium': alertLevel === 'medium',
    'b-alert-bar--low': alertLevel === 'low'
  });

const id = shortid.generate();

const AlertBar = ({ alertLevel, heading, children, lastUpdated }) => (
  <section role="alert" className={alertClasses(alertLevel)} aria-labelledby={id}>
    <div className="l-container">
      <h1 id={id} className={headingClasses(alertLevel)}>{heading}</h1>
      <div className="l-mt-2">{children}</div>
      {lastUpdated && (
        <div className="b-alert-bar__date">
          Sist oppdatert: {lastUpdated}
        </div>
      )}
    </div>
  </section>
);

AlertBar.propTypes = {
  alertLevel: PropTypes.oneOf(['high', 'medium', 'low']).isRequired,
  heading: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string
};

export default AlertBar;
