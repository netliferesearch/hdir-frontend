import React from 'react';
import TransportBlock from '../components/TransportBlock';

const SimpleSerp = () => (
  <main>
    <div className="l-container">
      <h1>Om oss</h1>
      <div className="row l-mt-4">
        <div className="col-xs-12 col-sm-6 col-md-4 l-mb-2">
          <TransportBlock
            title="Kontakt oss"
            text="Finn ansatt, e-post, telefonnummer og adresser."
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 l-mb-2">
          <TransportBlock
            title="Ledige stillinger"
            text="Finn ansatt, e-post, telefonnummer og adresser."
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 l-mb-2">
          <TransportBlock
            title="Organisasjon"
            text="Ledelsen og avdelinger. Organisasjonskart. Råd og utvalg."
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 l-mb-2">
          <TransportBlock
            title="Presse"
            text="Pressekontakter, journalister og pressebilde. Få nyheter sendt til deg på e-post."
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 l-mb-2">
          <TransportBlock
            title="Grafisk profil"
            text="Finn ansatt, e-post, telefonnummer og adresser."
          />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 l-mb-2">
          <TransportBlock title="Kurs og konferanser" />
        </div>
      </div>
    </div>
  </main>
);

export default SimpleSerp;
