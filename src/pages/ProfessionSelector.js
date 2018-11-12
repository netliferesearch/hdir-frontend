import React from 'react';

import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import ArticleIntro from '../components/ArticleIntro';
import SelectInline from '../components/SelectInline';
import '../../src/static/Helfo.css';

const ProfessionSelector = () => (
  <div className="l-container">
    <div className="row middle-md">
      <div className="col-xs-12 col-md-6">
        <nav className="b-breadcrumbs">
          <a href="#" className="b-breadcrumbs__link">
            Lorum
          </a>
          <a href="#" className="b-breadcrumbs__link">
            Ipsum
          </a>
          <a href="#" className="b-breadcrumbs__link">
            Dolor
          </a>
        </nav>
      </div>
      <div className="col-xs-12 col-md-6">
        <SelectInline
          label="Tilpass siden til meg"
          placeholder="Velg"
          options={[
            'Apotek ',
            'Bandasjist',
            'Fritt behandlingsvalg',
            'Fysioterapeut',
            'Jordmor og helsestasjon',
            'Kiropraktor',
            'Kommuner og fylkeskommuner',
            'Kurssentra og andre senter',
            'Laboratorier og røntgen',
            'Lege',
            'Leverandører',
            'Logoped og audiopedagog',
            'Ortoptist',
            'Private virksomheter',
            'Psykolog',
            'Sykehus og poliklinikk',
            'Tannlege',
            'Tannpleier',
            'Hjelpepersonell på legekontor'
          ]}
        />
      </div>
    </div>

    <div className="l-mt-2">
      <ArticleIntro
        heading="Inngå eller endre avtale"
        lead="Når du har avtale bla bla bla  bla bla bla bla bla bla. bla bla bla bla bla bla bla bla bla bla bla bla"
      />
    </div>
    <div className="row l-mt-4">
      <aside className="col-md-3 col-xs-12 l-mb-4">
        <NavList
          anchor
          sticky
          className="l-sticky"
          heading="Innhold på denne siden"
          list={[
            { title: 'Refusjon', url: '#', active: 'true' },
            { title: 'Utbetaling og vedtak', url: '#' },
            { title: 'Kan kravet bli avvist?', url: '#' },
            { title: 'Statistikk', url: '#' },
            { title: 'Alt om refusjon og oppgjør', url: '#' }
          ]}
        />
      </aside>
      <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
        <h2>Artikkel</h2>
        <p>Tekst i artikkel.</p>

        <div className="l-mt-4">
          <PageMeta publishDate="11.08.2008" editDate="11.08.2018" />
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
      </article>
    </div>
  </div>
);

export default ProfessionSelector;
