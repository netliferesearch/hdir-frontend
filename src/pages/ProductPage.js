import React from 'react';
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

const ProductPage = () => (
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
          icon={'./icons/Retningslinjer_Veiledere_Faglige_råd.svg'}
          url="#a"
          linkText="Hva er nasjonal faglig retningslinje"
        />
      </div>
      <div class="l-mt-3 l-mb-2">
        <InputSearch
          autoFocus={true}
          label={'Søk i retningslinjen'}
          exampleSuggestions={[]}
        />
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
          <div className="col-xs-12 l-mt-2">
            <ChapterHeading
              heading="1. Fellesdel: Ledelse, styring og brukermedvirkning"
              url="/kapittel"
              clean
            />
            <hr className="b-hr b-hr--blue" />
            <div className="l-hide-to-md">
              <div className="js-expand-list" data-start-limit="2">
                <NavList
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
                    }
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
                  list={[
                    {
                      title: 'Koordinerende enhet',
                      url: '#a'
                    },
                    {
                      title: 'Barnevernet',
                      url: '#a'
                    }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div className="l-mt-2">
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
);

export default ProductPage;
