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

        <div className="l-mt-2 b-grant-byline">
          <div className="b-grant-byline__item">
            {/*  Add class "b-grant-byline__status-icon--expired" for red icon. */}
            <div className="b-grant-byline__status-icon" />
            Søknadsfrist 1. mars
          </div>
          <div className="b-grant-byline__item">
            <img
              src="/icons/Tilskudd.svg"
              role="presentation"
              alt=""
              aria-hidden="true"
              className="b-grant-byline__amount-icon"
            />
            Beløp: 422 millioner kroner
          </div>
        </div>

        <div className="l-mt-2">
          <Button>Søk på tilskuddet</Button>
        </div>
        <div className="l-mt-1">
          <Button secondary>Rapporter på tilskuddet</Button>
        </div>

        <article className="t-body-text l-mt-4">
          <Timeline
            label="Slik blir prosessen"
            items={[
              {
                label: 'Rapporteringfrist for 2020:',
                date: '1. mai 2021'
              },
              {
                label: 'Rapporteringfrist for 2020:',
                date: '1. mai 2021'
              },
              {
                label: 'Rapporteringfrist for 2020:',
                date: '1. mai 2021'
              },
              {
                label: 'Rapporteringfrist for 2020:',
                date: '1. mai 2021'
              },
              {
                label: 'Rapporteringfrist for 2021:',
                date: '1. april 2022'
              },
            ]}
          />

          <section className="l-mt-4 b-collapsible b-collapsible--active b-collapsible--clean">
            <h2 className="l-mb-1">Regelverk</h2>
            <Collapsible h="h3" heading="Mål for ordningen" size="small" noScroll>
              <p className="l-mt-1">
                Målet for ordningen er å styrke og utvikle kommunens
                helsestasjons- og skolehelsetjeneste. Målgruppen for ordningen
                er gravide og deres partnere, barselfamilier, barn og unge og
                deres familier.
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