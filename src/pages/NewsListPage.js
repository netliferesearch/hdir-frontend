import React from 'react';

import List from '../components/List';
import Link from '../components/Link';
import ListHeading from '../components/ListHeading';
import Button from '../components/Button';
import CheckboxGroup from '../components/CheckboxGroup';
import Box from '../components/Box';
import Collapsible from '../components/Collapsible';
import Alert from '../components/Alert';

const NewsListPage = () => (
  <main>
    <div className="l-container">
      <div className="row l-mt-3">
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <h4>Filtrér søk</h4>
          <div className="l-mt-2">
            <hr className="b-hr b-hr--thick" />
          </div>
          <div className="l-mt-2">
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
        <section className="col-md-8 col-md-offset-1">
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
              }
            ]}
          />
          <div className="l-mt-3 l-mb-5 t-sm-center">
            <div className="row between-xs">
              <div className="col-xs t-sm-left">
                <Link href="#" arrowLeft>
                  Forrige side
                </Link>
              </div>
              <div className="col-xs t-sm-right">
                <Link href="#" arrow>
                  Neste side
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div className="l-container">
      <div className="l-mt-5">
        <Collapsible heading="Abonnér på endringer – Nasjonal faglig retningslinje for svangerskapsdiabetes">
          <form>
            <div className="b-input-text">
              <label
                htmlFor="email-subscription"
                className="b-input-text__label"
              >
                Fyll inn e-postadressen din for å motta varsler om endringer.
              </label>
              <input
                type="text"
                id="email-subscription"
                className="b-input-text__input"
              />
              <div className="b-input-text__description">
                Du får straks en e-post som bekrefter ditt abonnement. Der
                finner du også melihet til å melde deg av.
              </div>
              <div className="b-input-text__error">
                Skriv inn en gylig epost-adresse.
              </div>
              <Button>Abonnér</Button>
            </div>
          </form>
          <Alert status="success">
            Abonnementet ditt er registrert. Du får straks e-post fra oss.
          </Alert>
        </Collapsible>
      </div>
    </div>

    <div className="l-mt-4">
      <Box color="grey" square noPadding>
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
