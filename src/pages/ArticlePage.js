import React from 'react';

import NavList from '../components/NavList';

// import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import Box from '../components/Box';
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
            image="./photo.jpg"
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
              <table className="b-table">
                <tbody>
                  <tr>
                    <th scope="row">Indikasjon: Del 1/2</th>
                    <td>
                      Hyperkinetisk forstyrrelse (ADHD og ADD) hos barn og
                      ungdom (fra 6 år til og med 17 år)
                    </td>
                    <td>
                      Hyperkinetisk forstyrrelse (ADHD og ADD) hos barn og
                      ungdom (fra 6 år til og med 17 år)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Diagnosekoder</th>
                    <td>ICD-10: F90 / ICPC-2: P81</td>
                    <td>ICD-10: F90 / ICPC-2: P81</td>
                  </tr>
                  <tr>
                    <th scope="row">Hjemmel</th>
                    <td>
                      § 3 ICD-10: F90
                      <p>&nbsp;</p>
                      Før 1. januar 2018:
                      <br />
                      § 3a, jf. § 2
                      <br />
                      ICD-10: F90
                      <br />
                      ICPC-2: P81
                    </td>
                    <td>
                      § 3 ICD-10: F90
                      <p>&nbsp;</p>
                      Før 1. januar 2018:
                      <br />
                      § 3a, jf. § 2
                      <br />
                      ICD-10: F90
                      <br />
                      ICPC-2: P81
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Tidsbegrensning</th>
                    <td>
                      Vedtakene tidsbegrenses i 2 år.
                      <p>&nbsp;</p>
                      Dersom brukeren fyller 18 år i løpet av disse to
                      årene, og det ikke er gjort unntak fra
                      aldersbegrensningen, skal vedtaket tidsbegrenses til
                      fylte 18 år.
                    </td>
                    <td>
                      Vedtakene tidsbegrenses i 2 år.
                      <p>&nbsp;</p>
                      Dersom brukeren fyller 18 år i løpet av disse to
                      årene, og det ikke er gjort unntak fra
                      aldersbegrensningen, skal vedtaket tidsbegrenses til
                      fylte 18 år.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Vilkår</th>
                    <td>
                      Det skal bekreftes at:
                      <ul>
                        <li>
                          faren for avhengighet er vurdert og funnet
                          underordnet behovet for behandling
                        </li>
                        <li>konkret behandlingsplan foreligger</li>
                        <li>
                          smerteanalyse er utført, for eksempel ved hjelp av
                          VAS-skala
                        </li>
                      </ul>
                      Døgndose skal oppgis per legemiddel eller som mg orale
                      morfinekvivalenter. Navnet på fastlege med tilhørende
                      legekontor, sykehusavdeling og/eller tverrfaglig
                      smerteklinikk som skal forskrive legemidlene til
                      pasienten skal oppgis.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Krav til søkende lege</th>
                    <td>
                      Søknad skal komme fra pasientens fastlege / lege ved
                      fastlegens kontor eller fra en lege ved en tverrfaglig
                      smerteklinikk ved:
                      <ul>
                        <li>
                          Søknader om legemidler i ATC-gruppe N02A og
                          R05DA04
                        </li>
                        <li>
                          Døgndose inntil (≤) 100 mg orale
                          morfinekvivalenter
                        </li>
                        <li>Avklart smertetilstand</li>
                      </ul>
                      Søknad skal komme fra lege ved en tverrfaglig
                      smerteklinikk ved:
                      <ul>
                        <li>
                          Døgndose over 100 mg og inntil 300 (≤) mg orale
                          morfinekvivalenter
                        </li>
                        <li>Uavklart smertetilstand</li>
                        <li>Søknader om metadon (ATC-kode N07BC02)</li>
                      </ul>
                      Metadon (ATC-kode N07BC02) inkluderes i alle vedtak
                      når søknaden kommer fra tverrfaglig smerteklinikk.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Krav til tidligere behandling</th>
                    <td>
                      Minst to forhåndsgodkjente preparater med forskjellig
                      virkestoff:
                      <br />
                      metylfenidat (ATC-kode N06BA04),
                      <br />
                      amfetamin (ATC-kode N06BA01),
                      <br />
                      lisdexamfetamin (ATC-kode N06BA12),
                      <br />
                      deksamfetamin (ATC-kode N06BA02),
                      <br />
                      atomoksetin (ATC-kode N06BA09)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Spesialistkrav</th>
                    <td>
                      Søknad fra en spesialist i psykiatri, barne- og
                      ungdomspsykiatri, barnesykdommer, nevrologi, rus- og
                      avhengighetsmedisin, eller fra en lege ved tilsvarende
                      sykehusavdeling.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Merknad</th>
                    <td>
                      Saksbehandler utreder saken, jf. forvaltningsloven §
                      17. Rådgiver gir en anbefaling i saken dersom
                      vilkårene i vedlegget ikke er oppfylt.
                    </td>
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

export default ArticlePage;
