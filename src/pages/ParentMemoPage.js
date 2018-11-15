import React from 'react';

import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import Link from '../components/Link';
import ChapterHeading from '../components/ChapterHeading';
import Box from '../components/Box';

const MemoChapterPage = () => (
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
      <ChapterHeading
        heading="Særskilte regler i tilknytning til autorisasjon, krav om politattest m.v."
        subheading="KAPITTEL 1"
        line="none"
        h="h1"
      />
      <div className="row l-mt-4">
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <NavList
            anchor
            sticky
            small
            className="l-sticky"
            heading="Innhold på denne siden"
            list={[
              {
                title: 'Kapittel 1. Lovens formål, virkeområde og definisjoner',
                url: '#'
              },
              {
                title: 'Kapittel 2. Krav til helsepersonells yrkesutøvelse',
                url: '#'
              },
              {
                title: 'Kapittel 3. Krav til organisering og virksomhet',
                url: '#'
              }
            ]}
          />
        </aside>
        <article className="col-md-8 col-xs-12 col-md-offset-1">
          <div className="l-mb-4">
            <ChapterHeading
              heading="Lovens formål, virkeområde og definasjoner"
              subheading="KAPITTEL 1"
            />
            <div className="l-mt-2">
              <ul className="b-list b-list--no-style">
                <li className="l-mb-1">
                  <a href="#">§ 1. Lovens formål</a>
                </li>
                <li className="l-mb-1">
                  <a href="#">§ 2. Lovens virkeområde</a>
                </li>
                <li className="l-mb-1">
                  <a href="#">§ 3. Definasjoner</a>
                </li>
              </ul>
              <a href="#">
                <strong>Les hele Kapittel 1</strong>
              </a>
            </div>
          </div>

          <div className="l-mb-4">
            <ChapterHeading
              heading="Krav til helsepersonells yrkesutøvelse"
              subheading="KAPITTEL 2"
            />
            <div className="l-mt-2">
              <ul className="b-list b-list--no-style">
                <li className="l-mb-1">
                  <a href="#">§ 1. Lovens formål</a>
                </li>
                <li className="l-mb-1">
                  <a href="#">§ 2. Lovens virkeområde</a>
                </li>
                <li className="l-mb-1">
                  <a href="#">§ 3. Definasjoner</a>
                </li>
              </ul>
              <a href="#">
                <strong>Les hele Kapittel 2</strong>
              </a>
            </div>
          </div>

          <div className="l-mb-4">
            <ChapterHeading
              heading="Krav til organisering og virksomhet"
              subheading="KAPITTEL 3"
            />
            <div className="l-mt-2">
              <ul className="b-list b-list--no-style">
                <li className="l-mb-1">
                  <a href="#">§ 1. Lovens formål</a>
                </li>
                <li className="l-mb-1">
                  <a href="#">§ 2. Lovens virkeområde</a>
                </li>
                <li className="l-mb-1">
                  <a href="#">§ 3. Definasjoner</a>
                </li>
              </ul>
              <a href="#">
                <strong>Les hele Kapittel 3</strong>
              </a>
            </div>
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
            <PageMeta publishDate="11.08.2008" editDate="11.08.2018" url="#" />
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
        </article>
      </div>
    </div>
  </div>
);

export default MemoChapterPage;
