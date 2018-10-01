import React from 'react';
import InputSearch from '../components/InputSearch';

const FrontPage = () => (
  <div className="frontpage-wrapper">
    <div className="l-container">
      <p className="some-label">
        Søk etter reningslinjer, anbefalinger, lover, statistikk, tilskudd...
      </p>
      <InputSearch id="x" dark />
    </div>
  </div>
);

export default FrontPage;
