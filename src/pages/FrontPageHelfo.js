import React from 'react';
import NavList from '../components/NavList';
import Box from '../components/Box';
import Link from '../components/Link';
import Select from '../components/Select';
import Alert from '../components/Alert';

const FrontPageHelfo = () => (
  <main id="main">
    <h1 className="visually-hidden">Helfo</h1>
    <div className="l-container">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-md-offset-3 l-mt-3">
          <form action="">
            <Select
              label="Finn yrkesgruppe"
              placeholder="Velg"
              options={[
                'Apotek ',
                'Bandasjist',
                'Fritt behandlingsvalg',
                'Fysioterapeut',
                'Jordmor og helsestasjon',
                'Kiropraktor'
              ]}
            />
          </form>
        </div>
      </div>

      <div className="row middle-xs l-mt-4">
        <div className="col-xs-12 col-md-8">
          <h2>
            <img
              src="./icons/scale.svg"
              className="b-icon b-icon--heading"
              alt=""
              role="presentation"
            />
            Bruk riktig takst og regelverk
          </h2>
        </div>
        <div className="col-xs-12 col-md-4 t-lg-right">
          <Link href="#a" small arrow>
            Se alt innhold
          </Link>
        </div>
      </div>
      <div className="l-mt-1 l-mb-2">
        <hr className="b-hr b-hr--thick" />
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <p>
            Når du sender refusjonskrav, er det viktig at du kan dokumenterer at
            refusjonsvilkåra er oppfylte. Då sikrar du at Helfo kan kontrollere
            om refusjonskravet som er sett fram, er rett.
          </p>
          <div className="l-mt-2">
            <Alert small status="warning">
              Endring i regelverk og takster fra 1. juli
            </Alert>
          </div>
        </div>
        <div className="col-xs-12 col-md-5 col-md-offset-1">
          <NavList
            list={[
              { title: 'Refusjonskrav', url: '#' },
              { title: 'Utbetaling og vedtak', url: '#' },
              { title: 'Arbeid bidrar til raskere bedring', url: '#' }
            ]}
          />
        </div>
      </div>

      <div className="row">
        <div className="l-mt-5 col-xs-12 col-md-8 col-md-offset-2">
          <Link href="#a" wideButton color="purple" arrow>
            Henvis pasienten til helsenorge.no for mer informasjon
          </Link>
        </div>
      </div>

      <div className="row middle-xs l-mt-4">
        <div className="col-xs-12 col-md-8">
          <h2>
            <img
              src="./icons/firstaid.svg"
              className="b-icon b-icon--heading"
              alt=""
              role="presentation"
            />
            Inngå eller endre en avtale
          </h2>
        </div>
        <div className="col-xs-12 col-md-4 t-lg-right">
          <Link href="#a" small arrow>
            Se alt innhold
          </Link>
        </div>
      </div>
      <div className="l-mt-1 l-mb-2">
        <hr className="b-hr b-hr--thick" />
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <p>
            Når du har avtale med Helfo får du direkte utbetalt den økonomiske
            stønaden pasienten har rett til. Når du har avtale med Helfo får du
            direkte utbetalt den økonomiske stønaden pasienten har rett til.
          </p>
        </div>
        <div className="col-xs-12 col-md-5 col-md-offset-1">
          <NavList
            list={[
              { title: 'Inngå avtale', url: '#' },
              { title: 'Endre avtale', url: '#' }
            ]}
          />
        </div>
      </div>

      <div className="row middle-xs l-mt-4">
        <div className="col-xs-12 col-md-8">
          <h2>
            <img
              src="./icons/money_bag.svg"
              className="b-icon b-icon--heading"
              alt=""
              role="presentation"
            />
            Få refusjon og oppgjør
          </h2>
        </div>
        <div className="col-xs-12 col-md-4 t-lg-right">
          <Link href="#a" small arrow>
            Se alt innhold
          </Link>
        </div>
      </div>
      <div className="l-mt-1 l-mb-2">
        <hr className="b-hr b-hr--thick" />
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <p>
            Etter at du som lege har sendt inn et refusjonskrav til Helfo, og
            dette er behandlet, vil du få et utbetalingsvedtak. Etter at du som
            lege har sendt inn et refusjonskrav til Helfo, og dette er
            behandlet, vil du få et utbetalingsvedtak.
          </p>
        </div>
        <div className="col-xs-12 col-md-5 col-md-offset-1">
          <NavList
            list={[
              { title: 'Send inn refusjonskrav', url: '#' },
              { title: 'Se utbetaling og vedtak', url: '#' }
            ]}
          />
        </div>
      </div>

      <div className="row middle-xs l-mt-4">
        <div className="col-xs-12 col-md-8">
          <h2>
            <img
              src="./icons/people.svg"
              className="b-icon b-icon--heading"
              alt=""
              role="presentation"
            />
            På vegne av pasienten
          </h2>
        </div>
        <div className="col-xs-12 col-md-4 t-lg-right">
          <Link href="#a" small arrow>
            Se alt innhold
          </Link>
        </div>
      </div>
      <div className="l-mt-1 l-mb-2">
        <hr className="b-hr b-hr--thick" />
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <p>
            Du kan hjelpe pasienten med å søke individuell stønad i en rekke
            tilfeller.
          </p>
        </div>
        <div className="col-xs-12 col-md-5 col-md-offset-1">
          <NavList
            list={[
              { title: 'Individuell stønad', url: '#' },
              { title: 'Yrkesskade', url: '#' },
              { title: 'Helserettigheter for asylsøkere', url: '#' }
            ]}
          />
        </div>
      </div>
      <div className="l-mt-4">
        <hr className="b-hr b-hr--grey col-xs-12" />
      </div>
      <div className="row l-mt-4">
        <div className="col-xs-12 col-md-10 col-lg-6 col-md-offset-1 col-lg-offset-3">
          <Link href="#" heading>
            <h2>
              Legemidler på blå resept - når må du søke og når kan du forskrive
              direkte?
            </h2>
          </Link>
          <p className="l-mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in.
          </p>
          <Link href="#">Les mer om lorem ipsum</Link>
        </div>
      </div>
      <div className="l-mt-4 l-mb-1">
        <hr className="b-hr b-hr--grey col-xs-12" />
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <NavList
            list={[
              { title: 'Nyhetsbrev for helseaktører', url: '#' },
              { title: 'Bytte fastlege', url: '#' }
            ]}
          />
        </div>
      </div>
    </div>

    <div className="l-mt-4">
      <Box color="yellow" square noPadding>
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
  </main>
);

export default FrontPageHelfo;
