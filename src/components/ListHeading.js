import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

const ListHeading = props => (
  <div className="b-list-heading">
    <strong className="b-list-heading__heading">{props.heading}</strong>
    {props.selectLabel && props.selectOptions && (
      <Select label={props.selectLabel} options={props.selectOptions} simple />
    )}
  </div>
);

ListHeading.propTypes = {
  heading: PropTypes.string,
  selectLabel: PropTypes.string,
  selectOptions: PropTypes.arrayOf(PropTypes.string)
};

export default ListHeading;
