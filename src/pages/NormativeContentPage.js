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
      <div className="l-mt-4">
        <h2 className="h3 l-mb-1">Velg innholdstype</h2>
        <FilterList
          bombasticSelect
          list={[
            {
              name: 'Nasjonale faglige retningslinjer',
              color: 'blue'
            },
            {
              name: 'Pakkeforløp',
              color: 'green'
            },
            {
              name: 'Rundskriv',
              color: 'orange'
            },
            {
              name: 'Veileder til lov og forskrift',
              color: 'yellow'
            },
            {
              name: 'Høringer',
              color: 'yellow'
            }
          ]}
        />
      </div>

      <div className="l-mt-4">
        <h2 className="h3 l-mb-1">Vis kun</h2>

        <ul className="b-content-filter__list">
          <li className="b-content-filter__list-item">ALT</li>
          <li className="b-content-filter__list-item">
            <a href="#">ABC</a>
          </li>
          <li className="b-content-filter__list-item">
            <a href="#">DEF</a>
          </li>
          <li className="b-content-filter__list-item">
            <a href="#">GHI</a>
          </li>
          <li className="b-content-filter__list-item">
            <a href="#">JKL</a>
          </li>
          <li className="b-content-filter__list-item">
            <a href="#">MNO</a>
          </li>
          <li className="b-content-filter__list-item">
            <a href="#">PQR</a>
          </li>
          <li className="b-content-filter__list-item">
            <a href="#">STU</a>
          </li>
          <li className="b-content-filter__list-item">
            <a href="#">VWX</a>
          </li>
          <li className="b-content-filter__list-item">
            <a href="#">UZÆ</a>
          </li>
          <li className="b-content-filter__list-item">
            <a href="#">ØÅ</a>
          </li>
          <li className="b-content-filter__list-item">
            <a href="#">0-9</a>
          </li>
        </ul>
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
