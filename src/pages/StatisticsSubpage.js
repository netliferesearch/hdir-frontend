import React from 'react';

import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import Link from '../components/Link';
import Box from '../components/Box';
import ArticleIntro from '../components/ArticleIntro';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionSidebar from '../components/SectionSidebar';
import Statistics from '../components/Statistics';

const StatisticsSubpage = () => (
  <>
    <div className="l-container l-mb-5">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
          {
            name: 'Statistikk',
            href: '#a'
          },
          {
            name:
              'Postoperative infeksjoner etter innsetting av totalprotese (hofte)'
          }
        ]}
      />
      <div className="l-mt-3">
        <ArticleIntro
          heading="Postoperative infeksjoner etter innsetting av totalprotese (hofte)"
          lead="Denne indikatoren måler andel innsettinger av hofteproteser. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse."
        />
      </div>
      <div className="row l-mt-2">
        <div className="col-xs-12">
          <iframe
            width="100%"
            height="600"
            src="https://app.powerbi.com/view?r=eyJrIjoiYTllNGYyOTMtNGQyMy00M2QyLTg3MTUtZmJjZTVjYTkwODczIiwidCI6IjZiYTFiZDVjLTc1MGYtNGFkNi1hYmEzLTBmOTU1ODViYzIxZiIsImMiOjh9"
            frameborder="0"
            allowFullScreen="true"
          />
        </div>
      </div>
      <div className="row l-mt-4">
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <SectionSidebar heading="Innhold på denne siden" />
        </aside>
        <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
          <h2>Bakgrunn</h2>
          <p>
            Flertallet av personer med <i>psykiske helseproblemer</i> er i jobb.
            Likevel er det mange som står utenfor arbeidslivet og ønsker seg
            inn.
          </p>
          <p>
            Hele 96 prosent svarte at arbeid er{' '}
            <a href="#a">
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
          <h2>Arbeid bidrar til raskere bedring</h2>
          <p>
            Flertallet av personer med psykiske helseproblemer er i jobb.
            Likevel er det mange som står utenfor arbeidslivet og ønsker seg
            inn.
          </p>
          <Statistics
            flexText
            bigText="1.4%"
            smallText="Andel av hofteprotese-operasjonene som endte med infeksjon i operasjonsimrådet i tredje tertial i 2017."
          />
          <p>
            Hele 96 prosent svarte at arbeid er{' '}
            <a href="#a">
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
          <Statistics
            smallText="Tall for de regionale helseforetakene viser at det er lite variasjon mellom reglene."
            icon="../icons/pie.svg"
          />
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

          <div className="l-mt-4 col-xs-12">
            <NavList
              heading="Rapporter om arbeid og psykisk helse"
              list={[
                { title: 'Jobber seg til bedre helse (Uni.no)', url: '#' },
                { title: 'Omtale av IPS evalueringen (Napha.no)', url: '#' },
                { title: 'Åtte prinsipper for IPS fra Napha (PDF)', url: '#' }
              ]}
            />
          </div>
          <div className="l-mt-4 col-xs-12">
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
            <PageMeta
              publishDate="11. august 2008"
              editDate="12. august 2018"
            />
          </div>

          <div className="l-mt-1">
            <Link href="#a" small icon="../icons/print.svg">
              Skriv ut hele retningslinjen
            </Link>
          </div>
        </article>
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

export default StatisticsSubpage;
