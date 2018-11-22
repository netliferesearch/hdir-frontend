import React from 'react';

import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import ArticleIntro from '../components/ArticleIntro';
import Card from '../components/Card';
import Box from '../components/Box';
import Alert from '../components/Alert';

const HdirTema = () => (
  <div>
    <div className="l-container">
      <div className="l-mt-2">
        <ArticleIntro
          heading="Spesialistutdanning for leger"
          lead="Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse."
        />
      </div>
    </div>
    <div className="l-mt-4">
      <Box color="green" square noPadding>
        <div className="l-container">
          <strong>Kontakt:</strong>
          <br />
          <a href="#">spesialisthelsetjenester@helsedir.no</a>
          <br />
          <a href="#">navn.etternavn@helsedir.no</a>
          <br />
          <a href="#">999 99 999</a>
        </div>
      </Box>
    </div>
  </div>
);

export default HdirTema;
