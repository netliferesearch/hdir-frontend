import React from 'react';

import PageMeta from '../components/PageMeta';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import LongShortHeading from '../components/LongShortHeading';

const MedicinePage = () => (
  <>
    <div className="l-container">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
          {
            name: 'Preparater',
            href: '#a'
          },
          {
            name: 'Amfetamin 2',
            href: '#a'
          }
        ]}
      />
      <main id="main">
        <div className="row">
          <div className="col-md-8 col-xs-12 col-md-offset-2">
            <div className="l-mt-4">
              <LongShortHeading
                long="Virkestoffer"
                short="Amfetamin 2"
                icon="./icons/Medisiner.svg"
              />
            </div>
            <div className="l-mt-4">
              <article className="t-body-text">
                <Box color="green" square>
                  <p>
                    <b>Endret: 8/14, 9/15, 8/16, 1/18, 8/18, 2/19</b>
                  </p>
                  <p>
                    <b>Preparatnavn: Adderall XR</b>
                  </p>
                  <p>
                    <b>
                      ATC-kode: N06BA01 ikke-markedsført preparat, A-preparat
                    </b>
                  </p>
                </Box>
                <div className="l-mt-4">
                  <table>
                    <tbody>
                      <tr>
                        <th scope="row">Indikasjon: Del 1/2</th>
                        <td>
                          Hyperkinetisk forstyrrelse (ADHD og ADD) hos barn og
                          ungdom (fra 6 år til og med 17 år)
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Diagnosekode</th>
                        <td>ICD-10: F90 / ICPC-2: P81</td>
                      </tr>
                      <tr>
                        <th scope="row">Hjemmel</th>
                        <td>
                          § 3 ICD-10: F90
                          <br />
                          <p>&nbsp;</p>
                          <i>Før 1. januar 2018:</i>
                          <br />
                          § 3a, jf. § 2
                          <br />
                          ICD-10: F90
                          <br />
                          ICPC-2: P81
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Krav til tidligere behandling</th>
                        <td>
                          <i>
                            Minst to forhåndsgodkjente preparater med
                            forskjellig virkestoff:
                          </i>
                          <br />
                          metylfenidat (ATC-kode N06BA04),
                          <br />
                          amfetamin (ATC-kode N06BA01),
                          <br />
                          lisdexamfetamin (ATC-kode N06BA12),
                          <br />
                          deksamfetamin (ATC-kode N06BA02),
                          <br />
                          atomoksetin (ATC-kode N06BA09)
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Spesialistkrav</th>
                        <td>
                          Søknad fra en spesialist i psykiatri, barne- og
                          ungdomspsykiatri, barnesykdommer, nevrologi, rus- og
                          avhengighetsmedisin, eller fra en lege ved tilsvarende
                          sykehusavdeling.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Merknad</th>
                        <td>
                          Saksbehandler utreder saken, jf. forvaltningsloven §
                          17. Rådgiver gir en anbefaling i saken dersom
                          vilkårene i vedlegget ikke er oppfylt.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="l-mt-4">
                  <table>
                    <tbody>
                      <tr>
                        <th scope="row">Indikasjon: Del 2/2</th>
                        <td>
                          Hyperkinetisk forstyrrelse (ADHD og ADD) hos barn og
                          ungdom (fra 6 år til og med 17 år)
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Diagnosekode</th>
                        <td>ICD-10: F90 / ICPC-2: P81</td>
                      </tr>
                      <tr>
                        <th scope="row">Hjemmel</th>
                        <td>
                          § 3 ICD-10: F90
                          <br />
                          <p>&nbsp;</p>
                          <i>Før 1. januar 2018:</i>
                          <br />
                          § 3a, jf. § 2
                          <br />
                          ICD-10: F90
                          <br />
                          ICPC-2: P81
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Krav til tidligere behandling</th>
                        <td>
                          <i>
                            Minst to forhåndsgodkjente preparater med
                            forskjellig virkestoff:
                          </i>
                          <br />
                          metylfenidat (ATC-kode N06BA04),
                          <br />
                          amfetamin (ATC-kode N06BA01),
                          <br />
                          lisdexamfetamin (ATC-kode N06BA12),
                          <br />
                          deksamfetamin (ATC-kode N06BA02),
                          <br />
                          atomoksetin (ATC-kode N06BA09)
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Spesialistkrav</th>
                        <td>
                          Søknad fra en spesialist i psykiatri, barne- og
                          ungdomspsykiatri, barnesykdommer, nevrologi, rus- og
                          avhengighetsmedisin, eller fra en lege ved tilsvarende
                          sykehusavdeling.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Merknad</th>
                        <td>
                          Saksbehandler utreder saken, jf. forvaltningsloven §
                          17. Rådgiver gir en anbefaling i saken dersom
                          vilkårene i vedlegget ikke er oppfylt.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>

      <div className="l-mt-3 l-mb-5 t-sm-center">
        <PageMeta publishDate="11. august 2008" editDate="12. august 2018" />
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
          Skriv ut/Lag PDF er midlertidig deaktivert
        </small>
      </div>
    </div>
    <Box color="grey" square noPadding>
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

export default MedicinePage;
