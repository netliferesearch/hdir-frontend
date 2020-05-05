import React, { useState } from 'react';
import Collapsible from '../components/Collapsible';
import Button from '../components/Button';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import SectionSidebar from '../components/SectionSidebar';
import Alert from '../components/Alert';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import Link from '../components/Link';
import IconWithText from '../components/IconWithText';
import ProductSearch from '../components/ProductSearch';
import NavList from '../components/NavList';

const ChapterPage = () => {
  const [searchResults, setSearchResults] = useState('');
  
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
                name: 'Helsestasjons- og skolehelsetjenesten',
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
            <ProductSearch
              label="Søk i retningslinjen"
              fnChange={(value) => setSearchResults(value)}
            />
          </aside>
          <div className="col-md-7 col-md-offset-1 l-bleed-left">
            <Collapsible
              heading="Om behandling av svangerskapsdiabetes"
              size="small"
              smallContent
              id="someId1"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </Collapsible>
            <div>
              <Collapsible
                background
                heading="Anbefaling 1"
                id="someId1.1"
              >
              <Collapsible
                heading="Sterk anbefaling"
                subtle
                size="small"
                smallContent
              >
                <p>...Hva er en sterk anbefaling...</p>
              </Collapsible>
                <Alert status="success">
                  Vær oppmerksom på at dette atomet er på høring.
                </Alert>
                <p>
                  Kvinnen bør få kostveiledning og jevnlig oppfølging for å
                  oppnå tilfredsstillende blodsukker fastende og etter måltider,
                  og for å forhindre for stor vektøkning i svangerskapet. Det
                  anbefales at kostanamnese benyttes i dette arbeidet.
                </p>
                <p>
                  Kostrådene baseres på kostanamnesen og styres etter
                  glukoseverdier ved egenmåling. Mål: Fastende: {'<'}
                  5.3 mmol/l, 2 timer etter måltid: {'<'}
                  6.7 mmol/l (se anbefaling: Opplæring i egenmåling av glukose).
                  Kvinnen kan rådes til å følge et kosthold med en
                  karbohydratkvalitet og -mengde per måltid som gjør det enklere
                  å nå behandlingsmålene for glukose
                </p>
                <p>etc.</p>
              </Collapsible>
            </div>
            <div>
              <Collapsible
                heading="Det foreslås at HbA1c tas ved første svangerskapskonsultasjon for å oppdage udiagnostisert diabetes/hyperglykemi"
                id="anbefaling1"
                background
              >
              <Collapsible
                heading="Sterk anbefaling"
                subtle
                size="small"
                smallContent
              >
                <p>...Hva er en sterk anbefaling...</p>
              </Collapsible>
                <p>
                  Kvinnen bør få kostveiledning og jevnlig oppfølging for å
                  oppnå tilfredsstillende blodsukker fastende og etter måltider,
                  og for å forhindre for stor vektøkning i svangerskapet. Det
                  anbefales at kostanamnese benyttes i dette arbeidet.
                </p>
                <p>
                  Kostrådene baseres på kostanamnesen og styres etter
                  glukoseverdier ved egenmåling. Mål: Fastende: {'<'}
                  5.3 mmol/l, 2 timer etter måltid: {'<'}
                  6.7 mmol/l (se anbefaling: Opplæring i egenmåling av glukose).
                  Kvinnen kan rådes til å følge et kosthold med en
                  karbohydratkvalitet og -mengde per måltid som gjør det enklere
                  å nå behandlingsmålene for glukose
                </p>
                <p>etc.</p>
              </Collapsible>
            </div>
            <div>
              <Collapsible
                heading="Anbefaling 3 (h2)"
                id="someId3"
                date="Sist oppdatert: 16.oktober 2020"
                background
              >
              <Collapsible
                heading="Sterk anbefaling"
                subtle
                size="small"
                smallContent
              >
                <p>...Hva er en sterk anbefaling...</p>
              </Collapsible>
                <p>
                  Kvinnen bør få kostveiledning og jevnlig oppfølging for å
                  oppnå tilfredsstillende blodsukker fastende og etter måltider,
                  og for å forhindre for stor vektøkning i svangerskapet. Det
                  anbefales at kostanamnese benyttes i dette arbeidet.
                </p>
                <p>
                  Kostrådene baseres på kostanamnesen og styres etter
                  glukoseverdier ved egenmåling. Mål: Fastende: {'<'}
                  5.3 mmol/l, 2 timer etter måltid: {'<'}
                  6.7 mmol/l (se anbefaling: Opplæring i egenmåling av glukose).
                  Kvinnen kan rådes til å følge et kosthold med en
                  karbohydratkvalitet og -mengde per måltid som gjør det enklere
                  å nå behandlingsmålene for glukose
                </p>
                <p>etc.</p>
                <div>
                  <Collapsible
                    heading="Seksjon under: 1 (h3)"
                    size="medium"
                  >
                  </Collapsible >
                  <Collapsible
                    heading="Seksjon under: 2 (h3)"
                    size="medium"
                    id="someId4"
                  >
                    <p>
                      Kvinnen bør få kostveiledning og jevnlig oppfølging for å
                      oppnå tilfredsstillende blodsukker fastende og etter
                      måltider, og for å forhindre for stor vektøkning i
                      svangerskapet. Det anbefales at kostanamnese benyttes i
                      dette arbeidet.
                    </p>
                    <h4>Overskrift h4</h4>
                    <Collapsible
                      heading="Seksjon h5"
                      size="small"
                      h="h5"
                      smallContent
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent eget convallis metus. Sed vitae imperdiet enim.
                        Suspendisse commodo nulla et arcu sodales, et sagittis
                        nisi fermentum. Integer commodo, ipsum ut vulputate
                        consequat, dolor risus egestas eros, sed consectetur
                        turpis neque et magna.
                      </p>
                    </Collapsible>
                    <Collapsible
                      heading="Seksjon h5 2"
                      size="small"
                      h="h5"
                      smallContent
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent eget convallis metus. Sed vitae imperdiet enim.
                        Suspendisse commodo nulla et arcu sodales, et sagittis
                        nisi fermentum. Integer commodo, ipsum ut vulputate
                        consequat, dolor risus egestas eros, sed consectetur
                        turpis neque et magna.
                      </p>
                    </Collapsible>
                  </Collapsible>
                </div>
              </Collapsible>
            </div>
            <div>
              <hr className="b-hr" />
            </div>
            <ChapterHeading
              heading="Underkapittel 1.1"
              subheading="kapittel 1.1"
              line="none"
              url="#a"
            />
            <div>
              <hr className="b-hr" />
            </div>
            <ChapterHeading
              heading="Underkapittel 1.2"
              subheading="kapittel 1.2"
              line="none"
              url="#a"
            />
            <div>
              <Link wideButton arrow color="purple">
                Henvis pasienten til helsenorge.no for mer informasjon
              </Link>
            </div>
            <div>
              <PageMeta
                publishDate="11. oktober 2008"
                editDate="11. august 2018"
              />
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

export default ChapterPage;
