import React from 'react';

import Button from '../components/Button';
import ArticleIntro from '../components/ArticleIntro';
import CheckboxGroup from '../components/CheckboxGroup';
import Breadcrumbs from '../components/Breadcrumbs';

const SubscriptionSettingsPage = () => (
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

      <div className="l-mt-3">
        <ArticleIntro
          heading="Administrer abonnementene dine"
          lead="På de fleste sidene på Helsedirektoratet.no får du abonnert på temaer og faglige produkter. Ved å abonnere får du varsler via e-post når det kommer betydelige endringer i innholdet på de sidene. Her kan du velge bort de abonnementene som du ikke lenger ønsker å motta varsler om."
        />
      </div>
      <div className="l-mt-3">
        <h2>Disse produktene er du abonnert på</h2>
        <form className="l-mt-1">
          <CheckboxGroup
            heading="Du kan velge bort enkelte abonnementer ved å fjerne avkryssningen."
            options={[
              {
                value: '1a',
                label: 'Nasjonal faglig retningslinje for svangerskapsdiabetes',
                disabled: false
              },
              {
                value: '1b',
                label: 'Nasjonal faglig retningslinje for svangerskapsdiabetes',
                disabled: false
              },
              {
                value: '2a',
                label: 'Nasjonal faglig retningslinje for svangerskapsdiabetes',
                disabled: true
              },
              {
                value: '2b',
                label: 'Nasjonal faglig retningslinje for svangerskapsdiabetes',
                disabled: false
              }
            ]}
          />
          <div className="l-mt-2 l-mb-5">
            <div className="b-link">
              <Button>Lagre endringer</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default SubscriptionSettingsPage;
