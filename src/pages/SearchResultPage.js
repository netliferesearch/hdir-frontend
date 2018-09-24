import React from "react";

import InputSearch from "../components/InputSearch";
import ContentLabel from "../components/ContentLabel";
import SearchOptions from "../components/SearchOptions";

const SearchResultPage = () => (
  <main>
    <div className="l-container">
      <div className="row">
        <div className="col-md-6 col-md-offset-4">
          <InputSearch id="xx" />
          <p className="l-mt-3">120 treff på Svangerskapsd</p>
        </div>
      </div>

      <div className="row l-mt-3">
        <aside className="col-md-3">
          <SearchOptions />
        </aside>
        <section className="col-md-8 col-md-offset-1">
          <div>
            <h1 className="h2">Anbefalinger, Råd og lovfortolkninger</h1>
            <ul>
              <li>
                <h2 className="h3 h3--blue">
                  Nasjonal faglig reningslinje for svangerskapsdiabetes
                </h2>
                <p>
                  Svangerskapsdiabetes er diabetes som oppdages eller oppstår i
                  graviditeten. Det kan gi økt risiko for
                  svangerskapsforgiftning og føre til komplikasjoner under
                  fødselen, blant…
                </p>
                <div>
                  <ContentLabel>svangerskapsdiabetes</ContentLabel>
                  <ContentLabel>svangerskapsomsorgen</ContentLabel>
                  <ContentLabel>diabetes</ContentLabel>
                </div>
                <div>
                  <ContentLabel>ICD: xxx</ContentLabel>
                  <ContentLabel>ICPD-2: xxx</ContentLabel>
                </div>
                <div>
                  <ul>
                    <li>
                      <div>Sterk anbefaling</div>
                      <div>
                        Tilby informasjon, kostråd, og opplæring i egenmåling av
                        glukose ved diagnosetidspunkt →
                      </div>
                    </li>
                    <li>
                      <div>Sterk anbefaling</div>
                      <div>
                        Tilby informasjon, kostråd, og opplæring i egenmåling av
                        glukose ved diagnosetidspunkt →
                      </div>
                    </li>
                    <li>
                      <div>Sterk anbefaling</div>
                      <div>
                        Tilby informasjon, kostråd, og opplæring i egenmåling av
                        glukose ved diagnosetidspunkt →
                      </div>
                    </li>
                  </ul>
                  <div>Se alle (29 treff)</div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </main>
);

export default SearchResultPage;
