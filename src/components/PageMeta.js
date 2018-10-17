import React from 'react';
import PropTypes from 'prop-types';

const PageMeta = props => (
  <p className="b-page-meta">
    <span className="b-page-meta__text">
      Først publisert: {props.publishDate}
    </span>
    <span className="b-page-meta__text">Sist endret: {props.editDate}</span>
    <a href="#" className="b-page-meta__link l-mt-1">
      Se tidligere utgaver
    </a>
  </p>
);

PageMeta.propTypes = {
  publishDate: PropTypes.string,
  editDate: PropTypes.string
};

export default PageMeta;
