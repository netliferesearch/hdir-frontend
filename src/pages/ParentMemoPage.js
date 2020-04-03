import React from 'react';

import SectionSidebar from '../components/SectionSidebar';
import PageMeta from '../components/PageMeta';
import Link from '../components/Link';
import Button from '../components/Button';
import ChapterHeading from '../components/ChapterHeading';
import Box from '../components/Box';
import LongShortHeading from '../components/LongShortHeading';
import InputSearch from '../components/InputSearch';
import Select from '../components/Select';
import Breadcrumbs from '../components/Breadcrumbs';
import NavList from '../components/NavList';

const MemoChapterPage = () => (
  <>
    <div className="l-container">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
        ]}
      />
      <main id="main">
        <div className="l-mt-3">
          <LongShortHeading
            long="Rundskriv"
            short="Helsepersonelloven med kommentarer"
            icon={'../icons/Rundskriv_Veileder_til_lov.svg'}
            url="#a"
            linkText="Hva er rundskriv?"
          />
        </div>
        <div className="row l-mb-2 l-mt-2">
          <div className="col-xs-12 col-md-8 l-mt-1">
            <InputSearch
              autoFocus={true}
              label={'Søk i rundskrivet'}
              showSuggestions={false}
              fnChange={(value) => null}
            />
          </div>
          <div className="col-xs-12 col-md-4 l-mt-1">
            <Select label="Vis kun innhold for" placeholder="Velg" options={['Option 1', 'Option 2']} stacked custompos />
          </div>
        </div>
        <div className="l-layout">
          <aside className="l-hide-to-lg l-sidebar l-bleed-right">
            <SectionSidebar
              heading="Rundskriv"
              icon="../icons/Rundskriv_Veileder_til_lov.svg"
              list={[
                {
                  url: '#',
                  description: '1. Lovens formål, virkeområde og definisjoner'
                },
                {
                  url: '#',
                  description: '2. Krav til helsepersonells yrkesutøvelse',
                  active: true,
                },
                {
                  url: '#',
                  description: '3. Krav til organisering og virksomhet'
                },
                {
                  url: '#',
                  description: '4. Særskilte regler i tilknytning til autorisasjon, krav om politiattest m.v.',
                },
                {
                  url: '#',
                  description: '5. Taushetsplikt og opplysningsrett'
                },
                {
                  url: '#',
                  description: '6. Opplysningsplikt m.v.'
                },
                {
                  url: '#',
                  description: '7. Meldeplikt'
                },
                {
                  url: '#',
                  description: '8. Dokumentasjonsplikt'
                },
                {
                  url: '#',
                  description: '9. Vilkår for autorisasjon, lisens og spesialistgodkjenning'
                },
                {
                  url: '#',
                  description: '10. Tildeling og bortfall av autorisasjon, lisens og spesialistgodkjenning'
                },
                {
                  url: '#',
                  description: '11. Reaksjoner mv. ved brudd på lovens bestemmelser'
                },
                {
                  url: '#',
                  description: '12. Statens helsepersonellnemnd og Apotekklagenemnda'
                },
                {
                  url: '#',
                  description: '13. Forskjellige bestemmelser'
                },
                {
                  url: '#',
                  description: '14. Om helsepersonelloven'
                },
              ]}
            />
          </aside>
          <article className="l-article l-article--topline">
            <div className="col-xs-12 l-mt-2">
              <ChapterHeading
                heading="1. Lovens formål, virkeområde og definisjoner"
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
                        url: '#a'
                      },
                      {
                        title: '§ 2. Lovens virkeområde',
                        url: '#a'
                      },
                      {
                        title: '§ 3. Definisjoner',
                        url: '#a'
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="col-xs-12 l-mt-2">
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
                        title: '§ 4. Forsvarlighet',
                        url: '#a'
                      },
                      {
                        title: '§ 5. Bruk av medhjelpere',
                        url: '#a'
                      },
                      {
                        title: 'and so on',
                        url: '#a'
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <div className="row">
        <div className="col-md-8 col-xs-12 col-md-offset-4">
          <div className="l-mt-4">
            <Button clean small icon="../icons/print.svg">
              Skriv ut / lag PDF
            </Button>
            <br />
            <PageMeta
              publishDate="11. august 2008"
              editDate="11. august 2018"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="l-mt-5">
      <Box color="grey" square noPadding>
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

export default MemoChapterPage;
