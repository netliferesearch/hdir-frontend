import React from 'react';
import Collapsible from '../components/Collapsible';
import ChapterHeading from '../components/ChapterHeading';

const ChapterPage = () => (
  <div className="l-container">
    <div className="row">
      <div className="col-xs-9 col-xs-offset-3 l-mt-4">
        <ChapterHeading
          heading="Diagnostikk og tiltak for å finne uoppdaget diabetes og svangerskapsdiabetes"
          subheading="kapittel 1"
          lineBottom
        />
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
      </div>
    </div>
  </div>
);

export default ChapterPage;
