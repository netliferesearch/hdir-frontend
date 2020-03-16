import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const LongShortHeading = ({ short, long, url, icon, linkText }) => {
  return (
    <div className="b-long-short-heading">
      <h1>
        {short && (
          <span aria-hidden={Boolean(long).toString()}>
            {short}
          </span>
        )}
        {!props.short && <span>{props.long}</span>}
      </h1>
      <div>
        {props.short && props.long && (
          <div className="b-long-short-heading__sub">
            {icon && (
              <img
                src={icon}
                role="presentation"
                alt=""
                aria-hidden="true"
                className="b-long-short-heading__sub-icon"
              />
            )}
            <div className="b-long-short-heading__text">
              {props.long}
              {props.url && 
                <Link href={props.url} arrow>
                  {props.linkText}
                </Link>
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

LongShortHeading.propTypes = {
  long: PropTypes.string.isRequired,
  short: PropTypes.string,
  icon: PropTypes.string,
  url: PropTypes.string,
  linkText: PropTypes.string
};

export default LongShortHeading;
