import React from 'react';
import PropTypes from 'prop-types';

const InputSearch = props => (
  <div className="b-input-search">
    {/* htmlFor is the JSX-way of writing "for". Use "for" if converted to HTML */}
    {props.label && (
      <label
        htmlFor={props.id}
        className="b-input-search__label b-input-search__label--inverted"
      >
        {props.label}
      </label>
    )}
    <input
      id={props.id}
      type={props.type}
      className="b-input-search__field b-input-search__field--inverted"
    />
    <button className="b-input-search__button b-input-search__button--inverted">
      SØK
    </button>
  </div>
);

InputSearch.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string
};

InputSearch.defaultProps = {
  type: 'search',
  label: ''
};

export default InputSearch;
