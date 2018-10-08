import React from 'react';

import NavList from '../components/NavList';
import Footer from '../components/Footer';

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
          Dolor Dolor Dolor
        </a>
      </nav>

      <div className="l-mt-2">
        <h1>Arbeid og psykisk helse</h1>
      </div>

      <div className="b-content-filter">
        <h2 className="h3 l-mb-1">Velg innholdstype</h2>
        <ul className="b-content-filter__list">
          <li className="b-content-filter__list-item">
            <a href="#">ALT</a>
          </li>
          <li className="b-content-filter__list-item b-content-filter__list-item--blue">
            <a href="#">Nasjonale faglige retningslinjer</a>
          </li>
          <li className="b-content-filter__list-item b-content-filter__list-item--green">
            <a href="#">Pakkeforløp</a>
          </li>
          <li className="b-content-filter__list-item b-content-filter__list-item--orange">
            <a href="#">Rundskriv</a>
          </li>
          <li className="b-content-filter__list-item b-content-filter__list-item--yellow">
            <a href="#">Veileder til lov og forskrift</a>
          </li>
        </ul>
      </div>

      <div className="l-mt-4">
        <h2 className="h3 l-mb-1">Vis kun</h2>
        <ul className="b-content-filter__list">
          <li className="b-content-filter__list-item">
            <a href="#">ALT</a>
          </li>
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
                title: 'Abort',
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
                title: 'Abort',
                url: '#',
                type: 'nasjonale-faglige-retningslinjer'
              },
              {
                title: 'ADHD',
                url: '#',
                type: 'nasjonale-faglige-retningslinjer'
              },
              {
                title: 'Abort',
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
                title: 'Abort',
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
