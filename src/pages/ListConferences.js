import React from 'react';
import List from '../components/List';
import Breadcrumbs from '../components/Breadcrumbs';
import ArticleIntro from '../components/ArticleIntro';

const ListConferences = () => (
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
              heading="Konferanser og kurs"
            />
          </div>
        </div>
      <div className="l-layout l-mt-1 l-mb-3">
        <article className="l-article l-article--topline l-article--full-width">
          <div className="js-expand-list">
            <h2 className=" l-mb-1 l-mt-1">11 konferanser og kurs</h2>
            <hr className="b-hr b-hr--thick" />
            <List
              list={[
                {
                  type: 'conference',
                  url: '#1',
                  fields: {
                    heading:
                      'Møte i Nasjonalt fagråd for arbeid og helse',
                  }
                },
                {
                  type: 'conference',
                  url: '#1',
                  fields: {
                    heading:
                      'Webinar om tobakksavvenning',
                    registrationDeadline: '2. juni 2020'
                  }
                },
                {
                  type: 'conference',
                  url: '#1',
                  fields: {
                    heading:
                      'AVLYST: Nasjonal helseberedskapskonferanse',
                  }
                },
              ]}
            />
          </div>
        </article>
      </div>
    </main>
  </div>

);

export default ListConferences;
