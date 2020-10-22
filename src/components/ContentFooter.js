import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

const ContentFooter = props => (
  <div className="">
    <Button clean small icon="../icons/chevron.svg" iconRotate90>
      {props.heading}
    </Button>
    <div className="b-box-small l-mb-1">
      <p>{props.content}</p>
    </div>
  </div>
);

ContentFooter.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string
};
export default ContentFooter;
