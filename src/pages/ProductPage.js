import React from 'react';
import NavList from '../components/NavList';

const ProductPage = () => (
  <div className="l-container">
    <div className="row">
      <div className="col-md-8 l-mt-3">
        <h1>
          Behandling og rehabilitering av rusmiddelproblemer og avhengighet –
          Nasjonal faglig retningslinje
        </h1>
      </div>
      <div className="col-xs-12 l-mt-4">
        <div className="col-md-10 col-md-offset-1 l-mt-4">
          <h2>
            <div className="h4">Kapittel 1</div>
            <div className="h2 l-mt-1">
              Diagnostikk og tiltak for å finne uoppdaget diabetes og
              svangerskapsdiabetes
            </div>
          </h2>
          <div className="l-mt-3 l-hide-to-md">
            <NavList
              list={[
                {
                  description: 'SVAK ANBEFALING',
                  title:
                    'Det foreslås at HbA1c tas ved første svangerskapskonsultasjon for å oppdage udiagnostisert diabetes/hyperglykemi',
                  url: '#'
                },
                {
                  description: 'STERK ANBEFALING',
                  title:
                    'Tilby glukosebelastning til gravide i uke 24-28 med en eller flere karakteristika (alder, etnisitet, arvelighet, kroppsmasseindeks og hendelser i tidligere svangerskap)',
                  url: '#'
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductPage;
