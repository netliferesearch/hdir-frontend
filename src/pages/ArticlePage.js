import React from 'react';

import SectionNav from '../components/SectionNav';

const ArticlePage = () => (
  <article className="p">
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
      <div className="row l-mt-2">
        <div className="col-xs-12 col-md-6">
          <h1>Arbeid og psykisk helse</h1>
          <p className="t-intro">
            Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste.
            Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen,
            skape tilhørighet og gi økt selvfølelse.
          </p>
        </div>
        <div className="col-xs-12 col-md-6">
          <img src="./photo.jpg" alt="" />
          <p className="t-image-text">Bildetekst / forograf</p>
        </div>
      </div>
      <p className="b-article-info">
        <span className="b-article-info__text">
          Først publisert: 11.08.2008
        </span>
        <span className="b-article-info__text">Sist endret: 11.08.2018</span>
        <a href="#" className="b-article-info__link l-mt-1">
          Se tidligere utgaver
        </a>
      </p>
      <div className="row l-mt-4">
        <aside className="col-xs-3">
          <SectionNav />
        </aside>
        <article className="col-xs-8 col-xs-offset-1">
          <h2>Bakgrunn</h2>
          <p>
            Flertallet av personer med psykiske helseproblemer er i jobb.
            Likevel er det mange som står utenfor arbeidslivet og ønsker seg
            inn.
          </p>
          <p>
            Hele 96 prosent svarte at arbeid er viktig for deres psykiske helse
            i en undersøkelse TNS Gallup har utført for Helsedirektoratet. Bare
            hjem og nær familie ble ansett som viktigere.
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
        </article>
      </div>
    </div>
  </article>
);

export default ArticlePage;
