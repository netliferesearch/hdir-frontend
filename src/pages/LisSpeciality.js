import React from 'react';
import PageMeta from '../components/PageMeta';
import Box from '../components/Box';
import NavList from '../components/NavList';
import Link from '../components/Link';

const LisSpeciality = () => (
  <div>
    <div className="l-container l-mt-3">
      <h1>Barnekirurgi</h1>

      <div className="row l-mt-2">
        <div className="col-md-12">
          <NavList
            list={[
              { title: 'Læringsmål', url: '#' },
              { title: 'Læringsaktivitetet', url: '#' },
              { title: 'Andre ting', url: '#' }
            ]}
          />
        </div>
      </div>
      <div className="l-mt-4">
        <PageMeta publishDate="11.08.2008" editDate="11.08.2018" url="#a" />
      </div>
      <div className="l-mt-4">
        <Link href="#a" small icon="../icons/method.svg">
          Om metode og prosess
        </Link>
        <br />
        <Link href="#a" small icon="../icons/print.svg">
          Skriv ut hele retningslinjen
        </Link>
      </div>
    </div>
    <div className="l-mt-4">
      <Box color="green" square noPadding>
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

export default LisSpeciality;
