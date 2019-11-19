import React from 'react';
import { storiesOf } from '@storybook/react';
import Wrapper from './components/Wrapper.js'

storiesOf('Velkommen', module)
  .add('Kom i gang', () => (
    <Wrapper title="Kom i gang" lead="HDIR og HELFO: Digital designmanual">
    <>
      <p>Formålet med denne digitale designmanualen er å dokumentere alle delene av nettsidene, i form av komponenter. </p>
      <p>En komponent er en bestanddel av en større helhet. En nettside er bygd opp av mange deler, som bokser, titler, bilder, lister osv. Disse er komponentene nettsiden består av. I designsystemet må vi fokusere både på komponentene og helheten.</p>
      <p>Under malverk er komponentene satt sammen til helhetlige sidemaler. Her kommer konteksten bedre frem, og ved endringer kan vi lettere vurdere om det er komponenten i seg selv vi må endre på, eller hvordan den settes sammen med andre, når vi kan se den i kontekst.</p>
      <p>I tillegg er det grunnstiler samt bilder og ikoner, som er mer grunnleggende forutsetninger for hvordan ting skal se ut. Farger, fonter, visuell stil.</p>
      <h2>Developer?</h2>
      <p>Check out <a href="https://github.com/netliferesearch/hdir-frontend">the repo</a> and its readme for technical details.</p>
    </>
    </Wrapper>
  ));
  
