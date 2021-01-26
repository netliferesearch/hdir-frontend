import React from 'react';
import ArticleIntro from '../components/ArticleIntro';
import Breadcrumbs from '../components/Breadcrumbs';
import CheckboxGroup from '../components/CheckboxGroup';
import Collapsible from '../components/Collapsible';
import Select from '../components/Select';
import SelectInline from '../components/Select';

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
      </div>

      <section className="b-box b-box--no-padding b-box--no-border-radius b-box--blue-border ">
        <div className="l-container l-mt-2 l-mb-2">
          <Collapsible
            id="aktør"
            heading="Hvem søker du på vegne av?"
            collapsed
          >
            <Select
              placeholder="Velg"
              placeholderSelected
              stacked
              zIndex
              options={[
                'Kommune',
                'Fylkeskommune',
                'Interkommunalt selskap',
                'Statlig foretak (f.eks RHF, HF)',
                'Frivillig/ideell organisasjon',
                'Universitet eller høyskole',
                'Bedrift',
                'Søker utenfor Norge (f.eks internasjonal org, EU)',
                'Privatperson',
                'Privat tjenesteyter med avtale med kommunen',
                'Andre'
              ]}
            />
          </Collapsible>
        </div>
      </section>

      <section className="b-box b-box--no-padding b-box--no-border-radius b-box--blue-border b-box--stacked">
        <div className="l-container l-mt-2 l-mb-2">
          <Collapsible
            id="tema"
            heading="2. Velg tema for aktiviteten du ønsker å få støtte/tilskudd til"
          >
            <div className="l-mt-1">
              <CheckboxGroup
                name="tema"
                options={[
                  {
                    value: 'Særskilte behov',
                    label: 'Særskilte behov'
                  },
                  {
                    value: 'Pilotprosjekt',
                    label: 'Pilotprosjekt'
                  },
                  {
                    value: 'Psykisk helse',
                    label: 'Psykisk helse'
                  },
                  {
                    value: 'Barn og unge',
                    label: 'Barn og unge'
                  },
                  {
                    value: 'Rus og avhengighet',
                    label: 'Rus og avhengighet'
                  },
                  {
                    value: 'Eldre',
                    label: 'Eldre'
                  },
                  {
                    value: 'Kompetanse og personell',
                    label: 'Kompetanse og personell'
                  },
                  {
                    value: 'Velferdsteknologi',
                    label: 'Velferdsteknologi'
                  },
                  {
                    value: 'Tannhelse',
                    label: 'Tannhelse'
                  },
                  {
                    value: 'Vold og overgrep',
                    label: 'Vold og overgrep'
                  },
                  {
                    value: 'Refusjon',
                    label: 'Refusjon'
                  },
                  {
                    value: 'Seksuell helse',
                    label: 'Seksuell helse'
                  }
                ]}
              />
            </div>
          </Collapsible>
        </div>
      </section>

      <section className="l-container l-mt-3 l-mb-3">
        <h2>Disse tilskuddene kan være relevante for deg</h2>
      </section>
    </main>
  </>
);

export default GrantsWizard;
