import React from 'react';
import List from '../components/List';
import Button from '../components/Button';
import Alert from '../components/Alert';
import Card from '../components/Card';
import CheckboxGroup from '../components/CheckboxGroup';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import ArticleIntro from '../components/ArticleIntro';
import InputSearch from '../components/InputSearch';
import GrantsSearch from '../components/GrantsSearch';
import RadioButtonGroup from '../components/RadioButtonGroup';
import { dummyFlatTree } from '../components/dummyFlatTree';

const ListGrants = (props) => (
  <>
  <div className="l-container">
    <Breadcrumbs
      paths={[
        {
          name: 'Forsiden',
          href: '#a'
        }
      ]}
    />
    <main id="main">
        <div className="row l-mt-2">
          <div className="col-xs-12">
            <ArticleIntro
              heading="Tilskudd"
              lead="Har du et prosjekt som kan bidra til at folk i ditt nærområde føler seg mindre ensomme? Er det mangler på helsesykepleiere i din kommune? Da kan du søke om tilskudd hos oss."
            />
          </div>
        </div>
      <div className="l-layout l-mt-1">
        <article className="col-md-12 l-mt-2">
          <div className="row">
              <div className="col-md-8 col-md-offset-2">
              <Card
                url="#a"
                arrow="right"
                mainContent={
                  <>
                    <h3>Trenger du hjelp til å finne riktig tilskudd? <br />Prøv veilederen vår</h3>
                  </>
                }
              >
              </Card>
            </div>
          </div>
          <div className="l-mt-4 l-mb-2">
            <GrantsSearch
              label="Vet du hvilket tilskudd du vil søke på?"
              flatTree={dummyFlatTree}
              dummyData={[
                
                {
                  type: 'grant',
                  url: '#1',
                  fields: {
                    heading:
                      'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                    day: '16.',
                    month: 'mar',
                    tags: [
                      {
                        label: 'Tema 1',
                        url: '#'
                      },
                      {
                        label: 'Tema 2',
                        url: '#'
                      },
                    ]
                  }
                },
                {
                  type: 'grant',
                  url: '#1',
                  fields: {
                    heading:
                      'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                    day: '16.',
                    month: 'mar',
                    tags: [
                      {
                        label: 'Tema 1',
                        url: '#'
                      },
                      {
                        label: 'Tema 2',
                        url: '#'
                      },
                    ]
                  }
                },
                {
                  type: 'grant',
                  url: '#1',
                  fields: {
                    heading:
                      'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                    month: 'Løpende',
                    tags: [
                      {
                        label: 'Tema 1',
                        url: '#'
                      },
                      {
                        label: 'Tema 2',
                        url: '#'
                      },
                    ]
                  }
                },
              ]}
                dummyDataExpired={[
                  {
                    type: 'grant',
                    url: '#1',
                    fields: {
                      heading:
                        'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                      day: '1.',
                      month: 'jan',
                      expired: true,
                      tags: [
                        {
                          label: 'Tema 1',
                          url: '#'
                        },
                        {
                          label: 'Tema 2',
                          url: '#'
                        },
                      ]
                    }
                  },
                  {
                    type: 'grant',
                    url: '#1',
                    fields: {
                      heading:
                        'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                      day: '1.',
                      month: 'jan',
                      expired: true,
                      tags: [
                        {
                          label: 'Tema 1',
                          url: '#'
                        },
                        {
                          label: 'Tema 2',
                          url: '#'
                        },
                      ]
                    }
                  },
                ]}
            />
          </div>
        </article>
      </div>

    </main>
    </div>
    <div className="l-mt-4">
      <Box color="grey" square>
        <div className="l-container">
          <strong>Kontakt:</strong>
          <br />
          <a href="#a">spesialisthelsetjenester@helsedir.no</a>
          <br />
          <a href="#a">navn.etternavn@helsedir.no</a>
          <br />
          <a href="#a">999 99 999</a>
        </div>
      </Box>
    </div>
  </>
);

export default ListGrants;
