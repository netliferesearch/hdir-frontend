import React, { useState } from 'react';
import Collapsible from '../components/Collapsible';
import ContentFooter from '../components/ContentFooter';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import SectionSidebar from '../components/SectionSidebar';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import ProductSearch from '../components/ProductSearch';
import { dummyFlatTree } from '../components/dummyFlatTree';

const ChapterPage = () => {
  const [toggle, setToggle] = useState(false);

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
                    description:
                      '1. Fellesdel: Ledelse, styring og brukermedvirkning'
                  },
                  {
                    url: '#',
                    description: '2. Fellesdel: Samhandling og samarbeid'
                  },
                  {
                    url: '#',
                    description: '3. Fellesdel: Opplysningsplikt'
                  },
                  {
                    url: '#',
                    description: '4. Helsestasjon 0–5 år',
                    active: true
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
                <label
                  htmlFor="profession-selector"
                  className="b-profession-picker__label"
                >
                  <button
                    className="b-button--clean b-profession-picker__button"
                    id="profession-picker"
                  >
                    Tilpass innholdet til meg
                  </button>
                </label>
                <div
                  className="b-select l-mt-1 l-mb-3 col-md-6 hide"
                  id="profession-picker__content"
                  hidden
                >
                  <select
                    id="profession-selector"
                    className="b-select__select"
                    aria-hidden="true"
                  >
                    <option disabled="" className="b-select__option">
                      Velg målgruppe
                    </option>
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
                heading="4. Særskilte regler i tilknytning til autorisasjon, krav om politattest m.v."
                h="h1"
                line="none"
              />
              <ChapterHeading heading="4.1 Veiing og måling" url="#a" />
              <ChapterHeading heading="4.2 Hørsel, syn og språk" url="#a" />
              <Collapsible
                background
                heading="Helsestasjonsprogrammet: Alle barn 0–5 år bør få tilbud om regelmessige konsultasjoner på helsestasjonen"
                date="Sist faglig oppdatert: 11. juni 2020"
              />
              <Collapsible
                background
                heading="Lege: Helsestasjonen skal tilby barn helseundersøkelser med lege"
                date="Sist faglig oppdatert: 11. juni 2020"
              />
              <Collapsible
                background
                heading="Hjemmebesøk: Hjemmebesøk av helsesykepleier bør være den første konsultasjonen i helsestasjonsprogrammet"
                date="Sist faglig oppdatert: 11. juni 2020"
              />
              <Collapsible
                background
                heading="Munnundersøkelse: Helsestasjonen bør foreta munnundersøkelse på barn"
                date="Sist faglig oppdatert: 11. juni 2020"
              />

              <div className="l-mt-4">
                <hr className="b-hr b-hr--grey-light" />
                <div className="l-mt-1 b-secondary-logos">
                  <div className="b-secondary-logos__logolist">
                    <img
                      src="http://placehold.it/100x50"
                      alt="Folkehelseinstituttet logo"
                    />
                  </div>
                  <div className="b-secondary-logos__text">
                    <p>
                      Veilederne er utgitt av Helsedirektoratet. <br />
                      Faglig innhold levert av Folkehelseinstituttet
                    </p>
                  </div>
                </div>
              </div>

              <div className="l-mt-4">
                <PageMeta editDate="11. august 2018" />
              </div>
              <div className="l-mt-2">
                <Button clean small icon="../icons/print.svg">
                  Skriv ut / lag PDF
                </Button>
              </div>
              <ContentFooter
                heading="Slik refererer du [produkttype]"
                id="contentFooter-1"
                content={[
                  <>
                    Helsedirektoratet (2020).{' '}
                    <i>
                      Nasjonal faglig retningslinjer for helsestasjons- og
                      skolehelsetjenesten [nettdokument].
                    </i>{' '}
                    Oslo: Helsedirektoratet (sist faglig oppdatert 12. mars
                    2019, lest 12. august 2020). Tilgjengelig fra:
                    https://www.helsedirektoratet.no/retningslinjer/helsestasjons-og-skolehelsetjenesten.
                  </>
                ]}
              />
              <ContentFooter
                heading="Åpne data (API)"
                id="contentFooter-2"
                content={[
                  <>
                    Få tilgang til innhold fra Helsedirektoratet som åpne data:{' '}
                    <br />
                    <a href="https://utvikler.helsedirektoratet.no/">
                      https://utvikler.helsedirektoratet.no/
                    </a>
                    <br />
                    <br />
                    <span className="t--bold">
                      [Fulltittel på innholdet]
                    </span>{' '}
                    er tilgjengelig i vårt API: https://xxxx
                  </>
                ]}
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
  );
};

export default ChapterPage;
