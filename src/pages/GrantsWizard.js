import React from 'react';
import ArticleIntro from '../components/ArticleIntro';
import Breadcrumbs from '../components/Breadcrumbs';
import CheckboxGroup from '../components/CheckboxGroup';
import Collapsible from '../components/Collapsible';
import Select from '../components/Select';
import GrantsSearch from '../components/GrantsSearch';
import SelectInline from '../components/Select';
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

        <section data-step="2" data-step-type="collapsible" data-key="categories" data-input-type="checkboxes" data-type="array" className="b-box b-box--no-padding b-box--no-border-radius b-box--blue-border b-box--stacked">
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

        <section data-step="3" data-step-type="result" className="l-container l-mt-3 l-mb-3">
          <h2>Disse tilskuddene kan være relevante for deg</h2>
          <div className="l-mt-3">
            <GrantsSearch
              label="Vet du hvilket tilskudd du vil søke på?"
              endpoint="https://helsedir-helsenett-xptest.enonic.cloud/_/service/helsedirektoratet/tilskuddSearch"
              collapsed
              initial='[{\"url\":\"http://localhost:8080/admin/site/preview/default/draft/helsedirektoratet/tilskudd\", \"type\": \"tilskudd\",\"fields\":{\"heading\":\"Tiltaksutvikling innen program for folkehelsearbeid i kommunene\",\"frist\":{\"day\":\"01\",\"month\":\"mar\",\"year\":\"2018\"},\"tags\":[]}},{\"url\":\"http://localhost:8080/admin/site/preview/default/draft/helsedirektoratet/tilskudd\", \"type\": \"tilskudd\",\"fields\":{\"heading\":\"Medisinsk avstandsoppfølging av kronisk syke\",\"frist\":{\"day\":\"01\",\"month\":\"mai\",\"year\":\"2018\"},\"tags\":[]}},{\"url\":\"http://localhost:8080/admin/site/preview/default/draft/helsedirektoratet/tilskudd\", \"type\": \"tilskudd\",\"fields\":{\"heading\":\"Pilotprosjekt på legevaktfeltet\",\"frist\":{\"day\":\"01\",\"month\":\"jun\",\"year\":\"2018\"},\"tags\":[]}},{\"url\":\"http://localhost:8080/admin/site/preview/default/draft/helsedirektoratet/tilskudd\", \"type\": \"tilskudd\",\"fields\":{\"heading\":\"Styrking av habilitering og rehabilitering i kommunene 2017-2019\",\"frist\":{\"day\":\"31\",\"month\":\"jan\",\"year\":\"2019\"},\"tags\":[]}},{\"url\":\"http://localhost:8080/admin/site/preview/default/draft/helsedirektoratet/tilskudd\", \"type\": \"tilskudd\",\"fields\":{\"heading\":\"Rekruttering av fastleger i kommuner som har rekrutteringsvansker\",\"frist\":{\"day\":\"15\",\"month\":\"mai\",\"year\":\"2019\"},\"tags\":[]}},{\"url\":\"http://localhost:8080/admin/site/preview/default/draft/helsedirektoratet/tilskudd\", \"type\": \"tilskudd\",\"fields\":{\"heading\":\"Pilot for strukturert tverrfaglig oppfølging - Oppfølgingsteam\",\"frist\":{\"day\":\"25\",\"month\":\"mai\",\"year\":\"2019\"},\"tags\":[]}}]'
            />
          </div>
        </section>
      </article>
    </main>
  </>
);

export default GrantsWizard;
