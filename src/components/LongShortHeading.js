import React from 'react';
import PropTypes from 'prop-types';
import LinkWithIcon from './LinkWithIcon';

const ContentLabel = props => {
  return (
    <div className="b-long-short-heading">
      <h1>
        {props.short && (
          <span aria-hidden={Boolean(props.long).toString()}>
            {props.short}
          </span>
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
      <div className="b-long-short-heading__link">
        <LinkWithIcon href={props.url} arrow>
          {props.linkText}
        </LinkWithIcon>
      </div>
    </div>
  );
};

ContentLabel.propTypes = {
  long: PropTypes.string.isRequired,
  short: PropTypes.string,
  icon: PropTypes.string,
  url: PropTypes.string,
  linkText: PropTypes.string
};

export default ContentLabel;
