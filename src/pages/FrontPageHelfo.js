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

const FrontPageHelfo = () => (
  <div className="l-container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
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
        <Heading h="h2">Bruk riktig takst og regelverk</Heading>
        <hr className="b-hr b-hr--thick" />
        <div className="row">
          <p className=" col-md-7 ">
            Mye text Mye text Mye text Mye text Mye text Mye text Mye text Mye
            text Mye text Mye text Mye text{' '}
          </p>
          <NavList
            className="col-md-4"
            list={[
              { title: 'Refusjonskrav', url: '#' },
              { title: 'Utbetaling og vedtak', url: '#' },
              { title: 'Arbeid bidrar til raskere bedring', url: '#' }
            ]}
          />
        </div>
      </div>
      <div className="l-mt-5 col-md-8">
        <Box color="blueDark">
          <div className="l-container">
            <a href="#">
              Henvis pasienten til helsenorge.no for mer informasjon
            </a>
          </div>
        </Box>
      </div>

      <div className="col-xs-12 l-mt-5">
        <Heading h="h2">Bruk riktig takst og regelverk</Heading>
        <hr className="b-hr b-hr--thick" />
        <div className="row">
          <p className=" col-md-7 ">
            Mye text Mye text Mye text Mye text Mye text Mye text Mye text Mye
            text Mye text Mye text Mye text{' '}
          </p>
          <NavList
            className=" col-md-12 l-"
            list={[
              { title: 'Refusjonskrav', url: '#' },
              { title: 'Utbetaling og vedtak', url: '#' },
              { title: 'Arbeid bidrar til raskere bedring', url: '#' }
            ]}
          />
        </div>
      </div>
      <div className="col-xs-12 l-mt-5">
        <Heading h="h2">Bruk riktig takst og regelverk</Heading>
        <hr className="b-hr b-hr--thick" />
        <div className="row">
          <p className=" col-md-7 ">
            Mye text Mye text Mye text Mye text Mye text Mye text Mye text Mye
            text Mye text Mye text Mye text{' '}
          </p>
          <NavList
            className=" col-md-12"
            list={[
              { title: 'Refusjonskrav', url: '#' },
              { title: 'Utbetaling og vedtak', url: '#' },
              { title: 'Arbeid bidrar til raskere bedring', url: '#' }
            ]}
          />
        </div>
      </div>

      <div className="col-xs-12 l-mt-3">
        <PageMeta publishDate="01.01.2008" editDate="01.01.2018" url="#" />
      </div>

      <div className="col-xs-12 l-mt-4">
        <Link href="#" small icon="./icons/method.svg">
          Om metode og prosess
        </Link>
        <br />
        <Link href="#" small icon="./icons/print.svg">
          Skriv ut hele retningslinjen
        </Link>
      </div>
    </div>
  </div>
);

export default FrontPageHelfo;
