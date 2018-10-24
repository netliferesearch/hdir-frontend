import React from 'react';
import ContentLabel from '../components/ContentLabel';

const SearchResultSection = () => (
  <div className="l-mb-4">
    <div className="b-search-result-section">
      <ul className="b-search-result-section__items">
        <li className="b-search-result-section__item">
          <h2 className="h3 h3--secondary-color b-search-result-section__header">
            Nasjonal faglig reningslinje for svangerskapsdiabetes
          </h2>
          <p className="b-search-result-section__intro">
            Svangerskapsdiabetes er diabetes som oppdages eller oppstår i
            graviditeten. Det kan gi økt risiko for svangerskapsforgiftning og
            føre til komplikasjoner under fødselen, blant…
          </p>
          <div>
            <ContentLabel>svangerskapsdiabetes</ContentLabel>
            <ContentLabel>svangerskapsomsorgen</ContentLabel>
            <ContentLabel>diabetes</ContentLabel>
          </div>
          <div>
            <ContentLabel code>ICD: xxx</ContentLabel>
            <ContentLabel code>ICPD-2: xxx</ContentLabel>
          </div>
          <ul className="b-search-result-section__subitems">
            <li className="b-search-result-section__subitem">
              <div className="b-search-result-section__subitem-tag">
                Sterk anbefaling
              </div>
              <div className="b-search-result-section__subitem-title">
                Tilby informasjon, kostråd, og opplæring i egenmåling av glukose
                ved diagnosetidspunkt →
              </div>
            </li>
            <li className="b-search-result-section__subitem">
              <div className="b-search-result-section__subitem-tag">
                Sterk anbefaling
              </div>
              <div className="b-search-result-section__subitem-title">
                Tilby informasjon, kostråd, og opplæring i egenmåling av glukose
                ved diagnosetidspunkt →
              </div>
            </li>
            <li className="b-search-result-section__subitem">
              <div className="b-search-result-section__subitem-tag">
                Sterk anbefaling
              </div>
              <div className="b-search-result-section__subitem-title">
                Tilby informasjon, kostråd, og opplæring i egenmåling av glukose
                ved diagnosetidspunkt →
              </div>
            </li>
            <li className="b-search-result-section__subitem">
              <a href="#" className="b-search-result-section__subitems-button">
                ↓ <strong>Se alle</strong> (29 treff)
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

export default SearchResultSection;
