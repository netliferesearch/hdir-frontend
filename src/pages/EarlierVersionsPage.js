import React from 'react';

import ArticleIntro from '../components/ArticleIntro';
import Breadcrumbs from '../components/Breadcrumbs';
import List from '../components/List';
import Button from '../components/Button';
import NavList from '../components/NavList';

const EarlierVersionsPage = () => (
  <>
    <div className="l-container">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
          {
            name: 'Innhold'
          }
        ]}
      />
      <main id="main">
        <div className="l-mt-3">
          <ArticleIntro
            heading="Tidligere versjoner"
          />
        </div>
        <div className="row l-mt-4">
          <aside className="col-md-3 col-xs-12 l-mb-4" />
          <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
            <div className="l-mt-4">
              <List
                heading="25 versjoner"
                list={[
                  {
                    type: 'archive',
                    fields: {
                      heading:
                        'Ny forskrift om helsestasjons- og skolehelsetjenesten',
                      publishDate: '3. desember 2018',
                      lead: 'Alle anbefalinger er oppdatert med henvisninger til ny forskrift om helsestasjons- og skolehelsetjenesten, som trådte i kraft 1. november 2018. '
                    }
                  },
                  {
                    type: 'archive',
                    fields: {
                      heading:
                        'Ny, kjønnsnøytral tittel',
                      publishDate: '1. desember 2018',
                      lead: 'Fra 1. januar 2019 er tittelet "helsesøster" endret til "helsesykepleier". Dette er oppdatert i alle anbefalinger.'
                    }
                  },
                  {
                    type: 'archive',
                    fields: {
                      heading:
                        'Ny anbefaling om måling av hodeomkrets',
                      publishDate: '12. november 2018',
                      lead: `<ul><li>Anbefalingen erstatter tidligere innhold om hodeomkrets i PDF. Nasjonal vekstkurve fra Vekststudien i Bergen anbefales nå for vurdering av hodeomkrets. Målemetode og henvisningskriterier er tydeliggjort, og det er lagt inn informasjon om hvordan premature barns hodeomkrets korrigeres for alder.</li>
<li>Nytt kapittel "Veiing og måling" er opprettet under Helsestasjon 0-5 år. I kapittelet ligger anbefaling Hodeomkrets og anbefaling Veiing og måling (under revidering). </li>
<li>Under anbefalingen Veiing og måling lenkes det opp til nåværende retningslinje (PDF).</li>
<li>I skolehelsetjenesten er anbefalingen Veiing og måling (under revidering) lagt inn i kapittelet "Helseundersøkelse og helsesamtale". Det lenkes opp til nåværende retningslinje (PDF), som er gjeldende inntil ferdigstillelse.</li></ul>`
                    }
                  },
                  {
                    type: 'archive',
                    fields: {
                      heading:
                        'Nytt arbeidsdokument for Skolehelsetjenesten i grunn- og videregående skole',
                      publishDate: '10. november 2018',
                    }
                  }
                ]}
              />
            </div>
            <div className="l-mt-2 l-mb-2 t-sm-center">
              <Button secondary>↓ Vis alle</Button>
            </div>
          </article>
        </div>
      </main>
    </div>
  </>
);

export default EarlierVersionsPage;
