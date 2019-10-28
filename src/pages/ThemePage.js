import React from 'react';
import NavList from '../components/NavList';
import Box from '../components/Box';
import List from '../components/List';
import ArticleIntro from '../components/ArticleIntro';
import Card from '../components/Card';
import Link from '../components/Link';
import Image from '../components/Image';
import Statistics from '../components/Statistics';

const ThemePage = () => (
  <>
    <main id="main">
      <div className="l-container">
        <div className="l-mt-3">
          <ArticleIntro
            topic="Tema"
            heading="Helsestasjons- og skolehelsetjenesten"
            lead="Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse."
          />
        </div>
        <div className="row">
          <div className="col-xs-12 l-mt-3">
            <NavList
              columns
              list={[
                { title: 'Undertema 1', url: '#' },
                { title: 'undertema 2', url: '#' },
                { title: 'Undertema 3', url: '#' }
              ]}
            />
          </div>
        </div>
        <div className="l-card-grid  l-mt-2">
          <div className="l-mt-1">
            <Card
              heading="Barns miljø og sikkerhet"
              url="#a"
              text="Brosjyren Når barnet skader seg – Råd til småbarnsforeldre om førstehjelp"
            />
          </div>
          <div className="l-mt-1">
            <Card
              heading="Roller i skolehelsetjenesten"
              url="#a"
              text="Hvem gjør hva i skolehelsetjenesten?"
            />
          </div>
          <div className="l-mt-1">
            <Card
              heading="Noe annet som er viktig"
              url="#a"
              text="og som vi skriver mer om her"
            />
          </div>
          <div className="l-mt-1">
            <Card
              heading="Noe annet som er viktig"
              url="#a"
              text="og som vi skriver mer om her"
            />
          </div>
          <div className="l-mt-1">
            <Card
              heading="Noe annet som er viktig"
              url="#a"
              text="og som vi skriver mer om her"
            />
          </div>
        </div>

        <div className="row l-mt-4">
          <div className="col-xs-12">
            <h2>Nasjonale anbefalinger, råd og pakkeforløp</h2>
            <div className="l-mt-1">
              <hr className="b-hr b-hr--thick" />
            </div>
          </div>
        </div>
        <List
          list={[
            {
              type: 'generic',
              url: '#5',
              fields: {
                category: 'Nasjonale faglige retningslinjer',
                heading:
                  'Råd ved bruk av sosiale medier i helsestasjons- og skolehelsetjenesten'
              }
            }
          ]}
        />
        <div className="row">
          <div className="col-xs-11 col-xs-offset-1 col-md-10 col-md-offset-1">
            <NavList
              list={[
                {
                  title:
                    'Råd ved bruk av sosiale medier i helsestasjons- og skolehelsetjenesten',
                  url: '#',
                  description: 'KAPITTEL 1'
                },
                {
                  title: 'Sosiale medier er ikke i skolehelsetjenesten',
                  url: '#',
                  description: 'KAPITTEL 2'
                },
                {
                  title: 'Personvern ved bruk sosiale medier',
                  url: '#',
                  description: 'KAPITTEL 3'
                },
                {
                  title:
                    'Meldeplikt til barnevernet ved bruk av sosiale medier i helsestasjon',
                  url: '#',
                  description: 'KAPITTEL 4'
                },
                {
                  title:
                    'Varslingsplikt i helsestasjons- og skolehelsetjenesten',
                  url: '#',
                  description: 'KAPITTEL 5'
                },
                {
                  title:
                    'Ta kontakt med Kripos hvis du mottar trusler gjennom sosiale medier',
                  url: '#',
                  description: 'KAPITTEL 6'
                },
                {
                  title:
                    'Praktiske tips fra helsesøstre som benytter sosiale medier',
                  url: '#',
                  description: 'KAPITTEL 7'
                }
              ]}
            />
          </div>
        </div>

        <div className="row l-mt-4">
          <div className="col-xs-12">
            <List
              heading="RELEVANTE RETNINGSLINJER, LOV OG PAKKEFORLØP"
              list={[
                {
                  type: 'generic',
                  url: '#5',
                  fields: {
                    category: 'Nasjonale faglige retningslinjer',
                    heading:
                      'Råd ved bruk av sosiale medier i helsestasjons- og skolehelsetjenesten'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    category: 'Nasjonale faglige retningslinjer',
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten'
                  }
                },
                {
                  type: 'generic',
                  url: '#7',
                  fields: {
                    category: 'Nasjonale faglige retningslinjer',
                    heading:
                      'Utvidet rekvireringsrett til helsesøstre og jordmødre for prevansjonsmidler – Helsesøstre og jordmødres administrering av langtidsvirkende, reversibel prevensjon (LARC)'
                  }
                }
              ]}
            />
          </div>
        </div>

        <div className="row l-mt-4">
          <div className="col-xs-12">
            <div className="js-expand-list" data-start-limit="2">
              <List
                heading="RELEVANTE ANBEFALINGER, KRAV ELLER RÅD"
                list={[
                  {
                    type: 'generic',
                    url: '#5',
                    fields: {
                      category: 'Krav i lov eller forskrift',
                      heading:
                        'Tannhelsetjenester skal ha et og skolehelsetjenesten',
                      topic: (
                        <>
                          <strong>Hentet fra:</strong> Nasjonal faglig
                          retningslinje for tannhelsetjenester til barn og unge
                          0-20 år
                        </>
                      )
                    }
                  },
                  {
                    type: 'generic',
                    url: '#6',
                    fields: {
                      category: 'Sterk anbefaling',
                      heading:
                        'Barn og unge med høy karierisiko helsestasjons- og skolehelsetjenesten',
                      topic: (
                        <>
                          <strong>Hentet fra:</strong> Nasjonal faglig
                          retningslinje for tannhelsetjenester til barn og unge
                          0-20 år
                        </>
                      )
                    }
                  },
                  {
                    type: 'generic',
                    url: '#7',
                    fields: {
                      category: 'Sterk anbefaling',
                      heading:
                        'Foresatte til barn med administrering av langtidsvirkende reversibel',
                      topic: (
                        <>
                          <strong>Hentet fra:</strong> Nasjonal faglig
                          retningslinje for tannhelsetjenester til barn og unge
                          0-20 år
                        </>
                      )
                    }
                  }
                ]}
              />
              <div className="l-mt-2 t-sm-center">
                <button className="b-button b-button--secondary b-button--small ">
                  ↓ Vis alle (3)
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 l-mt-4">
            <h2>
              <img
                src="./icons/Tilskudd.svg"
                className="b-icon b-icon--heading"
                alt=""
                role="presentation"
              />
              Tilskudd
            </h2>
            <div className="l-mt-1">
              <hr className="b-hr b-hr--thick" />
            </div>
            <div className="l-mt-1">
              <NavList
                list={[
                  {
                    title: 'Refusjonskrav Refusjonskrav Refusjonskrav',
                    url: '#',
                    meta: 'Søknadsfrist: 22.november'
                  }
                ]}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 l-mt-4">
            <h2>
              <img
                src="./icons/Statistikk.svg"
                className="b-icon b-icon--heading"
                alt=""
                role="presentation"
              />
              Statistikk
            </h2>
            <div className="l-mt-1">
              <hr className="b-hr b-hr--thick" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 l-mt-2">
            <Card
              heading="Pakkeforløp for brystkreft"
              topic="Kvalitetsindikator"
              url="#a"
            >
              <Statistics
                bigText="91,3%"
                smallText="Andel pakkeforløp for brystkreft som er gjennomført innenfor makisemal anbefalt forløstid."
                icon="../icons/pie.svg"
              />
            </Card>
          </div>
          <div className="col-xs-12 col-md-6 l-mt-2">
            <Card heading="Fastlegestatistikk" topic="Rapport" url="#a">
              <Statistics
                bigText="1106"
                smallText="Antall på en gjennomsnittlig liste for fastleger."
                icon="../icons/pie.svg"
              />
            </Card>
          </div>
        </div>
        <div className="l-mt-2">
          <List
            list={[
              {
                type: 'generic',
                url: '#7',
                fields: {
                  category: 'Statistikk',
                  heading:
                    'Kartlegging av forekomst av hørselshemmede i alderen 0-18 år i innvanringbefolkningen med ikke-vestlig bakgrunn'
                }
              },
              {
                type: 'generic',
                url: '#7',
                fields: {
                  category: 'Statistikk',
                  heading:
                    'Utviklingsstrategi for helsestasjons- og skolehelsetjenesten'
                }
              },
              {
                type: 'generic',
                url: '#7',
                fields: {
                  category: 'Statistikk',
                  heading:
                    'Utvikling av en bindene bemanningsnorm i helsestasjons- og skolehelsetjenesten'
                }
              }
            ]}
          />
        </div>

        <div className="row">
          <div className="col-xs-12 l-mt-4">
            <h2>
              <img
                src="./icons/Rapporter.svg"
                className="b-icon b-icon--heading"
                alt=""
                role="presentation"
              />
              Rapporter
            </h2>
            <div className="l-mt-1">
              <hr className="b-hr b-hr--thick" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 l-mt-2">
            <Card heading="Les rapport" url="#a">
              <Image
                src="http://placehold.it/500x400"
                alt="altText"
                ratio="16:9"
              />
            </Card>
          </div>
          <div className="col-xs-12 col-md-6 l-mt-2">
            <Card heading="Ventetider og pasientrettigheter 2017" url="#a">
              <Image
                src="http://placehold.it/400x400"
                alt="altText"
                ratio="16:9"
              />
            </Card>
          </div>
        </div>

        <div className="row l-mt-2">
          <div className="col-xs-12">
            <List
              list={[
                {
                  type: 'generic',
                  url: '#7',
                  fields: {
                    category: 'Rapport',
                    heading:
                      'Kartlegging av forekomst av hørselshemmede i alderen 0-18 år i innvanringbefolkningen med ikke-vestlig bakgrunn'
                  }
                },
                {
                  type: 'generic',
                  url: '#7',
                  fields: {
                    category: 'Rapport',
                    heading:
                      'Utvikling av en bindene bemanningsnorm i helsestasjons- og skolehelsetjenesten'
                  }
                },
                {
                  type: 'generic',
                  url: '#7',
                  fields: {
                    category: 'Rapport',
                    heading:
                      'Foresatte til barn med høy karierisiko bør involveres særskilt i behandling av barnet'
                  }
                }
              ]}
            />
          </div>
        </div>

        <div className="row l-mt-4">
          <div className="col-xs-12">
            <h2>
              <img
                src="./icons/Konferanser.svg"
                className="b-icon b-icon--heading"
                alt=""
                role="presentation"
              />
              Konferanser
            </h2>
            <div className="l-mt-1">
              <hr className="b-hr b-hr--thick" />
            </div>
          </div>
          <div className="col-xs-12">
            <List
              list={[
                {
                  type: 'conference',
                  url: '#4',
                  fields: {
                    category: '',
                    heading:
                      'Lansering av nye nasjonale faglige kurs i hendelsesanalyse og pasientsikkerhet',
                    dateFrom: '3. november 1990',
                    location: 'The Qube, Gardermoen',
                    registrationDeadline: '15. oktober',
                    topic: ''
                  }
                }
              ]}
            />
          </div>
        </div>

        <div className="row l-mt-4">
          <div className="col-xs-12">
            <h2>Verktøy</h2>
            <div className="l-mt-1">
              <hr className="b-hr b-hr--thick" />
            </div>
          </div>
          <div className="col-xs-12">
            <NavList
              list={[
                {
                  title: 'Kalkulator for estimering av bemanning',
                  url: '#a'
                }
              ]}
            />
          </div>
        </div>

        <div className="row l-mt-4">
          <div className="col-xs-12">
            <h2>
              <img
                src="./icons/Trykkmateriell.svg"
                className="b-icon b-icon--heading"
                alt=""
                role="presentation"
              />
              Trykkmateriell</h2>
            <div className="l-mt-1">
              <hr className="b-hr b-hr--thick" />
            </div>
          </div>
          <div className="col-xs-12">
            <List
              list={[
                {
                  type: 'pressRelease',
                  url: '#3',
                  fields: {
                    category: 'Plakat',
                    heading: 'Barns miljø og sikkerhet / når barnet skader seg',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '01. juni 2009'
                  }
                },
                {
                  type: 'pressRelease',
                  url: '#4',
                  fields: {
                    category: 'Brosjyre (PDF)',
                    heading:
                      'Hva kan det være? Svangerskapsdiabetes? Disse symptomene må du være obs på.',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '01. juni 2009'
                  }
                }
              ]}
            />
          </div>
        </div>
      </div>
    </main>

    <div className="l-container">
      <div className="row">
        <div className="l-mt-5 col-xs-12 col-md-10 col-md-offset-1">
          <Link href="#a" wideButton color="purple" arrow>
            Er det noe på helsenorge.no som er relevant kan man bruke denne
            modulen
          </Link>
        </div>
      </div>
    </div>

    <div className="l-mt-5">
      <Box square noPadding>
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

export default ThemePage;
