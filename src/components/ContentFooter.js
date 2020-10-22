import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

function toggle(id) {
  var content = document.getElementById(id);
  if (content.style.display === 'none') {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
}

const ContentFooter = props => (
  <div>
    <Button
      onClick={() => toggle(props.id)}
      clean
      small
      icon="../icons/chevron.svg"
      iconRotate90
    >
      {props.heading}
    </Button>
    <div
      id={props.id}
      className="b-box-small l-mb-1"
      style={{ display: 'none' }}
    >
      <p>{props.content}</p>
      {props.id}
    </div>
  </div>
);

ContentFooter.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.array,
  id: PropTypes.string
};
export default ContentFooter;
