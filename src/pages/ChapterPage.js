import React from 'react';
import Collapsible from '../components/Collapsible';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import Footer from '../components/Footer';

const ChapterPage = () => (
  <div className="l-container">
    <div className="row">
      <div className="col-md-9 col-md-offset-3 l-mt-4">
        <ChapterHeading
          heading="Diagnostikk og tiltak for å finne uoppdaget diabetes og svangerskapsdiabetes"
          subheading="kapittel 1"
          lineBottom
          overflow
        />
        <div className="l-mt-1">
          <Collapsible
            heading="Kvinner med svangerskapsdiabetes bør få kostråd og rådgivning basert på kostanamnese ved behandling av svangerskapsdiabetes"
            subheading="STERK ANBEFALING"
          >
            <p>
              Kvinnen bør få kostveiledning og jevnlig oppfølging for å oppnå
              tilfredsstillende blodsukker fastende og etter måltider, og for å
              forhindre for stor vektøkning i svangerskapet. Det anbefales at
              kostanamnese benyttes i dette arbeidet.
            </p>
            <p>
              Kostrådene baseres på kostanamnesen og styres etter glukoseverdier
              ved egenmåling. Mål: Fastende: {'<'}
              5.3 mmol/l, 2 timer etter måltid: {'<'}
              6.7 mmol/l (se anbefaling: Opplæring i egenmåling av glukose).
              Kvinnen kan rådes til å følge et kosthold med en
              karbohydratkvalitet og -mengde per måltid som gjør det enklere å
              nå behandlingsmålene for glukose
            </p>
            <p>etc.</p>
          </Collapsible>
        </div>
        <div className="l-mt-3">
          <Collapsible
            heading="Kvinner med svangerskapsdiabetes bør få kostråd og rådgivning basert på kostanamnese ved behandling av svangerskapsdiabetes"
            subheading="STERK ANBEFALING"
          >
            <p>
              Kvinnen bør få kostveiledning og jevnlig oppfølging for å oppnå
              tilfredsstillende blodsukker fastende og etter måltider, og for å
              forhindre for stor vektøkning i svangerskapet. Det anbefales at
              kostanamnese benyttes i dette arbeidet.
            </p>
            <p>
              Kostrådene baseres på kostanamnesen og styres etter glukoseverdier
              ved egenmåling. Mål: Fastende: {'<'}
              5.3 mmol/l, 2 timer etter måltid: {'<'}
              6.7 mmol/l (se anbefaling: Opplæring i egenmåling av glukose).
              Kvinnen kan rådes til å følge et kosthold med en
              karbohydratkvalitet og -mengde per måltid som gjør det enklere å
              nå behandlingsmålene for glukose
            </p>
            <p>etc.</p>
          </Collapsible>
        </div>
        <div className="l-mt-3">
          <Collapsible
            heading="Kvinner med svangerskapsdiabetes bør få kostråd og rådgivning basert på kostanamnese ved behandling av svangerskapsdiabetes"
            subheading="STERK ANBEFALING"
          >
            <p>
              Kvinnen bør få kostveiledning og jevnlig oppfølging for å oppnå
              tilfredsstillende blodsukker fastende og etter måltider, og for å
              forhindre for stor vektøkning i svangerskapet. Det anbefales at
              kostanamnese benyttes i dette arbeidet.
            </p>
            <p>
              Kostrådene baseres på kostanamnesen og styres etter glukoseverdier
              ved egenmåling. Mål: Fastende: {'<'}
              5.3 mmol/l, 2 timer etter måltid: {'<'}
              6.7 mmol/l (se anbefaling: Opplæring i egenmåling av glukose).
              Kvinnen kan rådes til å følge et kosthold med en
              karbohydratkvalitet og -mengde per måltid som gjør det enklere å
              nå behandlingsmålene for glukose
            </p>
            <p>etc.</p>
            <div className="l-mt-2">
              <Collapsible
                heading="Seksjon under: 1"
                subheading="SVAK ANBEFALING"
                small
              >
                <p>
                  Kvinnen bør få kostveiledning og jevnlig oppfølging for å
                  oppnå tilfredsstillende blodsukker fastende og etter måltider,
                  og for å forhindre for stor vektøkning i svangerskapet. Det
                  anbefales at kostanamnese benyttes i dette arbeidet.
                </p>
              </Collapsible>
            </div>
            <div className="l-mt-2">
              <Collapsible
                heading="Seksjon under: 2"
                subheading="SVAK ANBEFALING"
                small
              >
                <p>
                  Kvinnen bør få kostveiledning og jevnlig oppfølging for å
                  oppnå tilfredsstillende blodsukker fastende og etter måltider,
                  og for å forhindre for stor vektøkning i svangerskapet. Det
                  anbefales at kostanamnese benyttes i dette arbeidet.
                </p>
              </Collapsible>
            </div>
          </Collapsible>
        </div>
        <div className="l-mt-4">
          <PageMeta publishDate="11.08.2008" editDate="11.08.2018" />
        </div>
        <div className="b-bleed l-mt-5">
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
      <Footer />
    </div>
  </div>
);

export default ChapterPage;
