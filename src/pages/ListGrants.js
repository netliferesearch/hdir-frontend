import React from 'react';
import List from '../components/List';
import Button from '../components/Button';
import Alert from '../components/Alert';
import Card from '../components/Card';
import CheckboxGroup from '../components/CheckboxGroup';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import ArticleIntro from '../components/ArticleIntro';
import ListSearch from '../components/ListSearch';
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
            <ListSearch
              label="tilskudd"
              productId="0e87de78-2cb4-4a70-93a7-0d687443b71e"
              flatTree={dummyFlatTree}
              malGruppe={''}
              dummyData={
                {
                  type: 'grantFunding',
                  url: '#1',
                  fields: {
                    heading:
                      'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                    deadline: 'Søknadsfrist: 15. mai 2019'
                  }
                }
              }
              collapsed
            />
          </div>
          <div>
            <List
              list={[
                {
                  type: 'grant',
                  url: '#6',
                  fields: {
                    heading:
                      'Styrking og utvikling av helsestasjons- og skolehelsetjenesten',
                    day: '16.',
                    month: 'jan',
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
                  url: '#6',
                  fields: {
                    heading:
                      'Psykisk helse i skolen',
                    day: '13.',
                    month: 'mar',
                    tags: [
                      {
                        label: 'Tema 3',
                        url: '#'
                      }
                    ]
                  }
                },
                {
                  type: 'grant',
                  url: '#6',
                  fields: {
                    heading:
                      'Seksuell helse',
                    day: '16.',
                    month: 'sep',
                    tags: [
                      {
                        label: 'Tema 4',
                        url: '#'
                      }
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
