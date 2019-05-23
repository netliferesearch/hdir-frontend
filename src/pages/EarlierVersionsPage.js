import React from 'react';

import ArticleIntro from '../components/ArticleIntro';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import NavList from '../components/NavList';

const EarlierVersionsPage = () => (
  <>
    <div className="l-container">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
          {
            name: 'Innhold'
          }
        ]}
      />
      <main id="main">
        <div className="l-mt-3">
          <ArticleIntro
            heading="Tidligere versjoner"
          />
        </div>
        <div className="row l-mt-4">
          <aside className="col-md-3 col-xs-12 l-mb-4" />
          <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
            <div className="l-mt-4">
              <NavList
                heading="25 versjoner"
                list={[
                  { title: '28. mai 2017', url: '#' },
                  { title: '1. april 2017', url: '#' },
                  { title: '3. januar 2016', url: '#' },
                  { title: '24. desember 2015', url: '#' },
                ]}
              />
            </div>
            <div className="l-mt-2 l-mb-2 t-sm-center">
              <Button secondary>↓ Vis alle</Button>
            </div>
          </article>
        </div>
      </main>
    </div>
  </>
);

export default EarlierVersionsPage;
