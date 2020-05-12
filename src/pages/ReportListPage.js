import React from 'react';
import List from '../components/List';
import Button from '../components/Button';
import ListHeading from '../components/ListHeading';
import CheckboxGroup from '../components/CheckboxGroup';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import ArticleIntro from '../components/ArticleIntro';
import ProductSearch from '../components/ProductSearch';
import { dummyFlatTree } from '../components/dummyFlatTree';

const ReportListPage = () => (
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
              heading="Rapporter"
              lead="Rapporter, rundskriv, strategier, brosjyrer, kort og plakater. Denne
            teksten skal bli mer utfyllende, og bedre."
            />
          </div>
        </div>
      <div className="l-layout l-mt-2">
        {/* <div className="row l-mt-2">
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
        </div> */}
        <aside className="l-hide-to-lg l-sidebar l-bleed-right">
          <hr className="b-hr b-hr--thick" />
          <div className="l-mt-2">
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
        <article className="l-article l-article--topline">
          <div className="l-mt-1 l-mb-2">
            <ProductSearch
              label="rapporter"
              productId="0e87de78-2cb4-4a70-93a7-0d687443b71e"
              flatTree={dummyFlatTree}
              malGruppe={''}
              collapsed
            />
          </div>
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
        </article>
      </div>
    </main>
  </div>

);

export default ReportListPage;
