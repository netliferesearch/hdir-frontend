import React, { useState } from 'react';
import NavList from '../components/NavList';
import ChapterHeading from '../components/ChapterHeading';
import Button from '../components/Button';
import Link from '../components/Link';
import PageMeta from '../components/PageMeta';
import LongShortHeading from '../components/LongShortHeading';
import SectionSidebar from '../components/SectionSidebar';
import ProductSearch from '../components/ProductSearch';
import Breadcrumbs from '../components/Breadcrumbs';
import { dummyFlatTree } from '../components/dummyFlatTree'

const ProductPage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="l-container">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          }
        ]}
      />
      <main id="main">
        <div className="l-mt-2">
          <LongShortHeading
            long="Rundskriv for helsepersonelloven med kommentarer"
            short="Helsepersonelloven med kommentarer"
            icon={'./icons/Rundskriv_Veileder_til_lov.svg'}
            url="#a"
            linkText="Hva er rundskriv"
          />
        </div>
        <div className="l-layout l-mt-2">
          <aside className="l-hide-to-lg l-sidebar l-bleed-right">
            <SectionSidebar
              list={[
                {
                  url: '#',
                  description: '1. Lovens formål, virkeområder og definisjoner'
                },
                {
                  url: '#',
                  description: '2. Krav til helsepersonells yrkesutøvelse',
                },
                {
                  url: '#',
                  description: '3. Krav til organisering og virksomhet',
                  active: true,
                },
              ]}
            />
          </aside>
          <div className="l-article l-article--topline">
            <div className="b-profession-picker">
              { // onclick="document.getElementById('profession-picker').classList.toggle('hide');" 
              }
              <label htmlFor="profession-selector" className="b-profession-picker__label"><button onClick={() => setToggle(!toggle)} className="b-button--clean b-profession-picker__button">Tilpass innholdet til meg</button></label>
              {
                toggle ? (
                  <div class="b-select l-mt-1 l-mb-3 col-md-6" id="profession-picker">
                    <select id="profession-selector" class="b-select__select">
                      <option disabled="" class="b-select__option">Velg målgruppe</option>
                      <option class="b-select__option">Lege</option>
                    </select>
                  </div>
                ) : null
              }
            </div>
            <ProductSearch
              label="rundskrivet"
              productId="0e87de78-2cb4-4a70-93a7-0d687443b71e"
              flatTree={dummyFlatTree}
              malGruppe={''}
              collapsed
            />

            <div className="b-lead b-lead--reset-spacing">
              <p>Hjerneslag er både en akuttmedisinsk tilstand og kronisk tilstand og derfor trengs en bred tilnærming og en helhetlig behandlingskjede for å ivareta de behov slagrammede trenger i de ulike faser i behandlingsforløpet. </p>
            </div>
            <div className="b-toggle-content l-mb-2" id="about-text">
              <div className="b-toggle-content__text">
                <p>I dette kapitlet presenteres Helsedirektoratets anbefalinger for å sikre en effektiv behandling til riktig tid i alle faser av behandlingsforløpet .</p>
                <p>I dette kapitlet presenteres Helsedirektoratets anbefalinger for å sikre en effektiv behandling til riktig tid i alle faser av behandlingsforløpet .</p>
                <p>I dette kapitlet presenteres Helsedirektoratets anbefalinger for å sikre en effektiv behandling til riktig tid i alle faser av behandlingsforløpet .</p>
                <p>I dette kapitlet presenteres Helsedirektoratets anbefalinger for å sikre en effektiv behandling til riktig tid i alle faser av behandlingsforløpet .</p>
              </div>
              <Button secondary onClick={() => document.getElementById('about-text').classList.toggle('show')}>Les hele</Button>
            </div>

            <div className="col-xs-12 l-mt-2">
              <ChapterHeading
                heading="1. Lovens formål, virkeområde og definisjoner"
                url="/kapittel"
                clean
              />
              <hr className="b-hr b-hr--blue" />
              <div className="l-hide-to-md">
                <div className="js-expand-list" data-start-limit="2">
                  <NavList
                    noArrow
                    list={[
                      {
                        title: '§ 1. Lovens formål',
                        url: '#'
                      },
                      {
                        title: '§ 2. Lovens virkeområde',
                        url: '#'
                      },
                      {
                        title: '§ 3. Definisjoner',
                        url: '#'
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="col-xs-12 l-mt-3">
              <ChapterHeading
                heading="2. Krav til helsepersonells yrkesutøvelse"
                url="#a"
                clean
              />
              <hr className="b-hr b-hr--blue" />
              <div className="l-hide-to-md">
                <div className="js-expand-list">
                  <NavList
                    noArrow
                    list={[
                      {
                        title: '§ 1. Lovens formål',
                        url: '#'
                      },
                      {
                        title: '§ 2. Lovens virkeområde',
                        url: '#'
                      },
                      {
                        title: '§ 3. Definisjoner',
                        url: '#'
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="col-xs-12 l-mt-3">
              <ChapterHeading
                heading="3. Krav til organisering og virksomhet"
                url="#a"
                clean
              />
              <hr className="b-hr b-hr--blue" />
              <div className="l-hide-to-md">
                <div className="js-expand-list">
                  <NavList
                    noArrow
                    list={[
                      {
                        title: '§ 1. Lovens formål',
                        url: '#'
                      },
                      {
                        title: '§ 2. Lovens virkeområde',
                        url: '#'
                      },
                      {
                        title: '§ 3. Definisjoner',
                        url: '#'
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <div className="l-mt-4">
        <PageMeta
          publishDate="11. august 2008"
          editDate="11. august 2018"
          url="#a"
        />
      </div>
      <div className="l-mt-2">
        <Button clean small icon="../icons/print.svg">
          Skriv ut hele retningslinjen
        </Button>

        <div className="col-xs-12 l-mt-2 l-mb-5">
          <Link href="#a" wideButton arrow color="purple">
            For å lese om symptomer, kostholdsråd og andre tips ved
            svangerskapsdiabetes, kan du gå til helsenorge.no.
          </Link>
        </div>
      </div>
    </div>
  )
};

export default ProductPage;
