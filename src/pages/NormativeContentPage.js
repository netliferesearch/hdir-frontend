import React from 'react';

import NavList from '../components/NavList';
import Footer from '../components/Footer';
import FilterList from '../components/FilterList';

const NormativeContentPage = () => (
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
                type: 'nasjonale-faglige-retningslinjer'
              },
              {
                title: 'ADHD',
                url: '#',
                type: 'nasjonale-faglige-retningslinjer'
              },
              {
                title:
                  'Aktuell informasjon om lov og forskrift for prioriteringsveildere',
                url: '#',
                type: 'veileder'
              },
              {
                title: 'Antibiotika',
                url: '#',
                type: 'nasjonale-faglige-retningslinjer'
              },
              {
                title: 'ADHD',
                url: '#',
                type: 'nasjonale-faglige-retningslinjer'
              },
              {
                title: 'Antibiotika',
                url: '#',
                type: 'nasjonale-faglige-retningslinjer'
              },
              {
                title: 'ADHD',
                url: '#',
                type: 'nasjonale-faglige-retningslinjer'
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
                type: 'nasjonale-faglige-retningslinjer'
              },
              {
                title: 'ADHD',
                url: '#',
                type: 'nasjonale-faglige-retningslinjer'
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
                type: 'nasjonale-faglige-retningslinjer'
              },
              {
                title:
                  'Aktuell informasjon om lov og forskrift for prioriteringsveildere',
                url: '#',
                type: 'veileder'
              }
            ]}
          />
        </div>
      </article>
    </div>
    <Footer />
  </div>
);

export default NormativeContentPage;
