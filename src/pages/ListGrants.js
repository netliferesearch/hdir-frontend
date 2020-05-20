import React from 'react';
import List from '../components/List';
import Button from '../components/Button';
import Alert from '../components/Alert';
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
            />
          </div>
        </div>
      <div className="l-layout l-mt-1">
        <aside className="l-hide-to-lg l-sidebar l-bleed-right">
          <hr className="b-hr b-hr--thick" />
          <div className="l-mt-2">
            <RadioButtonGroup
              heading="Velg søkergruppe"
              name="sokergruppe"
              options={[
                {
                  value: 'Alle',
                  label: 'Alle'
                },
                {
                  value: 'KommuneFylkeskommune',
                  label: 'Kommune / fylkeskommune'
                }
              ]}
            />
          </div>
          <div className="l-mt-1">
            <hr className="b-hr" />
          </div>
          <div className="l-mt-1">
            <CheckboxGroup
              heading="Velg tema"
              name="statistikktype"
              options={[
                {
                  value: 'Abort',
                  label: 'Abort'
                },
                {
                  value: 'Akuttmedisin',
                  label: 'Akuttmedisin',
                  checked: true
                },
                {
                  value: 'antibiotika',
                  label: 'antibiotika'
                },
                {
                  value: 'CFS/ME',
                  label: 'CFS/ME'
                },
                {
                  value: 'Diabetes',
                  label: 'Diabetes'
                },
                {
                  value: 'Fødsel og barsel',
                  label: 'Fødsel og barsel'
                },
                {
                  value: 'Hjerneslag',
                  label: 'Hjerneslag'
                },
                {
                  value: 'Kols',
                  label: 'Kols'
                },
                {
                  value: 'Overvekt og fedme',
                  label: 'Overvekt og fedme'
                }
              ]}
            />
          </div>
        </aside>
        <article className="l-article l-article--topline">
          <div className="l-mt-1 l-mb-2">
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
          <div className="js-expand-list" data-start-limit="10">
            <h2 className=" l-mb-1 l-mt-1">10 tilskudd innen «akuttmedisin»</h2>
            <hr className="b-hr b-hr--thick" />
              <List
                list={[
                  {
                    type: 'grantFunding',
                    url: '#1',
                    fields: {
                      heading:
                        'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                      deadline: 'Søknadsfrist: 15. mai 2019'
                    }
                  },
                  {
                    type: 'grantFunding',
                    url: '#2',
                    fields: {
                      heading: 'Kommunalt kompetanse- og innovasjonstilskudd',
                      deadline: 'Søknadsfrist: 15. mai 2019'
                    }
                  },
                  {
                    type: 'grantFunding',
                    url: '#3',
                    fields: {
                      heading:
                        'Styrking av habilitering og rehabilitering i kommunene',
                      deadline: 'Søknadsfrist: 15. mai 2019'
                    }
                  },
                  {
                    type: 'grantFunding',
                    url: '#4',
                    fields: {
                      heading: 'Turnus for leger - tilskudd til kommuner',
                      deadline: 'Søknadsfrist: 15. mai 2019'
                    }
                  },
                  {
                    type: 'grantFunding',
                    url: '#1',
                    fields: {
                      heading:
                        'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                      deadline: 'Søknadsfrist: 15. mai 2019'
                    }
                  },
                  {
                    type: 'grantFunding',
                    url: '#2',
                    fields: {
                      heading: 'Kommunalt kompetanse- og innovasjonstilskudd',
                      deadline: 'Søknadsfrist: 15. mai 2019'
                    }
                  },
                  {
                    type: 'grantFunding',
                    url: '#3',
                    fields: {
                      heading:
                        'Styrking av habilitering og rehabilitering i kommunene',
                      deadline: 'Søknadsfrist: 15. mai 2019'
                    }
                  },
                  {
                    type: 'grantFunding',
                    url: '#4',
                    fields: {
                      heading: 'Turnus for leger - tilskudd til kommuner',
                      deadline: 'Søknadsfrist: 15. mai 2019'
                    }
                  },
                  {
                    type: 'grantFunding',
                    url: '#3',
                    fields: {
                      heading:
                        'Styrking av habilitering og rehabilitering i kommunene',
                      deadline: 'Søknadsfrist: 15. mai 2019'
                    }
                  },
                  {
                    type: 'grantFunding',
                    url: '#4',
                    fields: {
                      heading: 'Turnus for leger - tilskudd til kommuner',
                      deadline: 'Søknadsfrist: 15. mai 2019'
                    }
                  },
                  {
                    type: 'grantFunding',
                    url: '#3',
                    fields: {
                      heading:
                        'Styrking av habilitering og rehabilitering i kommunene',
                      deadline: 'Søknadsfrist: 15. mai 2019'
                    }
                  },
                  {
                    type: 'grantFunding',
                    url: '#4',
                    fields: {
                      heading: 'Turnus for leger - tilskudd til kommuner',
                      deadline: 'Søknadsfrist: 15. mai 2019'
                    }
                  }
                ]}
              />
            <div className="l-mt-2 l-mb-5 t-sm-center">
              <Button secondary>↓ Vis alle</Button>
            </div>
          </div>
        </article>
      </div>


    </main>
          
      <div className="l-mt-3">
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
            <div className="b-input-text__error" style={{ display: 'none' }}>
              Skriv inn en gyldig epost-adresse.
            </div>
          </div>
        </form>
        <div className="b-input-text__description l-mt-1" style={{ display: 'none' }}>
          Du får straks en e-post som bekrefter ditt abonnement. Der
          finner du også mulighet til å melde deg av.
            </div>

        {props.submitted &&
          <Alert status="success">
            Abonnementet ditt er registrert. Du får straks e-post fra oss.
          </Alert>
        }
      </Box>
      </div>



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
