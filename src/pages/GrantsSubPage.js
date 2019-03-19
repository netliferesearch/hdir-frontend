import React from 'react';
import Link from '../components/Link';
import Box from '../components/Box';
import Collapsible from '../components/Collapsible';
import SectionSidebar from '../components/SectionSidebar';
import Alert from '../components/Alert';
import ArticleIntro from '../components/ArticleIntro';

const GrantsSubPage = () => (
  <>
    <main id="main">
      <div className="l-container l-mt-3">
        <ArticleIntro
          heading="Oppfølging av akuttmedisinforskriften"
          lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Alert status="success" inline hideIcon>
          Søknadsfrist 20. februar 2019
        </Alert>
        <div className="row l-mt-3">
          <aside className="col-md-3 col-xs-12 l-mb-4">
            <SectionSidebar heading="Innhold på denne siden" />
          </aside>
          <div className="col-md-7 col-md-offset-1">
            <Link href="#a" button>
              Søk på tilskudd (Altinn)
            </Link>
            <article className="t-body-text l-mt-2">
              <h2 id="m%C3%A5l-for-ordningen">Mål for ordningen</h2>
              <p>Brukerne skal få bedre kvalitet på legevakttjenesten:</p>
              <ul>
                <li>
                  kurs i akuttmedisin for leger og annet helsepersonell i
                  legevakt
                </li>
                <li>
                  kurs i volds- og overgrepshåndtering for leger og annet
                  helsepersonell i legevakt
                </li>
                <li>kompensasjon for bakvakt</li>
                <li>
                  styrke kompetansen ved ansettelse av nye operatører i
                  legevaktsentrale
                </li>
              </ul>
              <p>
                <a href="https://helsedirektoratet.no/akuttmedisin/akuttmedisinforskriften">
                  Se kurskrav og liste over godkjente kurstilbydere
                </a>
              </p>
              <h2 id="m%C3%A5lgruppe">Målgruppe</h2>
              <p>Tilskuddet er rettet mot kommuner.</p>
              <h2 id="tildelingskriterier">Tildelingskriterier</h2>
              <ul>
                <li>Kvantifiserbare tildelingskriterier.</li>
                <li>Skjønnsmessig vurdering.</li>
              </ul>
              <h3>Presisering av tildelingskriterier:</h3>
              <p>
                <strong>Det gis tilskudd til:</strong>
              </p>
              <ol>
                <li>
                  Nettkurs og kurs i akuttmedisin for leger (ikke turnusleger)
                  og annet helsepersonell i legevakt som ikke har gjennomgått
                  slikt kurs.
                </li>
                <li>
                  Nettkurs i volds- og overgrepshåndtering for leger og annet
                  helsepersonell i legevakt.
                </li>
                <li>
                  Kompensasjon for bakvakt der vaktlegen ikke oppfyller
                  kompetansekravene som stilles i akuttmedisinforskriften.
                </li>
                <li>
                  Lønnsdifferanse ved ansettelse av nye operatører i
                  legevaktsentral, som oppfyller kravene i
                  <a href="https://lovdata.no/forskrift/2015-03-20-231/%c2%a713">
                    akuttmedisinforskriften §13f
                  </a>
                  .
                </li>
              </ol>
              <p>
                <strong>Tilskuddsutmåling:</strong>
              </p>
              <ol>
                <li>
                  Kurs i akuttmedisin for leger og annet helsepersonell i
                  legevakt, inkludert fastlegekontor som har legevaktsansvar på
                  dagtid: kr 5000 i kursavgift per deltaker og kr 250 per
                  deltaker for nettkurs dekkes. For fast ansatte fastleger og
                  annet helsepersonell dekkes også kr 4000 i
                  reise/oppholdsutgifter per deltaker.
                </li>
                <li>
                  Nettkurs i volds- og overgrepshåndtering for leger og annet
                  helsepersonell inkludert turnusleger og fastlegekontor som har
                  legevaktansvar på dagtid: kr 250 i kursavgift per deltaker
                  dekkes. For selvstendig næringsdrivende fastleger og
                  vikarleger gis også kr4000 i lønnskompensasjon per deltaker.
                </li>
                <li>
                  Merutgifter til bakvakt der vaktlegen ikke oppfyller
                  kompetansekravene som stilles i akuttedisinforskriften,
                  avgenset til kr 2000 per vakt. En bakvakt beregnes fra kl.
                  15.30 – 08. dagen etter (en vakt per døgn). Det gis ikke
                  tilskudd til daglegevakt. Tilskuddet gis kun fram til 1.
                  august 2018.
                </li>
                <li>
                  Lønnsdifferanse mellom operatører som har avsluttet
                  arbeidsforholdet og den nyansatte operatøren som tilsettes i
                  henhold til kravet i forskriften §13 f, om "relevant
                  helsefaglig utdanning på bachelornivå" (f.eks.
                  sykepleiere/vernepleiere). Differansen dekkes med inntil
                  kr5000 per måned per sykepleier/vernepleier.
                </li>
              </ol>
              <h2 id="søknadens-form-og-innhold">Søknadens form og innhold</h2>
              <p>
                Søknaden skal undertegnes av styreleder eller den som har
                prokura.
                <br />
                For kommuner og fylkeskommuner skal søknaden undertegnes av
                rådmannen eller den vedkommende har delegert myndigheten til.
              </p>
              <p>
                <strong>Søknaden skal inneholde:</strong>
              </p>
              <ul>
                <li>
                  informasjon om søker, adresse, organisasjonsnummer,
                  kontonummer, kontaktperson
                </li>
                <li>søkerens formål med tilskuddet</li>
                <li>prosjektbeskrivelse/beskrivelse av tiltak</li>
                <li>søknadsbeløp</li>
                <li>
                  budsjett -
                  <a href="https://helsedirektoratet.no/Documents/Tilskudd/Tabell%20for%20søknad.xlsx">
                    bruk dette oppsettet (excel)
                  </a>
                </li>
                <li>
                  redegjørelse for de interne og eksterne kontrolltiltak som
                  skal sikre korrekt rapportering og måloppnåelse (for eksempel
                  interne kontrollaktiviteter, internrevisjon, autorisert
                  revisor / ikke autorisert revisor, andre offentlige tilsyn og
                  Riksrevisjonen).
                </li>
              </ul>
              <p>
                <strong>Tillegg og presiseringer:</strong>
              </p>
              <p>
                Søknaden må inneholde informasjon om de
                <a href="https://helsedirektoratet.no/Documents/Tilskudd/Oppfølging%20av%20akuttmedisinforskriften%20-%20regelverk.pdf">
                  presiserte tildelingskriteriene i pkt. 7 i regelverket
                </a>
                .
              </p>
              <h2 id="søknadsbehandling">Søknadsbehandling</h2>
              <ul>
                <li>
                  <strong>
                    Innstilling om avgjørelser/vedtak skal fremmes av:
                  </strong>
                  Helsedirektoratet
                </li>
                <li>
                  <strong>Innstilling skal godkjennes av:</strong>
                  Helsedirektoratet
                </li>
                <li>
                  <strong>Avgjørelser/vedtak skal fattes av:</strong>
                  Helsedirektoratet
                </li>
                <li>
                  <strong>
                    Hvordan søker skal opplyses om utfallet av
                    søknadsbehandlingen:
                  </strong>
                  Tilskudds- eller avslagsbrev.
                </li>
              </ul>
              <p>
                Søknader behandles fortløpende. Søknader som kommer inn etter
                fristen kan avvises.
              </p>
            </article>
            <div className="l-mt-3">
              <Collapsible heading="Høringsinstanser">
                <p>
                  Nasjonal faglig retningslinje for svangerskapsdiabetes vil
                  erstatte kapitlene 12.3–12.5 i IS-1674: «Nasjonal faglig
                  retningslinje for forebygging, diagnostikk og behandling av
                  diabetes» fra 2009 og foreligger kun i digitalt format.
                </p>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div className="l-mt-4">
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
    </div>
  </>
);

export default GrantsSubPage;
