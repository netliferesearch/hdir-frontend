import React from 'react';

import NavList from '../components/NavList';
import FilterList from '../components/FilterList';
import Breadcrumbs from '../components/Breadcrumbs';

const NormativeContentPage = () => (
  <div>
    <div className="l-container l-mt-3">
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
          }
        ]}
      />
      <main id="main">
        <div className="l-mt-3">
          <h1>Normerende innhold</h1>
        </div>
        <div className="l-mt-3">
          <h2 className="h5 h5--thin l-mb-1">Velg innholdstype</h2>
          <FilterList
            list={[
              'Alt (22)',
              'Nasjonale faglige retningslinjer (3)',
              'Pakkeforløp (4)',
              'Rundskriv (5)',
              'Veileder til lov og forskrift (8)',
              'Høringer (2)'
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
              'YZÆ',
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
                  title: 'Fileksempel',
                  url: '#',
                  meta: 'En PDF',
                  infoText: 'PDF',
                  file: true
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
          <div className="l-mb-5">
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
      </main>
    </div>
  </div>
);

export default NormativeContentPage;
