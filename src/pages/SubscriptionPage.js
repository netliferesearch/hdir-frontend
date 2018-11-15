import React from 'react';

import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import ChapterHeading from '../components/ChapterHeading';
import ArticleIntro from '../components/ArticleIntro';
import Box from '../components/Box';

const ReportPage = () => (
  <div>
    <div className="l-container">
      <nav className="b-breadcrumbs">
        <a href="#" className="b-breadcrumbs__link">
          Lorum
        </a>
        <a href="#" className="b-breadcrumbs__link">
          Ipsum
        </a>
        <a href="#" className="b-breadcrumbs__link">
          Dolor
        </a>
      </nav>
      <div className="l-mt-2">
        <ArticleIntro
          heading="Arbeid og psykisk helse"
          lead="Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse."
          image="./photo.jpg"
          imageDescription="Bildetekst"
          feature
        />
      </div>
      <div className="row l-mt-4">
        <div className="col-xs-12 l-mb-4">
          <Box color="blue">
            <ChapterHeading
              heading="Ventetid"
              subheading="Kapittel 1"
              line="none"
              url="#"
            />
            <hr className="b-hr b-hr--blue" />
            <NavList
              list={[
                {
                  title: 'Kapittel 1.1',
                  url: '#',
                  meta: 'Ventetid til somatisk sektor'
                },
                {
                  title: 'Kapittel 1.2',
                  url: '#',
                  meta: 'Ventetid til psykisk helsevern for voksne'
                },
                {
                  title: 'Kapittel 1.3',
                  url: '#',
                  meta: 'Ventetid til tverrfaglig spesialisert rusbehandling'
                },
                {
                  title: 'Kapittel 1.4',
                  url: '#',
                  meta:
                    'Kumulativ vente tid for etter eller annet (alle pasienter)'
                }
              ]}
            />
          </Box>
        </div>
        <div className="col-xs-12 l-mb-4">
          <Box color="blue">
            <ChapterHeading
              heading="Nyhenviste, avviklede og ventende"
              subheading="Kapittel 2"
              line="none"
              url="#"
            />
            <hr className="b-hr b-hr--blue" />
            <NavList
              list={[
                {
                  title: 'Kapittel 1.1',
                  url: '#',
                  meta: 'Ventetid til somatisk sektor'
                },
                {
                  title: 'Kapittel 1.2',
                  url: '#',
                  meta: 'Ventetid til psykisk helsevern for voksne'
                },
                {
                  title: 'Kapittel 1.3',
                  url: '#',
                  meta: 'Ventetid til tverrfaglig spesialisert rusbehandling'
                },
                {
                  title: 'Kapittel 1.4',
                  url: '#',
                  meta:
                    'Kumulativ vente tid for etter eller annet (alle pasienter)'
                }
              ]}
            />
          </Box>
        </div>
        <PageMeta publishDate="11.08.2017" editDate="12.09.2018" />
      </div>
    </div>
  </div>
);

export default ReportPage;