import React, { useState } from 'react';
import Collapsible from '../components/Collapsible';
import Button from '../components/Button';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import SectionSidebar from '../components/SectionSidebar';
import Alert from '../components/Alert';
import Box from '../components/Box';
import Link from '../components/Link';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductSearch from '../components/ProductSearch';

const ChapterPage = () => {
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
                    children: [
                      {
                        description: '4.1 Veiing og måling',
                        active: true,
                        url: '#',
                      }
                    ],
                    readMoreLabel: 'Se hele kapittel 4'
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
              <ProductSearch label="retningslinjen" productId="0e87de78-2cb4-4a70-93a7-0d687443b71e" />
              <ChapterHeading
                heading="4.1 Veiing og måling"
                h="h1"
                line="none"
              />
              <Collapsible
                background
                heading="Hodeomkrets: Helsestasjonen bør måle hodeomkrets på barn 0-2 år"
              >
                <Collapsible
                  heading="Sterk anbefaling"
                  subtle
                  size="small"
                  smallContent
                >
                  <p>...Hva er en sterk anbefaling...</p>
                </Collapsible>
                <p>Alle barn bør få målt hodeomkrets regelmessig i løpet av første leveår, og på indikasjon frem til 2 års alder.</p>
                <p>Måling av hodeomkrets bør gjennomføres ved de faste konsultasjonene på helsestasjonen, samtidig med måling av vekt og lengde ved:</p>
                <ul>
                  <li>7.–10. levedøgn (hjemmebesøk)</li>
                  <li>6 ukers alder</li>
                  <li>3 måneders alder</li>
                  <li>5 måneders alder</li>
                  <li>6 måneders alder</li>
                  <li>10 måneders alder</li>
                  <li>12 måneders alder</li>
                </ul>
                <p>Ved andre konsultasjoner bør måling av hodeomkrets gjøres på indikasjon eller etter foreldrenes ønske, se anbefalingen Helsestasjonsprogrammet. </p>
                <p>Ved vurdering av hodeomkrets anbefales det å benytte nasjonal <a href="#test">vekstkurve fra Vekststudien i Bergen.</a></p>
                <Collapsible
                  h="h3"
                  heading="Praktisk"
                  size="small"
                >
                </Collapsible>
                <Collapsible
                  h="h3"
                  heading="Begrunnelse"
                  size="small"
                >
                </Collapsible>
              </Collapsible>

              <Collapsible
                background
                heading="Veiing og måling: Helsestasjon bør måle vekt og lengde/høyde på barn 0-5 år"
              >
                Innhold
        </Collapsible >

              <ChapterHeading
                heading="1.1 Underkapittel"
                url="#a"
              />
              <ChapterHeading
                heading="1.2 Underkapittel"
                url="#a"
              />
              <div className="l-mt-4">
                <Link wideButton arrow color="purple">
                  Henvis pasienten til helsenorge.no for mer informasjon
            </Link>
              </div>
              <div className="l-mt-2">
                <PageMeta
                  publishDate="11. oktober 2008"
                  editDate="11. august 2018"
                />
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

export default ChapterPage;
