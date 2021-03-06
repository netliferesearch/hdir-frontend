import React from 'react';
import RadioButtonGroup from '../components/RadioButtonGroup';
import Button from '../components/Button';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';

const AuthorizationStepPage2 = () => (
  <>
    <div className="l-container">
      <Breadcrumbs
        paths={[
          {
            name: 'Forsiden',
            href: '#a'
          },
          {
            name: 'Konferanse',
            href: '#a'
          },
          {
            name: 'Arbeid og psykisk helse',
            href: '#a'
          }
        ]}
      />
      <main id="main">
        <div className="row">
          <div className="l-mt-3 col-xs-12">
            <h1>Autorisasjoner og lisens</h1>
          </div>
          <div className="l-mt-2 col-xs-12 col-md-8">
            <article className="t-body-text">
              <h2>Hvem er du?</h2>
              <form action="">
                <p>
                  Her kan det stå en liten ingress for spørsmålet. Her kan det
                  stå en liten ingress for spørsmålet. Her kan det stå en liten
                  ingress for spørsmålet.
                </p>
                <RadioButtonGroup
                  heading="This is a heading"
                  name="someName"
                  options={[
                    {
                      value: '1a',
                      label: 'Søker selv',
                      disabled: false
                    },
                    {
                      value: '1b',
                      label: 'Utdanningsinstitusjon',
                      disabled: false
                    },
                    {
                      value: '2a',
                      label: 'Denne er disablet',
                      disabled: true
                    },
                    {
                      value: '2b',
                      label: 'Fylkesmann',
                      disabled: false
                    }
                  ]}
                />
                <p>
                  <Button>Neste</Button>
                </p>
              </form>
            </article>
          </div>
          <div className="col-xs-12 l-mt-3 l-mb-5">
            <h2>Dine svar:</h2>
            <div className="row l-mt-1 l-mb-1">
              <div className="col-xs-6">Er du helseutdannet i Norge?</div>
              <div className="col-xs-3">Ja</div>
              <div className="col-xs-3 t-right">
                <a href="#a">Endre svar</a>
              </div>
            </div>
            <hr className="b-hr b-hr--grey-light" />
            <div className="row l-mt-1 l-mb-1">
              <div className="col-xs-6">Er du helseutdannet i Norge?</div>
              <div className="col-xs-3">Ja</div>
              <div className="col-xs-3 t-right">
                <a href="#a">Endre svar</a>
              </div>
            </div>
            <hr className="b-hr b-hr--grey-light" />
          </div>
        </div>
      </main>
    </div>
    <Box color="grey" square>
      <div className="l-container">
        <div className="row">
          <div className="col-xs-12">
            <strong>Kontakt:</strong>
            <br />
            <a href="#a">spesialisthelsetjenester@helsedir.no</a>
            <br />
            <a href="#a">navn.etternavn@helsedir.no</a>
            <br />
            <a href="#a">999 99 999</a>
          </div>
        </div>
      </div>
    </Box>
  </>
);

export default AuthorizationStepPage2;
