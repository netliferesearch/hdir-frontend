import React from 'react';

import Card from '../components/Card';
import Box from '../components/Box';
import FilterList from '../components/FilterList';
import ArticleIntro from '../components/ArticleIntro';
import NavList from '../components/NavList';
import Breadcrumbs from '../components/Breadcrumbs';

const StatisticsPage = () => (
  <div className="l-container">
    <Breadcrumbs
      paths={[
        {
          name: 'Forsiden',
          href: '#a'
        }
      ]}
    />
    <div className="row l-mt-3">
      <div className="col-xs-12">
        <ArticleIntro
          heading="Statistikk"
          lead="Finn statistikk, rapporter og analyser. Hent rådata, lag dine egne rapporter."
        />
        <div className="l-mt-2">
          <h2>Utvalgt statistikk</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 l-mt-2">
            <Card
              heading="Nasjonale styringsmål for spesialisthelsetjenesten"
              text="Kvalitetsindikator"
              content={
                <p>Aktuelle styringsindikatorer for spesialisthelsetjenesten</p>
              }
              url="#a"
              arrow="right"
              horizontal
            >
              <Box color="blueDark" square>
                <img
                  src="./icons/pie.svg"
                  role="presentation"
                  className="b-icon b-icon--large"
                />
              </Box>
            </Card>
          </div>
          <div className="col-xs-12 col-md-6 l-mt-2">
            <Card
              heading="Ventetider og pasientrettigheter"
              text="Norsk pasientregister"
              content={
                <p>
                  Ventetider og fristbrudd for pasienter som har fått påbegynt
                  helsehjelp.
                </p>
              }
              url="#a"
              arrow="right"
              horizontal
            >
              <Box color="blueDark" square>
                <img
                  src="../icons/pie.svg"
                  role="presentation"
                  className="b-icon b-icon--large"
                />
              </Box>
            </Card>
          </div>
          <div className="col-xs-12 col-md-6 l-mt-2">
            <Card
              heading="Nasjonale styringsmål for spesialisthelsetjenesten"
              text="Kvalitetsindikator"
              content={
                <p>Aktuelle styringsindikatorer for spesialisthelsetjenesten</p>
              }
              url="#a"
              arrow="right"
              horizontal
            >
              <Box color="blueDark" square>
                <img
                  src="./icons/pie.svg"
                  role="presentation"
                  className="b-icon b-icon--large"
                />
              </Box>
            </Card>
          </div>
          <div className="col-xs-12 col-md-6 l-mt-2">
            <Card
              heading="Ventetider og pasientrettigheter"
              text="Norsk pasientregister"
              content={
                <p>
                  Ventetider og fristbrudd for pasienter som har fått påbegynt
                  helsehjelp.
                </p>
              }
              url="#a"
              arrow="right"
              horizontal
            >
              <Box color="blueDark" square>
                <img
                  src="../icons/pie.svg"
                  role="presentation"
                  className="b-icon b-icon--large"
                />
              </Box>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xs-12 l-mt-4">
      <h2>Finn indikatorer</h2>
    </div>
    <div className="col-xs-12 l-mt-2">
      <div className="l-mt-1">
        <strong className="t--small t--grey"> VELG TJENESTE </strong>
        <FilterList
          list={['Begge', 'Primærhelsetjenesten', 'Spesialisthelsetjenesten']}
        />
      </div>
      <div className="l-mt-2">
        <span className="t--small">
          <a href="#">NULLSTILL ALLE FILTRE</a>
        </span>
      </div>
    </div>
    <div className="row l-mt-3 l-mb-5">
      <div className="col-xs-12">
        <strong>250 STATISTIKKSIDER</strong> som passer dine valfte filtre
        <div className="l-mt-2">
          <NavList
            heading="A"
            columns
            list={[
              {
                title: 'Antibiotika',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              },
              {
                title: 'ADHD',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              },
              {
                title:
                  'Aktuell informasjon om lov og forskrift for prioriteringsveildere',
                url: '#',
                meta: 'Veileder'
              },
              {
                title: 'Fileksempel',
                url: '#',
                meta: 'En PDF',
                infoText: 'PDF (3,5 MB)',
                file: true
              },
              {
                title: 'ADHD',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              },
              {
                title: 'Antibiotika',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              },
              {
                title: 'ADHD',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              }
            ]}
          />
        </div>
        <div className="l-mt-3">
          <NavList
            heading="B"
            columns
            list={[
              {
                title: 'Antibiotika',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              },
              {
                title: 'ADHD',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              }
            ]}
          />
        </div>
      </div>
    </div>
  </div>
);

export default StatisticsPage;
