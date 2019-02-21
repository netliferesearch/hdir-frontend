import React from 'react';
import LinkList from '../components/LinkList';
import Link from '../components/Link';
import InputSearch from '../components/InputSearch';
import Card from '../components/Card';

const FrontPageHdir = () => (
  <>
    <div className="b-background b-background--hdir" />
    <div className="l-container">
      <div className="l-mt-3 l-mb-5">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            <p>
              <strong>Hva leter du etter?</strong>
            </p>
            <InputSearch id="xx" />
          </div>
        </div>
      </div>
    </div>

    <div className="l-container">
      <div className="l-mt-5">
        <Link href="#a" wideButton color="shadow" arrow>
          <strong>Nasjonale anbefalinger, råd og pakkeforløp</strong>
          <div className="l-mt-1 l-mb-1">
            <hr className="b-hr" />
          </div>
          Nasjonale faglise retningslinjer, pakkeforløp, veiledere til lov og
          forskrift, faglige råd
        </Link>
      </div>
    </div>

    <div className="l-container l-mt-4">
      <div className="row">
        <div className="col-xs col-md-10 col-md-offset-1">
          <LinkList
            list={[
              {
                href: '#a',
                text: 'Sykdom, tilstand og behandling',
                image: './icons/SykdomTilstandBehandling.svg',
                imageAlt: 'image alt text'
              },
              {
                href: '#a',
                text: 'Autorisasjon og spesialistutdanning',
                image: './icons/Autorisasjon.svg',
                imageAlt: 'image alt text'
              },
              {
                href: '#a',
                text: 'Psykisk helse',
                image: './icons/PsykiskHelse.svg',
                imageAlt: 'image alt text'
              },
              {
                href: '#a',
                text: 'Tilskudd og finansiering',
                image: './icons/Tilskudd.svg',
                imageAlt: 'image alt text'
              },
              {
                href: '#a',
                text: 'Folkehelse, ernæring og fysisk aktivitet',
                image: './icons/FolkehelseErnæring.svg',
                imageAlt: 'image alt text'
              },
              {
                href: '#a',
                text: 'Statistikk, registre og rapporter',
                image: './icons/Statistikk.svg',
                imageAlt: 'image alt text'
              },
              {
                href: '#a',
                text: 'Lover og forskrifter',
                image: './icons/Rundskriv_Veileder_til_lov.svg',
                imageAlt: 'image alt text'
              }
            ]}
          />
        </div>
      </div>
    </div>

    <div className="l-container">
      <div className="l-mt-5">
        <Link href="#a" wideButton color="purple" arrow>
          Henvis pasienten til helsenorge.no for mer informasjon
        </Link>
      </div>
    </div>

    <div className="l-container">
      <div className="row l-mt-5">
        <div className="col-xs-12 col-md-10 col-md-offset-1">
          <Link href="#" heading>
            <h2>
              Mange vil slutte å røyke eller snuse, men få bruker hjelpemidler
            </h2>
          </Link>
          <p>
            40 prosent av dem som røyker og 30 prosent av dem som snuser, har
            planer om å slutte i løpet av de neste seks månedene. Med
            hjelpemidler vil flere lykkes.
          </p>
          <p>
            <a href="#a">Se flere relaterte saker</a>
          </p>
        </div>
      </div>
      <div className="l-mt-4 l-mb-5">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            <Card
              url="#a"
              arrow="right"
              mainContent={
                <>
                  <h3>De minste tåler minst</h3>
                  <p>Hva skjer hvis antibiotika ikke lenger virker?</p>
                </>
              }
            >
              <img src="./antibiotika.png" alt="antibiotika" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default FrontPageHdir;
