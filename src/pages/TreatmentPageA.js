import React from 'react';
import shortid from 'shortid';

import Link from '../components/Link';
import Button from '../components/Button';
import ChapterHeading from '../components/ChapterHeading';
import Collapsible from '../components/Collapsible';
import Box from '../components/Box';
import NavList from '../components/NavList';
import Breadcrumbs from '../components/Breadcrumbs';
import Select from '../components/Select';
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
        <div className="row l-mt-3">
          <div className="col-xs-12 col-md-8">
            <ChapterHeading heading="Lungekreft" line="none" h="h1" />
          </div>
          <div className="col-xs-12 col-md-4 b-flex b-flex--right b-flex--skip-mobile">
            <IconWithText text="Pakkeforløp" subtext="Hva er dette?" link="#" icon="../icons/Pakkeforløp.svg" />
          </div>
        </div>
        <div className="row bottom-xs l-mt-2">
          <div className="col-xs-12 col-md-7 col-lg-8 b-flex b-flex--center">
            <div className="t--small u-right-sm">Vis forløpet som:</div>
            <div className="">
              <FilterList list={['Tekst', 'Flytdiagram']} />
            </div>
          </div>
          <div className="col-xs-12 col-md-5 col-lg-4">
            <div className="l-mt-1">
              <Select
                label="Vis viktigste for:"
                placeholder="Velg"
                simple
                options={['Henviser', 'Forløpkoordinator', 'Behandler']}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
              <Collapsible
                heading="Inngang til pakkeforløpet"
                smallContent
                subheadingContent={
                  <>
                    <IconWithText
                      text="Forløpstid"
                      icon="../icons/clock.svg"
                      size="small"
                    />
                    <ul className="b-narrow-list">
                      <li className="b-narrow-list__item t--small t--grey">
                      7 kalenderdager fra henvisning mottatt til første fremmøte
                      utredende avdeling
                      </li>
                      <li className="b-narrow-list__item t--small t--grey">
                      Noe annet om forløpstid her
                      </li>
                    </ul>
                  </>
                }
                id="test1"
              >
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Mistanke om psykoseutvikling"
                      size="medium"
                      category="AKTIVITET"
                      id="test2"
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>

                  <div className="l-mt-2">
                    <Collapsible
                      heading="Vurdering av av varseltegn og symptomer"
                      size="medium"
                      category="AKTIVITET"
                      id="test3"
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Dialog med pasient og/eller foreldre, ev. pårørende"
                      category="AKTIVITET"
                      size="medium"
                      id="test4"
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Pakkeforløpet starter"
                      category="AKTIVITET"
                      size="medium"
                    >
                      <>
                        <p>
                          Hensikten med første samtale er å avklare hva som er
                          pasientens og/eller foreldres, ev. pårørendes behov,
                          mål og ønsker for behandling og oppfølging. Ved behov,
                          bør det legges til rette for samtale utenfor
                          institusjonen. Behandler skal bidra til å etablere en
                          trygg ramme for åpenhet og tillit.
                        </p>
                        <Collapsible
                          heading="Beskrivelse av aktiviteten"
                          size="small"
                          id="test5"
                          bold={false}
                        >
                          <p>abc abc abc.</p>
                        </Collapsible>
                        <br />
                        <Collapsible
                          heading="Begrunnelse"
                          size="small"
                          id={shortid.generate()}
                          bold={false}
                        >
                          <p>abc abc abc.</p>
                        </Collapsible>
                        <br />
                        <Collapsible
                          heading="Informasjon til pasienten"
                          size="small"
                          id={shortid.generate()}
                          bold={false}
                        >
                          <p>abc abc abc.</p>
                        </Collapsible>
                      </>
                    </Collapsible>
                  </div>
                </div>
              </Collapsible>
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
            <div className="row">
              <div className="col-xs-12 l-mt-4">
                <Box color="green">
                  <ChapterHeading
                    heading="Materiell til pasienter og pårørende"
                    subheading="LAST NED TRYKKSAKER"
                    h="h3"
                    line="none"
                  />
                  <NavList
                    small
                    list={[
                      {
                        title: 'FAKTAARK',
                        url: '#a',
                        meta: 'Pakkeforløp på 1-2-3',
                        infoText: 'PDF',
                        file: true
                      }
                    ]}
                  />
                </Box>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 l-mt-4">
                <Box>
                  <h3 className="h4">RELATERTE PRODUKTER</h3>
                  <div className="l-mt-1">
                    <NavList
                      small
                      list={[
                        {
                          title: 'Relatert retninglinje',
                          topic: 'Nasjonal faglig retninglinje',
                          url: '#a'
                        },
                        {
                          title: 'Lungekreft, mesoteliom og thymom',
                          topic: 'Handlinngsprogram',
                          url: '#b'
                        }
                      ]}
                    />
                  </div>
                </Box>
              </div>
            </div>
        </div>
      </main>
      <div className="row">
        <div className="col-xs-12">
          <div className="l-mt-4">
            <Button clean small icon="../icons/print.svg" onClick={() => window.location.href='file.doc'}>
              Skriv ut hele pakkeforløpet
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div className="l-mt-4">
      <Box color="grey" square>
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
