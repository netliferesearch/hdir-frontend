import React from 'react';
import shortid from 'shortid';

import Link from '../components/Link';
import ChapterHeading from '../components/ChapterHeading';
import Collapsible from '../components/Collapsible';
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
          <div class="col-xs-12 col-md-4 col-lg-7">
            <div class="t--small t--grey">VIS FORLØPET SOM</div>
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
                options={['a', 'b', 'c', 'd']}
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
                      text="Forløpstid"
                      icon="../icons/clock.svg"
                      size="small"
                    />
                    <p className="t--small t--grey">
                      7 kalenderdager fra henvisning mottatt til første fremmøte
                      utredende avdeling
                    </p>
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
                        >
                          <p>abc abc abc.</p>
                        </Collapsible>
                        <br />
                        <Collapsible
                          heading="Begrunnelse"
                          size="small"
                          id={shortid.generate()}
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
                collapsed
                subheadingContent={
                  <>
                    <IconWithText
                      text="Forløpstid"
                      icon="../icons/clock.svg"
                      size="small"
                    />
                    <p className="t--small t--grey">
                      21 kalenderdager fra første fremmøte i utredende avdeling
                      til avsluttet utredning (beslutning tas)
                    </p>
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
                collapsed
                subheadingContent={
                  <>
                    <IconWithText
                      text="Forløpstid"
                      icon="../icons/clock.svg"
                      size="small"
                    />
                    <p className="t--small t--grey">
                      7 kalenderdager (medikamentell behandling)/14
                      kalenderdager (kirurgi eller cellegift) fra avsluttet
                      utredning til start behandling
                    </p>
                  </>
                }
                id={shortid.generate()}
              >
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
              </Collapsible>
            </div>
            <div className="l-mt-3">
              <Collapsible
                heading="Oppfølging og kontroll ved lungekreft"
                smallContent
                collapsed
                id={shortid.generate()}
              >
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
              </Collapsible>
            </div>
            <div className="l-mt-3">
              <Collapsible
                heading="Ut av pakkeforløpet"
                smallContent
                collapsed
                id={shortid.generate()}
              >
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
