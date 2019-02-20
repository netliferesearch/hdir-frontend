import React from 'react';

const Quote = props => (
  <div className="b-quote">
    <q className="b-quote__blockquote">{props.children}</q>
    <div className="b-quote__source">Kilde: Wikipedia</div>
  </div>
);

export default Quote;
