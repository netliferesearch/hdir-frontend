import React from 'react';

const Quote = ({ children }) => (
  <div className="b-quote">
    <q className="b-quote__blockquote">{children}</q>
    <div className="b-quote__source">Kilde: lovdata.no</div>
  </div>
);

export default Quote;
