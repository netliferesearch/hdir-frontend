import React from 'react';
import NavList from '../components/NavList';
import Box from '../components/Box';
import Heading from '../components/Heading';
import ArticleIntro from '../components/ArticleIntro';
import Card from '../components/Card';
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
        <div className="col-xs-12 l-mt-5 l-mb-4">
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
        <div className="col-xs-12 l-mt-4">
          <h2>Statistikk</h2>
          <div className="l-mt-1">
            <hr className="b-hr b-hr--thick" />
          </div>
          <div className="l-mt-3">
            <Heading h="h3" className="h5">
              Nyeste statistikk
            </Heading>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6 l-mt-2">
          <Card
            heading="Pakkeforløp for brystkreft"
            text="Kvalitetsindikator"
            url="#"
          >
            <Statistics
              bigText="91,3%"
              smallText="Andel pakkeforløp for brystkreft som er gjennomført innenfor makisemal anbefalt forløstid."
              icon="./icons/pie.svg"
            />
          </Card>
        </div>
        <div className="col-xs-12 col-md-6 l-mt-2">
          <Card heading="Fastlegestatistikk" text="Kvalitetsindikator" url="#">
            <Statistics
              bigText="1106"
              smallText="Antall på en gjennomsnittlig liste for fastleger."
              icon="./icons/pie.svg"
            />
          </Card>
        </div>
      </div>
      <div className="row l-mt-4">
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

    <div className="l-mt-4">
      <Box color="green" square noPadding>
        <div className="l-container">
          <strong>Kontakt:</strong>
          <br />
          <a href="#">spesialisthelsetjenester@helsedir.no</a>
          <br />
          <a href="#">navn.etternavn@helsedir.no</a>
          <br />
          <a href="#">999 99 999</a>
        </div>
      </Box>
    </div>
  </div>
);

export default HdirTema;
