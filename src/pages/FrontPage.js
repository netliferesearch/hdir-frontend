import React from 'react';
import { Link } from 'react-router-dom';
import { default as LinkComp } from '../components/Link'; // It uses "default as" to avoid naming conflict in this file.

const pages = [
  {link: '/abonnement-tilpassing', desc: 'Abonnement Tilpassing'},
  {link: '/anbefaling', desc: 'Anbefaling'},
  {link: '/anbefaling-antibiotika', desc: 'Anbefaling antibiotika'},
  {link: '/artikkel', desc: 'Artikkel'},
  {link: '/artikkel-med-skjema', desc: 'Artikkel med skjema'},
  {link: '/artikkel-med-iframe', desc: 'Artikkel med iframe'},
  {link: '/autorisasjon-forside', desc: 'Autorisasjon forside'},
  {link: '/autorisasjon-steg', desc: 'Autorisasjon steg'},
  {link: '/autorisasjon-steg-2', desc: 'Autorisasjon steg 2'},
  {link: '/hdir-forside', desc: 'Helsedirektoratet forside'},
  {link: '/hdir-tema', desc: 'Helsedirektoratet temaside'},
  {link: '/helfo-forside', desc: 'Helfo forside'},
  {link: '/høringer', desc: 'Høringer'},
  {link: '/høringer-forside', desc: 'Høringer forside'},
  {link: '/kapittel', desc: 'Kapittel'},
  {link: '/kapittel-med-underkapitler', desc: 'Kapittel med underkapitler'},
  {link: '/ledig-stilling', desc: 'Ledig stilling'},
  {link: '/lis-forside', desc: 'LIS-forside'},
  {link: '/lis-læringsaktiviteter', desc: 'LIS-læringsaktiviteter'},
  {link: '/lis-læringsmål', desc: 'LIS-læringsmål'},
  {link: '/lis-spesialitet', desc: 'LIS-spesialitet'},
  {link: '/normerende-innhold', desc: 'Normerende'},
  {link: '/nyhetsliste', desc: 'Nyhetsliste'},
  {link: '/pakkeforløp-a', desc: 'Pakkeforløp [A]'},
  {link: '/pakkeforløp-c', desc: 'Pakkeforløp [C]'},
  {link: '/pakkeforløp-e', desc: 'Pakkeforløp [E]'},
  {link: '/medisin', desc: 'Medisin'},
  {link: '/medisinListe', desc: 'MedisinListe'},
  {link: '/pdf-print-preview', desc: 'Print PDF Preview'},
  {link: '/produkt', desc: 'Produkt'},
  {link: '/rapport', desc: 'Rapport'},
  {link: '/rapport-kapittel', desc: 'Rapport kapittel'},
  {link: '/rapport-liste', desc: 'Rapportliste'},
  {link: '/rapportside-uten-bilde', desc: 'Rapportside uten bilde'},
  {link: '/rundskriv', desc: 'Rundskriv'},
  {link: '/rundskriv-forside', desc: 'Rundskriv forside'},
  {link: '/skjemabygger-enonic', desc: 'Skjemaer lagt gjennom Enonics skjemabygger'},
  {link: '/statistikk', desc: 'Statistikk'},
  {link: '/statistikk-underside', desc: 'Statistikkunderside (bred)'},
  {link: '/statistikk-underside-2', desc: 'Statistikkunderside (smal)'},
  {link: '/søkeresultat', desc: 'Søkeresultat'},
  {link: '/tidligere-versjoner', desc: 'Tidligere versjoner'},
  {link: '/tilskudd', desc: 'Tilskuddside'},
  {link: '/tilskudd-underside', desc: 'Tilskudd underside'},
  {link: '/transportside', desc: 'Transportside'},
  {link: '/trykksaker', desc: 'Trykksaker'},
  {link: '/yrke-velger', desc: 'Yrkesvelger'},
];

const renderPageItems = pages => {
  const thePages = [];
  for (let p in pages) {
    const {
      link = '',
      desc = '',
    } = pages[p];
    thePages.push(
      <p key={`page-${p}`}>
        <Link to={link}>{desc}</Link>
      </p>
    )
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
      <h1>Pages</h1>
      {renderPageItems(pages)}
    </div>
  </div>
);

export default FrontPage;
