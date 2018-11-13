import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const boxClasses = (status, small) =>
  classNames({
    'b-alert': true,
    'b-alert--success': status === 'success',
    'b-alert--warning': status === 'warning',
    'b-alert--danger': status === 'danger',
    'b-alert--info': status === 'info',
    'b-alert--small': small
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
  <section className={boxClasses(props.status, props.small)}>
    <div className={boxIconClasses(props.status)} />
    <div className="b-alert__content">{props.children}</div>
  </section>
);

Alert.propTypes = {
  status: PropTypes.oneOf('none', 'success', 'warning', 'danger', 'info'),
  small: PropTypes.bool
};

export default Alert;