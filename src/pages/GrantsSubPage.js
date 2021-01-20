import React from 'react';
import Link from '../components/Link';
import Box from '../components/Box';
import Collapsible from '../components/Collapsible';
import SectionSidebar from '../components/SectionSidebar';
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

        <div className="l-mt-2">
          <span>Søknadsfrist 1. mars</span>{' '}
          <span>Beløp: 422 millioner kroner</span>
        </div>

        <div className="l-mt-2">
          <Button>Søk på tilskuddet</Button>
        </div>
        <div className="l-mt-1">
          <Button secondary>Rapporter på tilskuddet</Button>
        </div>

        <article className="t-body-text l-mt-4">
          <section>
            <h2>Slik blir prosessen</h2>
            <div>Tidslinje</div>
          </section>

          <section className="l-mt-4 b-collapsible b-collapsible--active b-collapsible--clean">
            <h2>Regelverk</h2>
            <Collapsible h="h3" heading="Mål for ordningen" size="small">
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
            <Collapsible h="h3" heading="Hvem kan få tilskudd?" size="small">
              <p>x</p>
            </Collapsible>
            <Collapsible
              h="h3"
              heading="Dette må være med i søknaden"
              size="small"
            >
              <p>x</p>
            </Collapsible>
            <Collapsible h="h3" heading="Tildelingskriterier" size="small">
              <p>x</p>
            </Collapsible>
            <Collapsible
              h="h3"
              heading="Dette må være med i rapporteringen"
              size="small"
            >
              <p>x</p>
            </Collapsible>
          </section>

          <section className="l-mt-4">
            <h2>Statistikk</h2>
            <div> Embed</div>
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
