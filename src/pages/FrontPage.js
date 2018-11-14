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
    <br />
    <br />
    <br />
    <h3 className="some-label">
      Press 'h' to toggle block/component hints.
      <br />
      Press 'j' to add Helfo styling. Refresh page to undo.
    </h3>
  </div>
);

export default FrontPage;
