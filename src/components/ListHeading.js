import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

const ListHeading = ({ heading, selectLabel, selectOptions }) => (
  <div className="b-list-heading">
    <h4 className="b-list-heading__heading">{heading}</h4>
    {selectLabel && selectOptions && (
      <Select label={selectLabel} options={selectOptions} simple />
    )}
  </div>
);

ListHeading.propTypes = {
  heading: PropTypes.string,
  selectLabel: PropTypes.string,
  selectOptions: PropTypes.arrayOf(PropTypes.string)
};

export default ListHeading;
