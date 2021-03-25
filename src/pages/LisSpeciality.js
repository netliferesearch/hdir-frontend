import React from 'react';
import Button from '../components/Button';
import Breadcrumbs from '../components/Breadcrumbs';
import ContentFooter from '../components/ContentFooter';
import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';

const LisSpeciality = () => (
  <>
    <div className="l-container">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
          {
            name: 'Documaster',
            href: '#a'
          }
        ]}
      />
    </div>
    <div className="l-container l-mt-3 l-mb-5">
      <main id="main">
        <h1>Barnekirurgi</h1>
        <div className="l-mt-2">
          <NavList
            list={[
              { title: 'Læringsmål', url: '#' },
              { title: 'Læringsaktivitetet', url: '#' },
              { title: 'Andre ting', url: '#' }
            ]}
          />
        </div>

        <div className="l-mt-4">
          <PageMeta
            publishDate="11. august 2008"
            editDate="11. august 2018"
            url="#a"
          />
        </div>
        <div className="l-mt-2">
          <Button clean small icon="../icons/print.svg">
            Skriv ut / lag PDF
          </Button>
        </div>
        <ContentFooter
          heading="Slik refererer du [produkttype]"
          id="contentFooter-1"
          content={[
            <React.Fragment key={'contentFooter-1'}>
              Helsedirektoratet (2020). <i>Barnekirurgi [nettdokument].</i>{' '}
              Oslo: Helsedirektoratet (oppdatert 31. oktober 2020, lest 11.
              november 2020). Tilgjengelig fra:
              https://www.helsedirektoratet.no/documaster/barnekirurgi
            </React.Fragment>
          ]}
        />
        <ContentFooter
          heading="Åpne data (API)"
          id="contentFooter-2"
          content={[
            <React.Fragment key={'contentFooter-2'}>
              Få tilgang til innhold fra Helsedirektoratet som åpne data:{' '}
              <a href="https://utvikler.helsedirektoratet.no/">
                https://utvikler.helsedirektoratet.no/
              </a>
              <br />
              <br />
              <span className="t--bold">[Fulltittel på innholdet]</span> er
              tilgjengelig i vårt API: https://xxxx
            </React.Fragment>
          ]}
        />
      </main>
    </div>
  </>
);

export default LisSpeciality;
