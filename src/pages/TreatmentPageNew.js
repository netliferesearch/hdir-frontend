import React from 'react';
import shortid from 'shortid';
import Button from '../components/Button';
import Collapsible from '../components/Collapsible';
import ChapterHeading from '../components/ChapterHeading';
import IconWithText from '../components/IconWithText';
import PageMeta from '../components/PageMeta';
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
                heading="Psykoselidelser, inkludert mistanke om psykoseutvikling – barn, unge og voksne"
                h="h1"
                line="none"
              />
              <div className="b-flex b-flex--center b-flex--skip-mobile l-mb-2">
                <div className="t--small u-right-sm">Vis forløpet som:</div>
                <div className="">
                  <FilterList list={['Tekst', 'Flytdiagram']} />
                </div>
              </div>
              <Collapsible
                heading="1. Henvisning og start"
                id="nr1-henvisning-og-start"
                smallContent
                background
                collapsed
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
              >
                <Collapsible
                  heading="Grunnlag for henvisning"
                  size="medium"
                  category="AKTIVITET"
                  id="test2"
                >
                  <p>abc abc.</p>
                </Collapsible>

                <Collapsible
                  heading="Særlige forhold – barn og unge"
                  size="medium"
                  category="AKTIVITET"
                  id="test3"
                >
                  <p>abc abc.</p>
                </Collapsible>
                <Collapsible
                  heading="Kartlegging og henvisning"
                  category="AKTIVITET"
                  size="medium"
                  id="test4"
                >
                  <p>abc abc.</p>
                </Collapsible>
                <Collapsible
                  heading="Dialog med pasient og/eller foreldre, ev. pårørende"
                  category="AKTIVITET"
                  size="medium"
                >
                  <p>abc abc.</p>
                </Collapsible>
                <Collapsible
                  heading="Start pakkeforløp"
                  category="AKTIVITET"
                  size="medium"
                >
                  <p>abc abc.</p>
                </Collapsible>
              </Collapsible>

              <Collapsible
                heading="2. Kartlegging og utredning"
                id="nr2-kartlegging"
                background
                smallContent
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
              >
                <p>abc abc.</p>
              </Collapsible>

              <ChapterHeading
                heading="Om pakkeforløpet"
                url="#a"
              />

            
              

            </div>
          </div>
          <div className="l-mt-4">
            <PageMeta
              editDate="11. august 2018"
            />
          </div>
          <div className="l-mt-2">
            <Button clean small icon="../icons/print.svg">
              Skriv ut / lag PDF
            </Button>

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