import React from 'react';
import NavList from '../components/NavList';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import Box from '../components/Box';
import Link from '../components/Link';
import LongShortHeading from '../components/LongShortHeading';
import Select from '../components/Select';
import Button from '../components/Button';
import Heading from '../components/Heading';
import Subscribe from '../components/Subscribe';
import Alert from '../components/Alert';

const FrontPageHelfo = () => (
  <div className="l-container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3 l-mt-4">
        <form action="">
          <Select
            label="Velg yrkesgruppe"
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

      <div className="col-xs-12 l-mt-5 l-mb-4">
        <div className="row">
          <div>
            <img src="./icons/print.svg" />
          </div>
          <div className="col-md 8">
            <Heading h="h2">Bruk riktig takst og regelverk</Heading>
          </div>
        </div>
        <hr className="b-hr b-hr--thick" />
        <div className="row">
          <div className="col-md-7">
            <p className="l-mb-2">
              Når du sender refusjonskrav, er det viktig at du kan dokumenterer
              at refusjonsvilkåra er oppfylte. Då sikrar du at Helfo kan
              kontrollere om refusjonskravet som er sett fram, er rett.
            </p>
            <div classname=" col-md 5 l-mt-3">
              <Alert small status="warning">
                Obs Endring i regelverk og takster fra 1. juli
              </Alert>
            </div>
          </div>

          <div className="col-md-5">
            <NavList
              list={[
                { title: 'Refusjonskrav', url: '#' },
                { title: 'Utbetaling og vedtak', url: '#' },
                { title: 'Arbeid bidrar til raskere bedring', url: '#' }
              ]}
            />
          </div>
        </div>
      </div>
      <div className="l-mt-5 col-md-8 col-md-offset-2">
        <Link href="#" wideButton color="purple" arrow>
          Henvis pasienten til helsenorge.no for mer informasjon
        </Link>
      </div>

      <div className="col-xs-12 l-mt-5 l-mb-4">
        <div className="row">
          <div>
            <img src="./icons/print.svg" />
          </div>
          <div className="col-md 8">
            <Heading h="h2">Inngå eller endre en avtale</Heading>
          </div>
        </div>
        <hr className="b-hr b-hr--thick" />
        <div className="row">
          <div className="col-md-7">
            <p className="l-mb-2">
              Når du har avtale med Helfo får du direkte utbetalt den økonomiske
              stønaden paseienten har rett til etter den norske folketrygden. En
              avtale om direkte oppgjør er en personlig og gjensidig
              forpliktende avtale mellom deg og Helfo.
            </p>
            <div classname=" l-mt-3 col-md-6">
              <Alert small status="warning">
                Obs Endring i regelverk og takster fra 1. juli
              </Alert>
            </div>
          </div>

          <div className="col-md-5">
            <NavList
              list={[
                { title: 'Sende inn refusjonskrav', url: '#' },
                { title: 'Se utbetaling og vedtak', url: '#' }
              ]}
            />
          </div>
        </div>
      </div>
      <div className="col-xs-12 l-mt-5 l-mb-4">
        <div className="row">
          <div>
            <img src="./icons/method.svg" />
          </div>
          <div className="col-md 8">
            <Heading h="h2">Påvegne av pasienten</Heading>
          </div>
        </div>
        <hr className="b-hr b-hr--thick" />
        <div className="row">
          <div className="col-md-7">
            <p className="l-mb-2">
              Du kan hjelpe pasienten med å søke individuell stønad i en rekke
              tilfeller.
            </p>
          </div>

          <div className="col-md-5">
            <NavList
              list={[
                { title: 'Stønad', url: '#' },
                { title: 'Yrkesskade', url: '#' },
                { title: 'Helserettigheter for asylsøkere', url: '#' }
              ]}
            />
          </div>
        </div>
      </div>
    </div>

    <div className="col-xs-12 l-mt-5 l-mb-4 col-md-offset-1">
      <hr className="b-hr b-hr--grey col-md-8" />
      <div className="col-md-8 l-mt-2">
        <Heading h="h2">
          Legemidler på blå resept - når må du søke og når kan du forskrive
          direkte?
        </Heading>
        <p className="l-mt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in.
        </p>
        <Link>Lenke videre</Link>
      </div>
    </div>
    <div className="col-xs-12 l-mt-5 l-mb-4">
      <hr className="b-hr b-hr--grey-light" />
      <div className="row">
        <div className="col-md-5">
          <NavList
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
          <a href="#">spesialisthelsetjenester@helsedir.no</a>
          <br />
          <a href="#">navn.etternavn@helsedir.no</a>
          <br />
          <a href="#">999 99 999</a>
        </div>
      </Box>
    </div>
    <Subscribe />
  </div>
);

export default FrontPageHelfo;