import React from 'react';
import ArticleIntro from '../components/ArticleIntro';
import Link from '../components/Link';
import Box from '../components/Box';
import Collapsible from '../components/Collapsible';
import SectionSidebar from '../components/SectionSidebar';
import Alert from '../components/Alert';

const HearingPage = () => (
  <div>
    <div className="l-container l-mt-3">
      <ArticleIntro
        heading="Arbeid og psykisk helse"
        lead="Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse."
      />
      <p className="t--grey t--small">05. desember 2018 - 06 desember 2018</p>
      <p className="t--grey t--small">
        <strong>Sted:</strong> Helsedirektoratets lokaler i Vitaminveien 4 på
        Storo i Oslo
      </p>
      <Alert title="Obs" status="success" small inline>
        Påmeldingsfrist 02. desember
      </Alert>
      <div className="row l-mt-4">
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <SectionSidebar heading="Innhold på denne siden" />
        </aside>
        <div className="col-md-7 col-md-offset-1">
          <div className="t-body-text">
            <h2>Høringsbrev</h2>
            <p>
              Nasjonal faglig retningslinje for svangerskapsdiabetes vil
              erstatte kapitlene 12.3–12.5 i IS-1674: «Nasjonal faglig
              retningslinje for forebygging, diagnostikk og behandling av
              diabetes» fra 2009 og foreligger kun i digitalt format.
            </p>
            <p>Omfang, avgrensning og målgrupper</p>
            <p>
              Bakgrunnen for revisjon av kapitlet om svangerskapsdiabetes
              skyldes…
            </p>
            <h2>Høringsutkast</h2>
            <p>
              <strong>Les utkast: </strong>
              <a href="#a">
                Nasjonal faglig retningslinje for svangerskapsdiabetes (høring)
              </a>
            </p>
            <h2>Høringsinnspill</h2>
            <p>
              Høringsinstansene bes om å gi tilbakemeldinger på det faglige
              innholdet. Det ønskes også tilbakemelding på om anbefalingene er:
            </p>
            <ul>
              <li>Tydelig</li>
              <li>Om det er mangler</li>
              <li>Om de kan mistolkes</li>
              <li>
                Vi ber om at dere utdyper og kommer med konkrete forslag til
                tydeliggjøring dersom dere ser at det er behov for det. Andre
                kommentarer kan fylles inn under «generelle kommentarer».
              </li>
            </ul>
            <p>
              tydelig om det er mangler om de kan mistolkes Vi ber om at dere
              utdyper og kommer med konkrete forslag til tydeliggjøring dersom
              dere ser at det er behov for det. Andre kommentarer kan fylles inn
              under «generelle kommentarer». Vennligst benytt mal for eksterne
              høringsinnspill (DOCX) / mal for eksterne høringsinnspill (DOC).
              Høringsinnspill sendes til <a href="#a">postmottak@helsedir.no</a>{' '}
              med referanse «16/34843».
            </p>
          </div>
          <div className="l-mt-3">
            <Collapsible heading="Høringsinstanser">
              <p>
                Nasjonal faglig retningslinje for svangerskapsdiabetes vil
                erstatte kapitlene 12.3–12.5 i IS-1674: «Nasjonal faglig
                retningslinje for forebygging, diagnostikk og behandling av
                diabetes» fra 2009 og foreligger kun i digitalt format.
              </p>
            </Collapsible>
          </div>
          <div className="l-mt-4">
            <Link href="#a" small icon="../icons/print.svg">
              Print
            </Link>
            <br />
            <Link href="#a" small icon="../icons/pdf.svg">
              Lag PDF
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="l-mt-4">
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
    </div>
  </div>
);

export default HearingPage;
