import React from 'react';
import Link from '../components/Link';
import Box from '../components/Box';
import Timeline from '../components/Timeline';
import Collapsible from '../components/Collapsible';
import ContentFooter from '../components/ContentFooter';
import Alert from '../components/Alert';
import ArticleIntro from '../components/ArticleIntro';
import PageMeta from '../components/PageMeta';
import Button from '../components/Button';
import Breadcrumbs from '../components/Breadcrumbs';

const GrantsSubPage = () => (
  <>
    <div className="l-container">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
          {
            name: 'Tilskudd',
            href: '#a'
          },
          {
            name: 'Finn tilskudd',
            href: '#a'
          }
        ]}
      />
    </div>
    <main id="main">
      <div className="l-container l-mt-3">
        <ArticleIntro
          heading="Styrking og utvikling av helsestasjons- og skolehelsetjenesten"
          lead="Har du et prosjekt som kan bidra til at folk i ditt nærområde føler seg mindre ensomme? Er det mangler på helsesykepleiere i din kommune? Da kan du søke om tilskudd hos oss."
        />
        <Alert status="success" inline hideIcon>
          Søknadsfrist 20. februar 2019
        </Alert>
        <div className="row l-mt-3">
          <div className="col-xs-12 col-md-12 t-body-text">
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
                Tilskudd skal benyttes for å gjennomføre en styrking av
                tjenesten. Dersom det kommer fram at kommuner kutter i
                eksisterende årsverk/ stillinger samtidig som de får
                tilskuddsmidler, kan det føre til at tilskudd kreves tilbake.
              </p>
              <p>
                For nærmere informasjon om mål og målgruppe;{' '}
                <a href="#">les regelverket</a>
              </p>
            </Collapsible>
            <Collapsible h="h3" heading="Hvem kan få tilskudd?" size="small" noScroll>
              <p>x</p>
            </Collapsible>
            <Collapsible
              h="h3"
              heading="Dette må være med i søknaden"
              size="small"
            >
              <p>x</p>
            </Collapsible>
            <Collapsible h="h3" heading="Tildelingskriterier" size="small" noScroll>
              <p>x</p>
            </Collapsible>
            <Collapsible
              h="h3"
              heading="Dette må være med i rapporteringen"
              size="small"
              noScroll
            >
              <p>x</p>
            </Collapsible>
          </section>

          <section className="l-mt-4">
            <h2>Statistikk</h2>
            <div className="l-mt-2">
              <div className="videoWrapper__iframe" id="iframe">
                <iframe
                  title="Title here"
                  width="100%"
                  height="600"
                  src="https://statistikk.helsedirektoratet.no/bi/Dashboard/71613538-62de-4ab2-8409-8638fc6c25db?e=false&vo=viewonly"
                  frameBorder="0"
                  allowFullScreen=""
                />
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
    <div className="l-container l-mt-4">
      <hr className="b-hr b-hr--grey-light" />
      <div className="l-mt-1 b-secondary-logos">
        <div className="b-secondary-logos__logolist">
          <img
            src="http://placehold.it/100x50"
            alt="Folkehelseinstituttet logo"
          />
        </div>
        <div className="b-secondary-logos__text">
          <p>
            Veilederne er utgitt av Helsedirektoratet. <br />
            Faglig innhold levert av Folkehelseinstituttet
          </p>
        </div>
      </div>
    </div>
    <div className="l-container l-mt-3 l-mb-5">
      <div className="row">
        <div className="col-xs-12">
          <PageMeta publishDate="11. august 2008" editDate="12. august 2018" />
          <div className="l-mt-1">
            <Button clean small icon="../icons/print.svg">
              Skriv ut/lag PDF
            </Button>
            <ContentFooter
              heading="Slik refererer du [produkttype]"
              id="contentFooter-1"
              content={[
                <>
                  Helsedirektoratet (2020).{' '}
                  <i>
                    Nasjonal faglig retningslinjer for helsestasjons- og
                    skolehelsetjenesten [nettdokument].
                    </i>{' '}
                    Oslo: Helsedirektoratet (sist faglig oppdatert 12. mars
                    2019, lest 12. august 2020). Tilgjengelig fra:
                    https://www.helsedirektoratet.no/retningslinjer/helsestasjons-og-skolehelsetjenesten.
                  </>
              ]}
            />
            <ContentFooter
              heading="Åpne data (API)"
              id="contentFooter-2"
              content={[
                <>
                  Få tilgang til innhold fra Helsedirektoratet som åpne data:{' '}
                  <br />
                  <a href="https://utvikler.helsedirektoratet.no/">
                    https://utvikler.helsedirektoratet.no/
                    </a>
                  <br />
                  <br />
                  <span className="t--bold">
                    [Fulltittel på innholdet]
                    </span>{' '}
                    er tilgjengelig i vårt API: https://xxxx
                  </>
              ]}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="l-mt-4">
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
    </div>
  </>
);

export default GrantsSubPage;
