import React from 'react';
import PropTypes from 'prop-types';

const InputText = props => (
  <div className="b-input-text b-input-text">
    {/* htmlFor is the JSX-way of writing "for". Use "for" if implementing in HTML */}
    <label htmlFor={props.id} className="b-input-text__label">
      {props.label}
    </label>
    <input
      id={props.id}
      type={props.type}
      className="b-input-text__field b-input b-input-text__field--big"
    />
    <button className="b-input-text__button b-input-text__button--big">
      Søk
    </button>
  </div>
);

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  search: PropTypes.bool
};

InputText.defaultProps = {
  type: 'text',
  label: '',
  search: false
};

export default InputText;
