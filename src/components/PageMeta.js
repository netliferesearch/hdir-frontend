import React from 'react';
import PropTypes from 'prop-types';

const PageMeta = props => (
  <p className="b-page-meta">
    <span className="b-page-meta__text">
      Først publisert: {props.publishDate}
    </span>
    {
      props.editDate && (
        <span className="b-page-meta__text">Sist endret: {props.editDate}</span>
      )
    }

    {props.url && (
      <a href={props.url} className="b-page-meta__link">
        Se tidligere utgaver
      </a>
    )}
  </p>
);

PageMeta.propTypes = {
  publishDate: PropTypes.string,
  editDate: PropTypes.string,
  url: PropTypes.string
};

export default PageMeta;
