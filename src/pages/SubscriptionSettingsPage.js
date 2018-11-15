import React from 'react';

import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import Link from '../components/Link';
import ArticleIntro from '../components/ArticleIntro';
import CheckboxGroup from '../components/CheckboxGroup';

const SubscriptionSettingsPage = () => (
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

      <div className="l-mt-3">
        <ArticleIntro
          heading="Administrer abonnementene dine"
          lead="På de fleste sidene på Helsedirektoratet.no får du abonnert på temaer og faglige produkter. Ved å abonnere får du varsler via e-post når det kommer betydelige endringer i innholdet på de sidene. Her kan du velge bort de abonnementene som du ikke lenger ønsker å motta varsler om."
        />
      </div>
      <div className="l-mt-3">
        <h2>Disse produktene er du abonnert på</h2>
        <p>
          Du kan velge bort enkelte abonnementer ved å fjerne avkryssningen.
        </p>
        <form>
          <CheckboxGroup
            radioGroupName="someName"
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
          <div className="l-mt-2">
            <div className="b-link">
              <button className="b-link__link--button">Lagre endringer</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default SubscriptionSettingsPage;
