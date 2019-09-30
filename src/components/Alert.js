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
  
const Alert = props => (
  <section 
    className={boxClasses(props.status, props.small, props.inline)}
    aria-label="Fill out">
    {!props.hideIcon && <div className={boxIconClasses(props.status)} />}
    {props.title && <div className="b-alert__title">{props.title}</div>}
    <div className="b-alert__content">{props.children}</div>
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
