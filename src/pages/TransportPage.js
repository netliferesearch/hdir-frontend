import React from 'react';
import NavList from '../components/NavList';
import LinkList from '../components/LinkList';

const TransportPage = () => (
  <>
    <div className="l-container">
      <div className="l-mt-4">
        <h1 className="t-sm-center h2 h2--bold">
          Autorisasjon og spesiallistutdanning
        </h1>
      </div>
    </div>

    <div className="l-container l-mt-3">
      <div className="row">
        <div className="col-xs-12">
          <NavList
            columns
            list={[
              {
                url: '#a',
                title: 'Undertema 1'
              },
              {
                url: '#a',
                title: 'Undertema 2'
              },
              {
                url: '#a',
                title: 'Undertema 3'
              },
              {
                url: '#a',
                title: 'Undertema 4'
              },
              {
                url: '#a',
                title: 'Undertema 5'
              },
              {
                url: '#a',
                title: 'Undertema 6'
              },
              {
                url: '#a',
                title: 'Undertema 7'
              }
            ]}
          />
        </div>
      </div>
    </div>

    <div className="l-mt-5">
      <h1 className="t-sm-center h2">Alle temasider</h1>
    </div>

    <div className="l-container l-mt-4 l-mb-5">
      <div className="row">
        <div className="col-xs col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
          <LinkList
            list={[
              {
                href: '#a',
                text: 'Sykdom, tilstand og behandling',
                image: 'http://placehold.it/64x64',
                imageAlt: 'image alt text'
              },
              {
                href: '#a',
                text: 'Autorisasjon og spesialistutdanning',
                image: 'http://placehold.it/64x64',
                imageAlt: 'image alt text',
                active: true
              },
              {
                href: '#a',
                text: 'Psykisk helse',
                image: 'http://placehold.it/64x64',
                imageAlt: 'image alt text'
              },
              {
                href: '#a',
                text: 'Tilskudd og finansiering',
                image: 'http://placehold.it/64x64',
                imageAlt: 'image alt text'
              },
              {
                href: '#a',
                text: 'Folkehelse, ernæring og fysisk aktivitet',
                image: 'http://placehold.it/64x64',
                imageAlt: 'image alt text'
              },
              {
                href: '#a',
                text: 'Statistikk, registre og rapporter',
                image: 'http://placehold.it/64x64',
                imageAlt: 'image alt text'
              },
              {
                href: '#a',
                text: 'Lover og forskrifter',
                image: 'http://placehold.it/64x64',
                imageAlt: 'image alt text'
              }
            ]}
          />
        </div>
      </div>
    </div>
  </>
);

export default TransportPage;
