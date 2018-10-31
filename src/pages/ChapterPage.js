import React from 'react';
import Collapsible from '../components/Collapsible';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import NavList from '../components/NavList';

const ChapterPage = () => (
  <div className="l-container l-mt-1">
    <ChapterHeading
      heading="Kost og fysisk aktivitet ved svangerskaps-diabetes"
      subheading="KAPITTEL 2.2"
      H="h1"
      line="none"
    />
    <div className="l-mt-3 row">
      <aside className="col-md-4 l-hide-to-lg l-bleed-right">
        <div className="b-sidebar-heading">
          Nasjonal faglig retningslinje for svangerskapsdiabetes
        </div>
        <div className="l-mt-1">
          <hr className="b-hr b-hr--blue" />
        </div>
        <NavList
          noArrow
          small
          list={[
            {
              title: 'KAPITTEL 1',
              url: '#',
              meta: 'Nasjonale faglige retningslinjer'
            },
            {
              title: 'KAPITTEL 2',
              url: '#',
              meta: 'Nasjonale faglige retningslinjer',
              active: true,
              children: [
                {
                  title: 'Bla bla bla',
                  url: '#',
                  meta: '2.1'
                },
                {
                  title: 'Lorum ipsum',
                  url: '#',
                  meta: '2.2',
                  active: true
                }
              ]
            },
            {
              title: 'KAPITTEL 3',
              url: '#',
              meta: 'Nasjonale faglige retningslinjer'
            }
          ]}
        />
        <div class="l-mt-4">
          <div className="b-link-springboard">
            For å lese om symptomer, kostholdsråd og andre tips ved
            svangerskapsdiabetes, kan du gå til{' '}
            <a href="#" className="b-link-springboard__link">
              helsenorge.no.
            </a>
          </div>
        </div>
      </aside>
      <div className="col-md-7 col-md-offset-1 l-bleed-left">
        <Collapsible
          heading="Om behandling av svangerskapsdiabetes"
          size="small"
          smallContent
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </Collapsible>
        <div className="l-mt-2">
          <hr className="b-hr b-hr--black b-hr--thick" />
        </div>
        <div className="l-mt-1">
          <ChapterHeading
            heading="Diagnostikk og tiltak for å finne uoppdaget diabetes og svangerskapsdiabetes"
            subheading="kapittel 1"
            line="none"
            url="#"
            overflow
          />
        </div>
        <div className="l-mt-1">
          <Collapsible
            heading="Kvinner med svangerskapsdiabetes bør få kostråd og rådgivning basert på kostanamnese ved behandling av svangerskapsdiabetes"
            subheading="STERK ANBEFALING"
            subheadingContent="Dette er en beskrivelse av sterk anbefaling"
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
            subheadingContent="Dette er en beskrivelse av sterk anbefaling"
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
            subheadingContent="Dette er en beskrivelse av sterk anbefaling"
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
                size="medium"
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
                size="medium"
              >
                <p>
                  Kvinnen bør få kostveiledning og jevnlig oppfølging for å
                  oppnå tilfredsstillende blodsukker fastende og etter måltider,
                  og for å forhindre for stor vektøkning i svangerskapet. Det
                  anbefales at kostanamnese benyttes i dette arbeidet.
                </p>
                <Collapsible
                  heading="Seksjon under: 2.2"
                  size="small"
                  smallContent
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent eget convallis metus. Sed vitae imperdiet enim.
                    Suspendisse commodo nulla et arcu sodales, et sagittis nisi
                    fermentum. Integer commodo, ipsum ut vulputate consequat,
                    dolor risus egestas eros, sed consectetur turpis neque et
                    magna.
                  </p>
                </Collapsible>
              </Collapsible>
            </div>
          </Collapsible>
        </div>
        <div className="l-mt-4">
          <PageMeta publishDate="11.08.2008" editDate="11.08.2018" />
        </div>
        <div className="l-mt-5">
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
    </div>
  </div>
);

export default ChapterPage;
