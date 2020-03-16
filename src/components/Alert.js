import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const boxClasses = (status, small, inline) =>
  classNames({
    'b-alert': true,
    'b-alert--success': status === 'success',
    'b-alert--warning': status === 'warning',
    'b-alert--danger': status === 'danger',
    'b-alert--info': status === 'info',
    'b-alert--small': small,
    'b-alert--inline': inline
  });

const boxIconClasses = status =>
  classNames({
    'b-alert__icon': true,
    'b-alert__icon--success': status === 'success',
    'b-alert__icon--warning': status === 'warning',
    'b-alert__icon--danger': status === 'danger',
    'b-alert__icon--info': status === 'info'
  });
  
const Alert = ({ status, small, inline, hideIcon, title, children }) => (
  <section 
    className={boxClasses(status, small, inline)}
    aria-label="Fill out">
    {!hideIcon && <div className={boxIconClasses(status)} />}
    {title && <div className="b-alert__title">{title}</div>}
    <div className="b-alert__content">{children}</div>
  </section>
);

Alert.propTypes = {
  title: PropTypes.string,
  status: PropTypes.oneOf(['', 'success', 'warning', 'danger', 'info']),
  hideIcon: PropTypes.bool,
  inline: PropTypes.bool,
  small: PropTypes.bool
};

export default Alert;
