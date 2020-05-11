import React, { useState } from 'react';
import Collapsible from '../components/Collapsible';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import SectionSidebar from '../components/SectionSidebar';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import Link from '../components/Link';
import ProductSearch from '../components/ProductSearch';
import Quote from '../components/Quote';

const ChapterPage = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <>
      <main id="main">
        <div className="l-container">
          <Breadcrumbs
            paths={[
              {
                name: 'Forsiden',
                href: '#a'
              },
            ]}
          />
          <div className="l-layout">
            <aside className="l-hide-to-lg l-sidebar l-bleed-right">
              <SectionSidebar
                heading="Nasjonal faglig retningslinje"
                icon="./icons/Rundskriv_Veileder_til_lov.svg"
                list={[
                  {
                    url: '#',
                    description: '1. Lovens formål, virkeområder og definisjoner'
                  },
                  {
                    url: '#',
                    description: '2. Krav til helsepersonells yrkesutøvelse',
                  },
                  {
                    url: '#',
                    description: '3. Krav til organisering og virksomhet',
                    active: true,
                  },
                ]}
              />
            </aside>
            <div className="l-article">
              <div className="b-profession-picker  b-profession-picker--negative-margin">
                { // onclick="document.getElementById('profession-picker').classList.toggle('hide');" 
                }
                <label for="profession-selector" className="b-profession-picker__label"><button onClick={() => setToggle(!toggle)} className="b-button--clean b-profession-picker__button">Tilpass innholdet til meg</button></label>
                {
                  toggle ? (
                    <div class="b-select l-mt-1 l-mb-3 col-md-6" id="profession-picker">
                      <select id="profession-selector" class="b-select__select">
                        <option disabled="" class="b-select__option">Velg målgruppe</option>
                        <option class="b-select__option">Lege</option>
                      </select>
                    </div>
                  ) : null
                }
              </div>
            <ProductSearch
              label="rundskrivet"
              productId="0e87de78-2cb4-4a70-93a7-0d687443b71e"
            />
            <ChapterHeading
              heading="3. Krav til organisering og virksomhet"
              h="h1"
              clean
            />
            

            <Collapsible
              background
              heading="§ 18. Melding om helsepersonells virksomhet"
            >
                <br />
                <h3>Lovtekst:</h3>
                <Quote>
                <p>
                  Rundt 15 prosent av det legemeldte sykefraværet i Norge skyldes
                  psykiske lidelser. Andelen uføretrygdede med en psykisk lidelse
                  er på noe over 30 prosent. Blant personer som faller ut av
                  arbeidslivet, utgjør personer med psykiske lidelser en stor og
                  økende gruppe.
            </p>
                <p>
                  Norske og internasjonale studier viser at 30 – 50 prosent av den
                  voksne befolkningen vil få en psykisk lidelse i løpet av livet.
            </p>
                <ul>
                  <li>a. Befolkning</li>
                  <li>b. Skjermer</li>
                  <li>c. Tastaturer</li>
                </ul>
                <p>
                  Dette omfatter tiltak som kan bidra til å forhindre at psykiske
                  plager og lidelser oppstår (primærforebygging).
            </p>
                <p className="b-quote__footnote">
                  Fotnote:
              <br />0 Tilføyd ved lov 24 juni 2011 nr. 30 (ikr. 1 jan 2012
              iflg. res. 16 des 2011 nr. 1252). Endres ved lov 16 juni 2017
              nr. 55 (ikr. fra den tid Kongen bestemmer).
            </p>
              </Quote>
              <h3>Kommentarer til § 18:</h3>
              <p>
                Bestemmelsen pålegger helsepersonell i privat virksomhet å melde
                om åpning, overtakelse, inntreden eller opphør i virksomhet som
                yter helsetjenester.
          </p>
              <p>
                Formålet med første ledd er å gi myndighetene oversikt over
                helsepersonelldekningen, og dermed ha mulighet til å iverksette
                styringstiltak ved behov. Andre ledd skal gi tilsynsmyndigheten
                mulighet til å vurdere tilsynsmessig oppfølgning.
          </p>
              <h4>Første ledd</h4>
              <p>
                Omfatter alt helsepersonell med autorisasjon og lisens når disse
                utøver arbeid som helsepersonell i privat virksomhet. Meldeplikten
                er for eksempel aktuell når en fysioterapeut, kiropraktor eller
                tannlege starter selvstendig virksomhet i en kommune.
          </p>
              <p>
                Meldeplikten er obligatorisk. Helsepersonell i privat
                spesialisthelsetjeneste skal gi melding til regionalt
                helseforetak, mens helsepersonell i annen virksomhet skal gi
                melding til kommunen. Dette gjelder også for eksempel spesialister
                i sykehus som påtar seg oppgaver i privat virksomhet utenfor
                spesialisthelsetjenesten.
          </p>
              <h4>Andre ledd</h4>
              <p>
                Andre ledd første punktum er en pliktbestemmelse for
                helsepersonell. Det følger av bestemmelsen at helsepersonell som
                åpner, overtar eller trer inn i virksomhet som skal yte helsehjelp
                til barn eller personer med utviklingshemming, skal fremlegge
                politiattest for kommune eller regionalt helseforetak. Plikten til
                å fremlegge politiattest følger av helsepersonelloven § 20 a Andre
                punktum er en pliktbestemmelse for kommune og regionale
                helseforetak. Bestemmelsen pålegger kommunen eller helseforetaket
                straks å sende en politiattest med anmerkninger videre til
                Fylkesmannen.
          </p>
              <h4>Tredje ledd</h4>
              <p>
                Tredje ledd er en forskriftshjemmel for å kunne gi utfyllende
                bestemmelser om meldeplikten etter første ledd. Det er ikke gitt
                slik forskrift.
          </p>
         
            </Collapsible >
            
              <Collapsible
                background
                heading="§ 19. Melding til arbeidsgiver om bierverv og andre engasjement i annen virksomhet"
              > 
                <br />
                <h3>Lovtekst</h3>
                <Quote>
                  <p>
                    «Helsepersonell med autorisasjon eller lisens skal av eget
                    tiltak gi arbeidsgiveren opplysninger om bierverv og
                    engasjement, eierinteresser o.l. i annen virksomhet som vil
                    kunne komme i konflikt med hovedarbeidsgivers interesser.
            </p>
                  <ul>
                    <li>1. Befolkning</li>
                    <li>2. Skjermer</li>
                    <li>3. Tastaturer</li>
                  </ul>
                  <p>
                    Arbeidsgiveren kan i tillegg kreve at helsepersonell med
                    autorisasjon eller lisens gir opplysninger om all helsefaglig
                    virksomhet som helsepersonellet utfører som selvstendig
                    næringsdrivende, for andre arbeids- eller oppdragsgivere i Norge
                    eller i utlandet, og om eierinteresser, samarbeidsforhold o.l.
            </p>
                  <p>
                    Det skal gis opplysning om virksomhetens navn og arten og
                    omfanget av helsepersonells bierverv eller engasjement.
            </p>
                  <p>
                    Denne bestemmelsen begrenser ikke plikten til å opplyse om
                    bierverv som følger av avtale eller andre rettsregler.»
            </p>
                  <p className="b-quote__footnote">
                    Fotnote:
              <br />0 Tilføyd ved lov 24 juni 2011 nr. 30 (ikr. 1 jan 2012
              iflg. res. 16 des 2011 nr. 1252). Endres ved lov 16 juni 2017
              nr. 55 (ikr. fra den tid Kongen bestemmer).
            </p>
                </Quote>
                <a href="#a">Les mer § X på lovdata.no</a>
                <h3>Kommentar til § 19:</h3>
                <p>
                  Bestemmelsen pålegger helsepersonell å informere hovedarbeidsgiver
                  om bierverv, engasjement, eierinteresser mv. som kan komme i
                  konflikt med hovedarbeidsgivers interesser.
          </p>
                <p>
                  Formålet er å avdekke lojalitetskonflikter, inhabilitet og forhold
                  som hindrer faglig forsvarlig yrkesutøvelse. Det er viktig for
                  tilliten til den offentlige helsetjenesten at det ikke oppstår
                  tvil om at avgjørelser tas av hensyn til pasienten og en fornuftig
                  forvaltning av offentlige interesser, og ikke av hensyn til
                  helsepersonellets egne interesser.
          </p>
                <p>
                  Likeledes kan en arbeidsgiver i privat virksomhet begrense en
                  ansatts bierverv for eksempel for å sikre at den totale
                  arbeidsbelastningen ikke går ut over hovedstillingen.
          </p>
              </Collapsible>
            
              <div className="l-mt-4">
                <Link wideButton arrow color="purple">
                  Henvis pasienten til helsenorge.no for mer informasjon
                </Link>
              </div>
              <div className="l-mt-2">
                <PageMeta
                  publishDate="11. oktober 2008"
                  editDate="11. august 2018"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

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
  )
  
};

export default ChapterPage;
