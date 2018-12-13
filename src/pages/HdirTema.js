import React from 'react';
import NavList from '../components/NavList';
import Box from '../components/Box';
import Heading from '../components/Heading';
import ArticleIntro from '../components/ArticleIntro';
import Card from '../components/Card';
import Link from '../components/Link';
import Image from '../components/Image';
import Statistics from '../components/Statistics';
import PressRelease from '../components/PressRelease';

const HdirTema = () => (
  <div>
    <div className="l-container">
      <div className="l-mt-2">
        <ArticleIntro
          heading="Arbeid og psykisk helse"
          lead="Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse."
          image="./photo.jpg"
          imageDescription="Bildetekst"
        />
      </div>
      <div className="row">
        <div className="col-xs-12 l-mt-5 l-mb-4">
          <NavList
            columns
            list={[
              { title: 'Refusjonskrav', url: '#' },
              { title: 'Utbetaling og vedtak', url: '#' },
              { title: 'Arbeid bidrar til raskere bedring', url: '#' }
            ]}
          />
        </div>
      </div>
    </div>

    <Box color="green" square noPadding>
      <div className="l-container">
        <div className="row">
          <div className="col-xs-12">
            <h2>Normerende innhold</h2>
            <div className="l-mt-1">
              <hr className="b-hr b-hr--thick" />
            </div>
            <div className="l-mt-3 l-mb-5">Her kommer normerende innhold</div>
          </div>
        </div>
      </div>
    </Box>

    <div className="l-container">
      <div className="row">
        <div className="col-xs-12 l-mt-5">
          <h2>Tilskudd</h2>
          <div className="l-mt-1">
            <hr className="b-hr b-hr--thick" />
          </div>
          <div className="l-mt-1">
            <NavList
              columns
              list={[
                {
                  title: 'Refusjonskrav Refusjonskrav Refusjonskrav',
                  url: '#',
                  meta: 'Frist 22.november'
                },
                {
                  title:
                    'Utbetaling og vedtak Refusjonskrav Refusjonskrav Refusjonskrav Refusjonskrav',
                  url: '#',
                  meta: 'Frist 22.november'
                },
                {
                  title:
                    'Arbeid bidrar til raskere bedring Refusjonskrav Refusjonskrav Refusjonskrav Refusjonskrav Refusjonskrav',
                  url: '#',
                  meta: 'Frist 22.november'
                },
                {
                  title:
                    'Arbeid bidrar til raskere bedring Refusjonskrav Refusjonskrav Refusjonskrav Refusjonskrav Refusjonskrav',
                  url: '#',
                  meta: 'Frist 22.november'
                }
              ]}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 l-mt-5">
          <h2>Statistikk</h2>
          <div className="l-mt-1">
            <hr className="b-hr b-hr--thick" />
          </div>
          <div className="l-mt-3">
            <Heading h="h3" className="h5">
              Fremhevet statistikk
            </Heading>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6 l-mt-2">
          <Card
            heading="Pakkeforløp for brystkreft"
            text="Kvalitetsindikator"
            url="#a"
          >
            <Statistics
              bigText="91,3%"
              smallText="Andel pakkeforløp for brystkreft som er gjennomført innenfor makisemal anbefalt forløstid."
              icon="../static/icons/pie.svg"
            />
          </Card>
        </div>
        <div className="col-xs-12 col-md-6 l-mt-2">
          <Card heading="Fastlegestatistikk" text="Kvalitetsindikator" url="#a">
            <Statistics
              bigText="1106"
              smallText="Antall på en gjennomsnittlig liste for fastleger."
              icon="../static/icons/pie.svg"
            />
          </Card>
        </div>
      </div>
      <div className="row l-mt-4">
        <div className="col-xs-12">
          <Heading h="h3" className="h5">
            Mer statistikk
          </Heading>
          <div className="l-mt-1 l-mb-1">
            <hr className="b-hr" />
          </div>
        </div>
        <NavList
          list={[
            {
              title:
                'Kartlegging av forekomst av hørselshemmede i alderen 0-18 år i innvanringbefolkningen med ikke-vestlig bakgrunn',
              url: '#'
            },
            {
              title:
                'Utviklingsstrategi for helsestasjons- og skolehelsetjenesten',
              url: '#'
            },
            {
              title:
                'Utvikling av en bindene bemanningsnorm i helsestasjons- og skolehelsetjenesten',
              url: '#'
            }
          ]}
        />
      </div>

      <div className="row">
        <div className="col-xs-12 l-mt-5">
          <h2>Rapporter</h2>
          <div className="l-mt-1">
            <hr className="b-hr b-hr--thick" />
          </div>
          <div className="l-mt-3">
            <Heading h="h3" className="h5">
              Fremhevede rapporter
            </Heading>
          </div>
        </div>

        <div className="col-xs-12 col-md-6 l-mt-2">
          <Card heading="Ventetider og pasientrettigheter 2017" url="#a">
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

      <div className="row l-mt-4">
        <div className="col-xs-12">
          <Heading h="h3" className="h5">
            Flere rapporter
          </Heading>
          <div className="l-mt-1 l-mb-1">
            <hr className="b-hr" />
          </div>
        </div>
        <NavList
          list={[
            {
              title:
                'Kartlegging av forekomst av hørselshemmede i alderen 0-18 år i innvanringbefolkningen med ikke-vestlig bakgrunn',
              url: '#'
            },
            {
              title:
                'Utviklingsstrategi for helsestasjons- og skolehelsetjenesten',
              url: '#'
            },
            {
              title:
                'Utvikling av en bindene bemanningsnorm i helsestasjons- og skolehelsetjenesten',
              url: '#'
            }
          ]}
        />
      </div>

      <div className="row l-mt-5">
        <div className="col-xs-12">
          <h2>Konferanser</h2>
          <div className="l-mt-1 l-mb-1">
            <hr className="b-hr b-hr--thick" />
          </div>
        </div>
        <div className="col-xs-12">
          <NavList
            list={[
              {
                title:
                  'Lansering av nye nasjonale faglige reninglinjer for helsestasjons og skolehelsetjenester og for spedbarns-ernæring',
                url: '#b'
              }
            ]}
          />
        </div>
      </div>

      <div className="row l-mt-5">
        <div className="col-xs-12">
          <h2>Verktøy</h2>
          <div className="l-mt-1 l-mb-1">
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

      <div className="row l-mt-5">
        <div className="col-xs-12">
          <h2>Trykkmateriell</h2>
          <div className="l-mt-1 l-mb-1">
            <hr className="b-hr b-hr--thick" />
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <PressRelease
            title="Barns miljø og sikkerhet / når barnet skader seg"
            info="PLAKAT (PDF)"
            releaseDate="Utgitt: 01.06.2009"
            url="#a"
            image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png"
            imageAlt="some monster guy"
          />
        </div>
        <div className="col-xs-12 col-md-6">
          <PressRelease
            title="Barns miljø og sikkerhet / når barnet skader seg"
            info="PLAKAT (PDF)"
            releaseDate="Utgitt: 01.06.2009"
            url="#a"
            image="http://www.jemome.com/cdn/2014/07/book-cover-design_1356843.png"
            imageAlt="some monster guy"
          />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="l-mt-5 col-md-8 col-md-offset-2">
        <Link href="#a" wideButton color="purple" arrow>
          Er det noe på helsenorge.no som er relevant kan man bruke denne
          modulen
        </Link>
      </div>
    </div>

    <div className="l-mt-5">
      <Box color="green" square noPadding>
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
  </div>
);

export default HdirTema;
