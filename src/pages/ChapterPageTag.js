import React, { useState } from 'react';
import Collapsible from '../components/Collapsible';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import SectionSidebar from '../components/SectionSidebar';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import ProductSearch from '../components/ProductSearch';
import { dummyFlatTree } from '../components/dummyFlatTree'

const ChapterPageTag = () => {
  return (
    <>
      <main id="main">
        <div className="l-container">
          <Breadcrumbs
            border
            paths={[
              {
                name: 'Forsiden',
                href: '#a'
              },
              {
                name: 'Førerkortveileder',
                href: '#a'
              }
            ]}
          />
          <div className="l-layout">
            <aside className="l-hide-to-lg l-sidebar l-bleed-right">
              <SectionSidebar
                heading="Nasjonal faglig retningslinje"
                icon="../icons/Konferanser.svg"
                list={[
                  {
                    url: '#',
                    description: '1. Fellesdel: Ledelse, styring og brukermedvirkning'
                  },
                  {
                    url: '#',
                    description: '2. Fellesdel: Samhandling og samarbeid',
                  },
                  {
                    url: '#',
                    description: '3. Fellesdel: Opplysningsplikt'
                  },
                  {
                    url: '#',
                    description:
                      '4. Helsestasjon 0–5 år',
                    active: true,
                  },
                  {
                    url: '#',
                    description: '5. Skolehelsetjenesten 5–20 år'
                  },
                  {
                    url: '#',
                    description: '6. Helsestasjon for ungdom'
                  },
                  {
                    url: '#',
                    description: '7. Metode og prosess'
                  }
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
              label="retningslinjen"
              productId="0e87de78-2cb4-4a70-93a7-0d687443b71e"
              flatTree={dummyFlatTree}
              malGruppe={''}
            />
            <ChapterHeading
                heading="14. Midler som kan påvirke kjøreevnen (§§ 35–37)"
              h="h1"
              line="none"
            />
            <Collapsible
              background
              heading="Benzodiazepiner og benzodiazepinlignende legemidler – døgndoser"
              tag={{ title: 'Forskriftstekst med veiledning', description: '"Forskriftstekst med veiledning" inneholder fortolkning og veiledning til en forskriftsbestemmelse' }}
              date="Sist faglig oppdatert: 11. juni 2020"
            >
                <h3>Forskriftstekst</h3>
                <h4>Førerkortgruppe 1</h4>
                <p>Helsekrav oppfylt ved bruk av:</p>
                <ul>	<li><a href="https://www.legemiddelsok.no/sider/default.aspx?searchquery=N05BA04&amp;f=Han;MtI;Vir;ATC;Var;Mar;Mid;Avr;par;gen&amp;pane=0">Oksazepam</a> inntil 30 mg/døgn eller</li>	<li><a href="https://www.legemiddelsok.no/sider/default.aspx?searchquery=N05BA01&amp;f=Han;MtI;Vir;ATC;Var;Mar;Mid;Avr;gen;par;&amp;pane=0">Diazepam</a> inntil 10 mg/døgn.</li></ul>
            </Collapsible >
            <Collapsible
              background
              heading="Kortere tittel"
              tag={{ title: 'Forskriftstekst med veiledning' }}
              date="Sist faglig oppdatert: 11. juni 2020"
            >
                <h3>Forskriftstekst</h3>
                <h4>Førerkortgruppe 1</h4>
                <p>Helsekrav oppfylt ved bruk av:</p>
                <ul>	<li><a href="https://www.legemiddelsok.no/sider/default.aspx?searchquery=N05BA04&amp;f=Han;MtI;Vir;ATC;Var;Mar;Mid;Avr;par;gen&amp;pane=0">Oksazepam</a> inntil 30 mg/døgn eller</li>	<li><a href="https://www.legemiddelsok.no/sider/default.aspx?searchquery=N05BA01&amp;f=Han;MtI;Vir;ATC;Var;Mar;Mid;Avr;gen;par;&amp;pane=0">Diazepam</a> inntil 10 mg/døgn.</li></ul>
            </Collapsible >

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

export default ChapterPageTag;