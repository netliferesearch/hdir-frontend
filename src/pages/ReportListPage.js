import React from 'react';

import List from '../components/List';
import Button from '../components/Button';
import ListHeading from '../components/ListHeading';
import CheckboxGroup from '../components/CheckboxGroup';
import Box from '../components/Box';
import Card from '../components/Card';
import ArticleIntro from '../components/ArticleIntro';

const ReportListPage = () => (
  <main id="main">
    <div className="l-container">
      <div className="row l-mt-3">
        <div className="col-xs-12">
          <ArticleIntro
            heading="Rapporter"
            lead="Rapporter, rundskriv, strategier, brosjyrer, kort og plakater. Denne
          teksten skal bli mer utfyllende, og bedre."
          />
        </div>
      </div>
      <div className="row l-mt-2">
        <div className="col-xs-12">
          <span>NYESTE RAPPORTER</span>
        </div>
        <div className="col-xs-12 col-sm-6 l-mt-1">
          <Card
            heading="Ventetider og pasientrettigheter 2017"
            text="17. mars 2018 "
            url="#a"
            arrow="right"
          >
            <Box square color="blueDark">
              <div className="h1 t-sm-center">-3</div>
              <div className="t-sm-center">
                Ventetiden gikk ned med tre dager fra 2016 til 2017.
              </div>
            </Box>
          </Card>
        </div>
        <div className="col-xs-12 col-sm-6 l-mt-1">
          <Card
            heading="Ventetider og pasientrettigheter 2017"
            text="21. januar 2018"
            url="#a"
            arrow="right"
          >
            <Box square color="blueDark">
              <div className="h3">
                Gjennomsnittlig ventetid i 2017 er på 58 dager for somatisk
                sektor.
              </div>
            </Box>
          </Card>
        </div>
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
        <section className="col-xs-12 col-md-8 col-md-offset-1">
          <ListHeading heading="250 Rapporter" />
          <div className="js-expand-list" data-start-limit="10">
            <List
              list={[
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    openPdf: 'true',
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    openPdf: 'true',
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    download: 'true',
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    download: 'true',
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    download: 'true',
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    download: 'true',
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    download: 'true',
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    download: 'true',
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    download: 'true',
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                },
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                }
              ]}
            />
            <div className="l-mt-2 l-mb-5 t-sm-center">
              <Button secondary>↓ Vis alle</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
);

export default ReportListPage;
