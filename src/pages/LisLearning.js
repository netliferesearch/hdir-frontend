import React from 'react';
import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import ChapterHeading from '../components/ChapterHeading';
import Quote from '../components/Quote';
import FilterList from '../components/FilterList';
import Collapsible from '../components/Collapsible';

const LisLearning = () => (
  <div>
    <div className="l-container">
      <nav className="b-breadcrumbs">
        <a href="#" className="b-breadcrumbs__link">
          Lorum
        </a>
        <a href="#" className="b-breadcrumbs__link">
          Ipsum
        </a>
        <a href="#" className="b-breadcrumbs__link">
          Dolor
        </a>
      </nav>
      <h1>Læringsmål</h1>
      <div className="row l-mt-4">
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <NavList
            sticky
            className="l-sticky"
            noArrow
            heading="SPESIALUTDANNING INNEN BARNEKIRURGI"
            list={[
              {
                title: 'Læringsmål'
              },
              {
                title: 'Læringsaktiviteter'
              },
              { title: 'Link til annen fritekst' }
            ]}
          />
        </aside>
        <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
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
          <div className="l-mt-5">
            <ChapterHeading
              heading="Nyfødtkirurgi"
              line="none"
              overflow
              h="h2"
            />
            <div className="l-mt-3">
              <Collapsible
                heading="Urogenitale tilstander hos nyfødte"
                subheading="LÆRINGSMÅL"
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
                <p>etc.</p>
              </Collapsible>
            </div>
            <hr className="b-hr b-hr--less-thick b-hr--black" />
          </div>
          <div className="l-mt-5">
            <ChapterHeading
              heading="Perioperativ behandling"
              line="none"
              overflow
              h="h2"
            />
            <Collapsible
              heading="Vaskulære malformasjoner"
              subheading="LÆRINGSMÅL"
              size="large"
            >
              <p>
                Kvinnen bør få kostveiledning og jevnlig oppfølging for å oppnå
                tilfredsstillende blodsukker fastende og etter måltider, og for
                å forhindre for stor vektøkning i svangerskapet. Det anbefales
                at kostanamnese benyttes i dette arbeidet.
              </p>
              <p>
                Kostrådene baseres på kostanamnesen og styres etter
                glukoseverdier ved egenmåling. Mål: Fastende: {'<'}
                5.3 mmol/l, 2 timer etter måltid: {'<'}
                6.7 mmol/l (se anbefaling: Opplæring i egenmåling av glukose).
                Kvinnen kan rådes til å følge et kosthold med en
                karbohydratkvalitet og -mengde per måltid som gjør det enklere å
                nå behandlingsmålene for glukose
              </p>
              <p>etc.</p>
            </Collapsible>
            <Collapsible heading="Utdypende tekst" size="medium">
              <p>
                Kvinnen bør få kostveiledning og jevnlig oppfølging for å oppnå
                tilfredsstillende blodsukker fastende og etter måltider, og for
                å forhindre for stor vektøkning i svangerskapet. Det anbefales
                at kostanamnese benyttes i dette arbeidet.
              </p>
              <p>
                Kostrådene baseres på kostanamnesen og styres etter
                glukoseverdier ved egenmåling. Mål: Fastende: {'<'}
                5.3 mmol/l, 2 timer etter måltid: {'<'}
                6.7 mmol/l (se anbefaling: Opplæring i egenmåling av glukose).
                Kvinnen kan rådes til å følge et kosthold med en
                karbohydratkvalitet og -mengde per måltid som gjør det enklere å
                nå behandlingsmålene for glukose
              </p>
              <p>etc.</p>
            </Collapsible>
          </div>
          <div className="l-mt-4">
            <PageMeta publishDate="11.08.2008" editDate="11.08.2018" />
          </div>
        </article>
      </div>
    </div>

    <div className="l-mt-4">
      <div className="b-bleed">
        <strong>Kontakt:</strong>
        <br />
        <a href="#" className="b-bleed__link">
          spesialisthelsetjenester@helsedir.no
        </a>
        <br />
        <a href="#" className="b-bleed__link">
          navn.etternavn@helsedir.no
        </a>
        <br />
        <a href="#" className="b-bleed__link">
          999 99 999
        </a>
      </div>
    </div>
  </div>
);

export default LisLearning;
