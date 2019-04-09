import React from 'react';

import Card from '../components/Card';
import Box from '../components/Box';
import FilterList from '../components/FilterList';
import ArticleIntro from '../components/ArticleIntro';
import NavList from '../components/NavList';
import Breadcrumbs from '../components/Breadcrumbs';
import MultiSelector from '../components/MultiSelector';

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
    <main id="main">
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
                  <p>
                    Aktuelle styringsindikatorer for spesialisthelsetjenesten
                  </p>
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
                  <p>
                    Aktuelle styringsindikatorer for spesialisthelsetjenesten
                  </p>
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
      <div className="l-mt-3">
        <h2>Finn indikatorer</h2>
      </div>
      <div className="row l-mt-1">
        <div className="col-xs-12 col-md-3 col-lg-2 l-mt-1">
          <span className="t--small t--grey">VELG TJENESTE</span>
        </div>
        <div className="col-xs-12 col-md-9 col-lg-10 l-mt-1">
          <FilterList
            list={['Begge', 'Primærhelsetjenesten', 'Spesialisthelsetjenesten']}
          />
        </div>
        <div className="col-xs-12 col-md-3 col-lg-2 l-mt-1">
          <span className="t--small t--grey">VELG STATISTIKKTYPE</span>
        </div>
        <div className="col-xs-12 col-md-9 col-lg-10 l-mt-1">
          <MultiSelector
            buttonText="Statistikktype"
            confirmText="Bekreft typer"
            checkboxGroupName="statistikk_typer"
            options={[
              {
                value: 'Kommunalt%20pasient-%20og%20brukerregister',
                label: 'Kommunalt pasient- og brukerregister',
                checked: false
              },
              {
                value: 'Kvalitetsindikator',
                label: 'Kvalitetsindikator',
                checked: false
              },
              {
                value: 'Norsk%20pasientregister',
                label: 'Norsk pasientregister',
                checked: false
              },
              {
                value: 'Rapporter%20og%20analyser',
                label: 'Rapporter og analyser',
                checked: false
              },
              {
                value: 'Samdata',
                label: 'Samdata',
                checked: false
              },
              {
                value: 'Styringsdata',
                label: 'Styringsdata',
                checked: false
              },
              {
                value: 'Fastlegeregisteret',
                label: 'Fastlegeregisteret',
                checked: false
              },
              {
                value: 'Helsepersonellregisteret',
                label: 'Helsepersonellregisteret',
                checked: false
              }
            ]}
            handleChange={selected => alert(JSON.stringify(selected))}
          />
        </div>
        <div className="col-xs-12 col-md-3 col-lg-2 l-mt-1">
          <span className="t--small t--grey">VELG TEMA</span>
        </div>
        <div className="col-xs-12 col-md-9 col-lg-10 l-mt-1">
          <MultiSelector
            buttonText="Tema"
            confirmText="Bekreft tema"
            checkboxGroupName="tema"
            options={[
              {
                value: 'Akuttmedisinske%20tjenester%20utenfor%20sykehus',
                label: 'Akuttmedisinske tjenester utenfor sykehus',
                checked: true
              },
              {
                value: 'Behandling%20av%20sykdom%20og%20overlevelse',
                label: 'Behandling av sykdom og overlevelse',
                checked: true
              },
              {
                value: 'Diabetes',
                label: 'Diabetes',
                checked: true
              },
              {
                value: 'Graviditet%20og%20fødsel',
                label: 'Graviditet og fødsel',
                checked: true
              },
              {
                value: 'Hjerte-%20og%20karsykdommer',
                label: 'Hjerte- og karsykdommer',
                checked: true
              },
              {
                value: 'Infeksjon',
                label: 'Infeksjon',
                checked: true
              },
              {
                value: 'Kommunale%20helse-%20og%20omsorgstjenester',
                label: 'Kommunale helse- og omsorgstjenester',
                checked: true
              },
              {
                value: 'Kreft%20%E2%80%93%20behandling%20og%20overlevelse',
                label: 'Kreft – behandling og overlevelse',
                checked: true
              }
            ]}
            handleChange={selected => alert(JSON.stringify(selected))}
          />
        </div>
        <div className="col-xs-12 l-mt-2">
          <span className="t--small">
            <a href="#">NULLSTILL ALLE FILTRE</a>
          </span>
        </div>
      </div>
      <div className="row l-mt-3 l-mb-5">
        <div className="col-xs-12">
          <strong>250 STATISTIKKSIDER</strong> som passer dine valgte filtre
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
    </main>
  </div>
);

export default StatisticsPage;
