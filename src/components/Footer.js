import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="b-footer">
    <div className="row">
      <div className="col-lg-3 col-xs-12">
        <div className="">
          <a href="#a" className="b-footer__link">
            Kontakt oss
          </a>
          <p className="b-footer__text">
            Helsedirektoratet
            <br />
            Besøk:
            <br />
            Vitaminveien 4
            <br />
            0483 Oslo
          </p>
        </div>
      </div>

      <div className="col-lg-7 col-sm-8 col-xs-12">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <a href="#a" className="b-footer__link">
              Om oss
            </a>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <a href="#a" className="b-footer__link">
              Kontakt oss
            </a>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <a href="#a" className="b-footer__link">
              Nyhetsbrev
            </a>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <a href="#a" className="b-footer__link">
              Presse
            </a>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <a href="#a" className="b-footer__link">
              Ledige stillinger
            </a>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <a href="#a" className="b-footer__link">
              Personvern
            </a>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <a href="#a" className="b-footer__link">
              Personvern
            </a>
          </div>
        </div>
      </div>

      <div className="col-lg-2 col-sm-4 col-xs-12">
        <div>
          <a href="/" className="b-footer__link">
            Facebook
          </a>
        </div>
        <div>
          <a href="/" className="b-footer__link">
            Twitter
          </a>
        </div>
        <div>
          <a href="/" className="b-footer__link">
            YouTube
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
