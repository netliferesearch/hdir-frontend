import React from 'react';
import Collapsible from '../components/Collapsible';
import Link from '../components/Link';
import Box from '../components/Box';

const RecommendationPageAntibiotics = () => (
  <>
    <div className="l-container l-mt-3">
      <main id="main">
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
            >
            <h4>Standard behandlingregime</h4>
            <p>Vanlig behandlingsvarighet: 5 dager</p>
            <p>Ampicillin iv 1,2 g x 4 iv<br />
             + Gentamicin 5 mg/kg x 1 iv  <br />
            + Metronidazol 1g x 1 iv</p>
              <Collapsible
                h="h5"
                heading="Kontraindikasjoner"
                size="tiny"
              >
                <Box
                color="grey" square tinyPadding>
                  <h4>Penicillinallergi</h4>
                  <p>Ampicillin</p>
                  <p>Skal ikke gis til pasienter med penicillinallergi</p>
                  
                  <h4>Gentamicin</h4>
                  <p>Aminoglykosider bør unngås i andre og tredje trimester</p>
                  
                  <h4>Metronidazol</h4>
                  <p>Tilbakeholden med bruk av høye doser i første trimester</p>
                  
                </Box>
              </Collapsible>
              <Collapsible
                h="h5"
                heading="Doseringer for spesielle hensyn"
                size="tiny"
              >
              <p>
              <strong>Ved overvekt</strong><br />
              Ampicillin<br />
              TBW > 100: 2g x 4
              </p>
              <p>
              <strong>Ved redusert nyrefunksjon</strong><br />
              Ampicillin<br />
              GFR 20-10: 0.25 -2 g x 4 <br />
              GFR &lt; 10: 0.25-1 g x 4
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
                heading="Behandling ved redusert leverfunksjon"
                size="small"
              >
                <p>tekst</p>
              </Collapsible>
              <Collapsible
                h="h5"
                heading="Behandling ved penicillin straksallergi"
                size="small"
              >
                <p>tekst</p>
              </Collapsible>
              <Collapsible
                h="h5"
                heading="Behandling ved pencillin ikke straksallergi"
                size="small"
              >
                <p>tekst</p>
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
          >
            <p>Antibiotikabehandling erstatter ikke kirurgi (drenasje av abscess, revisjon ved anastomoselekkasje)</p>
            <Collapsible
              h="h3"
              heading="Behandling"
              size="small"
            >
            <h4>Standard behandlingregime</h4>
            <p>Vanlig behandlingsvarighet: 5 dager</p>
            <p>Ampicillin iv 1,2 g x 4 iv<br />
             + Gentamicin 5 mg/kg x 1 iv  <br />
            + Metronidazol 1g x 1 iv</p>
              <Collapsible
                h="h5"
                heading="Kontraindikasjoner"
              >
              Penicillinallergi
              </Collapsible>
            </Collapsible>
            
          </Collapsible>
      </main>
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
  </>
);

export default RecommendationPageAntibiotics;
