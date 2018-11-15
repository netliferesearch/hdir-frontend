import React from 'react';

import Button from '../components/Button';
import Select from '../components/Select';

const AuthorizationStepPage = () => (
  <div>
    <div className="l-container">
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
      <div className="row">
        <div className="l-mt-2 col-xs-12">
          <h1>Autorisasjoner og lisens</h1>
          <hr className="b-hr b-hr--thick" />
        </div>
        <div className="l-mt-4 col-xs-12 col-md-8">
          <article className="t-body-text">
            <form action="">
              <Select
                label="Velg yrkesgruppe"
                placeholder="Velg"
                stacked
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
              <p>
                <Button>Neste</Button>
              </p>
            </form>
          </article>
        </div>
        <div className="col-xs-12 l-mt-4">
          <h2>Dine svar:</h2>
          <div className="row l-mt-1 l-mb-1">
            <div className="col-xs-6">Er du helseutdannet i Norge?</div>
            <div className="col-xs-3">Ja</div>
            <div className="col-xs-3 t-right">
              <a href="#">Endre svar</a>
            </div>
          </div>
          <hr className="b-hr b-hr--grey-light" />
        </div>
      </div>
    </div>
    <div className="l-mt-4">
      <div className="b-bleed">
        <div className="l-container">
          <div className="row">
            <div className="col-xs-12">
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
    </div>
  </div>
);

export default AuthorizationStepPage;
