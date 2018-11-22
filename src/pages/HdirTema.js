import React from 'react';
import NavList from '../components/NavList';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import Box from '../components/Box';
import Link from '../components/Link';
import LongShortHeading from '../components/LongShortHeading';
import Select from '../components/Select';
import Button from '../components/Button';
import Heading from '../components/Heading';
import ArticleIntro from '../components/ArticleIntro';
import Card from '../components/Card';
import Statistics from '../components/Statistics';
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

        <div className="col-xs-12 l-mt-5 l-mb-4">
          <Box color="green">
            <Heading h="h2">Bruk riktig takst og regelverk</Heading>
            <hr className="b-hr b-hr--thick" />
            <div className="row">
              <p className="l-mt-5 l-mb-5 ">her kommer normerende innhold</p>
            </div>
          </Box>
        </div>
        <div className="col-xs-12 l-mt-5 l-mb-4">
          <Heading h="h2">Tilskudd</Heading>
          <hr className="b-hr b-hr--thick" />
          <div className="l-mt-3">
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
        <div className="row">
          <div className="col-xs-12 l-mt-4">
            <Heading h="h2">Statistikk</Heading>
            <hr className="b-hr b-hr--thick" />
            <div className="l-mt-3">
              <Heading h="h3" className="h5">
                Nyeste statistikk
              </Heading>
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
                <Card
                  heading="Fastlegestatistikk"
                  text="Kvalitetsindikator"
                  url="#"
                >
                  <Statistics
                    bigText="1106"
                    smallText="Antall på en gjennomsnittlig liste for fastleger."
                    icon="./icons/pie.svg"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xs-12 l-mt-5 l-mb-4">
        <hr className="b-hr b-hr--grey-light" />
        <div className="col-md-8 l-mt-2">
          <Heading h="h2">
            Legemidler på blå resept - når må du søke og når kan du forskrive
            direkte?
          </Heading>
          <p className="l-mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in.
          </p>
          <Link>Lenke videre</Link>
        </div>
      </div>
      <div className="col-xs-12 l-mt-5 l-mb-5">
        <hr className="b-hr b-hr--grey-light" />
        <div className="row">
          <div className="col-md-5">
            <NavList
              small
              list={[
                { title: 'Refusjonskrav', url: '#' },
                { title: 'Utbetaling og vedtak', url: '#' }
              ]}
            />
          </div>
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
