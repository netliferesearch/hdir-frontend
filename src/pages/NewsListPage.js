import React from 'react';

import List from '../components/List';
import ListHeading from '../components/ListHeading';
import Button from '../components/Button';
import CheckboxGroup from '../components/CheckboxGroup';
import Box from '../components/Box';
import Alert from '../components/Alert';

const NewsListPage = (props) => (
  <main id="main">
    <div className="l-container">
      <div className="l-mt-3">
        <h1>Nyheter</h1>
      </div>
      <div className="row l-mt-3">
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <div className="h4">Filter</div>
          <div className="l-mt-1">
            <hr className="b-hr b-hr--thick" />
          </div>
          <div className="l-mt-1">
            <CheckboxGroup
              heading="Velg tema"
              name="statistikktype"
              options={[
                {
                  value: 'A tema',
                  label: 'A tema'
                },
                {
                  value: 'B tema',
                  label: 'B tema'
                },
                {
                  value: 'C tema',
                  label: 'C tema'
                }
              ]}
            />
          </div>
        </aside>
        <section className="col-xs-12 col-md-8 col-md-offset-1">
          <div className="js-expand-list" data-start-limit="10">
            <ListHeading heading="Nyheter" />
            <List
              list={[
                {
                  type: 'news',
                  url: '#1',
                  fields: {
                    heading:
                      'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
                    publishDate: '3. desember 2018',
                    lead:
                      'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
                    topic: ''
                  }
                },
                {
                  type: 'news',
                  url: '#2',
                  fields: {
                    heading:
                      'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
                    publishDate: '3. desember 2018',
                    lead:
                      'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
                    topic: ''
                  }
                },
                {
                  type: 'news',
                  url: '#3',
                  fields: {
                    heading:
                      'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
                    publishDate: '3. desember 2018',
                    lead:
                      'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
                    topic: ''
                  }
                },
                {
                  type: 'news',
                  url: '#1',
                  fields: {
                    heading:
                      'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
                    publishDate: '3. desember 2018',
                    lead:
                      'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
                    topic: ''
                  }
                },
                {
                  type: 'news',
                  url: '#2',
                  fields: {
                    heading:
                      'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
                    publishDate: '3. desember 2018',
                    lead:
                      'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
                    topic: ''
                  }
                },
                {
                  type: 'news',
                  url: '#3',
                  fields: {
                    heading:
                      'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
                    publishDate: '3. desember 2018',
                    lead:
                      'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
                    topic: ''
                  }
                },
                {
                  type: 'news',
                  url: '#1',
                  fields: {
                    heading:
                      'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
                    publishDate: '3. desember 2018',
                    lead:
                      'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
                    topic: ''
                  }
                },
                {
                  type: 'news',
                  url: '#2',
                  fields: {
                    heading:
                      'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
                    publishDate: '3. desember 2018',
                    lead:
                      'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
                    topic: ''
                  }
                },
                {
                  type: 'news',
                  url: '#3',
                  fields: {
                    heading:
                      'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
                    publishDate: '3. desember 2018',
                    lead:
                      'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
                    topic: ''
                  }
                },
                {
                  type: 'news',
                  url: '#1',
                  fields: {
                    heading:
                      'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
                    publishDate: '3. desember 2018',
                    lead:
                      'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
                    topic: ''
                  }
                },
                {
                  type: 'news',
                  url: '#2',
                  fields: {
                    heading:
                      'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
                    publishDate: '3. desember 2018',
                    lead:
                      'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
                    topic: ''
                  }
                },
                {
                  type: 'news',
                  url: '#3',
                  fields: {
                    heading:
                      'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
                    publishDate: '3. desember 2018',
                    lead:
                      'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
                    topic: ''
                  }
                }
              ]}
            />
            <div className="l-mt-2 t-sm-center">
              <Button secondary>↓ Vis alle</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
    
    <div className="l-container l-mt-3">
      <Box color="blue" square>
        <form className="row">
          <div className="col-md-5 col-xl-4">
            <h2 className="h3">Abonner på nytt eller oppdatert innhold</h2>
            <label
              htmlFor="email-subscription"
              className="b-input-text__label"
            >
              Fyll inn e-postadressen din for å motta varsler om <br /><strong>"Name for whatever you subscribe to"</strong>
            </label>
          </div>
          <div className="col-md-6 l-mb-1">
            <div className="l-flex b-input-text">
              <input
                type="text"
                id="email-subscription"
                className="b-input-text__input b-input-text__input--mt-1 col-md-7 l-mt-1 l-mr-1"
              />
              <div className="l-mt-1">
                <Button>Abonnér</Button>
              </div>
            </div>
            <div className="b-input-text__error" style={{display: 'none'}}>
            Skriv inn en gyldig epost-adresse.
            </div>
          </div>
        </form>
        <div className="b-input-text__description l-mt-1" style={{display: 'none'}}>
          Du får straks en e-post som bekrefter ditt abonnement. Der
          finner du også mulighet til å melde deg av.
        </div>
        
        { props.submitted && 
          <Alert status="success">
          Abonnementet ditt er registrert. Du får straks e-post fra oss.
          </Alert>
        }
      </Box>
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
  </main>
);

export default NewsListPage;
