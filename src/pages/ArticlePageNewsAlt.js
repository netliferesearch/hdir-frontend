import React from 'react';

import List from '../components/List';
import NavList from '../components/NavList';
import Card from '../components/Card';
import PageMeta from '../components/PageMeta';
import Box from '../components/Box';
import Link from '../components/Link';
import Button from '../components/Button';
import Alert from '../components/Alert';
import ArticleIntro from '../components/ArticleIntro';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionSidebar from '../components/SectionSidebar';
import Statistics from '../components/Statistics';

const ArticlePageNews = () => (

  <>
    <div className="l-container">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
          {
            name: 'Nyheter',
            href: '#a'
          },
        ]}
      />
      <main id="main">
        <div className="l-mt-3">
          <ArticleIntro
            heading="Nytt e-læringskurs i palliativ behandling av eldre og alvorlig syke med covid-19"
            lead="Et nytt e-læringskurs skal gi helsepersonell i kommunale helse- og omsorgstjenester kompetanse i palliativ omsorg, pleie og behandling av eldre og alvorlig syke personer med covid-19, som behandles i kommunene."
          />
          
        </div>
        <div className="row l-mt-3">
          <article className="col-md-8 col-xs-12 col-md-offset-2 t-body-text">
            <img src="https://www.helsedirektoratet.no/nyheter/nytt-e-laeringskurs-i-palliativ-behandling-av-eldre-og-alvorlig-syke-med-covid-19/_/image/4a4f7079-f4ef-4d98-bace-581dc6145b92:e9a2766fad874433e0f60f63d912d36488c53559/width-768/Skjermbilde.PNG" />
            <p>
              Eldre og mennesker med underliggende sykdommer er spesielt utsatt for å bli alvorlig syke av covid-19. Kommuner som har hatt utbrudd, melder om svingende og dramatiske sykdomsforløp. Samtidig har det manglet opplæring i covid-19-spesifikk palliasjon for helsepersonell i kommunale helse- og omsorgstjenester.
            </p>
            <p>
              På oppdrag for Helsedirektoratet har Nasjonal kompetansetjeneste for aldring og helse utviklet et e-læringskurs i palliativ omsorg, pleie og behandling av eldre og alvorlig syke personer med covid-19, som bor hjemme eller på sykehjem.
            </p>
            <p>
              -Helsedirektoratet er glad for at Nasjonal kompetansetjeneste for aldring og helse har arbeidet raskt og godt i utviklingen av kurset, og håper kurset kan bidra til kompetanseheving hos helsepersonellet som behandler og gir omsorg og pleie til sårbare pasienter i en kritisk fase i livet, sier Helga Katharina Haug, avdelingsdirektør for kommunale helse- og omsorgstjenester i Helsedirektoratet.
            </p>

            <h2>For ansatte i kommunale helse- og omsorgstjenester</h2>

            <p>Kurset retter seg spesielt mot kommunale helse- og omsorgstjenester, og ansatte der som trenger kompetanseheving innenfor palliativ omsorg, pleie og behandling ved covid-19. Kurset vil også være interessant for helsepersonell i spesialisthelsetjenesten. E-læringskurset består av seks moduler og tar 2-3 timer å gjennomføre. </p>

            <h2>Praktisk opplæring</h2>
            <p>Kurset gir opplæring i symptomstøttende behandling i en fase hvor pasienten klarer seg bra og kanskje blir frisk igjen. Det inkluderer også opplæring i kliniske observasjoner, slik at helsepersonellet raskt kan identifisere forverring, og til slutt omhandler kurset palliativ pleie, omsorg og behandling i livets sluttfase når pasienten blir svært syk. E-læringskurset er gratis og åpent for alle. For å gjennomføre kurset trengs kun PC eller iPad med internettilkobling. 

            </p>

            <p>Kurset finner du på nettsidene til <a>Nasjonal kompetansetjeneste for aldring og helse</a>. </p>


            <div className="l-mt-3">

              <div>
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
              Skriv ut/lag PDF
            </small>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>

    <div className="l-container l-mt-4">
      <Box color="blue" square>
        <form className="row">
          <div className="col-md-5 col-xl-4">
            <h2 className="h3">Abonner på nytt eller oppdatert innhold</h2>
            <label
              htmlFor="email-subscription"
              className="b-input-text__label"
            >
              Fyll inn e-postadressen din for å motta varsler om <br /><strong>"Name for whatever you subscribe to"</strong>
            </label>
          </div>
          <div className="col-md-6 l-mb-1">
            <div className="l-flex b-input-text">
              <input
                type="text"
                id="email-subscription"
                className="b-input-text__input b-input-text__input--mt-1 col-md-7 l-mt-1 l-mr-1"
              />
              <div className="l-mt-1">
                <Button>Abonnér</Button>
              </div>
            </div>
            <div className="b-input-text__error" style={{ display: 'none' }}>
              Skriv inn en gyldig epost-adresse.
            </div>
          </div>
        </form>
      </Box>
    </div>

    <div className="l-container l-mb-4">
      <div className="row">
        <div className="col-xs-12 l-mt-4">
          <h2>
            <a href="#">
            <img
              src="./icons/Nyheter.svg"
              className="b-icon b-icon--heading"
              alt=""
              role="presentation"
            />
                Andre relevante nyheter
                </a>
              </h2>
          <div className="l-mt-1">
            <hr className="b-hr b-hr--thick" />
          </div>
          <div className="l-mt-1">
            
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <Card
                  heading="Revidert smittevernveileder for virksomheter med én-til-én-kontakt som frisører, kroppspleie mv."
                  url="#a"
                  arrow="right"
                  topic="Nyhet"
                  text="13. august 2020"
                >
                  <img src="https://www.helsedirektoratet.no/nyheter/revidert-smittevernveileder-for-virksomheter-med-en-til-en-kontakt-som-frisorer-kroppspleie-mv/_/image/d20e4c76-78e7-4fd1-b1d6-d8f4b0ad1163:9262411e44bbd3d1b8f98572d443a0ad5e05c8aa/width-768/37161620-hairdresser-cutting-hair-with-trimmer.jpg" alt="antibiotika" />
                </Card>
              </div>
              <div className="col-xs-12 col-md-6">
                <Card
                  heading="Revidert veileder for smittevern i kollektivtransport (buss, tog, trikk mv.)"
                  url="#a"
                  arrow="right"
                  topic="Nyhet"
                  text="6. august 2020"
                >
                  <img src="https://www.helsedirektoratet.no/nyheter/revidert-veileder-for-smittevern-i-kollektivtransport-buss-tog-trikk-mv./_/image/e557809a-25d5-4eb2-a67e-0baf848d9d90:023504bf88414ccf84dbd5e924def4fc82330a3b/width-768/33801691-city-bus-foto-Mostphotos.jpg" alt="antibiotika" />
                </Card>
              </div>
              
            </div>
          </div>
        </div>
      </div>
     

    </div>
  </>
);

export default ArticlePageNews;
