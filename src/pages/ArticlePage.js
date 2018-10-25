import React from 'react';

import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import PortableArticle from '../components/PortableArticle';
import ArticleIntro from '../components/ArticleIntro';

window.onload = function () {
 //let parent = document.getElementsByClassName('t-body-text')[0];
// let x = parent.querySelectorAll('h2')
// x gets one more h2 tag for some reason, in the article "ti råd" is added


  let x = document.querySelectorAll('.t-body-text > h2')

 console.log("what now " + x.length );
 for (var i = 0; i < x.length; i++) {
 var item = x[i];
 x[i].style.position = 'sticky';
 
 console.log(item)
};

};








const ArticlePage = () => (

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
      <div className="l-mt-2">
        <ArticleIntro
          heading="Arbeid og psykisk helse"
          lead="Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse."
          image="./photo.jpg"
          imageDescription="Bildetekst"
        />
      </div>
      <div className="row l-mt-4">
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <NavList
            anchor
            sticky
            className="l-sticky"
            heading="Innhold på denne siden"
            list={[
              { title: 'Bakgrunn', url: '#' },
              { title: 'Forebyggende arbeid', url: '#' },
              { title: 'Arbeid bidrar til raskere bedring', url: '#' },
              { title: 'Politisk satsning', url: '#' }
            ]}
          />
        </aside>
        <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
          <h2>Bakgrunn</h2>
          <p>
            Flertallet av personer med psykiske helseproblemer er i jobb.
            Likevel er det mange som står utenfor arbeidslivet og ønsker seg
            inn.
          </p>
          <p>
            Hele 96 prosent svarte at arbeid er{' '}
            <a href="#">
              viktig for deres psykiske helse i en undersøkelse TNS Gallup har
              utført for Helsedirektoratet
            </a>
            . Bare hjem og nær familie ble ansett som viktigere.
          </p>
          <p>
            Rundt 15 prosent av det legemeldte sykefraværet i Norge skyldes
            psykiske lidelser. Andelen uføretrygdede med en psykisk lidelse er
            på noe over 30 prosent. Blant personer som faller ut av
            arbeidslivet, utgjør personer med psykiske lidelser en stor og
            økende gruppe.
          </p>
          <p>
            Norske og internasjonale studier viser at 30 – 50 prosent av den
            voksne befolkningen vil få en psykisk lidelse i løpet av livet.
          </p>
          <h2>Forebyggende arbeid</h2>
          <p>
            Dette omfatter tiltak som kan bidra til å forhindre at psykiske
            plager og lidelser oppstår (primærforebygging).
          </p>
          <p>
            Arbeidsplassen er en sentral arena og arbeidsgivere har en viktig
            oppgave.
          </p>
          <p>
            Gjennom avtalen om et inkluderende arbeidsliv har NAV mange
            virkemidler og kompetansemiljøer, som nettopp skal bistå
            arbeidsgivere og ansatte/jobbsøkere til å skape et godt
            arbeidsmiljø.
          </p>
          <h2>Bakgrunn</h2>
          <p>
            Flertallet av personer med psykiske helseproblemer er i jobb.
            Likevel er det mange som står utenfor arbeidslivet og ønsker seg
            inn.
          </p>
          <p>
            Hele 96 prosent svarte at arbeid er{' '}
            <a href="#">
              viktig for deres psykiske helse i en undersøkelse TNS Gallup har
              utført for Helsedirektoratet
            </a>
            . Bare hjem og nær familie ble ansett som viktigere.
          </p>
          <p>
            Rundt 15 prosent av det legemeldte sykefraværet i Norge skyldes
            psykiske lidelser. Andelen uføretrygdede med en psykisk lidelse er
            på noe over 30 prosent. Blant personer som faller ut av
            arbeidslivet, utgjør personer med psykiske lidelser en stor og
            økende gruppe.
          </p>
          <div className="b-bleed b-bleed--blue">
            Norske og internasjonale studier viser at 30 – 50 prosent av den
            voksne befolkningen vil få en psykisk lidelse i løpet av livet.
          </div>
          <div className="l-mt-2">
            <div className="b-bleed b-bleed--yellow">
              <h2>Ti råd for et inkluderende arbeidsliv</h2>
              <ol>
                <li>​Bry deg. Alle trenger å bli sett og verdsatt.</li>
                <li>Gi tillit. Alle har noe å gi hvis de slipper til.</li>
                <li>Ikke aksepter mobbing og utfrysing. Stopp rykter.</li>
                <li>Vær romslig. Verdsett mangfold og ulikheter.</li>
                <li>Lytt til andre. Vis interesse for andres arbeid.</li>
                <li>Verdsett åpenhet. Snakk sammen.</li>
                <li>Skap trygghet og takhøyde. Feil er noe vi kan lære av.</li>
                <li>
                  Ta ansvar. God tilrettelegging er et samarbeidsprosjekt.
                </li>
                <li>Ta problemer på alvor. Finn løsninger sammen.</li>
                <li>Psykisk helse angår oss alle. Snakk om det.</li>
              </ol>
              (Kilde: Rådet for Psykisk Helse)
            </div>
          </div>

          <div className="l-mt-4 col-xs-12 col-md-8">
            <NavList
              heading="Rapporter om arbeid og psykisk helse"
              list={[
                { title: 'Jobber seg til bedre helse (Uni.no)', url: '#' },
                { title: 'Omtale av IPS evalueringen (Napha.no)', url: '#' },
                { title: 'Åtte prinsipper for IPS fra Napha (PDF)', url: '#' }
              ]}
            />
          </div>
          <div className="l-mt-4 col-xs-12 col-md-8">
            <NavList
              heading="Søk tilskudd innen arbeid og psykisk helse"
              list={[
                { title: 'Jobber seg til bedre helse (Uni.no)', url: '#' },
                { title: 'Omtale av IPS evalueringen (Napha.no)', url: '#' },
                { title: 'Åtte prinsipper for IPS fra Napha (PDF)', url: '#' }
              ]}
            />
          </div>

          <div className="l-mt-4">
            <PortableArticle />
          </div>

          <div className="l-mt-4">
            <PageMeta publishDate="11.08.2008" editDate="11.08.2018" />
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
        </article>
      </div>
    </div>
  </div>
);

export default ArticlePage;
