import React from 'react';
import InputSearch from '../components/InputSearch';

const FrontPage = () => (
  <div className="is-wrapper">
    <div className="l-container">
      <p className="some-label">
        Søk etter reningslinjer, anbefalinger, lover, statistikk, tilskudd...
        (Prøv å skrive "diabetes")
      </p>
      <InputSearch id="x" />
    </div>
  </div>
);

export default FrontPage;
