import React from 'react';
import Collapsible from '../components/Collapsible';
import Link from '../components/Link';
import Box from '../components/Box';
import IconWithText from '../components/IconWithText';
import SectionSidebar from '../components/SectionSidebar';

const RecommendationPageAntibiotics = () => (
  <>
    <div className="l-container l-mt-3">
      <main id="main" className="row l-mt-4">
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <SectionSidebar heading="Innhold på denne siden" />
        </aside>
        <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
          <p>Klikk på behandling og Kontraindikasjoner for eksempelinnhold.</p>
          <br /><br />
            <Collapsible
              background
              collapsed
              heading="Sekundær peritonitt"
            >
              <Collapsible
                heading="Sterk anbefaling"
                subtle
                size="small"
                smallContent
              >
                <p>...Hva er en sterk anbefaling...</p>
              </Collapsible>
              <p>Antibiotikabehandling erstatter ikke kirurgi (drenasje av abscess, revisjon ved anastomoselekkasje)</p>
              <Collapsible
                h="h3"
                heading="Behandling"
                size="small"
                collapsed
              >
              <p>Minimum behandlingstid ved ukomplisert forløp (inkludert oral behandling): 5 døgn</p>
              <p>Ampicillin iv 1,2 g x 4 iv<br />
               + Gentamicin 5 mg/kg x 1 iv  <br />
              + Metronidazol 1g x 1 iv</p>
                <Collapsible
                  h="h5"
                  heading="Kontraindikasjoner"
                  size="tiny"
                >
                  <Box
                  color="transparent" square noPadding>
                    <p>
                      <IconWithText text="Penicillinallergi" size="clean" icon="../icons/warning_high.svg" />
                      Ampicillin <br />
                      Skal ikke gis til pasienter med penicillinallergi
                    </p>
                    
                    <p>
                      <IconWithText text="Graviditet" size="clean" icon="../icons/warning_high.svg" />
                      Gentamicin: <br />
                      Aminoglykosider bør unngås i andre og tredje trimester. <a href="#">Les mer.</a><br />
                      Metronidazol:<br />
                      Tilbakeholden med bruk av høye doser i første trimester. <a href="#">Les mer.</a>
                    </p>
                    
                    <p>
                      <IconWithText text="Ammende" size="clean" icon="../icons/warning_high.svg" />
                      Metronidazol<br />
                      Overgang til morsmelk er moderat til høy. Andre midler bør benyttes om det finnes alternativer.
                    </p>
                    
                  </Box>
                </Collapsible>
                <Collapsible
                  h="h5"
                  heading="Dosering ved overvekt"
                  size="tiny"
                >
                <p>
                Ampicillin<br />
                TBW > 100: 2g x 4
                </p>
                </Collapsible>
                <Collapsible
                  h="h5"
                  heading="Overgang til oral behandling"
                  size="tiny"
                >
                  <p>Vanlig behandlingsvarighet: 5-7 dager etter iv behandling</p>
                  <p>
                  Ciprofloksacin 500 mg x 2 oral  
                  <br />+ metronidazol 400 mg x 3 oral 
                  </p>
                </Collapsible>
                <h4>Alternative behandlingsregimer </h4>
                <Collapsible
                  h="h5"
                  heading="Behandling ved redusert nyrefunksjon"
                  size="small"
                  >
                  <p>tekst</p>
                </Collapsible>
                <Collapsible
                  h="h5"
                  heading="Behandling ved redusert leverfunksjon"
                  size="small"
                >
                  <p>tekst</p>
                </Collapsible>
                <Collapsible
                  h="h5"
                  heading="Behandling ved pencillin ikke straksallergi"
                  size="small"
                >
                  <p>Minimum behandlingstid ved ukomplisert forløp (inkludert oral behandling): 5 døgn</p>
                  <p>Klindamycin 600x3 iv <br />
                   + Gentamicin 5mg/kgx1 iv  <br />
                  + Metronidazol 1x1 iv</p>
                  <Collapsible
                    h="h5"
                    heading="Kontraindikasjoner"
                    size="tiny"
                  >
                  <p>tekst</p>
                  </Collapsible>
                </Collapsible>
              </Collapsible>
              <Collapsible
                h="h3"
                heading="Praktisk - Slik kan anbefalingen følges"
                size="small"
              >
              </Collapsible>
              <Collapsible
                h="h3"
                heading="Begrunnelse - dette er anbefalingen basert på"
                size="small"
              >
              </Collapsible>
            </Collapsible>
            
            <Collapsible
              heading="Sekundær peritonitt"
              background
            >
              <p>Antibiotikabehandling erstatter ikke kirurgi (drenasje av abscess, revisjon ved anastomoselekkasje)</p>
              <Collapsible
                h="h3"
                heading="Behandling"
                size="small"
                collapsed
              >
              <p>Vanlig behandlingsvarighet: 5 dager</p>
              <p>Ampicillin iv 1,2 g x 4 iv<br />
               + Gentamicin 5 mg/kg x 1 iv  <br />
              + Metronidazol 1g x 1 iv</p>
                <Collapsible
                  h="h3"
                  heading="Kontraindikasjoner"
                  size="tiny"
                >
                Penicillinallergi
                </Collapsible>
              </Collapsible>
              
            </Collapsible>
          </article>
      </main>
    </div>
    <div className="l-mt-4">
      <Box color="transparent" square noPadding>
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

export default RecommendationPageAntibiotics;
