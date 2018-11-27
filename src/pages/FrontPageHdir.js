import React, { Fragment } from 'react';
import Box from '../components/Box';
import NavList from '../components/NavList';
import Link from '../components/Link';
import InputSearch from '../components/InputSearch';
import Heading from '../components/Heading';

const FrontPageHdir = () => (
  <Fragment>
    <div className="l-container">
      <div className="l-mt-3 l-mb-5">
        <div className="row">
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <p>
              <strong>Hva leter du etter?</strong>
            </p>
            <InputSearch id="xx" showSuggestions={false} />
          </div>
        </div>
      </div>
    </div>
    <Box color="green" square noPadding>
      <div className="l-container l-mt-3 l-mb-3">
        <div className="row middle-xs">
          <div className="col-xs-12 col-md-8">
            <Heading h="h2">"Normerende innhold"</Heading>
          </div>
          <div className="col-xs-12 col-md-4 t-lg-right">
            <Link href="#" small>
              Se alt normerende innhold
            </Link>
          </div>
        </div>
        <div className="l-mt-1">
          <hr className="b-hr b-hr--thick" />
        </div>
        <p>
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
      </div>
    </Box>
    <div className="l-container">
      <div className="l-mt-4">
        <Link href="#" wideButton color="purple" arrow>
          Henvis pasienten til helsenorge.no for mer informasjon
        </Link>
      </div>
    </div>
    <div className="l-mt-4">
      <Box color="blue" square noPadding>
        <div className="l-container l-mt-3 l-mb-3">
          <div className="row middle-xs">
            <div className="col-xs-12 col-md-8">
              <Heading h="h2">Autorisasjon og spesialistutdanning</Heading>
            </div>
            <div className="col-xs-12 col-md-4 t-lg-right">
              <Link href="#" small>
                Se alt innhold
              </Link>
            </div>
          </div>
          <div className="l-mt-1">
            <hr className="b-hr b-hr--thick" />
          </div>
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
        </div>
      </Box>
    </div>
    <div className="l-container">
      <div className="row l-mt-5">
        <div className="col-xs-12 col-md-10 col-lg-6 col-md-offset-1 col-lg-offset-3">
          <h2>
            Mange vil slutte å røyke eller snuse, men få bruker hjelpemidler
          </h2>
          <p>
            40 prosent av dem som røyker og 30 prosent av dem som snuser, har
            planer om å slutte i løpet av de neste seks månedene. Med
            hjelpemidler vil flere lykkes.
          </p>
          <p>
            <a href="#a">Les mer</a>
          </p>
          <p>
            <a href="#a">Se flere relaterte saker</a>
          </p>
        </div>
      </div>
      <div className="row middle-xs l-mt-5">
        <div className="col-xs-12 col-md-8">
          <Heading h="h2">Tilskudd</Heading>
        </div>
        <div className="col-xs-12 col-md-4 t-lg-right">
          <Link href="#" small>
            Se alle tilskudd
          </Link>
        </div>
      </div>
      <div className="l-mt-1">
        <hr className="b-hr b-hr--thick" />
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-4 l-mt-3">
          <NavList
            list={[
              {
                title: 'Etablering og utvikling av abc abc abc acba',
                url: '#a'
              },
              {
                title: 'Kommunalt komptanse og abc abc abc acba',
                url: '#a'
              },
              {
                title:
                  'Ideele og frivillige organisjasjoner som driver abc abc abc acba',
                url: '#a'
              }
            ]}
          />
        </div>
        <div className="col-md-7 col-md-offset-1 t-sm-center l-mt-3">
          <img
            src="http://placehold.it/1000x1000"
            alt=""
            className="t-image-wide"
          />
          <div className="l-mt-1">
            <Link href="#a" buttonSecondary>
              Rapporter på tilskudd på Altinn
            </Link>
          </div>
        </div>
      </div>

      <div className="row middle-xs l-mt-5">
        <div className="col-xs-12 col-md-8">
          <Heading h="h2">Tilskudd</Heading>
        </div>
        <div className="col-xs-12 col-md-4 t-lg-right">
          <Link href="#" small>
            Se alle tilskudd
          </Link>
        </div>
      </div>
      <div className="l-mt-1">
        <hr className="b-hr b-hr--thick" />
      </div>
      <div className="row l-mt-1">
        <div className="col-xs-12">
          <NavList
            columns
            list={[
              {
                title: 'Helsestasjon- og skolehelsetjenesten',
                description: 'Søknadsfrist: 19. november',
                url: '#a'
              },
              {
                title:
                  'Utvikling av skolehelsetjenesten i den videregående skole',
                description: 'Søknadsfrist: 15. februar',
                url: '#a'
              },
              {
                title:
                  'Styrking og utvikling av helestasjons- og skolehelsetjenesten',
                description: 'Søknadsfrist: 05. november',
                url: '#a'
              },
              {
                title: 'Særlig ressurskrevende helse- og omsorgstjenter',
                description: 'Søknadsfrist: 19. februar',
                url: '#a'
              }
            ]}
          />
        </div>
      </div>

      <div className="l-mt-4">
        <NavList
          columns
          noArrow
          list={[
            {
              title: 'Refusjonskrav og mange ',
              url: '#a'
            },
            {
              title: 'Utbetaling og vedtak Utbetaling',
              url: '#a'
            },
            {
              title: 'Arbeid bidrar til raskere be',
              url: '#a'
            },
            {
              title: 'Arbeid bidrar til raskere be',
              url: '#a'
            },
            {
              title: 'Arbeid bidrar til raskere be',
              url: '#a'
            },
            {
              title: 'Arbeid bidrar til raskere be',
              url: '#a'
            },
            {
              title: 'Arbeid bidrar til raskere be',
              url: '#a'
            },
            {
              title: 'Arbeid bidrar til raskere be',
              url: '#a'
            },
            {
              title: 'Arbeid bidrar til raskere be',
              url: '#a'
            }
          ]}
        />
      </div>
    </div>
    <div className="l-mt-5">
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
  </Fragment>
);

export default FrontPageHdir;
