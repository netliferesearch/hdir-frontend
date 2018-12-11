import React from 'react';

const Footer = () => (
  <footer className="b-footer">
    <div className="row">
      <div className="col-md-5 col-xs-12 l-mb-2">
        <nav className="b-footer__link-matrix">
          <div className="b-footer__matrix-item">
            <a href="#a" className="b-footer__link">
              Om oss
            </a>
          </div>
          <div className="b-footer__matrix-item">
            <a href="#a" className="b-footer__link">
              Presse
            </a>
          </div>
          <div className="b-footer__matrix-item">
            <a href="#a" className="b-footer__link">
              Kontakt oss
            </a>
          </div>
          <div className="b-footer__matrix-item">
            <a href="#a" className="b-footer__link">
              Ledige stillinger
            </a>
          </div>
        </nav>
      </div>
      <div className="col-md-3 col-xs-12 l-mb-2">
        <div className="b-footer__text">
          Helsedirektoratet
          <br />
          Besøk:
          <br />
          Vitaminveien 4
          <br />
          0483 Oslo
        </div>
      </div>
      <div className="col-md-4 col-xs-12">
        <div className="row">
          <div className="col-md-6 col-xs-12 l-mb-2">
            <nav className="b-footer__link-list">
              <a href="#a" className="b-footer__link">
                Nyhetsbrev
              </a>
              <br />
              <a href="#a" className="b-footer__link">
                Personvern
              </a>
            </nav>
          </div>
          <div className="col-md-6 col-xs-12 l-mb-2">
            <nav className="b-footer__link-list">
              <a href="#a" className="b-footer__link">
                Facebook
              </a>
              <br />
              <a href="#a" className="b-footer__link">
                Twitter
              </a>
              <br />
              <a href="#a" className="b-footer__link">
                YouTube
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
