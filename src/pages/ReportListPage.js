import React from 'react';
import List from '../components/List';
import Button from '../components/Button';
import CheckboxGroup from '../components/CheckboxGroup';
import Breadcrumbs from '../components/Breadcrumbs';
import ArticleIntro from '../components/ArticleIntro';
import ListSearch from '../components/ListSearch';
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
      <div className="l-layout l-mt-1">
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
              label="rapporter"
              productId="0e87de78-2cb4-4a70-93a7-0d687443b71e"
              flatTree={dummyFlatTree}
              malGruppe={''}
              dummyData={
                {
                  type: 'generic',
                  url: '#6',
                  fields: {
                    openPdf: 'true',
                    heading:
                      'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                    subheading: '16. januar 2020'
                  }
                }
              }
              collapsed
            />
          </div>
          <div className="js-expand-list" data-start-limit="10">
            <h2 className=" l-mb-1 l-mt-1">10 rapporter innen «akuttmedisin»</h2>
            <hr className="b-hr b-hr--thick" />
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
