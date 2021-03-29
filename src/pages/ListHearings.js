import React from 'react';
import List from '../components/List';
import Breadcrumbs from '../components/Breadcrumbs';
import ArticleIntro from '../components/ArticleIntro';
import Alert from '../components/Alert';

const ListHearings = () => (
  <div>
    <div className="l-container">
    <Breadcrumbs
      paths={[
        {
          name: 'Forsiden',
          href: '#a'
        }
      ]}
    />
    </div>
    <main id="main">
      <div className="l-container l-mt-2">
        <div className="row">
          <div className="col-xs-12">
            <Alert status="success">
            Oversikten nedenfor er ikke komplett akkurat nå. Vi skal fikse feilen. I mellomtiden kan du se alle høringene her
            </Alert>
          </div>
        </div>
      </div>
      
      <div className="l-container">
        <div className="row l-mt-2">
          <div className="col-xs-12">
            <ArticleIntro
              heading="Høringer"
            />
          </div>
        </div>
        <div className="l-layout l-mt-1 l-mb-3">
          <article className="l-article l-article--full-width">
            <div className="js-expand-list">
              <h2 className=" l-mb-1 l-mt-1">Ute på høring</h2>
              <hr className="b-hr b-hr--thick" />
              <List
                list={[
                  {
                    type: 'generic',
                    url: '#6',
                    fields: {
                      heading:
                        'Helsetilbud til personer som står i fare for å begå seksuelle overgrep mot barn: «Det finnes hjelp»',
                      subheading: 'Høringsfrist: 01.06.2020'
                    }
                  },
                  {
                    type: 'generic',
                    url: '#6',
                    fields: {
                      heading:
                        'Helsetilbud til personer som står i fare for å begå seksuelle overgrep mot barn: «Det finnes hjelp»',
                      subheading: 'Høringsfrist: 01.06.2020'
                    }
                  },
                  {
                    type: 'generic',
                    url: '#6',
                    fields: {
                      heading:
                        'Helsetilbud til personer som står i fare for å begå seksuelle overgrep mot barn: «Det finnes hjelp»',
                      subheading: 'Høringsfrist: 01.06.2020'
                    }
                  },
                ]}
              />
            </div>
            <div className="js-expand-list l-mt-4">
              <h2 className=" l-mb-1">Under behandling</h2>
              <hr className="b-hr b-hr--thick" />
              <List
                list={[
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
                      heading:
                        'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                      subheading: '16. januar 2020'
                    }
                  },
                ]}
              />
            </div>
            <div className="js-expand-list l-mt-4">
              <h2 className=" l-mb-1">Ferdig behandlet</h2>
              <hr className="b-hr b-hr--thick" />
              <List
                list={[
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
                      heading:
                        'Dokumentasjon i helsestasjons- og skolehelsetjenesten',
                      subheading: '16. januar 2020'
                    }
                  },
                ]}
              />
            </div>
          </article>
        </div>
      </div>
    </main>
  </div>

);

export default ListHearings;
