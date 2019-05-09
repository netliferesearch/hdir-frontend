import React from 'react';

import Link from '../components/Link';
import ChapterHeading from '../components/ChapterHeading';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import List from '../components/List';
import Select from '../components/Select';
import Heading from '../components/Heading';
import FilterList from '../components/FilterList';
import IconWithText from '../components/IconWithText';

const TreatmentPageA = () => (
  <>
    <div className="l-container">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
          {
            name: 'Pakkeforløp',
            href: '#a'
          },
          {
            name: 'Lungekreft',
            href: '#a'
          }
        ]}
      />
      <main id="main">
        <div className="l-mt-3">
          <ChapterHeading
            heading="Mistanke om psykoseutvikling og psykoselidelser"
            line="none"
            h="h1"
          />
        </div>
        <div className="row l-mt-1">
          <div className="col-xs-12 col-md-6 l-mt-1">
            <IconWithText text="Pakkeforløp" icon="../icons/Pakkeforløp.svg" />
          </div>
          <div className="col-xs-12 col-md-6 l-mt-1 t-small t-lg-right">
            <Link href="#a">Hva er et pakkeforløp?</Link>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="l-mt-3">
              <div className="l-mt-1">
                <ChapterHeading
                  heading="Inngang til pakkeforløpet"
                  subheading="KAPITTEL"
                  url="#a"
                />
              </div>
              <div className="l-mt-1">
                <ChapterHeading
                  heading="Mistanke om psykoseutvikling"
                  subheading="FORLØPSALTERNATIV 1"
                  url="#a"
                />
              </div>
              <div className="l-mt-1">
                <ChapterHeading
                  heading="Første episode"
                  subheading="FORLØPSALTERNATIV 2"
                  url="#a"
                />
              </div>
              <div className="l-mt-1">
                <ChapterHeading
                  heading="Tilbakevendende psykoseepisode"
                  subheading="FORLØPSALTERNATIV 3"
                  url="#a"
                />
              </div>
              <div className="l-mt-1">
                <ChapterHeading
                  heading="Pyskose med langvarige og sammensatte behov"
                  subheading="FORLØPSALTERNATIV 4"
                  url="#a"
                />
              </div>
              <div className="l-mt-1">
                <ChapterHeading
                  heading="Om pakkeforløpet"
                  subheading="KAPITTEL"
                  url="#a"
                />
              </div>
            </div>

            <div className="l-mt-4">
              <Link wideButton arrow color="purple">
                For å lese om symptomer, årsaker og rettigheter til pasienter og
                pårørende ved psykose, kan du gå til{' '}
                <span style={{ textDecoration: 'underline' }}>
                  helsenorge.no
                </span>
                .
              </Link>
            </div>
            <div className="row l-mt-4">
              <div className="col-xs-12">
                <Box color="white">
                  <p className="l-m-0 t--uppercase">Last ned trykksaker</p>
                  <Heading h="h3" className="l-mt-2">
                    Materiell til pasienter og pårørende
                  </Heading>
                  <div className="l-mt-2">
                    <hr className="b-hr b-hr--blue b-hr--thin" />
                  </div>
                  <List
                    list={[
                      {
                        type: 'generic',
                        url: '#6',
                        fields: {
                          download: 'true',
                          heading: 'FAKTAARK',
                          subheading: 'Pakkeforløp på 1-2-3'
                        }
                      }
                    ]}
                  />
                </Box>
              </div>
            </div>
            <div className="row l-mt-4">
              <div className="col-xs-12">
                <Box color="white">
                  <p className="l-m-0 t--uppercase">Relaterte produkter</p>
                  <div className="l-mt-2">
                    <hr className="b-hr b-hr--black b-hr--thick" />
                  </div>
                  <List
                    list={[
                      {
                        type: 'generic',
                        url: '#6',
                        fields: {
                          heading: 'Relatert retningslinje',
                          category: 'Nasjonale faglige retningslinjer'
                        }
                      },
                      {
                        type: 'generic',
                        url: '#6',
                        fields: {
                          heading: 'Lungekreft, mesoteliom og thymom',
                          category: 'Handlingsprogram'
                        }
                      }
                    ]}
                  />
                </Box>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="row">
        <div className="col-xs-12">
          <div className="l-mt-4">
            <Link href="#a" small icon="../icons/method.svg">
              Om pakkeforløpet
            </Link>
            <div className="hide-on-print">
              <br />
              <Link href="#a" small icon="../icons/print.svg">
                Skriv ut hele pakkeforløpet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="l-mt-4">
      <Box color="grey" square noPadding>
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
  </>
);

export default TreatmentPageA;
