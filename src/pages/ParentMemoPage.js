import React from 'react';

import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import Link from '../components/Link';
import ChapterHeading from '../components/ChapterHeading';
import Box from '../components/Box';
import LongShortHeading from '../components/LongShortHeading';
import Breadcrumbs from '../components/Breadcrumbs';

const MemoChapterPage = () => (
  <div>
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
          },
          {
            name: 'Fastlegekonferansen 2018 - fastlegeordning for fremtiden'
          }
        ]}
      />

      <div className="l-mt-3">
        <div className="row">
          <div className="col-xs-12">
            <LongShortHeading
              long="Rundskriv for helsepersonelloven med kommentarer"
              short="Helsepersonelloven med kommentarer"
              icon={'https://placehold.it/64x64'}
              url="#a"
              linkText="Hva er rundskriv?"
            />
          </div>
        </div>
      </div>
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
                  <a href="#a">§ 1. Lovens formål</a>
                </li>
                <li className="l-mb-1">
                  <a href="#a">§ 2. Lovens virkeområde</a>
                </li>
                <li className="l-mb-1">
                  <a href="#a">§ 3. Definasjoner</a>
                </li>
              </ul>
              <a href="#a">
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
                  <a href="#a">§ 1. Lovens formål</a>
                </li>
                <li className="l-mb-1">
                  <a href="#a">§ 2. Lovens virkeområde</a>
                </li>
                <li className="l-mb-1">
                  <a href="#a">§ 3. Definasjoner</a>
                </li>
              </ul>
              <a href="#a">
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
                  <a href="#a">§ 1. Lovens formål</a>
                </li>
                <li className="l-mb-1">
                  <a href="#a">§ 2. Lovens virkeområde</a>
                </li>
                <li className="l-mb-1">
                  <a href="#a">§ 3. Definasjoner</a>
                </li>
              </ul>
              <a href="#a">
                <strong>Les hele Kapittel 3</strong>
              </a>
            </div>
          </div>

          <div className="l-mt-4">
            <Link href="#a" small icon="../icons/method.svg">
              Om metode og prosess
            </Link>
            <br />
            <Link href="#a" small icon="../icons/print.svg">
              Skriv ut hele retningslinjen
            </Link>
          </div>

          <div className="l-mt-4">
            <PageMeta publishDate="11.08.2008" editDate="11.08.2018" url="#a" />
          </div>
        </article>
      </div>
    </div>
    <div className="l-mt-4">
      <Box color="grey" square noPadding>
        <div className="l-container">
          <strong>Kontakt:</strong>
          <br />
          <a href="#a">spesialisthelsetjenester@helsedir.no</a>
          <br />
          <a href="#a">navn.etternavn@helsedir.no</a>
          <br />
          <a href="#a">999 99 999</a>
        </div>
      </Box>
    </div>
  </div>
);

export default MemoChapterPage;
