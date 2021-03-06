import React from 'react';
import ArticleIntro from '../components/ArticleIntro';
import Breadcrumbs from '../components/Breadcrumbs';
import CheckboxGroup from '../components/CheckboxGroup';
import RadioButtonGroup from '../components/RadioButtonGroup';
import Collapsible from '../components/Collapsible';
import Select from '../components/Select';
import GrantsSearch from '../components/GrantsSearch';

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
      <article className="l-container">


        <section data-step="1" data-step-type="collapsible" data-key="test" data-input-type="radioValue" className="b-box b-box--no-border-radius b-box--blue-border b-box--stacked">
          <div className="l-container l-mt-2 l-mb-2">
            <Collapsible
              id="test"
              heading="1. Test av radiobuttons"
              collapsed
            >
              <div className="l-mt-1">
                <RadioButtonGroup
                  heading="Velg type"
                  name="test8"
                  options={[
                    {
                      value: 'Robert Herland',
                      label: 'Robert Herland'
                    },
                    {
                      value: 'Innbygger',
                      label: 'Innbygger'
                    },
                  ]}
                />
                <div className="l-mt-1">
                  <button className="b-button" data-next>Neste</button>
                </div>
              </div>
            </Collapsible>
            
          </div>
        </section>


        <section data-step="2" data-step-type="collapsible" data-key="test2" data-input-type="radioValue" className="b-box b-box--no-border-radius b-box--blue-border b-box--stacked">
          <div className="l-container l-mt-2 l-mb-2">
            <Collapsible
              id="test33"
              heading="1. Test av radiobuttons"
            >
              <div className="l-mt-1">
                <RadioButtonGroup
                  heading="Velg type"
                  name="test"
                  options={[
                    {
                      value: 'Test1',
                      label: 'Test1'
                    },
                    {
                      value: 'Test2',
                      label: 'Test2'
                    },
                  ]}
                />
                <div className="l-mt-1">
                  <button className="b-button" data-next>Neste</button>
                </div>
              </div>
            </Collapsible>
            
          </div>
        </section>


        <section data-step="3" data-step-type="collapsible" data-key="malgruppe" data-input-type="dropValue" className="b-box b-box--no-border-radius b-box--blue-border b-box--stacked">
          <div className="l-container l-mt-2 l-mb-2">
            <Collapsible
              id="aktor"
              heading="2. Hvem søker du på vegne av?"
            >
              <Select
                placeholder="Velg"
                placeholderSelected
                stacked
                zIndex
                options={[
                  {
                    title: 'Test1',
                    id: 'test1'
                  },
                  {
                    title: 'test2',
                    id: 'test2'
                  },
                  {
                    title: 'test selskap',
                    id: 'test3'
                  },
                  {
                    title: 'test foretak (f.eks RHF, HF)',
                    id: 'test4'
                  },
                  {
                    title: 'test/ideell organisasjon',
                    id: 'test5'
                  },
                  {
                    title: 'test eller høyskole',
                    id: 'test6'
                  },
                  {
                    title: 'testestet',
                    id: 'test7'
                  },
                  {
                    title: 'test utenfor Norge (f.eks internasjonal org, EU)',
                    id: 'test8'
                  },
                  {
                    title: 'ssesetetset',
                    id: 'test9'
                  },
                  {
                    title: 'test tjenesteyter med avtale med kommunen',
                    id: 'test10'
                  },
                  {
                    title: 'Andre test',
                    id: 'test11'
                  },
                ]}
              />
              <div className="l-mt-1">
                <button className="b-button" data-next>Neste</button>
              </div>
            </Collapsible>
          </div>
        </section>

        <section data-step="4" data-step-type="collapsible" data-key="malgruppe2" data-input-type="dropValue" className="b-box b-box--no-border-radius b-box--blue-border b-box--stacked">
          <div className="l-container l-mt-2 l-mb-2">
            <Collapsible
              id="aktor2"
              heading="2b. Hvem søker du på vegne av?"
            >
              <Select
                placeholder="Velg"
                placeholderSelected
                stacked
                zIndex
                options={[
                  {
                    title: 'Kommune',
                    id: 'Kommune'
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
              <div className="l-mt-1">
                <button className="b-button" data-next>Neste</button>
              </div>
            </Collapsible>
          </div>
        </section>


        <section data-step="5" data-step-type="collapsible" data-key="categories" data-input-type="checkValue" className="b-box b-box--no-border-radius b-box--blue-border b-box--stacked">
          <div className="l-container l-mt-2 l-mb-2">
            <Collapsible
              id="tema"
              heading="3. Velg tema for aktiviteten du ønsker å få støtte/tilskudd til"
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
                  <button className="b-button" data-next>Neste</button>
                </div>
              </div>
            </Collapsible>
          </div>
        </section>

        <section data-step="6" data-step-type="collapsible" data-key="categories2" data-input-type="checkValue" className="b-box b-box--no-border-radius b-box--blue-border b-box--stacked">
          <div className="l-container l-mt-2 l-mb-2">
            <Collapsible
              id="tema2"
              heading="3b. Velg tema for aktiviteten du ønsker å få støtte/tilskudd til"
            >
              <div className="l-mt-1">
                <div>
                  <CheckboxGroup
                    name="tema"
                    options={[
                      {
                        value: 'id21',
                        label: 'Særskilte behov'
                      },
                      {
                        value: 'id22',
                        label: 'Pilotprosjekt'
                      },
                      {
                        value: 'id23',
                        label: 'Psykisk helse'
                      },
                      {
                        value: 'id24',
                        label: 'Barn og unge'
                      },
                      {
                        value: 'id25',
                        label: 'Rus og avhengighet'
                      },
                      {
                        value: 'id26',
                        label: 'Eldre'
                      },
                      {
                        value: 'id27',
                        label: 'Kompetanse og personell'
                      },
                      {
                        value: 'id28',
                        label: 'Velferdsteknologi'
                      },
                      {
                        value: 'id29',
                        label: 'Tannhelse'
                      },
                      {
                        value: 'id210',
                        label: 'Vold og overgrep'
                      },
                      {
                        value: 'id211',
                        label: 'Refusjon'
                      },
                      {
                        value: 'id212',
                        label: 'Seksuell helse'
                      }
                    ]}
                  />
                </div>
                <div className="l-mt-1">
                  <button className="b-button" data-next>Neste</button>
                </div>
              </div>
            </Collapsible>
          </div>
        </section>

        <section data-step="7" data-step-type="result" className="l-container l-mt-3 l-mb-3">
          <h2>Disse tilskuddene kan være relevante for deg</h2>
          <div className="l-mt-3">
            <GrantsSearch
              label="Vet du hvilket tilskudd du vil søke på?"
              endpoint="https://helsedir-helsenett-xptest.enonic.cloud/horinger/_/service/helsedirektoratet/wizardSearch"
              collapsed
              id="6f9905ef-bf8f-4875-8508-d9fb583ef7ef"
              pageLength="100"
            />
          </div>
        </section>
      </article>
    </main>
  </>
);

export default GrantsWizard;
