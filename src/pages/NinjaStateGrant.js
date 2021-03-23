import React from 'react';
import Collapsible from '../components/Collapsible';
import ContentFooter from '../components/ContentFooter';
import Box from '../components/Box';
import PageMeta from '../components/PageMeta';

const NinjaStateGrant = () => (
  <>
    <div className="l-container l-mt-3">
      <main id="main" className="row l-mt-4">
        <article className="col-md-12 col-xs-12 col-md-offset-1 t-body-text">
          <p>Ninja state av tilskudd:</p>
          <br /><br />
          <div className="b-collapsible b-collapsible--active b-collapsible--clean">
            <div className="b-collapsible__code">AMM 017</div>
            <h2 className="b-collapsible__heading h2" id="sekundaer-peritonitt">
              <span className="js-copy-icon">#</span>
              <span className="js-copy-icon-text">Beredskap og beskyttelsestiltak ved CBRNE-medisin</span>
            </h2>
            <button className="b-collapsible__tag"><span>Læringsmål</span></button>
            <div className="b-collapsible__tag-content">Læringsmål beskriver hva en lege skal forstå, kunne og være i stand til å utføre og gjennomføre etter endt læringsprosess og spesialistutdanning. Læringsmålene er en del av spesialistforskriften.</div>
            <div className="b-collapsible__meta-date b-collapsible__meta-date--from-to">
              <div className="b-collapsible__meta-date-from">Gyldig fra: 23. oktober 2020</div>
              <div className="b-collapsible__meta-date-to">Gyldig til: 23. oktober 2020</div>
            </div>

              <p>
              Erstatter: LIS KLM-2<br />
              Erstatter. LIS KLM-3
                </p>
              <p>
              Ha god kunnskap om beredskap og beskyttelsestiltak ved CBRNE-medisin
              </p>

            <Collapsible
              h="h3"
              heading="Utdypende tekst"
              size="small"
            >
              lorem ipsum dolor sit amet.
            </Collapsible>
            <Collapsible
              h="h3"
              heading="Anbefalte læringsaktiviteter"
              size="small"
            >
              lorem ipsum dolor sit amet.
            </Collapsible>
            <Collapsible
              h="h3"
              heading="Anbefalte vurderingsformer"
              size="small"
            >
              lorem ipsum dolor sit amet.
            </Collapsible>

              <div className="l-mt-4">
                <hr className="b-hr b-hr--grey-light" />
                <div className="l-mt-1 b-secondary-logos">
                  <div className="b-secondary-logos__logolist">
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

            <div className="l-mt-4">
              <PageMeta
                editDate="11. august 2018"
                url="#a"
              />
            </div>

            <div className="l-mt-2">
              <ContentFooter
                heading="Slik refererer du [produkttype]"
                id="contentFooter-1"
                content={[
                  <>
                    Helsedirektoratet (2020).{' '}
                    <i>Anbefaling for sekundær peritonitt [nettdokument].</i>{' '}
                    Oslo: Helsedirektoratet (sist faglig oppdatert 12. mars
                    2019, lest 12. august 2020). Tilgjengelig fra:
                    https://www.helsedirektoratet.no/retningslinjer/antibiotika-i-sykehus/abdomen/sekundaer-peritonitt
                  </>
                ]}
              />
              <ContentFooter
                heading="Åpne data (API)"
                id="contentFooter-2"
                content={[
                  <>
                    Få tilgang til innhold fra Helsedirektoratet som åpne data:{' '}
                    <a href="https://utvikler.helsedirektoratet.no/">
                      https://utvikler.helsedirektoratet.no/
                    </a>
                    <br />
                    <br />
                    <span className="t--bold">
                      [Fulltittel på innholdet]
                    </span>{' '}
                    er tilgjengelig i vårt API: https://xxxx
                  </>
                ]}
              />
            </div>
          </div>
        </article>
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

export default NinjaStateGrant;
