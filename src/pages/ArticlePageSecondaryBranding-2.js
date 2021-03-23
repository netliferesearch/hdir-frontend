import React from 'react';

import PageMeta from '../components/PageMeta';
import Box from '../components/Box';
import ArticleIntro from '../components/ArticleIntro';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionSidebar from '../components/SectionSidebar';

const ArticlePageSecondaryBrandingTwo = () => (

  <>
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
          }
        ]}
      />
      <main id="main">
        <div className="l-mt-3">
          <ArticleIntro
            heading="Smittevern i kollektivtransport og luftfarten"
          />
        </div>
        <div className="row l-mt-4">
          <aside className="col-md-3 col-xs-12 l-mb-4">
            <SectionSidebar heading="Innhold på denne siden" />
          </aside>
          <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
            <h2>Veiledere</h2>
            <p>
              Noe om veilederne her.
            </p>

            <div className="l-mt-4">
              <hr className="b-hr b-hr--grey-light" />
              <div className="l-mt-1 b-secondary-logos">
                <div className="b-secondary-logos__logolist">
                  <img src="http://placehold.it/100x50" alt="Folkehelseinstituttet logo" />
                  <img src="http://placehold.it/100x50" alt="Folkehelseinstituttet logo" />
                  <img src="http://placehold.it/100x50" alt="Folkehelseinstituttet logo" />

                </div>
                <div className="b-secondary-logos__text">
                  <p>
                    Veilederne er utgitt av Helsedirektoratet. <br />
                    Faglig innhold levert av Folkehelseinstituttet
                  </p>
                </div>
              </div>
            </div>
           
          </article>
        </div>
      </main>
    </div>

    <div className="l-container l-mt-3 l-mb-5">
      <div className="row">
        <div className="col-md-8 col-xs-12 col-md-offset-4">
          <PageMeta publishDate="11. august 2008" editDate="12. august 2018" />

          <div className="l-mt-1">
            <small>
              <img
                src="../icons/print.svg"
                alt=""
                role="presentation"
                style={{
                  height: '1.4em',
                  width: 'auto',
                  marginRight: '0.5em',
                  marginBottom: '-0.2em'
                }}
              />
              Skriv ut/Lag PDF
            </small>
          </div>
        </div>
      </div>
    </div>

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
  </>
);

export default ArticlePageSecondaryBrandingTwo;
