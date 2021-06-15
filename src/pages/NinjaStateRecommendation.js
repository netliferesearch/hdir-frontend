import React from 'react';
import Collapsible from '../components/Collapsible';
import ContentFooter from '../components/ContentFooter';
import Box from '../components/Box';
import IconWithText from '../components/IconWithText';
import PageMeta from '../components/PageMeta';

const NinjaStateRecommendation = () => (
  <>
    <div className="l-container l-mt-3">
      <main id="main" className="row l-mt-4">
        <div className="l-container l-mt-3 l-mb-5">
          <div className="row" role="navigation">
            <div className="col-xs-12 col-md-9">
              <h1 className="h2">Degenerative nevrologiske sykdommer</h1>
              <div className="l-mt-1">
                <div className="b-collapsible b-collapsible--subtle b-collapsible--small">
                  <div className="b-collapsible__heading normal">
                    Regelverk (lov eller forskrift)
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row t-ninja" role="navigation">
            <div className="col-xs-12 col-md-9">
              {/* Tekst Anbefaling */}
              <h3>Forskriftstekst</h3><h4>Førerkortgruppe 1</h4><p>Helsekrav oppfylt dersom nevrolog vurderer at det er tilfredsstillende fysisk og kognitiv funksjonsevne.</p><p><strong>Sykdommer med sannsynlig sen progresjon:</strong></p><ul>	<li>Helseattest kan deretter gis med anbefaling om førerett for inntil to år, før førerett kan gis med inntil fem års varighet av gangen.</li></ul><p><strong>Sykdommer med mulig rask progresjon:</strong></p><ul>	<li>Helseattest kan deretter gis med anbefaling om førerett for inntil ett år av gangen.</li></ul><h4>Førerkortgruppe 2 og 3</h4><p><strong>Sykdommer med sannsynlig sen progresjon:</strong></p><ul>	<li>Helsekrav oppfylt dersom nevrolog vurderer at det er tilfredsstillende fysisk og kognitiv funksjonsevne.</li>	<li>Helseattest kan deretter gis med anbefaling om førerett for inntil ett år av gangen.</li></ul><p><strong>Sykdommer med mulig rask progresjon:</strong></p><ul>	<li>Helsekrav ikke oppfylt.</li></ul><p style={{ marginLeft: '80px' }}><em>Førerkortforskriften Vedlegg 1 § 17 annet ledd nr. 7 og 8</em></p><p>​​​​​​​​​​​​​​</p>
              {/* Behandling */}
              {/**/}
              {/* Praktisk */}
              <div className="b-collapsible b-collapsible--small">
                <button className="b-collapsible__button b-collapsible__button--small" aria-expanded="false" aria-controls="null-praktisk">
                  <div>
                    <h2 className="b-collapsible__heading h3">Veiledning</h2>
                  </div>
                </button>
                <div id="null-praktisk" aria-hidden="true" className="b-collapsible__content" hidden><p>Det må i hvert tilfelle gjøres en medisinsk vurdering av om sykdommen kan progrediere raskt eller sent. Med "<strong>rask progresjon"</strong> menes at det kan oppstå forverring som kan utgjøre en trafikksikkerhetsrisiko i løpet av de kommende året. Der helsekravet vurderes å ikke være oppfylt i mer enn seks måneder inntrer&nbsp;<a href="https://www.helsedirektoratet.no/veiledere/forerkortveileder/dokumenter-forerkortveileder/Mal%202_Helsekrav%20ikke%20oppfylt_til%20fylkesmannen.doc">meldeplikten</a>. Med "<strong>sen progresjon"</strong> menes at det er sannsynlig at forverring/endringer vil skje over lengre tid. Det skal i begge tilfeller anbefales begrenset varighet i helseattesten. Et eksempel på en lidelse med rask progresjon kan være ALS, mens Parkinsons sykdom ofte vil ha sen progresjon.</p><p>Med "<strong>tilfredsstillende fysisk og kognitiv funksjon"</strong>&nbsp;menes at det ikke er fysiske eller kognitive svekkelser som kan gi økt trafikksikkerhetsrisiko.&nbsp;</p><h4>Når kan fastlegen utstede helseattest</h4><p>Nevrologens vurdering skal foreligge før fastlegen kan utstede helseattest. Fastlegen kan senere fornye helseattest etter avtale med nevrolog om nødvendig oppfølging.&nbsp;</p><h4>&nbsp;</h4><h4>&nbsp;</h4></div>
              </div>
              {/* Begrunnelse */}
              {/* Informasjon til pasienten */}
              <hr />
              <div className="l-mt-4">
                <p className="b-page-meta">
                  <span className="b-page-meta__text">Sist faglig oppdatert: 02. desember 2020
                </span>
                </p>
              </div>
              <div className="l-mt-2">
                <button className="b-button b-button--small b-button--clean" onclick="exportPdf('/veiledere/forerkortveileder/nevrologiske-sykdommer-16-17-helsekrav-til-forerkort/degenerative-nevrologiske-sykdommer/_/service/helsedirektoratet/getPdf', 'Degenerative nevrologiske sykdommer', 'https://www.helsedirektoratet.no/veiledere/forerkortveileder/nevrologiske-sykdommer-16-17-helsekrav-til-forerkort/degenerative-nevrologiske-sykdommer');">
                  <div className="b-link__icon" role="presentation" style={{ backgroundImage: 'url(/_/asset/helsedirektoratet:1623352280/css/icons/print.svg)' }} />
                  <span className="b-button__underline">Skriv ut / lag PDF</span>
                </button>
                <div className="b-collapsible b-collapsible b-collapsible--small normative_ref--wrapper" data-parent-id="referere">
                  <button className="b-collapsible__button b-collapsible__button--small b-button--clean normative_ref" aria-expanded="false" aria-controls="referere">
                    <span className="b-button__underline normative_ref--text">Slik refererer du til innholdet</span>
                  </button>
                  <div id="referere" className="normative_ref-box b-box-small l-mb-1" hidden aria-hidden="true">
                    <p>Helsedirektoratet (2020). Degenerative nevrologiske sykdommer [nettdokument]. Oslo: Helsedirektoratet (sist faglig oppdatert 02. desember 2020, lest 15. juni 2021). Tilgjengelig fra https://www.helsedirektoratet.no/veiledere/forerkortveileder/nevrologiske-sykdommer-16-17-helsekrav-til-forerkort/degenerative-nevrologiske-sykdommer</p>
                  </div>
                </div>
                <div className="b-collapsible b-collapsible b-collapsible--small normative_ref--wrapper" data-parent-id="apiUrl">
                  <button className="b-collapsible__button b-collapsible__button--small b-button--clean normative_ref" aria-expanded="false" aria-controls="apiUrl">
                    <span className="b-button__underline normative_ref--text">Åpne data (API)</span>
                  </button>
                  <div id="apiUrl" className="normative_ref-box b-box-small l-mb-1" hidden aria-hidden="true">
                    Få tilgang til innhold fra Helsedirektoratet som åpne data: <a href="https://utvikler.helsedirektoratet.no">https://utvikler.helsedirektoratet.no</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div className="l-mt-4">
      <Box square>
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

export default NinjaStateRecommendation;
