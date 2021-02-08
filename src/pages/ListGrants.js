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
              endpoint="https://helsedir-helsenett-xptest.enonic.cloud/_/service/helsedirektoratet/tilskuddSearch"
              flatTree={dummyFlatTree}
              dummyData={[
                
                {
                  type: 'tilskudd',
                  url: '#1',
                  fields: {
                    heading:
                      'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                    frist: {
                      day: '02',
                      month: 'mar',
                      year: '2021'
                    },
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
                  type: 'tilskudd',
                  url: '#1',
                  fields: {
                    heading:
                      'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                    frist: {
                      day: '10',
                      month: 'mar',
                      year: '2021'
                    },
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
                  type: 'tilskudd',
                  url: '#1',
                  fields: {
                    heading:
                      'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                    frist: {
                      day: '02',
                      month: 'jan',
                      year: '2021'
                    },
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
                  type: 'tilskudd',
                  url: '#1',
                  fields: {
                    heading:
                      'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                    frist: {
                      day: '02',
                      month: 'apr',
                      year: '2021'
                    },
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
                  type: 'tilskudd',
                  url: '#1',
                  fields: {
                    heading:
                      'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                    frist: {
                      day: '02',
                      month: 'mar',
                      year: '2021'
                    },
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
                  type: 'tilskudd',
                  url: '#1',
                  fields: {
                    heading:
                      'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
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
                  type: 'tilskudd',
                  url: '#1',
                  fields: {
                    heading:
                      'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                    frist: {
                      day: '02',
                      month: 'mar',
                      year: '2021'
                    },
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
                  type: 'tilskudd',
                  url: '#1',
                  fields: {
                    heading:
                      'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                    frist: {
                      day: '02',
                      month: 'mar',
                      year: '2020'
                    },
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
                  type: 'tilskudd',
                  url: '#1',
                  fields: {
                    heading:
                      'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                    frist: {
                      day: '02',
                      month: 'mar',
                      year: '2020'
                    },
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
