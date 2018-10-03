import React from 'react';

import InputSearch from '../components/InputSearch';
import SearchOptions from '../components/SearchOptions';
import SearchResultSectionSimple from '../components/SearchResultSectionSimple';

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
          <div className="l-mb-3">
            <SearchResultSectionSimple />
          </div>
          <div className="l-mb-3">
            <SearchResultSectionSimple />
          </div>
        </section>
      </div>
    </div>
  </main>
);

export default SimpleSerp;
