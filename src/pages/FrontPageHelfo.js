import React from 'react';
import NavList from '../components/NavList';
import Box from '../components/Box';
import Link from '../components/Link';
import Select from '../components/Select';

import Collapsible from '../components/Collapsible';
import Alert from '../components/Alert';
import Button from '../components/Button';

const FrontPageHelfo = () => (
  <div>
    <div className="l-container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3 l-mt-4">
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

      <div className="row middle-xs l-mt-5">
        <div className="col-xs-12 col-md-8">
          <h2>Bruk riktig takst og regelverk</h2>
        </div>
        <div className="col-xs-12 col-md-4 t-lg-right">
          <Link href="#a" small>
            Se alt innhold
          </Link>
        </div>
      </div>
      <div className="l-mt-1 l-mb-2">
        <hr className="b-hr b-hr--thick" />
      </div>
      <div className="row">
        <div className="col-md-6">
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
        <div className="col-md-5 col-md-offset-1">
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
        <div className="l-mt-5 col-md-8 col-md-offset-2">
          <Link href="#a" wideButton color="purple" arrow>
            Henvis pasienten til helsenorge.no for mer informasjon
          </Link>
        </div>
      </div>

      <div className="row middle-xs l-mt-5">
        <div className="col-xs-12 col-md-8">
          <h2>Inngå eller endre en avtale</h2>
        </div>
        <div className="col-xs-12 col-md-4 t-lg-right">
          <Link href="#a" small>
            Se alt innhold
          </Link>
        </div>
      </div>
      <div className="l-mt-1 l-mb-2">
        <hr className="b-hr b-hr--thick" />
      </div>
      <div className="row">
        <div className="col-md-6">
          <p>
            Når du har avtale med Helfo får du direkte utbetalt den økonomiske
            stønaden pasienten har rett til. Når du har avtale med Helfo får du
            direkte utbetalt den økonomiske stønaden pasienten har rett til.
          </p>
        </div>
        <div className="col-md-5 col-md-offset-1">
          <NavList
            list={[
              { title: 'Inngå avtale', url: '#' },
              { title: 'Endre avtale', url: '#' }
            ]}
          />
        </div>
      </div>

      <div className="row middle-xs l-mt-5">
        <div className="col-xs-12 col-md-8">
          <h2>Refusjon og oppgjør</h2>
        </div>
        <div className="col-xs-12 col-md-4 t-lg-right">
          <Link href="#a" small>
            Se alt innhold
          </Link>
        </div>
      </div>
      <div className="l-mt-1 l-mb-2">
        <hr className="b-hr b-hr--thick" />
      </div>
      <div className="row">
        <div className="col-md-6">
          <p>
            Etter at du som lege har sendt inn et refusjonskrav til Helfo, og
            dette er behandlet, vil du få et utbetalingsvedtak. Etter at du som
            lege har sendt inn et refusjonskrav til Helfo, og dette er
            behandlet, vil du få et utbetalingsvedtak.
          </p>
        </div>
        <div className="col-md-5 col-md-offset-1">
          <NavList
            list={[
              { title: 'Send inn refusjonskrav', url: '#' },
              { title: 'Se utbetaling og vedtak', url: '#' }
            ]}
          />
        </div>
      </div>

      <div className="row middle-xs l-mt-5">
        <div className="col-xs-12 col-md-8">
          <h2>På vegne av pasienten</h2>
        </div>
        <div className="col-xs-12 col-md-4 t-lg-right">
          <Link href="#a" small>
            Se alt innhold
          </Link>
        </div>
      </div>
      <div className="l-mt-1 l-mb-2">
        <hr className="b-hr b-hr--thick" />
      </div>
      <div className="row">
        <div className="col-md-6">
          <p>
            Du kan hjelpe pasienten med å søke individuell stønad i en rekke
            tilfeller.
          </p>
        </div>
        <div className="col-md-5 col-md-offset-1">
          <NavList
            list={[
              { title: 'Individuell stønad', url: '#' },
              { title: 'Yrkesskade', url: '#' },
              { title: 'Helserettigheter for asylsøkere', url: '#' }
            ]}
          />
        </div>
      </div>
      <div className="l-mt-5">
        <hr className="b-hr b-hr--grey col-xs-12" />
      </div>
      <div className="row l-mt-4">
        <div className="col-xs-12 col-md-10 col-lg-6 col-md-offset-1 col-lg-offset-3">
          <h2>
            Legemidler på blå resept - når må du søke og når kan du forskrive
            direkte?
          </h2>
          <p className="l-mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in.
          </p>
          <Link>Les mer om lorem ipsum</Link>
        </div>
      </div>
      <div className="l-mt-4 l-mb-1">
        <hr className="b-hr b-hr--grey col-xs-12" />
      </div>
      <div className="row">
        <div className="col-xs-12">
          <NavList
            columns
            list={[
              { title: 'Refusjonskrav', url: '#' },
              { title: 'Utbetaling og vedtak', url: '#' }
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

    <div className="l-container">
      <div className="l-mt-4">
        <Collapsible heading="Abonnér på endringer – Nasjonal faglig retningslinje for svangerskapsdiabetes">
          <form>
            <div className="b-input-text">
              <label
                htmlFor="email-subscription"
                className="b-input-text__label"
              >
                Fyll inn e-postadressen din for å motta varsler om endringer.
              </label>
              <input
                type="text"
                name="email-subscription"
                className="b-input-text__input"
              />
              <div className="b-input-text__description">
                Du får straks en e-post som bekrefter ditt abonnement. Der
                finner du også melihet til å melde deg av.
              </div>
              <div className="b-input-text__error">
                Skriv inn en gylig epost-adresse.
              </div>
              <Button>Abonnér</Button>
            </div>
          </form>
          <Alert status="success">
            Abonnementet ditt er registrert. Du får straks e-post fra oss.
          </Alert>
        </Collapsible>
      </div>
    </div>
  </div>
);

export default FrontPageHelfo;
