import React from 'react';

import List from '../components/List';
import Link from '../components/Link';
import ListHeading from '../components/ListHeading';
import NavList from '../components/NavList';
import RadioButtonGroup from '../components/RadioButtonGroup';
import Card from '../components/Card';
import Box from '../components/Box';

const GrantsPage = () => (
  <main>
    <div className="l-container">
      <div className="row">
        <div className="col-xs-12">
          <h1>Tilskudd</h1>
        </div>
        <div className="col-xs-12 l-mt-3">
          <Card text="Søknadsfrist: 15.05.2019" arrow="right">
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
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <h4>Filtrér tilskudd</h4>
          <div className="l-mt-2">
            <hr className="b-hr b-hr--thick" />
          </div>
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
        </aside>
        <div className="col-md-8 col-md-offset-1">
          <ListHeading heading="250 tilskudd" />
          <List
            list={[
              {
                type: 'grantFunding',
                url: '#1',
                fields: {
                  heading:
                    'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                  deadline: 'Søknadsfrist: 03.12.2019'
                }
              },
              {
                type: 'grantFunding',
                url: '#2',
                fields: {
                  heading: 'Kommunalt kompetanse- og innovasjonstilskudd',
                  deadline: 'Søknadsfrist: 11.10.2019'
                }
              },
              {
                type: 'grantFunding',
                url: '#3',
                fields: {
                  heading:
                    'Styrking av habilitering og rehabilitering i kommunene',
                  deadline: 'Søknadsfrist: 03.12.2018'
                }
              },
              {
                type: 'grantFunding',
                url: '#4',
                fields: {
                  heading: 'Turnus for leger - tilskudd til kommuner',
                  deadline: 'Søknadsfrist: 12.01.2019'
                }
              },
              {
                type: 'grantFunding',
                url: '#1',
                fields: {
                  heading:
                    'Etablering og utvikling av kommunale frisklivslærings- og mestringstilbud',
                  deadline: 'Søknadsfrist: 03.12.2019'
                }
              },
              {
                type: 'grantFunding',
                url: '#2',
                fields: {
                  heading: 'Kommunalt kompetanse- og innovasjonstilskudd',
                  deadline: 'Søknadsfrist: 11.10.2019'
                }
              },
              {
                type: 'grantFunding',
                url: '#3',
                fields: {
                  heading:
                    'Styrking av habilitering og rehabilitering i kommunene',
                  deadline: 'Søknadsfrist: 03.12.2018'
                }
              },
              {
                type: 'grantFunding',
                url: '#4',
                fields: {
                  heading: 'Turnus for leger - tilskudd til kommuner',
                  deadline: 'Søknadsfrist: 12.01.2019'
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
