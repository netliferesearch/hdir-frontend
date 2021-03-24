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
                id="705432b2-4db4-41d5-974d-26955cc74e0c"
                endpoint="https://helsedir-helsenett-xptest.enonic.cloud/admin/site/preview/default/draft/helsedirektoratet/tilskudd/_/service/helsedirektoratet/wizardSearch"
              flatTree={dummyFlatTree}
                initial={{
                  "pågående": [
                    {
                      "url": "http://...",
                      "type": "tilskudd",
                      "fields": {
                        "heading": "Aktivitetstiltak for å motvirke ensomhet og passivitet 0",
                        "frist": {
                          "day": "20",
                          "month": "apr",
                          "year": "2020",
                          "date": "2020-04-20"
                        },
                        "tags": []
                      }
                    },
                    {
                      "url": "http://...",
                      "type": "tilskudd",
                      "fields": {
                        "heading": "Aktivitetstiltak for å motvirke ensomhet og passivitet 1",
                        "frist": {
                          "day": "20",
                          "month": "apr",
                          "year": "2020",
                          "date": "2020-04-20"
                        },
                        "tags": []
                      }
                    },
                    {
                      "url": "http://...",
                      "type": "tilskudd",
                      "fields": {
                        "heading": "Aktivitetstiltak for å motvirke ensomhet og passivitet 1",
                        "frist": {
                          "day": "20",
                          "month": "apr",
                          "year": "2020",
                          "date": "2020-04-20"
                        },
                        "tags": []
                      }
                    },
                    {
                      "url": "http://...",
                      "type": "tilskudd",
                      "fields": {
                        "heading": "Aktivitetstiltak for å motvirke ensomhet og passivitet 1",
                        "frist": {
                          "day": "20",
                          "month": "apr",
                          "year": "2020",
                          "date": "2020-04-20"
                        },
                        "tags": []
                      }
                    },
                    {
                      "url": "http://...",
                      "type": "tilskudd",
                      "fields": {
                        "heading": "Aktivitetstiltak for å motvirke ensomhet og passivitet 1",
                        "frist": {
                          "day": "20",
                          "month": "apr",
                          "year": "2020",
                          "date": "2020-04-20"
                        },
                        "tags": []
                      }
                    },
                    {
                      "url": "http://...",
                      "type": "tilskudd",
                      "fields": {
                        "heading": "Aktivitetstiltak for å motvirke ensomhet og passivitet 1",
                        "frist": {
                          "day": "20",
                          "month": "apr",
                          "year": "2020",
                          "date": "2020-04-20"
                        },
                        "tags": []
                      }
                    },
                    {
                      "url": "http://...",
                      "type": "tilskudd",
                      "fields": {
                        "heading": "Aktivitetstiltak for å motvirke ensomhet og passivitet 1",
                        "frist": {
                          "day": "20",
                          "month": "apr",
                          "year": "2020",
                          "date": "2020-04-20"
                        },
                        "tags": []
                      }
                    },
                    {
                      "url": "http://...",
                      "type": "tilskudd",
                      "fields": {
                        "heading": "Aktivitetstiltak for å motvirke ensomhet og passivitet 2",
                        "frist": {
                          "day": "20",
                          "month": "apr",
                          "year": "2020",
                          "date": "2020-04-20"
                        },
                        "tags": []
                      }
                    }
                  ],
                  "utgått": [
                    {
                      "url": "http://...",
                      "type": "tilskudd",
                      "fields": {
                        "heading": "Aktivitetstiltak for å motvirke ensomhet og passivitet 3",
                        "frist": {
                          "day": "20",
                          "month": "apr",
                          "year": "2020",
                          "date": "2020-04-20"
                        },
                        "tags": []
                      }
                    },
                    {
                      "url": "http://...",
                      "type": "tilskudd",
                      "fields": {
                        "heading": "Aktivitetstiltak for å motvirke ensomhet og passivitet 4",
                        "frist": {
                          "day": "20",
                          "month": "apr",
                          "year": "2020",
                          "date": "2020-04-20"
                        },
                        "tags": []
                      }
                    }
                  ],
                  "Alle": [
                    {
                      "url": "http://...",
                      "type": "tilskudd",
                      "fields": {
                        "heading": "Aktivitetstiltak for å motvirke ensomhet og passivitet 5",
                        "frist": {
                          "day": "20",
                          "month": "apr",
                          "year": "2020",
                          "date": "2020-04-20"
                        },
                        "tags": []
                      }
                    },
                    {
                      "url": "http://...",
                      "type": "tilskudd",
                      "fields": {
                        "heading": "Aktivitetstiltak for å motvirke ensomhet og passivitet 6",
                        "frist": {
                          "day": "20",
                          "month": "apr",
                          "year": "2020",
                          "date": "2020-04-20"
                        },
                        "tags": []
                      }
                    }
                  ]
                }}
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
