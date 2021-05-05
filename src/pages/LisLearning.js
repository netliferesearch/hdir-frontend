import React from 'react';
import SectionSidebar from '../components/SectionSidebar';
import PageMeta from '../components/PageMeta';
import ChapterHeading from '../components/ChapterHeading';
import Box from '../components/Box';
import FilterList from '../components/FilterList';
import Collapsible from '../components/Collapsible';
import Button from '../components/Button';
import Breadcrumbs from '../components/Breadcrumbs';

const LisLearning = () => (
  <>
    <div className="l-container l-mb-2 custom-lis">
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
      <main id="main">
        <div className="row l-mt-3">
          <aside className="col-md-3 col-xs-12 l-mb-4">
            <SectionSidebar
              heading="Spesialutdanning innen barnekirurgi"
              list={[
                { description: 'Læringsmål', url: '#a' },
                { description: 'Læringsaktiviteter', url: '#a' },
                { description: 'Link til annen fritekst', url: '#a' }
              ]}
            />
          </aside>
          <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
            <h1>Læringsmål</h1>
            <div className="l-mt-2 l-mb-1">
              <h2 className="h5 h5--thin">Velg tema</h2>
            </div>
            <FilterList
              list={[
                'Alt',
                'Nyfødtkirurgi',
                'Perioperativ behandling',
                'Gatrokirurgi',
                'Urologi',
                'Torakskirurgi',
                'Mini-invasiv kirurgi (MIS)',
                'Onkologi',
                'Generell kirurgi og traume',
                'FKM'
              ]}
            />
            <div className="l-mt-4">
              <ChapterHeading heading="Nyfødtkirurgi" line="bottom" h="h2" />
              <Collapsible
                heading="Urogenitale tilstander hos nyfødte"
                id="test1"
                tag={{ title: 'Læringsmål', description: 'Beskrivelse' }}
                dateFrom="1.januar 2020"
                dateTo="1.januar 2021"
                size="medium"
                code="BAK 001"
                noBorder
                archiveLink
              >
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
              </Collapsible>
              <div className="l-mt-2">
                <Collapsible
                  heading="Lyskebrokk hos nyfødte"
                  tag={{ title: 'Læringsmål' }}
                  dateFrom="1.januar 2020"
                  size="medium"
                  id="test2"
                  code="BAK 002"
                  archiveLink
                >
                  <p>
                    Kvinnen bør få kostveiledning og jevnlig oppfølging for å
                    oppnå tilfredsstillende blodsukker fastende og etter
                    måltider, og for å forhindre for stor vektøkning i
                    svangerskapet. Det anbefales at kostanamnese benyttes i
                    dette arbeidet.
                  </p>
                  <p>
                    Kostrådene baseres på kostanamnesen og styres etter
                    glukoseverdier ved egenmåling. Mål: Fastende: {'<'}
                    5.3 mmol/l, 2 timer etter måltid: {'<'}
                    6.7 mmol/l (se anbefaling: Opplæring i egenmåling av
                    glukose). Kvinnen kan rådes til å følge et kosthold med en
                    karbohydratkvalitet og -mengde per måltid som gjør det
                    enklere å nå behandlingsmålene for glukose
                  </p>
                  <p>etc.</p>
                </Collapsible>
              </div>
              <div className="l-mt-2 l-mb-2">
                <Collapsible
                  heading="Vaskulære malformasjoner "
                  dateTo="1.januar 2021"
                  id="test3"
                  tag={{ title: 'Læringsmål' }}
                  size="medium"
                  code="BAK 003"
                  archiveLink
                >
                  <p>
                    Kvinnen bør få kostveiledning og jevnlig oppfølging for å
                    oppnå tilfredsstillende blodsukker fastende og etter
                    måltider, og for å forhindre for stor vektøkning i
                    svangerskapet. Det anbefales at kostanamnese benyttes i
                    dette arbeidet.
                  </p>
                  <p>
                    Kostrådene baseres på kostanamnesen og styres etter
                    glukoseverdier ved egenmåling. Mål: Fastende: {'<'}
                    5.3 mmol/l, 2 timer etter måltid: {'<'}
                    6.7 mmol/l (se anbefaling: Opplæring i egenmåling av
                    glukose). Kvinnen kan rådes til å følge et kosthold med en
                    karbohydratkvalitet og -mengde per måltid som gjør det
                    enklere å nå behandlingsmålene for glukose
                  </p>
                </Collapsible>
              </div>
            </div>
            <div className="l-mt-4">
              <ChapterHeading
                heading="Perioperativ behandling"
                line="bottom"
                h="h2"
              />
              <Collapsible
                heading="Barnehelse og barnets plass i familien"
                dateFrom="1.januar 2020"
                id="test4"
                dateTo="1.januar 2021"
                tag={{ title: 'Læringsmål' }}
                size="medium"
                code="BAK 004"
                archiveLink
              >
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
              </Collapsible>

              <div className="l-mt-4">
                <PageMeta
                  publishDate="11. august 2008"
                />
              </div>
              <div className="l-mt-2">
                <Button clean small icon="../icons/print.svg">
                  Skriv ut / lag PDF
                </Button>
              </div>
            </div>
          </article>
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

export default LisLearning;
