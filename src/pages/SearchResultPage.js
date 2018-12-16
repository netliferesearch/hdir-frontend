import React from 'react';

import List from '../components/List';
import ListHeading from '../components/ListHeading';
import Button from '../components/Button';
import InputSearch from '../components/InputSearch';
import CheckboxGroup from '../components/CheckboxGroup';

const SearchResultPage = () => (
  <main>
    <div className="l-container">
      <div className="row l-mt-4">
        <div className="col-md-8 col-md-offset-4">
          <InputSearch id="x" />
        </div>
      </div>
      <div className="row l-mt-5">
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <h4>Filtrér søk</h4>
          <div className="l-mt-2">
            <hr className="b-hr b-hr--thick" />
          </div>
          <div className="l-mt-2">
            <CheckboxGroup
              heading="Velg normerende produkter"
              name="statistikktype"
              options={[
                {
                  value: 'Kommunalt pasient- og brukerregister',
                  label: 'Kommunalt pasient- og brukerregister'
                },
                {
                  value: 'Kvalitetsindikator',
                  label: 'Kvalitetsindikator'
                },
                {
                  value: 'Norsk pasientregister',
                  label: 'Norsk pasientregister'
                },
                {
                  value: 'Rapporter og analyser',
                  label: 'Rapporter og analyser'
                },
                {
                  value: 'Samdata',
                  label: 'Samdata'
                },
                {
                  value: 'Styringsdata',
                  label: 'Styringsdata'
                }
              ]}
            />
          </div>
          <div className="l-mt-2">
            <hr className="b-hr" />
          </div>
          <div className="l-mt-2">
            <small>
              <a href="#a">Nullstill alle filtre</a>
            </small>
          </div>
        </aside>
        <section className="col-md-8 col-md-offset-1">
          <ListHeading
            heading="120 treff på Helsestasjon"
            selectLabel="SORTÉR"
            selectOptions={[
              'Sist publisert',
              'Først publisert',
              'Alfabetisk rekkefølge'
            ]}
          />
          <List
            list={[
              {
                type: 'news',
                url: '#1',
                fields: {
                  category: 'Nyhet',
                  heading:
                    'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
                  publishDate: '03.12.2018',
                  lead:
                    'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
                  topic: 'Innhold basert på søk, alle kan ha denne'
                }
              },
              {
                type: 'person',
                fields: {
                  name: 'Ole Magnus Støvern',
                  email: 'ole.stovern@netlife.com',
                  category: 'Person',
                  reverseEmail: 'moc.efilten@nrevots.elo',
                  phoneNumber: '+47 123 45 678',
                  position: 'Developer',
                  department: 'Oslo',
                  topic: 'Innhold basert på søk, alle kan ha denne'
                }
              },
              {
                type: 'grantFunding',
                url: '#2',
                fields: {
                  heading: 'Kommunalt kompetanse- og innovasjonstilskudd',
                  category: 'Tilskudd',
                  deadline: 'Søknadsfrist: 11.10.2018',
                  topic:
                    'If this module is shown on a search page, it might have a text like this for topics'
                }
              },
              {
                type: 'pressRelease',
                url: '#3',
                fields: {
                  heading: 'Hvordan sjonglere (illustrert)',
                  category: 'Brosjyre',
                  image:
                    'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                  publishDate: '01.01.2003',
                  topic: 'Innhold basert på søk, alle kan ha denne'
                }
              },
              {
                type: 'conference',
                url: '#4',
                fields: {
                  heading: 'Kurs i hendelsesanalyse og pasientsikkerhet',
                  category: 'Konferanse',
                  dateFrom: '03.11.1990',
                  dateTo: '06.12.2018',
                  location: 'Clarion The Edge, Tromsø',
                  registrationDeadline: '15. oktober',
                  topic: 'Innhold basert på søk, alle kan ha denne'
                }
              }
            ]}
          />
          <div className="l-mt-4 t-sm-center">
            <Button secondary>Vis flere treff</Button>
          </div>
        </section>
      </div>
    </div>
  </main>
);

export default SearchResultPage;
