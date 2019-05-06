import React from 'react';
import shortid from 'shortid';

import Link from '../components/Link';
import ChapterHeading from '../components/ChapterHeading';
import Collapsible from '../components/Collapsible';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import List from '../components/List';
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
          <ChapterHeading heading="Lungekreft" line="none" h="h1" />
        </div>
        <div className="row l-mt-2">
          <div className="col-xs-12 col-md-6">
            <IconWithText text="Pakkeforløp" icon="../icons/Pakkeforløp.svg" />
          </div>
          <div className="col-xs-12 col-md-6 t-body-text t-lg-right">
            <Link href="#a">Hva er et pakkeforløp?</Link>
          </div>
        </div>
        <div className="row l-mt-2">
          <div class="col-xs-12">
            <span class="t--small t--grey">VIS FORLØPET SOM</span>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-9 col-lg-10 l-mt-1">
            <FilterList list={['Tekst', 'Flytdiagram']} />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="l-mt-3">
              <Collapsible
                heading="Inngang til pakkeforløpet"
                smallContent
                treatmentsDuration="7 kalenderdager fra henvisning mottatt til første fremmøte utredende avdeling"
                id={shortid.generate()}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </Collapsible>
            </div>
            <div className="l-mt-3">
              <Collapsible
                heading="Utredning av lungekreft"
                smallContent
                treatmentsDuration="21 kalenderdager fra første fremmøte i utredende avdeling til avsluttet utredning (beslutning tas)"
                id={shortid.generate()}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </Collapsible>
            </div>
            <div className="l-mt-3">
              <Collapsible
                heading="Behandling av lungekreft"
                smallContent
                treatmentsDuration="7 kalenderdager (medikamentell behandling)/14 kalenderdager (kirurgi eller cellegift) fra avsluttet utredning til start behandling"
                id={shortid.generate()}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </Collapsible>
            </div>
            <div className="l-mt-3">
              <Collapsible
                heading="Oppfølging og kontroll ved lungekreft"
                smallContent
                id={shortid.generate()}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </Collapsible>
            </div>
            <div className="l-mt-3">
              <Collapsible
                heading="Ut av pakkeforløpet"
                smallContent
                id={shortid.generate()}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </Collapsible>
            </div>
            <div className="l-mt-3">
              <hr className="b-hr b-hr--black b-hr--thick" />
            </div>
            <ChapterHeading
              heading="Om pakkeforløpet"
              subheading="kapittel"
              line="none"
              url="#a"
            />
            <div className="l-mt-4">
              <Link wideButton arrow color="purple">
                Les mer om symptomer, årsaker og behandling av lungekreft på{' '}
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
            <br />
            <Link href="#a" small icon="../icons/print.svg">
              Skriv ut hele pakkeforløpet
            </Link>
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
