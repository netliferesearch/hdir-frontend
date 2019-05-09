import React from 'react';
import PageMeta from '../components/PageMeta';
import Box from '../components/Box';
import NavList from '../components/NavList';
import Link from '../components/Link';

const LisSpeciality = () => (
  <>
    <div className="l-container l-mt-3">
      <main id="main">
        <h1>Barnekirurgi</h1>
        <div className="l-mt-2">
          <NavList
            list={[
              { title: 'Læringsmål', url: '#' },
              { title: 'Læringsaktivitetet', url: '#' },
              { title: 'Andre ting', url: '#' }
            ]}
          />
        </div>
      </main>
      <div className="l-mt-3">
        <PageMeta
          publishDate="11. august 2008"
          editDate="11. august 2018"
          url="#a"
        />
      </div>
      <div className="l-mt-3 l-mb-5">
        <Link href="#a" small icon="../icons/method.svg">
          Om metode og prosess
        </Link>
        <div className="hide-on-print">
          <br />
          <Link href="#a" small icon="../icons/print.svg">
            Skriv ut hele retningslinjen
          </Link>
        </div>
      </div>
    </div>

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
  </>
);

export default LisSpeciality;
