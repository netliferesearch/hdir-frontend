import React from 'react';

import NavList from '../components/NavList';
import FilterList from '../components/FilterList';
import Breadcrumbs from '../components/Breadcrumbs';

const NormativeContentPage = () => (
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

      <div className="l-mt-2">
        <h1>Normerende innhold</h1>
      </div>
      <div className="l-mt-3">
        <h2 className="h5 h5--thin l-mb-1">Velg innholdstype</h2>
        <FilterList
          list={[
            'Alt',
            'Nasjonale faglige retningslinjer',
            'Pakkeforløp',
            'Rundskriv',
            'Veileder til lov og forskrift',
            'Høringer'
          ]}
        />
      </div>

      <div className="l-mt-3">
        <h2 className="h5 h5--thin l-mb-1">Vis kun</h2>
        <FilterList
          list={[
            'Alt',
            'ABC',
            'DEF',
            'GHI',
            'JKL',
            'MNO',
            'PQR',
            'STU',
            'VWX',
            'UZÆ',
            'ØÅ',
            '0-9'
          ]}
        />
      </div>

      <article className="l-mt-4">
        <div className="l-mb-3">
          <NavList
            heading="A"
            columns
            list={[
              {
                title: 'Antibiotika',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              },
              {
                title: 'ADHD',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              },
              {
                title:
                  'Aktuell informasjon om lov og forskrift for prioriteringsveildere',
                url: '#',
                meta: 'Veileder'
              },
              {
                title: 'Antibiotika',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              },
              {
                title: 'ADHD',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              },
              {
                title: 'Antibiotika',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              },
              {
                title: 'ADHD',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              }
            ]}
          />
        </div>
        <div className="l-mb-3">
          <NavList
            heading="B"
            columns
            list={[
              {
                title: 'Antibiotika',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              },
              {
                title: 'ADHD',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              }
            ]}
          />
        </div>
        <div className="l-mb-3">
          <NavList
            heading="C"
            columns
            list={[
              {
                title: 'ADHD',
                url: '#',
                meta: 'Nasjonale faglige retningslinjer'
              },
              {
                title:
                  'Aktuell informasjon om lov og forskrift for prioriteringsveildere',
                url: '#',
                meta: 'Veileder'
              }
            ]}
          />
        </div>
      </article>
    </div>
  </div>
);

export default NormativeContentPage;
