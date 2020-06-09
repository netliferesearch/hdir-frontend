import React, { useState } from 'react';
import Collapsible from '../components/Collapsible';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import SectionSidebar from '../components/SectionSidebar';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import ProductSearch from '../components/ProductSearch';
import Quote from '../components/Quote';
import { dummyFlatTree } from '../components/dummyFlatTree'

const MemoPageEdit = () => {
  const [toggle, setToggle] = useState(false);
  
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
            ]}
          />
          <div className="l-layout">
            <aside className="l-hide-to-lg l-sidebar l-bleed-right">
              <SectionSidebar
                heading="Rundskriv"
                icon="./icons/Rundskriv_Veileder_til_lov.svg"
              />
            </aside>
            <div className="l-article">
              <div className="b-profession-picker  b-profession-picker--negative-margin">
                { // onclick="document.getElementById('profession-picker').classList.toggle('hide');" 
                }
                <label for="profession-selector" className="b-profession-picker__label"><button onClick={() => setToggle(!toggle)} className="b-button--clean b-profession-picker__button">Tilpass innholdet til meg</button></label>
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
            />
            <ChapterHeading
              heading="Overskrift rundskriv EDiT"
              h="h1"
              clean
            />
            

            <div className="l-mt-2 l-mb-3">
              <h2>Merknader til § 5 – 1. ledd</h2>
              <Collapsible
                h="h3"
                heading="§5 – 1.ledd"
                size="small">
                <Quote>
                  <p>
                    Rundt 15 prosent av det legemeldte sykefraværet i Norge skyldes
                    psykiske lidelser. Andelen uføretrygdede med en psykisk lidelse
                    er på noe over 30 prosent. Blant personer som faller ut av
                    arbeidslivet, utgjør personer med psykiske lidelser en stor og
                    økende gruppe.
              </p>
                <p>
                  Norske og internasjonale studier viser at 30 – 50 prosent av den
                  voksne befolkningen vil få en psykisk lidelse i løpet av livet.
              </p>
                <ul>
                  <li>a. Befolkning</li>
                  <li>b. Skjermer</li>
                  <li>c. Tastaturer</li>
                </ul>
                <p>
                  Dette omfatter tiltak som kan bidra til å forhindre at psykiske
                  plager og lidelser oppstår (primærforebygging).
              </p>
                    <p className="b-quote__footnote">
                      Fotnote:
                <br />0 Tilføyd ved lov 24 juni 2011 nr. 30 (ikr. 1 jan 2012
                iflg. res. 16 des 2011 nr. 1252). Endres ved lov 16 juni 2017
                nr. 55 (ikr. fra den tid Kongen bestemmer).
              </p>
                  </Quote>
                </Collapsible>
                <div className="l-ml-2">
                  <h3 className="l-mb-1">Merknad</h3>
                  <p>
                    Stønad etter honorartakst innebærer at pasienten fritas fra å betale egenandel.
                  </p>
                  <p>
                    Formålet med første ledd er å gi myndighetene oversikt over
                    helsepersonelldekningen, og dermed ha mulighet til å iverksette
                    styringstiltak ved behov. Andre ledd skal gi tilsynsmyndigheten
                    mulighet til å vurdere tilsynsmessig oppfølgning.
                  </p>
                  <p>Sist faglig oppdatert: 11. juni 2020</p>
                </div>
              </div>

              <div className="l-mt-2 l-mb-3">
                <h2 className="l-mb-1">Merknader til takst 123 – beskrivelse</h2>
                <div className="l-ml-2">
                  <h3>Merknad</h3>
                  <p>
                    Stønad etter honorartakst innebærer at pasienten fritas fra å betale egenandel.
                  </p>
                  <p>
                    Formålet med første ledd er å gi myndighetene oversikt over
                    helsepersonelldekningen, og dermed ha mulighet til å iverksette
                    styringstiltak ved behov. Andre ledd skal gi tilsynsmyndigheten
                    mulighet til å vurdere tilsynsmessig oppfølgning.
                  </p>
                  <p>Sist faglig oppdatert: 11. juni 2020</p>
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

export default MemoPageEdit;
