import React from 'react';

import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import Link from '../components/Link';
import Box from '../components/Box';
import Card from '../components/Card';
import Breadcrumbs from '../components/Breadcrumbs';

const ChapterPageReport = () => (
  <div>
    <div className="l-container">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
          {
            name: 'Konferanse',
            href: '#a'
          },
          {
            name: 'Arbeid og psykisk helse',
            href: '#a'
          },
          {
            name: 'Fastlegekonferansen 2018 - fastlegeordning for fremtiden'
          }
        ]}
      />
    </div>
    <div className="l-mt-3">
      <div className="l-container">
        <h1>Ventetid</h1>
      </div>
    </div>
    <div className="l-container">
      <div className="row l-mt-3">
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <NavList
            anchor
            sticky
            small
            className="l-sticky"
            heading="Innhold på denne siden"
            list={[
              { title: 'Introduksjon', url: '#', active: true },
              { title: 'Ventetid til somatisk sektor', url: '#' },
              { title: 'Ventetid til psykisk helsevern for voksne', url: '#' },
              {
                title: 'Ventetid til psykisk helsevern for barn og unge',
                url: '#'
              },
              {
                title: 'Ventetid til tverrfaglig spesialisert rusbehandling',
                url: '#'
              },
              {
                title:
                  'Kumulativ ventetid for ordinært avviklede etter sektor (alle pasienter)',
                url: '#'
              }
            ]}
          />
        </aside>
        <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
          <p>
            Dette kapitlet handler om ventetid til oppstart av helsehjelp i
            spesialisthelsetjenesten. Vi viser ventetid for somatiske fagområder
            (1.1), psykisk helsevern for voksne (1.2), psykisk helsevern for
            barn og unge (1.3), og for tverrfaglig spesialisert rusbehandling
            (1.4). I tillegg viser vi ventetid for pasienter som er vurdert til
            å ha behov for utredning (uavklart tilstand), og for pasienter som
            er vurdert til å ha behov for behandling (avklart tilstand).
            Ventetid for ordinært avviklede: Ventetid til helsehjelp måles i
            kalenderdager, og beregnes som differansen mellom dato for mottak av
            henvisning i spesialisthelsetjenesten (ansiennitetsdato) og dato for
            når ventetiden avsluttes (ventetid sluttdato). Ventetiden slutter
            ved oppstart av helsehjelp i form av utredning eller behandling.
            Dato for ventetidens slutt for den enkelte pasient registreres i
            sykehusenes pasientadministrative system, og rapporteres til NPR.
            Ventetid beregnes for alle pasienter som er ordinært avviklet fra
            venteliste i den enkelte periode. Med ordinært avviklede mener vi
            pasienter som har stått på venteliste, og som har fått igangsatt
            helsehjelp. Tilfeller der oppstart av helsehjelp er utsatt av
            medisinske eller pasientbestemte årsaker (jf. definisjon kapittel
            2), og øyeblikkelig hjelp er ikke inkludert. Målene som benyttes er
            median ventetid, gjennomsnittlig ventetid og ventetid for 90.
            prosentil. Median betegner midtverdien, det vil si ventetiden til
            helsehjelp der halvparten har ventet kortere eller lengre i tid.
            Median som mål på ventetid er mer robust enn gjennomsnitt, det vil
            si mindre påvirket av langtidsventende. 90. prosentil angir hvor
            lang tid det tar før 90 prosent av pasientene har avsluttet
            ventetiden, mens 10 prosent venter lengre.
          </p>

          <div className="l-mt-3 row">
            <div className="col-xs-12 col-md-6 l-mt-2 first-md">
              <Card
                heading="Forrige kapittel"
                text="Den første samtalen i svangerskapet – forbeggung av svangerskaps-diabetes."
                url="#a"
                arrow="left"
              />
            </div>
            <div className="col-xs-12 col-md-6 l-mt-2 first-xs">
              <Card
                heading="Neste kapittel"
                text="Den første samtalen i svangerskapet – forbeggung av svangerskaps-diabetes."
                url="#a"
                arrow="right"
              />
            </div>
          </div>

          <div className="l-mt-4">
            <Link href="#a" small icon="../icons/method.svg">
              Om metode og prosess
            </Link>
            <br />
            <Link href="#a" small icon="../icons/print.svg">
              Skriv ut hele retningslinjen
            </Link>
          </div>

          <div className="l-mt-4">
            <PageMeta publishDate="11.08.2008" editDate="11.08.2018" />
          </div>
        </article>
      </div>
    </div>
    <div className="l-mt-4">
      <Box color="green" square noPadding>
        <div className="l-container">
          <strong>Kontakt:</strong>
          <br />
          <a href="#a">spesialisthelsetjenester@helsedir.no</a>
          <br />
          <a href="#a">navn.etternavn@helsedir.no</a>
          <br />
          <a href="#a">999 99 999</a>
        </div>
      </Box>
    </div>
  </div>
);

export default ChapterPageReport;
