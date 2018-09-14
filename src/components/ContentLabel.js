import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ContentLabel = props => {
  const classes = classNames({
    'b-content-label': true,
    'b-content-label--highlighted': props.highlight
  });

  return <div className={classes}>{props.children}</div>;
};

ContentLabel.propTypes = {
  highlight: PropTypes.bool
};

export default ContentLabel;
