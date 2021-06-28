import React from 'react';
import Collapsible from '../components/Collapsible';
import ContentFooter from '../components/ContentFooter';
import Button from '../components/Button';
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
              
              <div className="l-mt-4">
                <div className="l-mt-4">
                  <PageMeta editDate="11. august 2018" />
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
                      Helsedirektoratet (2020).{' '}
                      <i>
                        Nasjonal faglig retningslinjer for helsestasjons- og
                        skolehelsetjenesten [nettdokument].
                    </i>{' '}
                    Oslo: Helsedirektoratet (sist faglig oppdatert 12. mars
                    2019, lest 12. august 2020). Tilgjengelig fra:
                    https://www.helsedirektoratet.no/retningslinjer/helsestasjons-og-skolehelsetjenesten.
                  </React.Fragment >
                  ]}
                />
                <ContentFooter
                  heading="Åpne data (API)"
                  id="contentFooter-2"
                  content={[
                    <React.Fragment key={'contentFooter-2'}>
                      Få tilgang til innhold fra Helsedirektoratet som åpne data:{' '}
                      <br />
                      <a href="https://utvikler.helsedirektoratet.no/">
                        https://utvikler.helsedirektoratet.no/
                    </a>
                      <br />
                      <br />
                      <span className="t--bold">
                        [Fulltittel på innholdet]
                    </span>{' '}
                    er tilgjengelig i vårt API: https://xxxx
                  </React.Fragment >
                  ]}
                />
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
