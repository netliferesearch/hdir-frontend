import React from 'react';
import ArticleIntro from '../components/ArticleIntro';
import PageMeta from '../components/PageMeta';
import Collapsible from '../components/Collapsible';

const RecommendationPage = () => (
  <div className="l-container l-mt-3">
    <h1>
      Kvinner med svangerskapsdiabetes bør få kostråd og rådgivning basert på
      kostanamnese ved behandling av svangerskapsdiabetes
    </h1>
    <div className="row">
      <div className="col-md-9">
        <div className="l-mt-4 t-body-text">
          <h2>Høringsbrev</h2>
          <p>
            Nasjonal faglig retningslinje for svangerskapsdiabetes vil erstatte
            kapitlene 12.3–12.5 i IS-1674: «Nasjonal faglig retningslinje for
            forebygging, diagnostikk og behandling av diabetes» fra 2009 og
            foreligger kun i digitalt format.
          </p>
          <p>Omfang, avgrensning og målgrupper</p>
          <p>
            Bakgrunnen for revisjon av kapitlet om svangerskapsdiabetes skyldes…
          </p>
          <h2>Høringsbrev</h2>
          <p>
            <strong>Les utkast: </strong>
            <a href="#">
              Nasjonal faglig retningslinje for svangerskapsdiabetes (høring)
            </a>
          </p>
          <h2>Høringsinnspill</h2>
          <p>
            Høringsinstansene bes om å gi tilbakemeldinger på det faglige
            innholdet. Det ønskes også tilbakemelding på om anbefalingene er:
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
            tydelig om det er mangler om de kan mistolkes Vi ber om at dere
            utdyper og kommer med konkrete forslag til tydeliggjøring dersom
            dere ser at det er behov for det. Andre kommentarer kan fylles inn
            under «generelle kommentarer». Vennligst benytt mal for eksterne
            høringsinnspill (DOCX) / mal for eksterne høringsinnspill (DOC).
            Høringsinnspill sendes til <a href="#">postmottak@helsedir.no</a>{' '}
            med referanse «16/34843».
          </p>
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
        </div>
        <div className="l-mt-4">
          <PageMeta publishDate="11.08.2008" editDate="11.08.2018" />
        </div>
        <div className="b-bleed l-mt-4">
          <strong>Kontakt:</strong>
          <br />
          <a href="#" className="b-bleed__link">
            spesialisthelsetjenester@helsedir.no
          </a>
          <br />
          <a href="#" className="b-bleed__link">
            navn.etternavn@helsedir.no
          </a>
          <br />
          <a href="#" className="b-bleed__link">
            999 99 999
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default RecommendationPage;
