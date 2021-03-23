import React from 'react';
import Card from '../components/Card';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import ArticleIntro from '../components/ArticleIntro';
import GrantsSearch from '../components/GrantsSearch';
import { dummyFlatTree } from '../components/dummyFlatTree';

const ListGrants = () => (
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
              lead="Har du et prosjekt som kan bidra til at folk i ditt nærområde føler seg mindre ensomme? Er det mangler på helsesykepleiere i din kommune? Da kan du søke om tilskudd hos oss."
            />
          </div>
        </div>
      <div className="l-layout l-mt-1">
        <article className="col-md-12 l-mt-2">
          <div className="row">
              <div className="col-md-8 col-md-offset-2">
              <Card
                url="#a"
                arrow="right"
                mainContent={
                  <>
                    <h3>Trenger du hjelp til å finne riktig tilskudd? <br />Prøv veilederen vår</h3>
                  </>
                }
              >
              </Card>
            </div>
          </div>
          <div className="l-mt-4 l-mb-2">
            <GrantsSearch
              label="Vet du hvilket tilskudd du vil søke på?"
                id="705432b2-4db4-41d5-974d-26955cc74e0c"
                endpoint="https://helsedir-helsenett-xptest.enonic.cloud/admin/site/preview/default/draft/helsedirektoratet/tilskudd/_/service/helsedirektoratet/wizardSearch"
              flatTree={dummyFlatTree}
                initial='[{\"url\":\"http://localhost:8080/admin/site/preview/default/draft/helsedirektoratet/tilskudd\", \"type\": \"tilskudd\",\"fields\":{\"heading\":\"Tiltaksutvikling innen program for folkehelsearbeid i kommunene\",\"frist\":{\"day\":\"01\",\"month\":\"mar\",\"year\":\"2018\",\"date\":\"2021-06-08\"},\"tags\":[]}},{\"url\":\"http://localhost:8080/admin/site/preview/default/draft/helsedirektoratet/tilskudd\", \"type\": \"tilskudd\",\"fields\":{\"heading\":\"Medisinsk avstandsoppfølging av kronisk syke\",\"frist\":{\"day\":\"01\",\"month\":\"mai\",\"year\":\"2018\"},\"tags\":[]}},{\"url\":\"http://localhost:8080/admin/site/preview/default/draft/helsedirektoratet/tilskudd\", \"type\": \"tilskudd\",\"fields\":{\"heading\":\"Pilotprosjekt på legevaktfeltet\",\"frist\":{\"day\":\"01\",\"month\":\"jun\",\"year\":\"2018\"},\"tags\":[]}},{\"url\":\"http://localhost:8080/admin/site/preview/default/draft/helsedirektoratet/tilskudd\", \"type\": \"tilskudd\",\"fields\":{\"heading\":\"Styrking av habilitering og rehabilitering i kommunene 2017-2019\",\"frist\":{\"day\":\"31\",\"month\":\"jan\",\"year\":\"2019\"},\"tags\":[]}},{\"url\":\"http://localhost:8080/admin/site/preview/default/draft/helsedirektoratet/tilskudd\", \"type\": \"tilskudd\",\"fields\":{\"heading\":\"Rekruttering av fastleger i kommuner som har rekrutteringsvansker\",\"frist\":{\"day\":\"15\",\"month\":\"mai\",\"year\":\"2019\"},\"tags\":[]}},{\"url\":\"http://localhost:8080/admin/site/preview/default/draft/helsedirektoratet/tilskudd\", \"type\": \"tilskudd\",\"fields\":{\"heading\":\"Pilot for strukturert tverrfaglig oppfølging - Oppfølgingsteam\",\"frist\":{\"day\":\"25\",\"month\":\"mai\",\"year\":\"2019\"},\"tags\":[]}}]'
            />
          </div>
        </article>
      </div>

    </main>
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
