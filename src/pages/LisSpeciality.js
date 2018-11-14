import React from 'react';
import ArticleIntro from '../components/ArticleIntro';
import PageMeta from '../components/PageMeta';
import Collapsible from '../components/Collapsible';
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
      <div className="b-bleed">
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
);

export default LisSpeciality;
