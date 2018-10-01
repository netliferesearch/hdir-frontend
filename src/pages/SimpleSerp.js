import React from 'react';

import InputSearch from '../components/InputSearch';
import SearchOptions from '../components/SearchOptions';
import ContentLabel from '../components/ContentLabel';

const SimpleSerp = () => (
  <main>
    <div className="l-container">
      <div className="row">
        <div className="col-md-6 col-md-offset-4">
          <InputSearch id="xx" showSuggestions={false} />
          <p className="l-mt-3">120 treff på Svangerskapsd</p>
        </div>
      </div>

      <div className="row l-mt-3">
        <aside className="col-md-3">
          <SearchOptions />
        </aside>
        <section className="col-md-8 col-md-offset-1">
          <ul className="b-search-result-section">
            <li className="b-search-result-section__parent-item">
              <h1 className="h2 h2--uppercase">
                Anbefalinger, Råd og lovfortolkninger
              </h1>
              <ul className="b-search-result-section__items">
                <li className="b-search-result-section__item">
                  <h2 className="h3 h3--secondary-color b-search-result-section__header">
                    Nasjonal faglig reningslinje for svangerskapsdiabetes
                  </h2>
                  <p className="b-search-result-section__intro">
                    Svangerskapsdiabetes er diabetes som oppdages eller oppstår
                    i graviditeten. Det kan gi økt risiko for
                    svangerskapsforgiftning og føre til komplikasjoner under
                    fødselen, blant…
                  </p>
                </li>
                <li className="b-search-result-section__item">
                  <h2 className="h3 h3--secondary-color b-search-result-section__header">
                    Nasjonal faglig reningslinje for svangerskapsdiabetes
                  </h2>
                  <p className="b-search-result-section__intro">
                    Svangerskapsdiabetes er diabetes som oppdages eller oppstår
                    i graviditeten. Det kan gi økt risiko for
                    svangerskapsforgiftning og føre til komplikasjoner under
                    fødselen, blant…
                  </p>
                </li>
                <li className="b-search-result-section__item">
                  <h2 className="h3 h3--secondary-color b-search-result-section__header">
                    Nasjonal faglig reningslinje for svangerskapsdiabetes
                  </h2>
                  <p className="b-search-result-section__intro">
                    Svangerskapsdiabetes er diabetes som oppdages eller oppstår
                    i graviditeten. Det kan gi økt risiko for
                    svangerskapsforgiftning og føre til komplikasjoner under
                    fødselen, blant…
                  </p>
                </li>
              </ul>
            </li>
            <li className="b-search-result-section__parent-item">
              <h1 className="h2 h2--uppercase">
                Anbefalinger, Råd og lovfortolkninger
              </h1>
              <ul className="b-search-result-section__items">
                <li className="b-search-result-section__item">
                  <h2 className="h3 h3--secondary-color b-search-result-section__header">
                    Nasjonal faglig reningslinje for svangerskapsdiabetes
                  </h2>
                  <p className="b-search-result-section__intro">
                    Svangerskapsdiabetes er diabetes som oppdages eller oppstår
                    i graviditeten. Det kan gi økt risiko for
                    svangerskapsforgiftning og føre til komplikasjoner under
                    fødselen, blant…
                  </p>
                </li>
                <li className="b-search-result-section__item">
                  <h2 className="h3 h3--secondary-color b-search-result-section__header">
                    Nasjonal faglig reningslinje for svangerskapsdiabetes
                  </h2>
                  <p className="b-search-result-section__intro">
                    Svangerskapsdiabetes er diabetes som oppdages eller oppstår
                    i graviditeten. Det kan gi økt risiko for
                    svangerskapsforgiftning og føre til komplikasjoner under
                    fødselen, blant…
                  </p>
                </li>
                <li className="b-search-result-section__item">
                  <h2 className="h3 h3--secondary-color b-search-result-section__header">
                    Nasjonal faglig reningslinje for svangerskapsdiabetes
                  </h2>
                  <p className="b-search-result-section__intro">
                    Svangerskapsdiabetes er diabetes som oppdages eller oppstår
                    i graviditeten. Det kan gi økt risiko for
                    svangerskapsforgiftning og føre til komplikasjoner under
                    fødselen, blant…
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </main>
);

export default SimpleSerp;
