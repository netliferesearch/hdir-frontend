import React from "react";

const SearchOptions = () => (
  <div className="b-search-sidebar">
    <section className="b-search-sidebar__section">
      <strong>Vis:</strong>
      <ul className="b-search-sidebar__items">
        <li>
          <input type="checkbox" className="b-search-sidebar__input" id="alt" />
          <label className="b-search-sidebar__input-label" htmlFor="alt">
            Alt
          </label>
        </li>
      </ul>
    </section>
    <section className="b-search-sidebar__section">
      Normerende produkter:
      <ul className="b-search-sidebar__items">
        <li>
          <input
            type="checkbox"
            className="b-search-sidebar__input"
            id="nasjonale-faglige-retningslinjer"
          />
          <label
            className="b-search-sidebar__input-label"
            htmlFor="nasjonale-faglige-retningslinjer"
          >
            Nasjonale faglige retningslinjer
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            className="b-search-sidebar__input"
            id="faglige-råd"
          />
          <label
            className="b-search-sidebar__input-label"
            htmlFor="faglige-råd"
          >
            Faglige råd
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            className="b-search-sidebar__input"
            id="pakkeforløp"
          />
          <label
            className="b-search-sidebar__input-label"
            htmlFor="pakkeforløp"
          >
            Pakkeforløp
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            className="b-search-sidebar__input"
            id="veileder-til-lov-og-forskrift"
          />
          <label
            className="b-search-sidebar__input-label"
            htmlFor="veileder-til-lov-og-forskrift"
          >
            Veileder til lov og forskrift
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            className="b-search-sidebar__input"
            id="rundskriv"
          />
          <label className="b-search-sidebar__input-label" htmlFor="rundskriv">
            Rundskriv
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            className="b-search-sidebar__input"
            id="nasjonal-veiledere"
          />
          <label
            className="b-search-sidebar__input-label"
            htmlFor="nasjonal-veiledere"
          >
            Nasjonal veiledere
          </label>
        </li>
      </ul>
    </section>
    <section className="b-search-sidebar__section">
      Andre innholdstyper:
      <ul className="b-search-sidebar__items">
        <li>
          <input
            type="checkbox"
            className="b-search-sidebar__input"
            id="tilskudd"
          />
          <label className="b-search-sidebar__input-label" htmlFor="tilskudd">
            Tilskudd
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            className="b-search-sidebar__input"
            id="statistikk"
          />
          <label className="b-search-sidebar__input-label" htmlFor="statistikk">
            Statistikk
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            className="b-search-sidebar__input"
            id="rapporter"
          />
          <label className="b-search-sidebar__input-label" htmlFor="rapporter">
            Rapporter
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            className="b-search-sidebar__input"
            id="brosjyrer"
          />
          <label className="b-search-sidebar__input-label" htmlFor="brosjyrer">
            Brosjyrer
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            className="b-search-sidebar__input"
            id="konferanser"
          />
          <label
            className="b-search-sidebar__input-label"
            htmlFor="konferanser"
          >
            Konferanser
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            className="b-search-sidebar__input"
            id="nyheter"
          />
          <label className="b-search-sidebar__input-label" htmlFor="nyheter">
            Nyheter
          </label>
        </li>
      </ul>
    </section>
  </div>
);

export default SearchOptions;
