import React from 'react';
import ArticleIntro from '../components/ArticleIntro';
import Breadcrumbs from '../components/Breadcrumbs';
import CheckboxGroup from '../components/CheckboxGroup';
import Collapsible from '../components/Collapsible';
import Select from '../components/Select';
import GrantsSearch from '../components/GrantsSearch';
import Button from '../components/Button';
import List from '../components/List';

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
      <article>
        <section data-step="1" data-step-type="collapsible" data-key="malgruppe" data-input-type="select" data-type="string" className="b-box b-box--no-padding b-box--no-border-radius b-box--blue-border">
          <div className="l-container l-mt-2 l-mb-2">
            <Collapsible
              id="aktor"
              heading="1. Hvem søker du på vegne av?"
              collapsed
            >
              <Select
                placeholder="Velg"
                placeholderSelected
                stacked
                zIndex
                options={[
                  {
                    title: 'Kommune',
                    id: 'id1'
                  },
                  {
                    title: 'Fylkeskommune',
                    id: 'id2'
                  },
                  {
                    title: 'Interkommunalt selskap',
                    id: 'id3'
                  },
                  {
                    title: 'Statlig foretak (f.eks RHF, HF)',
                    id: 'id4'
                  },
                  {
                    title: 'Frivillig/ideell organisasjon',
                    id: 'id5'
                  },
                  {
                    title: 'Universitet eller høyskole',
                    id: 'id6'
                  },
                  {
                    title: 'Bedrift',
                    id: 'id7'
                  },
                  {
                    title: 'Søker utenfor Norge (f.eks internasjonal org, EU)',
                    id: 'id8'
                  },
                  {
                    title: 'Privatperson',
                    id: 'id9'
                  },
                  {
                    title: 'Privat tjenesteyter med avtale med kommunen',
                    id: 'id10'
                  },
                  {
                    title: 'Andre',
                    id: 'id11'
                  },
                ]}
              />
            </Collapsible>
          </div>
        </section>

        <section data-step="2" data-step-type="collapsible" data-key="categories" data-input-type="checkboxes" data-type="array" className="b-box b-box--no-padding b-box--no-border-radius b-box--blue-border b-box--stacked">
          <div className="l-container l-mt-2 l-mb-2">
            <Collapsible
              id="tema"
              heading="2. Velg tema for aktiviteten du ønsker å få støtte/tilskudd til"
            >
              <div className="l-mt-1">
                <div>
                <CheckboxGroup
                  name="tema"
                  options={[
                    {
                      value: 'id1',
                      label: 'Særskilte behov'
                    },
                    {
                      value: 'id2',
                      label: 'Pilotprosjekt'
                    },
                    {
                      value: 'id3',
                      label: 'Psykisk helse'
                    },
                    {
                      value: 'id4',
                      label: 'Barn og unge'
                    },
                    {
                      value: 'id5',
                      label: 'Rus og avhengighet'
                    },
                    {
                      value: 'id6',
                      label: 'Eldre'
                    },
                    {
                      value: 'id7',
                      label: 'Kompetanse og personell'
                    },
                    {
                      value: 'id8',
                      label: 'Velferdsteknologi'
                    },
                    {
                      value: 'id9',
                      label: 'Tannhelse'
                    },
                    {
                      value: 'id10',
                      label: 'Vold og overgrep'
                    },
                    {
                      value: 'id11',
                      label: 'Refusjon'
                    },
                    {
                      value: 'id12',
                      label: 'Seksuell helse'
                    }
                  ]}
                />
                </div>
                <div className="l-mt-1">
                  <button className="b-button" data-submit>Vis resultat</button>
                </div>
              </div>
            </Collapsible>
          </div>
        </section>

        <section data-step="3" data-step-type="result" className="l-container l-mt-3 l-mb-3">
          <h2>Disse tilskuddene kan være relevante for deg</h2>
          <div className="l-mt-3">
            <GrantsSearch
              label="Vet du hvilket tilskudd du vil søke på?"
              endpoint="https://helsedir-helsenett-xptest.enonic.cloud/_/service/helsedirektoratet/tilskuddSearch"
              collapsed
            />
          </div>
        </section>
      </article>
    </main>
  </>
);

export default GrantsWizard;
