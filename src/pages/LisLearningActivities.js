import React from 'react';

import SectionSidebar from '../components/SectionSidebar';
import PageMeta from '../components/PageMeta';
import Box from '../components/Box';
import Collapsible from '../components/Collapsible';
import Breadcrumbs from '../components/Breadcrumbs';

const LisLearningActivities = () => (
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
          }
        ]}
      />
      <main id="main">
        <div className="row l-mt-3">
          <aside className="col-md-3 col-xs-12 l-mb-4">
            <SectionSidebar
              heading="Spesialutdanning innen barnekirurgi"
              list={[
                { title: 'Læringsmål', url: '#a' },
                { title: 'Læringsaktiviteter', url: '#a' },
                { title: 'Link til annen fritekst', url: '#a' }
              ]}
            />
          </aside>
          <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
            <h1>Læringsaktiviteter</h1>

            <div className="l-mt-3">
              <h2>Kurs</h2>
              <div className="l-mt-1">
                <Collapsible
                  heading="Urogenitale tilstander hos nyfødte"
                  subheading="LÆRINGSMÅL"
                  size="medium"
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
              <div className="l-mt-3">
                <Collapsible
                  heading="Lyskebrokk hos nyfødte"
                  subheading="LÆRINGSMÅL"
                  size="medium"
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
              <div className="l-mt-3">
                <Collapsible
                  heading="Vaskulære malformasjoner"
                  subheading="LÆRINGSMÅL"
                  size="medium"
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
            </div>
            <div className="l-mt-4">
              <h2>Perioperativ behandling</h2>
              <div className="l-mt-1">
                <Collapsible
                  heading="Vaskulære malformasjoner"
                  subheading="LÆRINGSMÅL"
                  size="medium"
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
              <div className="l-mt-3">
                <Collapsible
                  className="l-mt-2"
                  heading="Utdypende tekst"
                  size="medium"
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
            </div>
          </article>
        </div>
      </main>
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
    <div className="l-mt-4">
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

export default LisLearningActivities;
