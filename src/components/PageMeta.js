import React from 'react';
import PropTypes from 'prop-types';

const PageMeta = ({ publishDate, editDate, url }) => (
  <p className="b-page-meta">
    {publishDate && (
      <span className="b-page-meta__text">
        Først publisert: {publishDate}
      </span>
    )}
    {editDate && (
      <span className="b-page-meta__text">Sist endret: {editDate}</span>
    )}

    {url && (
      <a href={url} className="b-page-meta__link">
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
