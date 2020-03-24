import React from 'react';
import Collapsible from '../components/Collapsible';
import Button from '../components/Button';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import SectionSidebar from '../components/SectionSidebar';
import Alert from '../components/Alert';
import Box from '../components/Box';
import Link from '../components/Link';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductSearch from '../components/ProductSearch';

const ChapterPage = () => (
  <>
  <main id="main">
    <div className="l-container">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
          {
            name: 'Helsestasjons- og skolehelsetjenesten',
            href: '#a'
          }
        ]}
      />
      <div className="l-layout">
        <aside className="l-hide-to-lg l-sidebar l-bleed-right">
          <SectionSidebar
            heading="Nasjonal faglig retningslinje"
            icon="../icons/Konferanser.svg"
            list={[
              {
                url: '#',
                description: '1. Fellesdel: Ledelse, styring og brukermedvirkning'
              },
              {
                url: '#',
                description: '2. Fellesdel: Samhandling og samarbeid',
              },
              {
                url: '#',
                description: '3. Fellesdel: Opplysningsplikt'
              },
              {
                url: '#',
                description:
                  '4. Helsestasjon 0–5 år',
                active: true,
                children: [
                  {
                    description: '4.1 Veiing og måling',
                    active: true,
                    url: '#',
                  }
                ],
                readMoreLabel: 'Se hele kapittel 4'
              },
              {
                url: '#',
                description: '5. Skolehelsetjenesten 5–20 år'
              },
              {
                url: '#',
                description: '6. Helsestasjon for ungdom'
              },
              {
                url: '#',
                description: '7. Metode og prosess'
              }
            ]}
          />
        </aside>
        <div className="l-article">
        <ProductSearch label="Søk i retningslinjen" />
        <ChapterHeading
          heading="Kost og fysisk aktivitet ved svangerskaps-diabetes"
          subheading="KAPITTEL 1"
          h="h1"
          line="none"
        />
        <div className="l-mt-3 row">
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
                      prefix: '1.1',
                      description: 'Underkapittel',
                      url: '#',
                    },
                    {
                      prefix: '1.2',
                      description: 'Underkapittel',
                      url: '#',
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
                },
                {
                  title: "KAPITTEL 4",
                  url: "#",
                  description: "Avrusning",
                  children: [],
                },
                {
                  title: "KAPITTEL 5",
                  url: "#",
                  description: "Avrusning av gravide",
                  children: [],
                },
                {
                  title: "KAPITTEL 6",
                  url: "#",
                  description: "Avrusning fra andre rusmidler og flere rusmidler",
                  children: [],
                },
                {
                  title: "KAPITTEL 7",
                  url: "#",
                  description: "Avrusning fra opioider",
                  children: [
                    {
                      prefix: "7. 1",
                      url: "#",
                      description: "Symptomer ved opioidabstinens",
                      active: true, // THIS IS THE ACTIVE CHAPTER
                    },
                    {
                      prefix: "7. 2",
                      url: "#",
                      description: "Om opioider og deres virkninger",
                    }
                  ],
                },
              ]}
            />
          </aside>
          <div className="col-md-7 col-md-offset-1 l-bleed-left">
            <Collapsible
              heading="Om behandling av svangerskapsdiabetes"
              size="small"
              smallContent
              id="someId1"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </Collapsible>
            <div>
              <Collapsible
                heading="Anbefaling 1"
                subheading="Sterk anbefaling"
                subheadingContent="Dette er en beskrivelse av sterk anbefaling"
                id="someId1.1"
                background
              >
                <Alert status="success">
                  Vær oppmerksom på at dette atomet er på høring.
                </Alert>
                <p>
                  Kvinnen bør få kostveiledning og jevnlig oppfølging for å
                  oppnå tilfredsstillende blodsukker fastende og etter måltider,
                  og for å forhindre for stor vektøkning i svangerskapet. Det
                  anbefales at kostanamnese benyttes i dette arbeidet.
                </p>
                <p>
                  Kostrådene baseres på kostanamnesen og styres etter
                  glukoseverdier ved egenmåling. Mål: Fastende: {'<'}
                  5.3 mmol/l, 2 timer etter måltid: {'<'}
                  6.7 mmol/l (se anbefaling: Opplæring i egenmåling av glukose).
                  Kvinnen kan rådes til å følge et kosthold med en
                  karbohydratkvalitet og -mengde per måltid som gjør det enklere
                  å nå behandlingsmålene for glukose
                </p>
                <p>etc.</p>
                <hr className="b-hr b-hr--grey-light b-hr--padded" />
                <div className="t-sm-right">
                  <PageMeta editDate="11. august 2018" />
                </div>
              </Collapsible>
            </div>
            <div>
              <Collapsible
                heading="Det foreslås at HbA1c tas ved første svangerskapskonsultasjon for å oppdage udiagnostisert diabetes/hyperglykemi"
                subheading="Sterk anbefaling"
                subheadingContent="Dette er en beskrivelse av sterk anbefaling"
                id="anbefaling1"
                background
              >
                <p>
                  Kvinnen bør få kostveiledning og jevnlig oppfølging for å
                  oppnå tilfredsstillende blodsukker fastende og etter måltider,
                  og for å forhindre for stor vektøkning i svangerskapet. Det
                  anbefales at kostanamnese benyttes i dette arbeidet.
                </p>
                <p>
                  Kostrådene baseres på kostanamnesen og styres etter
                  glukoseverdier ved egenmåling. Mål: Fastende: {'<'}
                  5.3 mmol/l, 2 timer etter måltid: {'<'}
                  6.7 mmol/l (se anbefaling: Opplæring i egenmåling av glukose).
                  Kvinnen kan rådes til å følge et kosthold med en
                  karbohydratkvalitet og -mengde per måltid som gjør det enklere
                  å nå behandlingsmålene for glukose
                </p>
                <p>etc.</p>
                <hr className="b-hr b-hr--grey-light b-hr--padded" />

                <div className="t-sm-right">
                  <PageMeta editDate="11. august 2018" />
                </div>
              </Collapsible>
            </div>
            <div>
              <Collapsible
                heading="Anbefaling 3"
                subheading="Sterk anbefaling"
                subheadingContent="Dette er en beskrivelse av sterk anbefaling"
                id="someId3"
                background
              >
                <p>
                  Kvinnen bør få kostveiledning og jevnlig oppfølging for å
                  oppnå tilfredsstillende blodsukker fastende og etter måltider,
                  og for å forhindre for stor vektøkning i svangerskapet. Det
                  anbefales at kostanamnese benyttes i dette arbeidet.
                </p>
                <p>
                  Kostrådene baseres på kostanamnesen og styres etter
                  glukoseverdier ved egenmåling. Mål: Fastende: {'<'}
                  5.3 mmol/l, 2 timer etter måltid: {'<'}
                  6.7 mmol/l (se anbefaling: Opplæring i egenmåling av glukose).
                  Kvinnen kan rådes til å følge et kosthold med en
                  karbohydratkvalitet og -mengde per måltid som gjør det enklere
                  å nå behandlingsmålene for glukose
                </p>
                <p>etc.</p>
                <div>
                  <Collapsible
                    heading="Seksjon under: 1 – SUBHEADING UTEN INNHOLD"
                    size="medium"
                  >
                    <p>
                      Kvinnen bør få kostveiledning og jevnlig oppfølging for å
                      oppnå tilfredsstillende blodsukker fastende og etter
                      måltider, og for å forhindre for stor vektøkning i
                      svangerskapet. Det anbefales at kostanamnese benyttes i
                      dette arbeidet.
                    </p>
                  </Collapsible>
                </div>
                <div>
                  <Collapsible
                    heading="Seksjon under: 2 – SUBHEADING UTEN INNHOLD"
                    size="medium"
                    id="someId4"
                  >
                    <p>
                      Kvinnen bør få kostveiledning og jevnlig oppfølging for å
                      oppnå tilfredsstillende blodsukker fastende og etter
                      måltider, og for å forhindre for stor vektøkning i
                      svangerskapet. Det anbefales at kostanamnese benyttes i
                      dette arbeidet.
                    </p>
                    <Collapsible
                      heading="Seksjon under: 1.2"
                      size="small"
                      h="h4"
                      smallContent
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent eget convallis metus. Sed vitae imperdiet enim.
                        Suspendisse commodo nulla et arcu sodales, et sagittis
                        nisi fermentum. Integer commodo, ipsum ut vulputate
                        consequat, dolor risus egestas eros, sed consectetur
                        turpis neque et magna.
                      </p>
                    </Collapsible>
                  </Collapsible>
                </div>
                <hr className="b-hr b-hr--grey-light b-hr--padded" />
                <div className="t-sm-right">
                  <PageMeta editDate="11. august 2018" />
                </div>
              </Collapsible>
            </div>
            <div>
              <hr className="b-hr" />
            </div>
            <ChapterHeading
              heading="Underkapittel 1.1"
              subheading="kapittel 1.1"
              line="none"
              url="#a"
            />
            <div className="l-mt-2">
              <hr className="b-hr" />
            </div>
            <ChapterHeading
              heading="Underkapittel 1.2"
              subheading="kapittel 1.2"
              line="none"
              url="#a"
            />
            <div className="l-mt-2">
              <Link wideButton arrow color="purple">
                Henvis pasienten til helsenorge.no for mer informasjon
              </Link>
            </div>
            <div className="l-mt-3">
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
