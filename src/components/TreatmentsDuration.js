import React from 'react';
import PropTypes from 'prop-types';

import IconWithText from './IconWithText';

const TreatmentsDuration = props => (
  <div className={'b-treatments-duration'}>
    <IconWithText icon="../icons/clock.svg" text="forløpstid" />
    <p>{props.duration}</p>
  </div>
);

TreatmentsDuration.propTypes = {
  duration: PropTypes.string.isRequired
};

export default TreatmentsDuration;
