import React from 'react';
import shortid from 'shortid';
import Collapsible from '../components/Collapsible';
import ChapterHeading from '../components/ChapterHeading';
import IconWithText from '../components/IconWithText';
import NavList from '../components/NavList';
import SectionSidebar from '../components/SectionSidebar';
import FilterList from '../components/FilterList';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import Link from '../components/Link';
import ProductSearch from '../components/ProductSearch';
import { dummyFlatTree } from '../components/dummyFlatTree'

const TreatmentPageNew = () => {
  
  return (
    <>
      <main id="main">
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
            ]}
          />
          <div className="l-layout">
            <aside className="l-hide-to-lg l-sidebar l-bleed-right">
              <SectionSidebar
                heading="Pakkeforløp"
                icon="../icons/Pakkeforløp.svg"
                list={[
                  {
                    url: '#',
                    description: '1. Lungekreft',
                    active: true
                  },
                  {
                    url: '#',
                    description: '2. Lungekreft'
                  },
                  {
                    url: '#',
                    description: '3. Lungekreft'
                  },
                ]}
              />
            </aside>
            <div className="l-article">
              <div className="b-profession-picker b-profession-picker--negative-margin">
                <label htmlFor="profession-selector" className="b-profession-picker__label"><button className="b-button--clean b-profession-picker__button" id="profession-picker">Tilpass innholdet til meg</button></label>
                <div className="b-select l-mt-1 l-mb-3 col-md-6 hide" id="profession-picker__content" hidden>
                  <select id="profession-selector" className="b-select__select" aria-hidden="true">
                    <option disabled="" className="b-select__option">Velg målgruppe</option>
                    <option className="b-select__option">Lege</option>
                  </select>
                </div>
              </div>
            <ProductSearch
              label="pakkeforløpet"
              productId="0e87de78-2cb4-4a70-93a7-0d687443b71e"
              flatTree={dummyFlatTree}
              malGruppe={''}
            />
              <ChapterHeading
                heading="Pakkeforløp for psykoseutvikling"
                h="h1"
                line="none"
              />
              <div className="col-xs-12 col-md-7 col-lg-8 b-flex b-flex--center l-mb-2">
                <div className="t--small u-right-sm">Vis forløpet som:</div>
                <div className="">
                  <FilterList list={['Tekst', 'Flytdiagram']} />
                </div>
              </div>
              <Collapsible
                heading="Inngang til pakkeforløpet"
                smallContent
                background
                metaContent={
                  <>
                    <IconWithText
                      text="Forløpstid"
                      icon="../icons/clock.svg"
                      size="small"
                    />
                    <p>
                      7 kalenderdager fra henvisning mottatt til første fremmøte
                      utredende avdeling
                    </p>
                  </>
                }
                id="test1"
              >
                <Collapsible
                  heading="Mistanke om psykoseutvikling"
                  size="medium"
                  category="AKTIVITET"
                  id="test2"
                >
                  <p>abc abc.</p>
                </Collapsible>

                <Collapsible
                  heading="Vurdering av av varseltegn og symptomer"
                  size="medium"
                  category="AKTIVITET"
                  id="test3"
                >
                  <p>abc abc.</p>
                </Collapsible>
                <Collapsible
                  heading="Dialog med pasient og/eller foreldre, ev. pårørende"
                  category="AKTIVITET"
                  size="medium"
                  id="test4"
                >
                  <p>abc abc.</p>
                </Collapsible>
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
                    <Collapsible
                      heading="Begrunnelse"
                      size="small"
                      id={shortid.generate()}
                      bold={false}
                    >
                      <p>abc abc abc.</p>
                    </Collapsible>
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
              </Collapsible>
              <ChapterHeading
                heading="Om pakkeforløpet"
                url="#a"
              />

            
              

            </div>
          </div>
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
  )

};

export default TreatmentPageNew;