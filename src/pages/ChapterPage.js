import React from 'react';
import Collapsible from '../components/Collapsible';
import Button from '../components/Button';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import SectionSidebar from '../components/SectionSidebar';
import Alert from '../components/Alert';
import Box from '../components/Box';
import Link from '../components/Link';
import IconWithText from '../components/IconWithText';
import ProductSearch from '../components/ProductSearch';

const ChapterPage = () => (
  <>
    <main id="main">
      <div className="l-container l-mt-2">
        <ChapterHeading
          heading="Kost og fysisk aktivitet ved svangerskaps-diabetes"
          subheading="KAPITTEL 1"
          h="h1"
          line="none"
        />
        <div className="row">
          <aside className="col-md-4 l-hide-to-lg l-bleed-right">
            <SectionSidebar
              heading="Nasjonal faglig retningslinje for svangerskapsdiabetes"
              headingUrl="#a"
              icon="../icons/Konferanser.svg"
              list={[
                {
                  title: 'KAPITTEL 1',
                  url: '#',
                  description:
                    'Kost og fysisk aktivitet ved svangerskaps-diabetes',
                  children: [
                    {
                      description: 'Underkapittel',
                      url: '#',
                      prefix: '1.1'
                    },
                    {
                      description: 'Underkapittel',
                      active: true,
                      url: '#',
                      prefix: '1.2'
                    }
                  ]
                },
                {
                  title: 'KAPITTEL 2',
                  url: '#',
                  description: 'Diagnostikk og tiltak'
                },
                {
                  title: 'KAPITTEL 3',
                  url: '#',
                  description: 'Nytt kapittel'
                }
              ]}
            />
          </aside>
          <div className="l-article">
          <ProductSearch label="Søk i retningslinjen" />
          <ChapterHeading
            heading="4. Helsestasjon 0–5 år"
            h="h1"
            line="none"
          />
          <ChapterHeading
            heading="4.1 Veiing og måling"
            url="#a"
          />
          <ChapterHeading
            heading="4.2 Hørsel, syn og språk"
            url="#a"
          />
          <Collapsible
            background
            heading="Helsestasjonsprogrammet: Alle barn 0–5 år bør få tilbud om regelmessige konsultasjoner på helsestasjonen"
          >
          </Collapsible >
          <Collapsible
            background
            heading="Lege: Helsestasjonen skal tilby barn helseundersøkelser med lege"
          >
          </Collapsible >
          <Collapsible
            background
            heading="Hjemmebesøk: Hjemmebesøk av helsesykepleier bør være den første konsultasjonen i helsestasjonsprogrammet"
          >
          </Collapsible >
          <Collapsible
            background
            heading="Munnundersøkelse: Helsestasjonen bør foreta munnundersøkelse på barn"
          >
          </Collapsible >
        
          
            <div>
              <Link wideButton arrow color="purple">
                Henvis pasienten til helsenorge.no for mer informasjon
              </Link>
            </div>
            <div>
              <PageMeta
                publishDate="11. oktober 2008"
                editDate="11. august 2018"
              />
            </div>
          </div>
        </div>
      </div>
    </main>

    <div className="l-container">
      <div className="l-mt-4 l-mb-4">
        <Collapsible heading="Abonnér på endringer – Nasjonal faglig retningslinje for svangerskapsdiabetes">
          <form>
            <div className="b-input-text">
              <label
                htmlFor="email-subscription"
                className="b-input-text__label"
              >
                Fyll inn e-postadressen din for å motta varsler om endringer.
              </label>
              <input
                type="text"
                id="email-subscription"
                className="b-input-text__input"
              />
              <div className="b-input-text__description">
                Du får straks en e-post som bekrefter ditt abonnement. Der
                finner du også melihet til å melde deg av.
              </div>
              <div className="b-input-text__error">
                Skriv inn en gylig epost-adresse.
              </div>
              <Button>Abonnér</Button>
            </div>
          </form>
          <Alert status="success">
            Abonnementet ditt er registrert. Du får straks e-post fra oss.
          </Alert>
        </Collapsible>
      </div>
    </div>

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

export default ChapterPage;
