// Import dependencies
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import validateColor from 'validate-color';

// Watch for changes in 'window'
import WatchJS from 'melanke-watchjs';
const watch = WatchJS.watch;

const renderSpinner = color => (
  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50">
    <path fill={color} d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.8s"
        repeatCount="indefinite"/>
    </path>
  </svg>
);

const Loading = props => {
  const [theStatus, setTheStatus] = useState([]);
  const {
    message = '',
    color = '',
  } = props;
  const theColor = color && validateColor(color) ? color : '#025169';
  useEffect(() => {
    watch(window, "loadingStatus", () => {
      if (window.loadingStatus) {
        setTheStatus(true);
      } else {
        setTheStatus(false);
      }
    });
  }, [theStatus]);
  return (
    <>
      {theStatus &&
        <div className={`b-loading${window.loadingStatus ? ' active' : ''}`}>
          <div className="b-loading__content">
            {window.loadingStatus &&
              <>
                <div className="b-loading__spinner">
                  {renderSpinner(theColor)}
                </div>
                <div className="b-loading__message">
                  {message}
                </div>
              </>
            }
          </div>
        </div>
      }
    </>
  );
}


Loading.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string,
}

export default Loading;
