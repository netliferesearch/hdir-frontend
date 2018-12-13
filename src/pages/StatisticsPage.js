import React from 'react';

import Card from '../components/Card';
import Statistics from '../components/Statistics';
import Heading from '../components/Heading';
import CheckboxGroup from '../components/CheckboxGroup';
import RadioButtonGroup from '../components/RadioButtonGroup';
import ListHeading from '../components/ListHeading';
import ArticleIntro from '../components/ArticleIntro';
import NavList from '../components/NavList';
import Breadcrumbs from '../components/Breadcrumbs';

const StatisticsPage = () => (
  <div>
    <div className="l-container">
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
      <div className="row">
        <div className="col-xs-12 l-mt-4">
          <ArticleIntro
            heading="Statistikk"
            lead="Finn statistikk, rapporter og analyser. Hent rådata, lag dine egne rapporter."
          />
          <div className="l-mt-3">
            <Heading h="h2" className="h5">
              Nyeste statistikk
            </Heading>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6 l-mt-2">
              <Card
                heading="Pakkeforløp for brystkreft"
                text="Kvalitetsindikator"
                url="#a"
              >
                <Statistics
                  bigText="91,3%"
                  smallText="Andel pakkeforløp for brystkreft som er gjennomført innenfor makisemal anbefalt forløstid."
                  icon="../static/icons/pie.svg"
                />
              </Card>
            </div>
            <div className="col-xs-12 col-md-6 l-mt-2">
              <Card
                heading="Fastlegestatistikk"
                text="Kvalitetsindikator"
                url="#a"
              >
                <Statistics
                  bigText="1106"
                  smallText="Antall på en gjennomsnittlig liste for fastleger."
                  icon="../static/icons/pie.svg"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xs-12 l-mt-4">
        <h2>All statistikk</h2>
      </div>
      <div className="row l-mt-4">
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <h4>Filtrer statistikk</h4>
          <hr className="b-hr b-hr--thick" />
          <div className="l-mt-2">Velg tema</div>
          <div className="l-mt-2">
            <hr className="b-hr" />
          </div>
          <div className="l-mt-2">
            <RadioButtonGroup
              heading="VELG XX"
              name="xx"
              options={[
                {
                  value: 'Primærhelsetjenesten',
                  label: 'Primærhelsetjenesten'
                },
                {
                  value: 'Spesialisthelsetjenesten',
                  label: 'Spesialisthelsetjenesten'
                }
              ]}
            />
          </div>
          <div className="l-mt-2">
            <hr className="b-hr" />
          </div>
          <div className="l-mt-2">
            <CheckboxGroup
              heading="VIS STATISTIKKTYPE"
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
        <div className="col-md-8 col-xs-12 col-md-offset-1">
          <ListHeading
            heading="135 statistikksider"
            selectLabel="SORTÉR"
            selectOptions={[
              'Sist publisert',
              'Først publisert',
              'Alfabetisk rekkefølge'
            ]}
          />
          <div className="l-mt-3">
            <NavList
              list={[
                {
                  title: 'KAPITTEL 1',
                  url: '#',
                  meta: 'Nasjonale faglige retningslinjer'
                },
                {
                  title: 'KAPITTEL 3',
                  url: '#',
                  meta: 'Nasjonale faglige retningslinjer'
                },
                {
                  title: 'KAPITTEL 1',
                  url: '#',
                  meta: 'Nasjonale faglige retningslinjer'
                },
                {
                  title: 'KAPITTEL 3',
                  url: '#',
                  meta: 'Nasjonale faglige retningslinjer'
                },
                {
                  title: 'KAPITTEL 1',
                  url: '#',
                  meta: 'Nasjonale faglige retningslinjer'
                },
                {
                  title: 'KAPITTEL 3',
                  url: '#',
                  meta: 'Nasjonale faglige retningslinjer'
                },
                {
                  title: 'KAPITTEL 1',
                  url: '#',
                  meta: 'Nasjonale faglige retningslinjer'
                },
                {
                  title: 'KAPITTEL 3',
                  url: '#',
                  meta: 'Nasjonale faglige retningslinjer'
                },
                {
                  title: 'KAPITTEL 1',
                  url: '#',
                  meta: 'Nasjonale faglige retningslinjer'
                },
                {
                  title: 'KAPITTEL 3',
                  url: '#',
                  meta: 'Nasjonale faglige retningslinjer'
                },
                {
                  title: 'KAPITTEL 1',
                  url: '#',
                  meta: 'Nasjonale faglige retningslinjer'
                },
                {
                  title: 'KAPITTEL 3',
                  url: '#',
                  meta: 'Nasjonale faglige retningslinjer'
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StatisticsPage;
