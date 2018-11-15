import React from 'react';

import Link from '../components/Link';
import Card from '../components/Card';
import Collapsible from '../components/Collapsible';

const AuthorizationFrontPage = () => (
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
        <div className="l-mt-4 col-xs-12">
          <article className="t-body-text">
            <p>
              For å kunne jobbe som helsepersonell i Norge trenger du
              autorisasjon og/eller lisens fra Helsedirektoratet.
            </p>
            <p>
              <Link href="#" arrow>
                In English: How to apply for authorisation or license
              </Link>
            </p>
            <p>
              <Collapsible
                heading="Jeg som er over 80 år skal søke autorisasjon"
                size="small"
              >
                There should be some content in here.
              </Collapsible>
            </p>
            <h2>Veiviser: søk om autorisasjon og lisens</h2>
            <p>
              Ved å bruke veiviseren får du:
              <ul>
                <li>Riktig dokumentasjonskrav</li>
                <li>Riktig søknadsskjema på Altinn</li>
                <li>Saksbehandlingstid og gebyr</li>
              </ul>
            </p>
            <br />
            <Link href="#" button>
              Start veiviseren
            </Link>
            <br />
            <p>
              <Collapsible heading="Jeg har søkt – hva skjer nå?" size="small">
                This is some other content, and it includes{' '}
                <a href="#">a link</a>
              </Collapsible>
            </p>
            <p>
              <Collapsible
                heading="Jeg har fått svar – hva gjør jeg nå?"
                size="small"
              >
                This is some other content, remember, it can be HTML.
              </Collapsible>
            </p>
          </article>
        </div>
      </div>
      <div className="row l-mt-2">
        <div className="col-xs-12 col-md-4 l-mt-2">
          <Card
            heading="Innmeldingsliste –for læresteder og fylkeskommuner"
            url="#"
          />
        </div>
        <div className="col-xs-12 col-md-4 l-mt-2">
          <Card heading="Finn HPR-nummer i Helsepersonellregisteret" url="#" />
        </div>
        <div className="col-xs-12 col-md-4 l-mt-2">
          <Card heading="Vurderer du å studere helsefag i utlandet?" url="#" />
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

export default AuthorizationFrontPage;
