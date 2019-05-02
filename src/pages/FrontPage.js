import React from 'react';
import { Link } from 'react-router-dom';
import { default as LinkComp } from '../components/Link';

const FrontPage = () => (
  <div>
    <div className="l-container l-mt-3">
      <div className="l-mt-2">
        <LinkComp buttonSecondary href="/storybook">
          Go to Storybook
        </LinkComp>
      </div>
    </div>
    <div className="l-container l-mt-3 l-mb-5">
      <h1>Pages</h1>
      <p>
        <Link to="/abonnement-tilpassing">Abonnement Tilpassing</Link>
      </p>
      <p>
        <Link to="/artikkel">Artikkel</Link>
      </p>
      <p>
        <Link to="/artikkel-med-skjema">Artikkel med skjema</Link>
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
        <Link to="/skjemabygger-enonic">Skjemaer lagt gjennom Enonics skjemabygger</Link>
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
        <Link to="/ledig-stilling">Ledig stilling</Link>
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
        <Link to="/pakkeforløp-a">Pakkeforløp [A]</Link>
      </p>
      <p>
        <Link to="/pakkeforløp-b">Pakkeforløp [B]</Link>
      </p>
      <p>
        <Link to="/pakkeforløp-c">Pakkeforløp [C]</Link>
      </p>
      <p>
        <Link to="/pakkeforløp-d">Pakkeforløp [D]</Link>
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
        <Link to="/rapport-liste">Rapportliste</Link>
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
        <Link to="/statistikk-underside">Statistikkunderside (bred)</Link>
      </p>
      <p>
        <Link to="/statistikk-underside-2">Statistikkunderside (smal)</Link>
      </p>
      <p>
        <Link to="/søkeresultat">Søkeresultat</Link>
      </p>
      <p>
        <Link to="/transportside">Transportside</Link>
      </p>
      <p>
        <Link to="/yrke-velger">Yrkesvelger</Link>
      </p>
      <p>
        <Link to="/tilskudd">Tilskuddside</Link>
      </p>
      <p>
        <Link to="/tilskudd-underside">Tilskudd underside</Link>
      </p>
      <p>
        <Link to="/trykksaker">Trykksaker</Link>
      </p>
    </div>
  </div>
);

export default FrontPage;
