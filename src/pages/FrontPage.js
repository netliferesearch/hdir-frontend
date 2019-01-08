import React from 'react';
import { Link } from 'react-router-dom';

const FrontPage = () => (
  <div>
    <div className="l-container l-mt-4">
      Press 'h' to toggle block/component hints.
      <br />
      To see Helfo-styles: Storybook -> READ ME -> Styles
    </div>
    <div className="l-container l-mt-5">
      <p>
        <a href="/storybook">Go to Storybook</a>
      </p>
      <h2>Pages</h2>
      <p>
        <Link to="/abonnement-tilpassing">Abonnement Tilpassing</Link>
      </p>
      <p>
        <Link to="/artikkel">Artikkel</Link>
      </p>
      <p>
        <Link to="/anbefaling">Anbefaling</Link>
      </p>
      <p>
        <Link to="/autorisasjon-forside">Autorisasjon forside</Link>
      </p>
      <p>
        <Link to="/autorisasjon-steg">Autorisasjon steg</Link>
      </p>
      <p>
        <Link to="/autorisasjon-steg-2">Autorisasjon steg 2</Link>
      </p>
      <p>
        <Link to="/helfo-forside">Helfo forside</Link>
      </p>
      <p>
        <Link to="/hdir-forside">Helsedirektoratet forside</Link>
      </p>
      <p>
        <Link to="/hdir-tema">Helsedirektoratet temaside</Link>
      </p>
      <p>
        <Link to="/høringer-forside">Høringer forside</Link>
      </p>
      <p>
        <Link to="/høringer">Høringer</Link>
      </p>
      <p>
        <Link to="/normerende-innhold">Normerende</Link>
      </p>
      <p>
        <Link to="/nyhetsliste">Nyhetsliste</Link>
      </p>
      <p>
        <Link to="/kapittel">Kapittel</Link>
      </p>
      <p>
        <Link to="/lis-spesialitet">LIS-spesialitet</Link>
      </p>
      <p>
        <Link to="/lis-læringsmål">LIS-læringsmål</Link>
      </p>
      <p>
        <Link to="/lis-forside">LIS-forside</Link>
      </p>
      <p>
        <Link to="/lis-læringsaktiviteter">LIS-læringsaktiviteter</Link>
      </p>
      <p>
        <Link to="/produkt">Produkt</Link>
      </p>
      <p>
        <Link to="/rundskriv">Rundskriv</Link>
      </p>
      <p>
        <Link to="/rundskriv-forside">Rundskriv forside</Link>
      </p>
      <p>
        <Link to="/rapport">Rapport</Link>
      </p>
      <p>
        <Link to="/rapportside-uten-bilde">Rapportside uten bilde</Link>
      </p>
      <p>
        <Link to="/rapport-kapittel">Rapport kapittel</Link>
      </p>
      <p>
        <Link to="/statistikk">Statistikk</Link>
      </p>
      <p>
        <Link to="/søkeresultat">Søkeresultat</Link>
      </p>
      <p>
        <Link to="/transportside">Transportside</Link>
      </p>
      <p>
        <Link to="/yrke-velger">Yrke velger</Link>
      </p>
      {/*<Link to="/søkeresultat">
          SERP
        </Link>*/}
    </div>
  </div>
);

export default FrontPage;
