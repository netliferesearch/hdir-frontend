import React, { useState } from 'react';
import NavList from '../components/NavList';
import ChapterHeading from '../components/ChapterHeading';
import Button from '../components/Button';
import Box from '../components/Box';
import Link from '../components/Link';
import PageMeta from '../components/PageMeta';
import LongShortHeading from '../components/LongShortHeading';
import SectionSidebar from '../components/SectionSidebar';
import InputSearch from '../components/InputSearch';
import Breadcrumbs from '../components/Breadcrumbs';
import Select from '../components/Select';

const ProductPage = () => {
  const [searchResults, setSearchResults] = useState('');
  
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
        <div className="l-mt-3">
          <LongShortHeading
            long="Nasjonal faglig retningslinje"
            short="Svangerskapsdiabetes"
            icon={'./icons/Retningslinjer_Veiledere_Faglige_rad.svg'}
            url="#a"
            linkText="Hva er nasjonal faglig retningslinje"
          />
        </div>
        <div className="row l-mb-2 l-mt-2">
          <div className="col-xs-12 col-md-8 l-mt-1">
            <InputSearch
              autoFocus={true}
              label={'Søk i retningslinjen'}
              showSuggestions={false}
              fnChange={(value) => setSearchResults(value)}
            />
          </div>
          <div className="col-xs-12 col-md-4 l-mt-1">
            <Select label="Vis kun innhold for" placeholder="Velg" options={['Option 1', 'Option 2']} stacked custompos />
          </div>
        </div>
        <div className="l-layout">
          <aside className="l-hide-to-lg l-sidebar l-bleed-right">
            <SectionSidebar
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
          <div className="l-article l-article--topline">
          {
            searchResults ? (
              <>
                <h2 className="l-mt-1">6 treff på «{searchResults}» i retningslinjen</h2>
                
                <div className="col-xs-12 l-mt-2">
                  <ChapterHeading
                    heading="Anbefalinger"
                    h={'h3'}
                    clean
                  />
                  <hr className="b-hr b-hr--blue" />
                  <NavList
                    noArrow
                    list={[
                      {
                        title: ["Lavterskel", <strong>tilbud</strong>],
                        meta: '1. Fellesdel: Ledelse, styring og brukermedvirkning',
                        url: '#a'
                      },
                      {
                        title: ["Tilpasset ", <strong>tilbud</strong>],
                        meta: '1. Fellesdel: Ledelse, styring og brukermedvirkning',
                        url: '#a'
                      },
                      {
                        title: 'Tannehelsetjenesten',
                        meta: '1. Fellesdel: Ledelse, styring og brukermedvirkning',
                        url: '#a'
                      },
                      {
                        title: ["Oversikt over ", <strong>tilbud</strong>],
                        meta: '1. Fellesdel: Ledelse, styring og brukermedvirkning',
                        url: '#a'
                      },
                    ]}
                  />
                </div>
                <div className="col-xs-12 l-mt-3">
                  <ChapterHeading
                    heading="Kapitler"
                    h={'h3'}
                    clean
                  />
                  <hr className="b-hr b-hr--blue" />
                  <NavList
                    noArrow
                    list={[
                      {
                        title: '4.1 Veiing og måling',
                        url: '#a'
                      },
                    ]}
                  />
                </div>
              </>
            ) : (
              <>
            <div className="col-xs-12 l-mt-1">
              <ChapterHeading
                heading="1. Fellesdel: Ledelse, styring og brukermedvirkning"
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
                        title: 'Styringssystem',
                        url: '#'
                      },
                      {
                        title:
                          'Ansvars- og oppgavefordeling',
                        url: '/kapittel#anbefaling1'
                      },
                      {
                        title: 'Kompetanse',
                        url: '#'
                      },
                      {
                        title: 'Kvalitet og pasientsikkerhet',
                        url: '#'
                      },
                      {
                        title: 'Lavterskeltilbud',
                        url: '#'
                      },
                      {
                        title: 'Brukermedvirkning',
                        url: '#'
                      },
                      {
                        title: 'Tilpasset tilbud',
                        url: '#'
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          
            <div className="col-xs-12 l-mt-3">
              <ChapterHeading
                heading="2. Fellesdel: Samhandling og samarbeid"
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
                        title: 'Koordinerende enhet',
                        url: '#a'
                      },
                      {
                        title: 'Barnevernet',
                        url: '#a'
                      },
                      {
                        title: 'Folkehelsearbeid',
                        url: '#a'
                      },
                      {
                        title: 'Fastlege',
                        url: '#a'
                      },
                      {
                        title: 'Kommunelegen',
                        url: '#a'
                      },
                      {
                        title: 'Psykolog',
                        url: '#a'
                      },
                      {
                        title: 'NAV',
                        url: '#a'
                      },
                      {
                        title: 'Tannhelsetjenesten',
                        url: '#a'
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            
            <div className="col-xs-12 l-mt-3">
              <ChapterHeading
                heading="3. Fellesdel: Opplysningsplikt"
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
                        title: 'Opplysningsplikt',
                        url: '#a'
                      },
                      {
                        title: 'Hvordan melde fra',
                        url: '#a'
                      },
                      {
                        title: 'Opplysningsplikt til nødetater og avvergingsplikt',
                        url: '#a'
                      },
                      {
                        title: 'Styringssystem opplysningsplikt',
                        url: '#a'
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            
            
            <div className="col-xs-12 l-mt-3">
              <ChapterHeading
                heading="4. Helsestasjon 0–5 år"
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
                        title: '4.1 Veiing og måling',
                        url: '#a'
                      },
                      {
                        title: '4.2 Hørsel, syn og språk',
                        url: '#a'
                      },
                      {
                        title: 'Helsestasjonsprogrammet',
                        url: '#a'
                      },
                      {
                        title: 'Lege',
                        url: '#a'
                      },
                      {
                        title: 'Hjemmebesøk',
                        url: '#a'
                      },
                      {
                        title: 'Munnundersøkelse',
                        url: '#a'
                      },
                      {
                        title: 'Gruppekonsultasjoner',
                        url: '#a'
                      },
                      {
                        title: 'Kosthold',
                        url: '#a'
                      },
                      {
                        title: 'Psykomotorisk utvikling',
                        url: '#a'
                      },
                      {
                        title: 'Fysioterapeut',
                        url: '#a'
                      },
                      {
                        title: 'Seksuell utvikling',
                        url: '#a'
                      },
                      {
                        title: 'Tobakksfritt miljø',
                        url: '#a'
                      },
                      {
                        title: 'Oppfølgende hjemmebesøk',
                        url: '#a'
                      },
                      {
                        title: 'Samspill',
                        url: '#a'
                      },
                      {
                        title: 'Foreldres psykiske helse',
                        url: '#a'
                      },
                      {
                        title: 'Foreldreveiledningsprogrammer',
                        url: '#a'
                      },
                      {
                        title: 'Vold, overgrep og omsorgssvikt',
                        url: '#a'
                      },
                      {
                        title: 'Barnehage',
                        url: '#a'
                      },
                      {
                        title: 'Barnevaksinasjon',
                        url: '#a'
                      },
                      {
                        title: 'Oppfølgingsgrupper',
                        url: '#a'
                      },
                      {
                        title: 'Barn som ikke møter',
                        url: '#a'
                      },
                      {
                        title: 'Samarbeid mellom helsesykepleier og lege',
                        url: '#a'
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            
            <div className="col-xs-12 l-mt-3">
              <ChapterHeading
                heading="5. Skolehelsetjenesten 5–20 år"
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
                        title: 'Samhandling med skole',
                        url: '#a'
                      },
                      {
                        title: 'Helseundersøkelse og helsesamtale',
                        url: '#a'
                      },
                      {
                        title: 'Vold, overgrep og omsorgssvikt',
                        url: '#a'
                      },
                      {
                        title: 'Oppfølging ved behov',
                        url: '#a'
                      },
                      {
                        title: 'Andre overgripende tiltak',
                        url: '#a'
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            
            
            <div className="col-xs-12 l-mt-3">
              <ChapterHeading
                heading="6. Helsestasjon for ungdom"
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
                        title: 'Helsestasjon for ungdom',
                        url: '#a'
                      },
                      {
                        title: 'Oversikt over helsetilstand',
                        url: '#a'
                      },
                      {
                        title: 'Oversikt over tilbud',
                        url: '#a'
                      },
                      {
                        title: 'Bakenforliggende årsaker',
                        url: '#a'
                      },
                      {
                        title: 'Kjønns- og legningsnøytralt språk',
                        url: '#a'
                      },
                      {
                        title: 'Lege i HFU',
                        url: '#a'
                      },
                      {
                        title: 'Seksuell helse',
                        url: '#a'
                      },
                      {
                        title: 'Prevensjon',
                        url: '#a'
                      },
                      {
                        title: 'Testing og behandling for SUI',
                        url: '#a'
                      },
                      {
                        title: 'Oppdage psykiske plager og lidelser',
                        url: '#a'
                      },
                      {
                        title: 'Oppfølgingssamtaler',
                        url: '#a'
                      },
                      {
                        title: 'Besøk for ungdomsskoleelever',
                        url: '#a'
                      },
                      {
                        title: 'Tiltak for å nå gutter',
                        url: '#a'
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            
            <div className="col-xs-12 l-mt-3">
              <ChapterHeading
                heading="7. Metode og prosess"
                url="#a"
                clean
              />
              <hr className="b-hr b-hr--blue" />
            </div>
            
            </>)
          }
            
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
