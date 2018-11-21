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
      <div className="l-mt-5 col-md-8">
        <Link href="#" wideButton purple>
          Henvis pasienten til helsenorge.no for mer informasjon
        </Link>
      </div>

      <div className="col-xs-12 l-mt-5 l-mb-4">
        <Heading h="h2">Bruk riktig takst og regelverk</Heading>
        <hr className="b-hr b-hr--thick" />
        <div className="row">
          <p className=" col-md-7 ">
            Mye text Mye text Mye text Mye text Mye text Mye text Mye text Mye
            text Mye text Mye text Mye text{' '}
          </p>
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
      <div className="col-xs-12 l-mt-5 l-mb-4">
        <Heading h="h2">Bruk riktig takst og regelverk</Heading>
        <hr className="b-hr b-hr--thick" />
        <div className="row">
          <p className=" col-md-7 ">
            Mye text Mye text Mye text Mye text Mye text Mye text Mye text Mye
            text Mye text Mye text Mye text{' '}
          </p>
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
    </div>

    <div className="col-xs-12 l-mt-5 l-mb-4">
      <hr className="b-hr b-hr--grey-light" />
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
            small
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
  </div>
);

export default FrontPageHelfo;
