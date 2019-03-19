import React from 'react';
import SectionSidebar from '../components/SectionSidebar';
import PageMeta from '../components/PageMeta';
import ChapterHeading from '../components/ChapterHeading';
import Box from '../components/Box';
import FilterList from '../components/FilterList';
import Collapsible from '../components/Collapsible';
import Alert from '../components/Alert';
import Breadcrumbs from '../components/Breadcrumbs';

const LisLearning = () => (
  <>
    <div className="l-container">
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
          },
          {
            name: 'Fastlegekonferansen 2018 - fastlegeordning for fremtiden'
          }
        ]}
      />
      <main id="main">
        <div className="row l-mt-3">
          <aside className="col-md-3 col-xs-12 l-mb-4">
            <SectionSidebar
              heading="SPESIALUTDANNING INNEN BARNEKIRURGI"
              list={[
                { title: 'Læringsmål', url: '#a' },
                { title: 'Læringsaktiviteter', url: '#a' },
                { title: 'Link til annen fritekst', url: '#a' }
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
                subheading="LÆRINGSMÅL"
                size="medium"
                code="BAK 001"
                noBorder
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
              <div className="l-mt-3">
                <Collapsible
                  heading="Lyskebrokk hos nyfødte"
                  subheading="LÆRINGSMÅL"
                  size="medium"
                  code="BAK 002"
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
              <div className="l-mt-3 l-mb-2">
                <Collapsible
                  heading="Vaskulære malformasjoner "
                  subheading="LÆRINGSMÅL"
                  size="medium"
                  alert="Some alert"
                  code="BAK 003"
                >
                  <Alert status="success">
                    Vær oppmerksom på at dette atomet er på høring
                  </Alert>
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
                line="none"
                h="h2"
              />
              <Collapsible
                heading="Barnehelse og barnets plass i familien"
                subheading="LÆRINGSMÅL"
                size="medium"
                code="BAK 004"
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
                <Alert status="success">
                  Vær oppmerksom på at dette atomet er på høring, og det er
                  veldig viktig å få med seg
                </Alert>
              </div>
              <div className="l-mt-3">
                <Collapsible heading="Utdypende tekst" size="medium">
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
              <div className="l-mt-3">
                <Collapsible
                  heading="Anbefalte læringsaktiviteter"
                  size="medium"
                >
                  <p>
                    Example text: Kvinnen bør få kostveiledning og jevnlig
                    oppfølging for å oppnå tilfredsstillende blodsukker fastende
                    og etter måltider, og for å forhindre for stor vektøkning i
                    svangerskapet. Det anbefales at kostanamnese benyttes i
                    dette arbeidet.
                  </p>
                </Collapsible>
              </div>
              <div className="l-mt-3">
                <Collapsible heading="Anbefalte vurderingsformer" size="medium">
                  <p>
                    Example text: Kvinnen bør få kostveiledning og jevnlig
                    oppfølging for å oppnå tilfredsstillende blodsukker fastende
                    og etter måltider, og for å forhindre for stor vektøkning i
                    svangerskapet. Det anbefales at kostanamnese benyttes i
                    dette arbeidet.
                  </p>
                </Collapsible>
              </div>
            </div>
          </article>
        </div>
      </main>

      <div className="l-container l-mt-3 l-mb-5">
        <div className="row">
          <div className="col-md-8 col-xs-12 col-md-offset-4">
            <div className="l-mt-4">
              <PageMeta
                publishDate="11. august 2008"
                editDate="11. august 2018"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

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
  </>
);

export default LisLearning;
