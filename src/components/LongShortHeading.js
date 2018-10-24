import React from 'react';
import PropTypes from 'prop-types';

const ContentLabel = props => {
  return (
    <h1 className="b-long-short-heading">
      {props.short && (
        <span aria-hidden={Boolean(props.long).toString()}>{props.short}</span>
      )}
      {props.short &&
        props.long && (
          <div className="b-long-short-heading__sub">
            {props.icon && (
              <img
                src={props.icon}
                alt="icon"
                aria-hidden="true"
                className="b-long-short-heading__sub-icon"
              />
            )}
            {props.long}
          </div>
        )}
      {!props.short && <span>{props.long}</span>}
    </h1>
  );
};

ContentLabel.propTypes = {
  long: PropTypes.string.isRequired,
  short: PropTypes.string,
  icon: PropTypes.string
};

export default ContentLabel;
