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
        <div className="l-mt-3">
          <ChapterHeading heading="Lungekreft" line="none" h="h1" />
        </div>
        <div className="row l-mt-1">
          <div className="col-xs-12 col-md-6 l-mt-1">
            <IconWithText text="Pakkeforløp" icon="../icons/Pakkeforløp.svg" />
          </div>
          <div className="col-xs-12 col-md-6 l-mt-1 t-small t-lg-right">
            <Link href="#a">Hva er et pakkeforløp?</Link>
          </div>
        </div>
        <div className="row bottom-xs l-mt-2">
          <div className="col-xs-12 col-md-4 col-lg-7">
            <div className="t--small t--grey">VIS FORLØPET SOM</div>
            <div className="l-mt-1">
              <FilterList list={['Tekst', 'Flytdiagram']} />
            </div>
          </div>
          <div className="col-xs-12 col-md-8 col-lg-5">
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
                      heading="Dialog med pasient og/eller foreldre, ev. pårørende"
                      category="AKTIVITET"
                      subheadingContent={
                        <span className="t--grey">
                          #henviser #pasient #pårørende
                        </span>
                      }
                      size="medium"
                      id={shortid.generate()}
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
                          id={shortid.generate()}
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
            <div className="l-mt-3">
              <Collapsible
                heading="Utredning av lungekreft"
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
                      21 kalenderdager fra første fremmøte i utredende avdeling
                      til avsluttet utredning (beslutning tas)
                      </li>
                      <li className="b-narrow-list__item t--small t--grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                      </li>
                    </ul>
                  </>
                }
                id={shortid.generate()}
              >
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Utredning"
                      size="medium"
                      category="AKTIVITET"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Fastettelse av diagnose og stadieinndeling"
                      size="medium"
                      category="AKTIVITET"
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
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Informasjon og dialog med pasienten"
                      size="medium"
                      category="AKTIVITET"
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
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>

                  <div className="l-mt-2">
                    <Collapsible
                      heading="Ansvarlig for utredning"
                      size="medium"
                      category="Informasjon"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Hyppighet oppståtte komplikasjoner"
                      size="medium"
                      category="Informasjon"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Registrering av koder"
                      size="medium"
                      category="Informasjon"
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
                heading="Behandling av lungekreft"
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
                    </ul>
                  </>
                }
                id={shortid.generate()}
              >
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Behandling av ikke-småcellet lungekreft"
                      size="medium"
                      category="AKTIVITET"
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
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Rehabilitering"
                      size="medium"
                      category="AKTIVITET"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Informasjon og dialog med pasienten"
                      size="medium"
                      category="AKTIVITET"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Hovedgrupper av behandlingsforløp"
                      size="medium"
                      category="Informasjon"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Hyppigst oppståtte komplikasjoner"
                      size="medium"
                      category="Informasjon"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Ansvarlig for behandlingen"
                      size="medium"
                      category="Informasjon"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Registrering av koder"
                      size="medium"
                      category="Informasjon"
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
                heading="Oppfølging og kontroll ved lungekreft"
                smallContent
                id={shortid.generate()}
              >
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Kontroll"
                      size="medium"
                      category="AKTIVITET"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Håndtering av tilbakefall"
                      size="medium"
                      category="AKTIVITET"
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
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Rehabilitering"
                      size="medium"
                      category="AKTIVITET"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Informasjon og dialog med pasienten"
                      size="medium"
                      category="AKTIVITET"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Palliasjon"
                      size="medium"
                      category="AKTIVITET"
                      id={shortid.generate()}
                    >
                      <p>abc abc.</p>
                    </Collapsible>
                  </div>
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Ansvarlig for oppfølgingen"
                      size="medium"
                      category="Informasjon"
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
                heading="Ut av pakkeforløpet"
                smallContent
                id={shortid.generate()}
              >
                <div className="col-xs-12 col-md-10 col-md-offset-1">
                  <div className="l-mt-2">
                    <Collapsible
                      heading="Oppfølging hos fastlege"
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
            <Button clean small icon="../icons/print.svg" onClick={() => window.location.href='file.doc'}>
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
