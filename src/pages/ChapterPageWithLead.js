import React from 'react';
import Collapsible from '../components/Collapsible';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import SectionSidebar from '../components/SectionSidebar';
import Box from '../components/Box';
import Button from '../components/Button';
import Breadcrumbs from '../components/Breadcrumbs';
import Link from '../components/Link';
import ProductSearch from '../components/ProductSearch';
import ProfessionPicker from '../components/ProfessionPicker';
import { dummyFlatTree } from '../components/dummyFlatTree'

const ChapterPageWithLead = () => {
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
              heading="4. Særskilte regler i tilknytning til autorisasjon, krav om politattest m.v."
              h="h1"
              line="none"
            />
            <div className="l-mt-2">
              <div className="b-lead">
                <p>Hjerneslag er både en akuttmedisinsk tilstand og kronisk tilstand og derfor trengs en bred tilnærming og en helhetlig behandlingskjede for å ivareta de behov slagrammede trenger i de ulike faser i behandlingsforløpet. </p>
              </div>
              <div className="b-toggle-content l-mb-2" id="about-text">
                <div className="b-toggle-content__text">
                  <p>I dette kapitlet presenteres Helsedirektoratets anbefalinger for å sikre en effektiv behandling til riktig tid i alle faser av behandlingsforløpet .</p>
                  <p>I dette kapitlet presenteres Helsedirektoratets anbefalinger for å sikre en effektiv behandling til riktig tid i alle faser av behandlingsforløpet .</p>
                    <p>I dette kapitlet presenteres <button className="b-definition__button" data-target="hovedarbeidsgiver">hovedarbeidsgiver</button><div className="b-definition__item">
                      Her er definisjon av ordet
                    </div>  Helsedirektoratets anbefalinger for å sikre en effektiv behandling til riktig tid i alle faser av behandlingsforløpet .</p>
                  <p>I dette kapitlet presenteres Helsedirektoratets anbefalinger for å sikre en effektiv behandling til riktig tid i alle faser av behandlingsforløpet .</p>
                    <p>I dette kapitlet presenteres <button className="b-definition__button" data-target="hovedarbeidsgiver">hovedarbeidsgiver</button><div className="b-definition__item">
                      Her er definisjon av ordet
                    </div>  Helsedirektoratets anbefalinger for å sikre en effektiv behandling til riktig tid i alle faser av behandlingsforløpet .</p>
                  <p>I dette kapitlet presenteres Helsedirektoratets anbefalinger for å sikre en effektiv behandling til riktig tid i alle faser av behandlingsforløpet .</p>
                </div>
                <Button secondary onClick={() => document.getElementById('about-text').classList.toggle('show')}>Les hele</Button>
              </div>
            </div>
            <ChapterHeading
              heading="4.1 Veiing og måling"
              url="#a"
            />
            <ChapterHeading
              heading="4.2 Hørsel, syn og språk"
              url="#a"
            />
            <Collapsible
              background
              heading="Helsestasjonsprogrammet: Alle barn 0–5 år bør få tilbud om regelmessige konsultasjoner på helsestasjonen"
            >
            </Collapsible >
            <Collapsible
              background
              heading="Lege: Helsestasjonen skal tilby barn helseundersøkelser med lege"
            >
            </Collapsible >
            <Collapsible
              background
              heading="Hjemmebesøk: Hjemmebesøk av helsesykepleier bør være den første konsultasjonen i helsestasjonsprogrammet"
            >
            </Collapsible >
            <Collapsible
              background
              heading="Munnundersøkelse: Helsestasjonen bør foreta munnundersøkelse på barn"
            >
            </Collapsible >

              <div className="l-mt-4">
                <Link wideButton arrow color="purple">
                  Henvis pasienten til helsenorge.no for mer informasjon
                </Link>
              </div>
              <div className="l-mt-2">
                <PageMeta
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

export default ChapterPageWithLead;