import React from 'react';

const PortableArticle = () => (
  <div className="b-portable-article">
    <button className="b-portable-article__button b-portable-article__button--print">
      <span className="b-portable-article__text">Print</span>
    </button>
    <button className="b-portable-article__button b-portable-article__button--pdf">
      <span className="b-portable-article__text">Lag PDF</span>
    </button>
  </div>
);

export default PortableArticle;
