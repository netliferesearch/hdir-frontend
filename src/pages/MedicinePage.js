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
            name: 'Legemiddel',
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
                short="Amfetamin 2"
                long="Virkestoff"
                icon="./icons/Medisiner.svg"
              />
            </div>
            <div className="l-mt-3">
              <article className="t-body-text">
                <Box color="green" square>
                  <p>
                    <b>
                      Sist endret: 8/14, 9/15, 8/16, 1/18, 8/18, 2/19
                    </b>
                  </p>
                  <p>
                    <b>Legemiddelnavn: Adderall XR</b>
                  </p>
                  <p>
                    <b>
                      ATC-kode: N06BA01 ikke-markedsført preparat, A-preparat
                    </b>
                  </p>
                  <div className="l-mt-2">
                    <p>
                      Det kan fattes et vedtak som gjelder både for krem og
                      plaster i reseptpliktig pakning. Det kan fattes et vedtak
                      som gjelder både for krem og plaster i reseptpliktig
                      pakning. Det kan fattes et vedtak som gjelder både for
                      krem og plaster i reseptpliktig pakning.
                    </p>
                  </div>
                </Box>
                <div className="l-mt-3">
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
                        <th scope="row">Diagnosekoder</th>
                        <td>ICD-10: F90 / ICPC-2: P81</td>
                      </tr>
                      <tr>
                        <th scope="row">Hjemmel</th>
                        <td>
                          § 3 ICD-10: F90
                          <p>&nbsp;</p>
                          Før 1. januar 2018:
                          <br />
                          § 3a, jf. § 2
                          <br />
                          ICD-10: F90
                          <br />
                          ICPC-2: P81
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Tidsbegrensning</th>
                        <td>
                          Vedtakene tidsbegrenses i 2 år.
                          <p>&nbsp;</p>
                          Dersom brukeren fyller 18 år i løpet av disse to
                          årene, og det ikke er gjort unntak fra
                          aldersbegrensningen, skal vedtaket tidsbegrenses til
                          fylte 18 år.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Vilkår</th>
                        <td>
                          Det skal bekreftes at:
                          <ul>
                            <li>
                              faren for avhengighet er vurdert og funnet
                              underordnet behovet for behandling
                            </li>
                            <li>konkret behandlingsplan foreligger</li>
                            <li>
                              smerteanalyse er utført, for eksempel ved hjelp av
                              VAS-skala
                            </li>
                          </ul>
                          Døgndose skal oppgis per legemiddel eller som mg orale
                          morfinekvivalenter. Navnet på fastlege med tilhørende
                          legekontor, sykehusavdeling og/eller tverrfaglig
                          smerteklinikk som skal forskrive legemidlene til
                          pasienten skal oppgis.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Krav til søkende lege</th>
                        <td>
                          Søknad skal komme fra pasientens fastlege / lege ved
                          fastlegens kontor eller fra en lege ved en tverrfaglig
                          smerteklinikk ved:
                          <ul>
                            <li>
                              Søknader om legemidler i ATC-gruppe N02A og
                              R05DA04
                            </li>
                            <li>
                              Døgndose inntil (≤) 100 mg orale
                              morfinekvivalenter
                            </li>
                            <li>Avklart smertetilstand</li>
                          </ul>
                          Søknad skal komme fra lege ved en tverrfaglig
                          smerteklinikk ved:
                          <ul>
                            <li>
                              Døgndose over 100 mg og inntil 300 (≤) mg orale
                              morfinekvivalenter
                            </li>
                            <li>Uavklart smertetilstand</li>
                            <li>Søknader om metadon (ATC-kode N07BC02)</li>
                          </ul>
                          Metadon (ATC-kode N07BC02) inkluderes i alle vedtak
                          når søknaden kommer fra tverrfaglig smerteklinikk.
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Krav til tidligere behandling</th>
                        <td>
                          Minst to forhåndsgodkjente preparater med forskjellig
                          virkestoff:
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
                          Før 1. januar 2018:
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
                          Minst to forhåndsgodkjente preparater med forskjellig
                          virkestoff:
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
