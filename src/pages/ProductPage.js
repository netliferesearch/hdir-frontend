import React from 'react';
import NavList from '../components/NavList';
import ChapterHeading from '../components/ChapterHeading';

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
        <ChapterHeading
          heading="Diagnostikk og tiltak for å finne uoppdaget diabetes og svangerskapsdiabetes"
          subheading="kapittel 1"
        />

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
      <div className="col-xs-12 l-mt-4">
        <ChapterHeading
          heading="Diagnostikk og tiltak"
          subheading="kapittel 2"
        />

        <div className="l-mt-3 l-hide-to-md">
          <NavList
            list={[
              {
                description: 'Kapittel 2.1',
                title: 'Det foreslås at HbA1c tas ved',
                url: '#'
              },
              {
                description: 'Kapittel 2.2',
                title:
                  'Tilby glukosebelastning til gravide i uke 24-28 med en eller flere karakteristika (alder, etnisitet, arvelighet, kroppsmasseindeks og hendelser i tidligere svangerskap)',
                url: '#'
              }
            ]}
          />
        </div>
      </div>
      <div className="b-link-springboard l-mt-4 l-mb-5">
        For å lese om symptomer, kostholdsråd og andre tips ved
        svangerskapsdiabetes, kan du gå til{' '}
        <a href="#" className="b-link-springboard__link">
          helsenorge.no.
        </a>
      </div>
    </div>
  </div>
);

export default ProductPage;
