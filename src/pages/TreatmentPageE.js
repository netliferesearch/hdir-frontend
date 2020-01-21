import React from 'react';
import shortid from 'shortid';

import Link from '../components/Link';
import Button from '../components/Button';
import ChapterHeading from '../components/ChapterHeading';
import Collapsible from '../components/Collapsible';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import NavList from '../components/NavList';
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
        <div className="l-mt-3">
          <p className="h3 h3--light l-mb-2">
            Forløpsalternativ i pakkeforløp:{' '}
            <a href="#somelink">
              Mistanke om psykoseutvikling og psykoselidelser
            </a>
          </p>
        </div>
        <div className="row l-mt-3">
          <div className="col-xs-12 col-md-8">
            <ChapterHeading
              heading="Mistanke om psykoseutvikling"
              line="none"
              h="h1"
            />
          </div>
          <div className="col-xs-12 col-md-4 b-flex b-flex--right">
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
            <div className="l-mt-3">
              <Collapsible
                heading="Inngang til pakkeforløpet"
                smallContent
                collapsed
                subheadingContent={
                  <>
                    <IconWithText
                      text="Innen 24 timer (døgnenhet)/inntil 7 dager (poliklinikk) "
                      icon="../icons/clock.svg"
                      size="small"
                    />
                    <div className="t--small t--grey">
                      Fra henvisning er mottatt til første fremmøte ved
                      spesialisthelsetjenesten
                    </div>
                  </>
                }
                id={shortid.generate()}
              >
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Mistanke om psykoseutvikling"
                      size="medium"
                      category="AKTIVITET"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Vurdering av av varseltegn og symptomer"
                      size="medium"
                      category="AKTIVITET"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Kartlegging og henvisning"
                      size="medium"
                      category="AKTIVITET"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Dialog med pasient og/eller foreldre, ev. pårørende"
                      size="medium"
                      category="AKTIVITET"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Pakkeforløpet starter"
                      size="medium"
                      category="AKTIVITET"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Særlige forhold – barn og unge"
                      size="medium"
                      category="AKTIVITET"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Registrering av koder"
                      size="medium"
                      category="AKTIVITET"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                </div>
              </Collapsible>
            </div>
            <div className="l-mt-3">
              <Collapsible
                heading="Kartlegging og utredning"
                smallContent
                collapsed
                subheadingContent={
                  <>
                    <IconWithText
                      text="Inntil 14 dager (døgnenhet)/inntil 42 dager (poliklinikk) "
                      icon="../icons/clock.svg"
                      size="small"
                    />
                    <p className="t--small t--grey">
                      Fra henvisning er mottatt til første fremmøte ved
                      spesialisthelsetjenesten
                    </p>
                  </>
                }
                id={shortid.generate()}
              >
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Første samtale"
                      size="medium"
                      category="AKTIVITET"
                      collapsed
                      subheadingContent={
                        <span className="t--grey">#behandler #pasient</span>
                      }
                      id={shortid.generate()}
                    >
                      <p>
                        Hensikten med første samtale er å avklare hva som er
                        pasientens og/eller foreldres, ev. pårørendes behov, mål
                        og ønsker for behandling og oppfølging. Ved behov, bør
                        det legges til rette for samtale utenfor institusjonen.
                        Behandler skal bidra til å etablere en trygg ramme for
                        åpenhet og tillit.
                      </p>
                      <div className="l-mt-1">
                        <Collapsible
                          heading="Beskrivelse av aktiviteten"
                          size="small"
                        >
                          abc...
                        </Collapsible>
                      </div>
                      <div className="l-mt-1">
                        <Collapsible
                          heading="Begrunnelse"
                          size="small"
                          collapsed
                        >
                          <p>
                            <a href="#a">- Relatert retningslinje 1</a>
                            <br />
                            <a href="#a">- Relatert retningslinje 2</a>
                            <br />
                            <a href="#a">- Relatert rundskriv 1</a>
                            <br />
                            <a href="#a">- Relatert rundskriv 2</a>
                          </p>
                          <p>
                            <a href="#b">
                              - Relatert kapittel fra retningslinje
                            </a>
                            <br />
                            <a href="#b">- Relatert kapittel fra rundskriv</a>
                          </p>
                          <p>
                            <a href="#b">- Relatert anbefaling 1</a>
                            <br />
                            <a href="#b">- Relatert anbefaling 2</a>
                            <br />
                            <a href="#b">- Relatert lovfortlokning 1</a>
                            <br />
                            <a href="#b">- Relatert lovfortolkning 2</a>
                          </p>
                          <div className="l-mt-3 t-sm-right">
                            <Link href="#a" secondary small>
                              Sist faglig oppdatert: 11. august 2018
                            </Link>
                          </div>
                        </Collapsible>
                      </div>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Kartlegging og utredning"
                      size="medium"
                      category="AKTIVITET"
                      subheadingContent={
                        <span className="t--grey">#behandler #pasient</span>
                      }
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Klinisk beslutning"
                      size="medium"
                      category="AKTIVITET"
                      subheadingContent={
                        <span className="t--grey">#forløpskoordinator</span>
                      }
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                </div>
              </Collapsible>
            </div>
            <div className="l-mt-3">
              <Collapsible
                heading="Behandling og oppfølging"
                smallContent
                collapsed
                id={shortid.generate()}
              >
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Behandling av ikke-småcellet lungekreft"
                      size="medium"
                      category="AKTIVITET"
                      subheadingContent={
                        <span className="t--grey">#behandler #pasient</span>
                      }
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Behandling av småcellet lungekreft"
                      size="medium"
                      category="AKTIVITET"
                      subheadingContent={
                        <span className="t--grey">#behandler #pasient</span>
                      }
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Øyeblikkelig hjelp ved akutte tilstander"
                      size="medium"
                      category="AKTIVITET"
                      subheadingContent={
                        <span className="t--grey">#behandler #pasient</span>
                      }
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Støttebehandling og sykepleie"
                      size="medium"
                      category="AKTIVITET"
                      subheadingContent={
                        <span className="t--grey">#behandler #pasient</span>
                      }
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                </div>
              </Collapsible>
            </div>
            <div className="l-mt-3">
              <Collapsible
                heading="Ut av pakkeforløp"
                smallContent
                collapsed
                id={shortid.generate()}
              >
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Avslutning i psykisk helsevern"
                      size="medium"
                      category="AKTIVITET"
                      subheadingContent={
                        <span className="t--grey">
                          #behandler #kommune #forløpskoordinator #pasient
                        </span>
                      }
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                </div>
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
        </div>
      </main>
      <div className="row">
        <div className="col-xs-12">
          <div className="l-mt-4">
            <Button clean small icon="../icons/print.svg">
              Skriv ut hele pakkeforløpet
            </Button>
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
