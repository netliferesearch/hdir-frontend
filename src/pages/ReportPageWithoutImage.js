import React from 'react';

import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import ChapterHeading from '../components/ChapterHeading';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';

const ReportPageWithoutImage = () => (
  <div>
    <div className="l-container">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
          {
            name: 'Konferanse',
            href: '#a'
          },
          {
            name: 'Arbeid og psykisk helse',
            href: '#a'
          },
          {
            name: 'Fastlegekonferansen 2018 - fastlegeordning for fremtiden'
          }
        ]}
      />
    </div>
    <div className="l-mt-4">
      <Box color="blueDark" square noPadding>
        <div className="l-container">
          <div className="l-mt-1 l-mb-1">
            <ChapterHeading
              subheading="Rapport"
              heading="Ventetider og pasientrettigheter 2017"
              line="none"
              h="h1"
            />
          </div>
        </div>
      </Box>
    </div>
    <div className="l-container">
      <div className="row l-mt-4">
        <div className="col-xs-12 l-mb-4">
          <Box color="blue">
            <ChapterHeading
              heading="Ventetid"
              subheading="Kapittel 1"
              line="none"
              url="#a"
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
              url="#a"
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

export default ReportPageWithoutImage;
