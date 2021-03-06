import React from 'react';
import Collapsible from '../components/Collapsible';
import Button from '../components/Button';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import SectionSidebar from '../components/SectionSidebar';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductSearch from '../components/ProductSearch';
import ProfessionPicker from '../components/ProfessionPicker';
import { dummyFlatTree } from '../components/dummyFlatTree'

const ChapterPage = () => {
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
                      },
                      {
                        description: 'Se hele kapittel 4',
                        url: '#',
                      }
                    ],
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
              <ProfessionPicker />
              <ProductSearch
                label="retningslinjen"
                productId="0e87de78-2cb4-4a70-93a7-0d687443b71e"
                flatTree={dummyFlatTree}
                malGruppe={''}
              />
              <ChapterHeading
                heading="4.1 Veiing og måling"
                h="h1"
                line="none"
              />
              <Collapsible
                background
                tag={{ title: 'Sterk anbefaling', description: 'Forklaring' }}
                heading="Hodeomkrets: Helsestasjonen bør måle hodeomkrets på barn 0-2 år"
                date="Sist faglig oppdatert: 11. juni 2020"
              >
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
                tag={{ title: 'Sterk anbefaling', description: 'Forklaring' }}
                heading="Veiing og måling: Helsestasjon bør måle vekt og lengde/høyde på barn 0-5 år"
                date="Sist faglig oppdatert: 11. juni 2020"
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

export default ChapterPage;
