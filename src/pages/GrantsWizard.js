import React from 'react';
import ArticleIntro from '../components/ArticleIntro';
import Breadcrumbs from '../components/Breadcrumbs';

const GrantsWizard = () => (
  <>
    <div className="l-container">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '/'
          }
        ]}
      />
    </div>
    <main id="main">
      <div className="l-container l-mt-3 l-mb-3">
        <ArticleIntro heading="Finn tilskudd" />
        <article className="t-body-text">
          <section className="l-mb-2">
            <h2>1. Hvem søker du på vegne av?</h2>
          </section>
          <section className="l-mb-2">
            <h2>
              2. Velg tema for aktiviteten du ønsker å få støtte/tilskudd til
            </h2>
          </section>
          <section className="l-mb-2">
            <h2>Disse tilskuddene kan være relevante for deg</h2>
          </section>
        </article>
      </div>
    </main>
  </>
);

export default GrantsWizard;
