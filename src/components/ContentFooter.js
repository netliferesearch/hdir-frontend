import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

const ContentFooter = props => (
  <div>
    <Button
      data-target={props.id}
      aria-expanded="false"
      iconClass="chevron"
      className="b-button b-button--small b-button--clean b-content-footer__btn"
    >
      {props.heading}
    </Button>
    <div id={props.id} className="b-content-footer__text b-box-small l-mb-1">
      <p>{props.content}</p>
    </div>
  </div>
);

ContentFooter.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.array,
  id: PropTypes.string
};
export default ContentFooter;
