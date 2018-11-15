import React from 'react';
import PageMeta from '../components/PageMeta';
import Box from '../components/Box';
import NavList from '../components/NavList';
import Link from '../components/Link';

const LisSpeciality = () => (
  <div className="l-container l-mt-3">
    <h1 className="b-main-header">Barnekirurgi</h1>

    <hr className="b-hr b-hr--thick b-hr--black" />

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
      <PageMeta publishDate="11.08.2008" editDate="11.08.2018" url="#" />
    </div>
    <div className="l-mt-4">
      <Link href="#" small icon="./icons/method.svg">
        Om metode og prosess
      </Link>
      <br />
      <Link href="#" small icon="./icons/print.svg">
        Skriv ut hele retningslinjen
      </Link>
    </div>
    <div className="l-mt-4">
      <Box color="green" square>
        <strong>Kontakt:</strong>
        <br />
        <a href="#">spesialisthelsetjenester@helsedir.no</a>
        <br />
        <a href="#">navn.etternavn@helsedir.no</a>
        <br />
        <a href="#">999 99 999</a>
      </Box>
    </div>
  </div>
);

export default LisSpeciality;
