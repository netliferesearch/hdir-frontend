import React from 'react';
import PageMeta from '../components/PageMeta';
import Box from '../components/Box';
import NavList from '../components/NavList';
import Link from '../components/Link';
import InputSearch from '../components/InputSearch';
import Heading from '../components/Heading';

const FrontPageHdir = () => (
  <div className="l-container">
    <div className="l-container l-mt-3 l-mb-5">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <p className="l-mt-3">120 treff på Svangerskap</p>
          <InputSearch id="xx" showSuggestions={false} />
        </div>
      </div>
    </div>
    <div className="l-mt-2 row">
      <Box color="green">
        <div className="row">
          <div className="col-md-10">
            <Heading h="h2">Bruk riktig takst og regelverk</Heading>
          </div>
          <div classname="col-md-2 t-right">
            <Link href="#" small arrow>
              Se alt normerende innhold
            </Link>
          </div>
        </div>
        <hr className="b-hr b-hr--thick" />
        <p className="col-md-6">
          Her er en slags ingress av noe slag Her er en slags ingress av noe
          slag Her er en slags ingress av noe slag Her er en slags ingress av
          noe slag
        </p>
        <NavList
          columns
          list={[
            { title: 'LIS del 1', url: '#' },
            { title: 'Læringsaktivitetet', url: '#' },
            { title: 'Andre ting', url: '#' },
            { title: 'Læringsaktivitetet', url: '#' },
            { title: 'Læringsaktivitetet', url: '#' },
            { title: 'Læringsaktivitetet', url: '#' },
            { title: 'Læringsaktivitetet', url: '#' }
          ]}
        />
      </Box>
    </div>
    <div className="l-mt-4 l-mb-4">
      <Link href="#" wideButton color="purple" arrow>
        Henvis pasienten til helsenorge.no for mer informasjon
      </Link>
    </div>
    <div className="l-mt-4 row">
      <Box color="blue">
        <div className="row">
          <div className="col-md-10">
            <Heading h="h2">Bruk riktig takst og regelverk</Heading>
          </div>
          <div classname="col-md-2 t-right">
            <Link href="#" small arrow>
              Se alt normerende innhold
            </Link>
          </div>
        </div>
        <hr className="b-hr b-hr--thick" />
        <p className="col-md-6">
          Her er en slags ingress av noe slag Her er en slags ingress av noe
          slag Her er en slags ingress av noe slag Her er en slags ingress av
          noe slag
        </p>
        <NavList
          columns
          list={[
            { title: 'LIS del 1', url: '#' },
            { title: 'Læringsaktivitetet', url: '#' },
            { title: 'Andre ting', url: '#' },
            { title: 'Læringsaktivitetet', url: '#' }
          ]}
        />
      </Box>
    </div>
    <div className="col-xs-12 l-mt-5 l-mb-4 col-md-offset-2">
      <hr className="b-hr b-hr--grey-light col-md-8" />
      <div className="col-md-8 l-mt-2 ">
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
    <div className="col-xs-12 l-mt-5 l-mb-4 ">
      <div className="row">
        <div className="col-md-10">
          <Heading h="h2">Bruk riktig takst og regelverk</Heading>
        </div>
        <div classname="col-md-2 t-right">
          <Link href="#" small arrow>
            Se alt normerende innhold
          </Link>
        </div>
      </div>
      <hr className="b-hr b-hr--thick" />
      <div className="row">
        <div className="col-md-6 l-mt-2">
          <NavList
            list={[
              {
                title:
                  'Refusjonskrav og mange andre ting, en del tekst her, tilogmed enda mer tekst kan gå inn her',
                url: '#',
                meta: 'Søknadsfrist 21.november'
              },
              {
                title:
                  'Utbetaling og vedtak Utbetaling og vedtak Utbetaling og vedtak Utbetaling og vedtak Utbetaling og vedtak',
                url: '#',
                meta: 'Søknadsfrist 21.november'
              },
              {
                title:
                  'Arbeid bidrar til raskere bedring Utbetaling og vedtak Utbetaling og vedtak Utbetaling og vedtak Utbetaling og vedtak Utbetaling og vedtak',
                url: '#',
                meta: 'Søknadsfrist 21.november'
              }
            ]}
          />
        </div>
      </div>
    </div>

    <div className="l-mt-3 l-mb-4">
      <NavList
        columns
        noArrow
        list={[
          {
            title: 'Refusjonskrav og mange '
          },
          {
            title: 'Utbetaling og vedtak Utbetaling'
          },
          {
            title: 'Arbeid bidrar til raskere be'
          },
          {
            title: 'Arbeid bidrar til raskere be'
          },
          {
            title: 'Arbeid bidrar til raskere be'
          },
          {
            title: 'Arbeid bidrar til raskere be'
          },
          {
            title: 'Arbeid bidrar til raskere be'
          },
          {
            title: 'Arbeid bidrar til raskere be'
          },
          {
            title: 'Arbeid bidrar til raskere be'
          }
        ]}
      />
    </div>
    <div className="l-mt-4">
      <Box color="green" square noPadding>
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

export default FrontPageHdir;
