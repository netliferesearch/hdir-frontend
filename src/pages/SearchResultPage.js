import React from 'react';

import InputSearch from '../components/InputSearch';
import SearchResultSection from '../components/SearchResultSection';
import SearchOptions from '../components/SearchOptions';

const SearchResultPage = () => (
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
          <div>
            <h1 className="h2 h2--uppercase">
              Anbefalinger, Råd og lovfortolkninger
            </h1>
            <SearchResultSection />
            <SearchResultSection />
            <SearchResultSection />
          </div>
        </section>
      </div>
    </div>
  </main>
);

export default SearchResultPage;
