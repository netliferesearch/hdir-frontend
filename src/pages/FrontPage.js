import React from 'react';
import { Link } from 'react-router-dom';
import { default as LinkComp } from '../components/Link'; // It uses "default as" to avoid naming conflict in this file.

const pages = [
  { heading: 'Normerende produkter' },
  { link: '/anbefaling', desc: 'Anbefaling' },
  { link: '/anbefaling-antibiotika', desc: 'Anbefaling antibiotika' },
  { link: '/ninja-state', desc: 'Ninja State' },
  { link: '/ninja-state-tilskudd', desc: 'Ninja State tilskudd' },
  { link: '/produkt', desc: 'Produktforside' },
  {
    link: '/produkt-malgruppevelger',
    desc: 'Produktforside med valgt målgruppe'
  },
  { link: '/kapittel', desc: 'Kapittel' },
  { link: '/kapittel-med-underkapitler', desc: 'Underkapittel' },
  { link: '/normerende-innhold', desc: 'Normerende' },

  { heading: 'Pakkeforløp' },
  { link: '/pakkeforløp', desc: 'Pakkeforløp' },

  { heading: 'Artikkelsider' },
  { link: '/artikkel', desc: 'Artikkel' },
  { link: '/artikkel-med-skjema', desc: 'Artikkel med skjema' },
  { link: '/artikkel-med-iframe', desc: 'Artikkel med iframe' },
  { link: '/nyhet', desc: 'Nyhetsmal (basert på artikkel)' },

  { heading: 'Forsider' },
  { link: '/hdir-forside', desc: 'Helsedirektoratet forside' },
  { link: '/helfo-forside', desc: 'Helfo forside' },

  { heading: 'Listesider' },
  { link: '/rapport-liste', desc: 'Rapporter' },
  { link: '/brosjyrer-liste', desc: 'Brosjyrer' },
  { link: '/nyhetsliste', desc: 'Nyheter' },
  { link: '/tilskudd', desc: 'Tilskudd' },
  { link: '/horinger', desc: 'Høringer' },
  { link: '/konferanser-liste', desc: 'Konferanser' },
  { link: '#', desc: '-' },
  { link: '#', desc: '-' },

  { heading: 'Andre malsider' },
  { link: '/abonnement-tilpassing', desc: 'Abonnement Tilpassing' },
  { link: '/autorisasjon-forside', desc: 'Autorisasjon forside' },
  { link: '/autorisasjon-steg', desc: 'Autorisasjon steg' },
  { link: '/autorisasjon-steg-2', desc: 'Autorisasjon steg 2' },
  { link: '/hdir-tema', desc: 'Helsedirektoratet temaside' },
  { link: '/høringer', desc: 'Høringer' },
  { link: '/høringer-forside', desc: 'Høringer forside' },
  { link: '/ledig-stilling', desc: 'Ledig stilling' },
  { link: '/lis-forside', desc: 'LIS-forside' },
  { link: '/lis-læringsaktiviteter', desc: 'LIS-læringsaktiviteter' },
  { link: '/lis-læringsmål', desc: 'LIS-læringsmål' },
  { link: '/lis-spesialitet', desc: 'LIS-spesialitet' },
  { link: '/medisin', desc: 'Medisin' },
  { link: '/medisinListe', desc: 'MedisinListe' },
  { link: '/pdf-print-preview', desc: 'Print PDF Preview' },
  { link: '/rapport', desc: 'Rapport' },
  { link: '/rapport-kapittel', desc: 'Rapport kapittel' },
  { link: '/rapportside-uten-bilde', desc: 'Rapportside uten bilde' },
  { link: '/rundskriv', desc: 'Rundskriv' },
  { link: '/rundskriv-forside', desc: 'Rundskriv forside' },
  {
    link: '/skjemabygger-enonic',
    desc: 'Skjemaer lagt gjennom Enonics skjemabygger'
  },
  { link: '/statistikk', desc: 'Statistikk' },
  { link: '/statistikk-underside', desc: 'Statistikkunderside (bred)' },
  { link: '/statistikk-underside-2', desc: 'Statistikkunderside (smal)' },
  { link: '/søkeresultat', desc: 'Søkeresultat' },
  { link: '/tidligere-versjoner', desc: 'Tidligere versjoner' },
  { link: '/tilskudd-underside', desc: 'Tilskudd underside' },
  { link: '/tilskudd-veiviser', desc: 'Tilskudd veiviser' },
  {
    link: '/tilskudd-underside-utgått-søknadsfrist',
    desc: 'Tilskudd underside utgått søknadsfrist'
  },
  { link: '/transportside', desc: 'Transportside' },
  { link: '/yrke-velger', desc: 'Yrkesvelger' }
];

const renderPageItems = pages => {
  const thePages = [];
  for (let p in pages) {
    const { link = '', desc = '', heading = '' } = pages[p];
    if (heading) {
      thePages.push(
        <div  key={`page-${p}`}>
          <br />
          <h3>{heading}</h3>
        </div>
      );
    } else {
      thePages.push(
        <p key={`page-${p}`}>
          <Link to={link}>{desc}</Link>
        </p>
      );
    }
  }
  return thePages;
};

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
      <h1>Prototype</h1>
      <div className="frontpage-list">{renderPageItems(pages)}</div>
    </div>
  </div>
);

export default FrontPage;
