import React from 'react';

import NavList from '../components/NavList';
import SectionSidebar from '../components/SectionSidebar';
import Box from '../components/Box';
import ArticleIntro from '../components/ArticleIntro';
import SelectInline from '../components/Select';
import ChapterHeading from '../components/ChapterHeading';
import Breadcrumbs from '../components/Breadcrumbs';

const ProfessionSelector = () => (
  <>
    <div className="l-container">
      <div className="row middle-xs">
        <div className="col-xs-12 col-md-6">
          <Breadcrumbs
            paths={[
              {
                name: 'Forsiden',
                href: '#a'
              },
              {
                name: 'Konferanse',
                href: '#a'
              },
              {
                name: 'Arbeid og psykisk helse',
                href: '#a'
              }
            ]}
          />
        </div>
        <div className="col-xs-12 col-md-6 l-mt-1">
          <SelectInline
            label="Tilpass siden til meg:"
            placeholder="Velg"
            options={[
              'Lege',
              'Kommune',
              'Fysioterapaut',
              'Apotek/bandasjist',
              'Psykolog',
              'Logoped',
              'Kiropraktor',
              'Sykehus/poliklinikk',
              'Tannpleier'
            ]}
          />
        </div>
      </div>

      <main id="main">
        <div className="l-mt-3">
          <ArticleIntro
            heading="Refusjon og oppgjør"
            lead="Etter at du som lege har sendt inn eit refusjonskrav til Helfo, og dette er behandla, vil du få eit utbetalingsvedtak. Vedtaket gir opplysningar om kva du har fått utbetalt i refusjon fra Helfo, og kva konto pengane har gått inn på."
          />
        </div>
        <div className="row l-mt-3">
          <aside className="col-md-3 col-xs-12 l-bleed-right l-mb-3">
            <SectionSidebar heading="Innhold på denne siden" />
          </aside>
          <article className="col-md-8 col-xs-12 col-md-offset-1 l-bleed-left t-body-text">
            <h2>Refusjonskrav</h2>
            <NavList
              list={[
                { title: 'Sende inn refusjonskrav', url: '#' },
                { title: 'Se utbetaling og vedtak', url: '#' }
              ]}
            />

            <div className="l-mt-3">
              <ChapterHeading url="#c" heading="Hva er vedtak" line="bottom" />
              <div className="l-mt-2">
                Vedtaket gir opplysninger om hva apoteket eller bandasjisten har
                fått utbetalt i refusjon fra Helfo, og hvilken konto pengene har
                gått inn på.
              </div>
            </div>

            <div className="l-mt-3">
              <ChapterHeading
                url="#c"
                heading="Kan kravet bli avvist"
                line="bottom"
              />
              <div className="l-mt-2">
                Vedtaket gir opplysninger om hva apoteket eller bandasjisten har
                fått utbetalt i refusjon fra Helfo, og hvilken konto pengene har
                gått inn på.
              </div>
            </div>

            <div className="l-mt-3">
              <h2>Statistikk</h2>
              <div className="l-mt-1">
                <Box color="blueDark" square>
                  Norske og internasjonale studier viser at 30 – 50 prosent av
                  den voksne befolkningen vil få en psykisk lidelse i løpet av
                  livet.
                </Box>
              </div>
            </div>
          </article>
          <div>
            <div className="l-mt-4 col-xs-12">
              <h2>Alt om refusjon og oppgjør</h2>
              <div className="l-mt-1">
                <hr className="b-hr b-hr--thick" />
              </div>
              <div className="l-mt-1 l-mb-5">
                <NavList
                  columns
                  list={[
                    {
                      title:
                        'Slik sender apotek og bandasjist inn refusjonskrav',
                      url: '#'
                    },
                    {
                      title: 'Slik sender kiropraktorer refusjonskrav',
                      url: '#'
                    },
                    {
                      title: 'Slik sender fysioterapeuter refusjonskrav',
                      url: '#'
                    },
                    {
                      title:
                        'Slik sender kommunen inn krav om fastlønstilskot for fastløna fysioterapeut',
                      url: '#'
                    },
                    {
                      title:
                        'Slik sender kommunen inn refusjonskrav og innrapporterer egenandeler til Helfo',
                      url: '#'
                    },
                    {
                      title:
                        'Slik sender helsestasjon med jordmor inn refusjonskrav',
                      url: '#'
                    },
                    {
                      title:
                        'Slik sender apotek og bandasjist inn refusjonskrav',
                      url: '#'
                    },
                    {
                      title: 'Slik sender kiropraktorer refusjonskrav',
                      url: '#'
                    },
                    {
                      title: 'Slik sender fysioterapeuter refusjonskrav',
                      url: '#'
                    },
                    {
                      title:
                        'Slik sender kommunen inn krav om fastlønstilskot for fastløna fysioterapeut',
                      url: '#'
                    },
                    {
                      title:
                        'Slik sender kommunen inn refusjonskrav og innrapporterer egenandeler til Helfo',
                      url: '#'
                    },
                    {
                      title:
                        'Slik sender helsestasjon med jordmor inn refusjonskrav',
                      url: '#'
                    },
                    {
                      title:
                        'Slik sender apotek og bandasjist inn refusjonskrav',
                      url: '#'
                    },
                    {
                      title: 'Slik sender kiropraktorer refusjonskrav',
                      url: '#'
                    },
                    {
                      title: 'Slik sender fysioterapeuter refusjonskrav',
                      url: '#'
                    },
                    {
                      title:
                        'Slik sender kommunen inn krav om fastlønstilskot for fastløna fysioterapeut',
                      url: '#'
                    },
                    {
                      title:
                        'Slik sender kommunen inn refusjonskrav og innrapporterer egenandeler til Helfo',
                      url: '#'
                    },
                    {
                      title:
                        'Slik sender helsestasjon med jordmor inn refusjonskrav',
                      url: '#'
                    }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
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
  </>
);

export default ProfessionSelector;
