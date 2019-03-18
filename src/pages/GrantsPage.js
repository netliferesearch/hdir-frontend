import React from 'react';

import List from '../components/List';
import Button from '../components/Button';
import ListHeading from '../components/ListHeading';
import CheckboxGroup from '../components/CheckboxGroup';
import NavList from '../components/NavList';
import RadioButtonGroup from '../components/RadioButtonGroup';
import Card from '../components/Card';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';

const GrantsPage = () => (
  <main>
    <div className="l-container">
      <div className="row">
        <div className="col-xs-12">
          <Breadcrumbs
            paths={[
              {
                name: 'Forsiden',
                href: '#a'
              },
              {
                name: 'Konferanse',
                href: '#a'
              },
              {
                name: 'Arbeid og psykisk helse',
                href: '#a'
              },
              {
                name: 'Fastlegekonferansen 2018 - fastlegeordning for fremtiden'
              }
            ]}
          />
        </div>
        <div className="col-xs-12 l-mt-3">
          <h1>Tilskudd</h1>
        </div>
        <div className="col-xs-12 l-mt-2">
          <Card text="Søknadsfrist: 15. mai 2019" arrow="right">
            <Box square color="yellow">
              <div className="h2 h2--light">
                Jobber du for å redusere omfang og problematisk bruk av
                rusmidler i arbeidslivet? Nasjonale kompetansesentra, partene i
                arbeidslivet, organisasjoner og stiftelser kan søke om tilskudd.
              </div>
            </Box>
          </Card>
        </div>
      </div>
    </div>
    <div className="l-container l-mt-4">
      <div className="row">
        <aside className="col-md-3 col-xs-12 l-mb-3">
          <div className="h4">Filter</div>
          <div className="l-mt-1">
            <hr className="b-hr b-hr--thick" />
          </div>
          <div className="l-mt-1">
            <RadioButtonGroup
              heading="Velg søkergruppe"
              name="sokergruppe"
              options={[
                {
                  value: 'Alle',
                  label: 'Alle'
                },
                {
                  value: 'Stat',
                  label: 'Stat'
                },
                {
                  value: 'KommuneFylkeskommune',
                  label: 'Kommune / fylkeskommune'
                },
                {
                  value: 'PrivateOgIdeelle',
                  label: 'Private og ideelle'
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
                  label: 'Akuttmedisin'
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
        <div className="col-xs-12 col-md-8 col-md-offset-1">
          <ListHeading heading="250 tilskudd" />
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
              }
            ]}
          />
          <div className="l-mt-2 t-sm-center">
            <Button secondary>Vis alle</Button>
          </div>

          <div className="l-mt-4">
            <NavList
              heading="Tilskuddprosessen"
              list={[
                {
                  url: '#a',
                  title: 'Hvordan søke på tilskudd og hva som skjer etterpå.'
                }
              ]}
            />
          </div>
          <div className="l-mt-4 l-mb-5">
            <NavList
              heading="Tilskuddprosessen"
              list={[
                {
                  url: '#a',
                  title: 'Søke om tilskudd'
                },
                {
                  url: '#a',
                  title: 'Rapportere på tilskudd'
                },
                {
                  url: '#a',
                  title: 'Altinn brukerservice'
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default GrantsPage;
