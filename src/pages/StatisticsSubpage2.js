import React from 'react';

import PageMeta from '../components/PageMeta';
import Button from '../components/Button';
import Box from '../components/Box';
import ArticleIntro from '../components/ArticleIntro';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionSidebar from '../components/SectionSidebar';

const StatisticsSubpage = () => (
  <>
    <div className="l-container l-mb-5">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
          {
            name: 'Statistikk',
            href: '#a'
          }
        ]}
      />
      <main id="main">
        <div className="l-mt-3">
          <ArticleIntro
            heading="Tvangsmiddelbruk i psykisk helsevern for voksne"
            lead="Kvalitetsindikatoren angir antall pasienter med registrerte tvangsmiddelvedtak for pasienter over 16 år i institusjon for døgnopphold i psykisk helsevern for voksne."
          />
        </div>
        <div className="row l-mt-4">
          <aside className="col-md-3 col-xs-12 l-mb-4">
            <SectionSidebar heading="Innhold på denne siden" />
          </aside>
          <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
            <h2>Om indikatoren</h2>
            <p>
              ​Denne indikatoren tar for seg tvangsmiddelbruk for pasienter i
              institusjon for døgnopphold i psykisk helsevern for voksne.
              Tvangsmiddelvedtak ligger til grunn for bruk av tvangsmidler i
              psykisk helsevern for voksne. Bruk av tvangsmidler er et svært
              inngripende virkemiddel som kun kan brukes i akutte situasjoner i
              det psykiske helsevernet. Det er viktig å overvåke bruken av
              tvang.
            </p>
            <p>
              Det er et overordnet helsepolitisk mål å redusere og
              kvalitetssikre bruken av tvang i det psykiske helsevernet.
            </p>
            <p>
              Det fremgår i psykisk helsevernlov § 4-8 at tvangsmidler bare skal
              brukes overfor pasienten når dette er uomgjengelig nødvendig for å
              hindre vedkommende i å skade seg selv eller andre, eller for å
              avverge betydelig skade på bygninger, klær, inventar eller andre
              ting. Tvangsmidler skal bare brukes når lempeligere midler har
              vist seg å være åpenbart forgjeves eller utilstrekkelige.
            </p>
            <p>Tvangsmidler som kan anvendes er:</p>
            <ul>
              <li>
                Mekaniske tvangsmidler som hindrer pasientens bevegelsesfrihet,
                herunder belter og remmer samt skadeforebyggende spesialklær.
              </li>
              <li>
                Kortvarig anbringelse bak låst eller stengt dør uten personale
                til stede.
              </li>
              <li>
                Enkeltstående bruk av korttidsvirkende legemidler i beroligende
                eller bedøvende hensikt.
              </li>
              <li>Kortvarig fastholding.</li>
            </ul>
            <p>
              <iframe
                title="title of the statistics, editor should add this"
                width="100%"
                height="600"
                src="https://app.powerbi.com/view?r=eyJrIjoiYTllNGYyOTMtNGQyMy00M2QyLTg3MTUtZmJjZTVjYTkwODczIiwidCI6IjZiYTFiZDVjLTc1MGYtNGFkNi1hYmEzLTBmOTU1ODViYzIxZiIsImMiOjh9"
                frameBorder="0"
                allowFullScreen={true}
              />
            </p>
            <h2>Hovedfunn</h2>
            <p>
              I andre tertial 2018 ble det benyttet tvangsmidler overfor 878*
              pasienter i døgnbehandling. I samme periode 2017 var antallet
              789*.
            </p>
            <table>
              <tbody>
                <tr>
                  <th scope="col">RHF</th>
                  <th scope="col">Antall 2. tert. 2017</th>
                  <th scope="col">Antall 2. tert. 2018</th>
                </tr>
                <tr>
                  <th scope="row">Helse Sør-Øst RHF</th>
                  <td>437</td>
                  <td>511</td>
                </tr>
                <tr>
                  <th scope="row">Helse Vest RHF</th>
                  <td>180</td>
                  <td>201</td>
                </tr>
                <tr>
                  <th scope="row">Helse Midt-Norge RHF</th>
                  <td>100</td>
                  <td>114</td>
                </tr>
                <tr>
                  <th scope="row">Helse Nord RHF</th>
                  <td>78</td>
                  <td>57</td>
                </tr>
                </tbody>
            </table>

            <h2>Flere funn</h2>
            <p>
              I andre tertial 2018 ble det benyttet tvangsmidler overfor 878*
              pasienter i døgnbehandling. I samme periode 2017 var antallet
              789*.
            </p>
            <table>
              <tbody>
                <tr>
                  <th scope="row">Helse Sør-Øst RHF</th>
                  <td>Alle datauttrekk og beregninger gjøres likt for alle tidsserier.</td>
                </tr>
                <tr>
                  <th scope="row">Helse Vest RHF</th>
                  <td>Alle datauttrekk og beregninger gjøres likt for alle tidsserier.</td>
                </tr>
                <tr>
                  <th scope="row">Helse Midt-Norge RHF</th>
                  <td>Alle datauttrekk og beregninger gjøres likt for alle tidsserier.</td>
                </tr>
                <tr>
                  <th scope="row">Helse Nord RHF</th>
                  <td>Alle datauttrekk og beregninger gjøres likt for alle tidsserier.</td>
                </tr>
              </tbody>
            </table>

            <p>
              Kun Helse Nord RHF hadde en nedgang i antall pasienter med minst
              ett tvangsmiddelvedtak.
            </p>
            <p>* Stemmer ikke helt overens med summen av RHF antallene.</p>
            <h2>Forbehold ved tallene</h2>
            <p>
              Alle datauttrekk og beregninger gjøres likt for alle tidsserier.
              Forutsatt at det ikke er endringer i kodepraksis, er det mulig å
              følge historisk utvikling. Sammenligning på tvers av
              behandlingssteder bør gjøres med varsomhet. Det kan være stor
              variasjon i pasientpopulasjoner fra behandlingssted til
              behandlingssted.
            </p>
            <p>
              Institusjoner som ikke er godkjent for tvunget psykisk helsevern
              med døgnopphold kan likevel i akutte situasjoner benytte
              tvangsmidler, jf. Psykisk helsevernsforskrift §24. Disse
              institusjonene er derfor inkludert i beregningene.
            </p>
          </article>
        </div>
      </main>
      <div className="l-mt-3">
        <div className="row">
          <div className="col-md-8 col-xs-12 col-md-offset-4">
            <PageMeta
              publishDate="11. august 2008"
              editDate="12. august 2018"
            />
            <div className="l-mt-1">
              <Button clean small icon="../icons/print.svg">
                Skriv ut hele retningslinjen
              </Button>
            </div>
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

export default StatisticsSubpage;
