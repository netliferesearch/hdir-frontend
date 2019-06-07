import React from 'react';

import NavList from '../components/NavList';
import FilterList from '../components/FilterList';
import Breadcrumbs from '../components/Breadcrumbs';
import LongShortHeading from '../components/LongShortHeading';

const MedicineListPage = () => (
  <div>
    <div className="l-container l-mt-3">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
          {
            name: 'Ressurser',
            href: '#a'
          },
          {
            name: 'Legemiddelliste',
            href: '#a'
          }
        ]}
      />
      <main id="main">
        <div className="l-mt-3">
          <LongShortHeading
            long="Delegasjonsfullmakt til Helfo med legemiddelliste"
            short="Legemidler- og virkestoff liste"
            icon="./icons/firstAid.svg"
          />
        </div>
        <div className="l-mt-3">
          <h2 className="h5 h5--thin l-mb-1">Velg innholdstype</h2>
          <FilterList
            list={[
              'Virkemiddel',
              'Legemiddel'
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
                  url: '#'
                },
                {
                  title: 'ADHD',
                  url: '#'
                },
                {
                  title:
                    'Aktuell informasjon om lov og forskrift for prioriteringsveildere',
                  url: '#'
                },
                {
                  title: 'Fileksempel',
                  url: '#'
                },
                {
                  title: 'ADHD',
                  url: '#'
                },
                {
                  title: 'Antibiotika',
                  url: '#'
                },
                {
                  title: 'ADHD',
                  url: '#'
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
                  url: '#'
                },
                {
                  title: 'ADHD',
                  url: '#'
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
                  url: '#'
                },
                {
                  title:
                    'Aktuell informasjon om lov og forskrift for prioriteringsveildere',
                  url: '#'
                }
              ]}
            />
          </div>
        </article>
      </main>
    </div>
  </div>
);

export default MedicineListPage;
