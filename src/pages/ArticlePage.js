import React from 'react';

import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import Link from '../components/Link';
import Box from '../components/Box';
import ArticleIntro from '../components/ArticleIntro';

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
            small
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
          <Box color="blueDark" square>
            Norske og internasjonale studier viser at 30 – 50 prosent av den
            voksne befolkningen vil få en psykisk lidelse i løpet av livet.
          </Box>
          <div className="l-mt-2">
            <Box color="yellow" square>
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
            </Box>
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
            <Link href="#" small icon="./icons/method.svg">
              Om metode og prosess
            </Link>
            <br />
            <Link href="#" small icon="./icons/print.svg">
              Skriv ut hele retningslinjen
            </Link>
          </div>

          <div className="l-mt-4">
            <PageMeta publishDate="11.08.2008" editDate="11.08.2018" />
          </div>
        </article>
      </div>
    </div>
    <div className="l-mt-4">
      <Box color="green" square noPadding>
        <div className="l-container">
          <strong>Kontakt:</strong>
          <br />
          <a href="#">spesialisthelsetjenester@helsedir.no</a>
          <br />
          <a href="#">navn.etternavn@helsedir.no</a>
          <br />
          <a href="#">999 99 999</a>
        </div>
      </Box>
    </div>
  </div>
);

export default ArticlePage;
