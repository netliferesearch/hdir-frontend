import React from 'react';

import NavList from '../components/NavList';

// import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import Box from '../components/Box';
import ThemeBox from '../components/ThemeBox';
import ArticleIntro from '../components/ArticleIntro';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionSidebar from '../components/SectionSidebar';
import Statistics from '../components/Statistics';

const ArticlePage = () => (

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
        <div className="l-mt-3">
          <ArticleIntro
            heading="Arbeid og psykisk helse"
            lead="Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse."
            imageDescription="Bildetekst"
          />
        </div>
        <div className="row l-mt-4">
          <aside className="col-md-3 col-xs-12 l-mb-4">
            <SectionSidebar heading="Innhold på denne siden" />
          </aside>
          <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
            <h2>Bakgrunn</h2>
            <p>
              Flertallet av personer med <i>psykiske helseproblemer</i> er i
              jobb. Likevel er det mange som står utenfor arbeidslivet og ønsker
              seg inn.
            </p>
            
            <div className="b-table__wrapper">
              <table>
                <caption>Tittel her</caption>
                <thead>
                  <tr>
                    <td>Overskrift 1</td>
                    <td>Overskrift 2</td>
                    <td>Overskrift 3</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <td>Kol 1</td>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="b-table__wrapper">
              <table>
                <caption>Tittel her</caption>
                <tbody>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 4</td>
                    <td>Kol 5</td>
                    <td>Kol 6</td>
                    <td>Kol 7</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 4</td>
                    <td>Kol 5</td>
                    <td>Kol 6</td>
                    <td>Kol 7</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 4</td>
                    <td>Kol 5</td>
                    <td>Kol 6</td>
                    <td>Kol 7</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 4</td>
                    <td>Kol 5</td>
                    <td>Kol 6</td>
                    <td>Kol 7</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 4</td>
                    <td>Kol 5</td>
                    <td>Kol 6</td>
                    <td>Kol 7</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="b-table__wrapper">
              <table>
                <caption>Tittel her</caption>
                <thead>
                  <tr>
                    <td>Overskrif 1</td>
                    <td>Overskriftskol 2</td>
                    <td>Overskriftskol 3</td>
                    <td>Overskriftskol 4</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                  <tr>
                    <th scope="col">Kol 1</th>
                    <td>Kol 2</td>
                    <td>Kol 3</td>
                    <td>Kol 3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Bakgrunn</h2>
            <p>
              Flertallet av personer med <i>psykiske helseproblemer</i> er i
              jobb. Likevel er det mange som står utenfor arbeidslivet og ønsker
              seg inn.
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
            <figure className="editor-align-justify">
              <img alt="Stopptober-materiell.png" src="https://www.helsedirektoratet.no/tema/tobakk-royk-og-snus/stopptober/_/image/1e786d6a-13cc-4f54-972e-8556eddac5a4:ff3d3416f23bd48e955313352cb77bf6453c50df/width-768/Stopptober-materiell.png" />
              <figcaption>Under kan du blant annet bestille plakat, kalender, button eller flyer.</figcaption>
            </figure>
            <figure className="editor-align-right">
              <img alt="Stopptober-materiell.png" src="https://www.helsedirektoratet.no/tema/tobakk-royk-og-snus/stopptober/_/image/1e786d6a-13cc-4f54-972e-8556eddac5a4:ff3d3416f23bd48e955313352cb77bf6453c50df/width-768/Stopptober-materiell.png" />
              <figcaption>Under kan du blant annet bestille plakat, kalender, button eller flyer.</figcaption>
            </figure>
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

            <h2>3 søk</h2>
            <p>
              Flertallet av personer med psykiske helseproblemer er i jobb.
              Likevel er det mange som står utenfor arbeidslivet og ønsker seg
              inn.
            </p>

            <h2>3 søk</h2>
            <p>
              Flertallet av personer med psykiske helseproblemer er i jobb.
              Likevel er det mange som står utenfor arbeidslivet og ønsker seg
              inn.
            </p>
            <h2>3 søk</h2>

            <p>
              Flertallet av personer med psykiske helseproblemer er i jobb.
              Likevel er det mange som står utenfor arbeidslivet og ønsker seg
              inn.
            </p>
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
                  <li>
                    Skap trygghet og takhøyde. Feil er noe vi kan lære av.
                  </li>
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
          </article>
        </div>
      </main>
    </div>

    <div className="l-container l-mt-3 l-mb-5">
      <div className="row">
        <div className="col-md-8 col-xs-12 col-md-offset-4">
          <PageMeta publishDate="11. august 2008" editDate="12. august 2018" />

          <div className="l-mt-1">
            <small>
              <img
                src="../icons/print.svg"
                alt=""
                role="presentation"
                style={{
                  height: '1.4em',
                  width: 'auto',
                  marginRight: '0.5em',
                  marginBottom: '-0.2em'
                }}
              />
              Skriv ut/Lag PDF er midlertidig deaktivert
            </small>
          </div>
        </div>
      </div>
    </div>

    <ThemeBox
      heading="Siste om covid-19"
      cardsLeft={[
        {
          title: 'Helsepersonell og andre profesjonelle aktører',
          url: '#a',
          icon: '../icons/Nyheter.svg',
          category: 'Tema'
        },
        {
          title: 'Privatperson',
          url: '#b',
          icon: '../icons/Nyheter.svg',
          category: 'Helsenorge.no'
        },
      ]}
      cardsRight={[
        {
          title: 'Opp til kommunene å vurdere politianmeldelser',
          url: '#c',
          image: 'https://via.placeholder.com/800x300',
          imageAlt: 'alt description',
          icon: '../icons/Nyheter.svg',
          category: 'Nyhet'
        },
      ]}
      bottomLinks={[
        {
          title: 'Statistikk om covid-19',
          url: '#a'
        },
        {
          title: 'Kurs og konferanser',
          url: '#a'
        },
        {
          title: 'Alle nyheter om covid-19',
          url: '#a'
        },
      ]}
    />

    <Box color="grey" square>
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

export default ArticlePage;
