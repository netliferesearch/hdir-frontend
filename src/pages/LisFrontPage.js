import React from 'react';

import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import ChapterHeading from '../components/ChapterHeading';
import Quote from '../components/Quote';
import Collapsible from '../components/Collapsible';
import ArticleIntro from '../components/ArticleIntro';

const LisFrontPage = () => (
  <div>
    <div className="l-container">
      <div className="l-mt-2">
        <ArticleIntro
          heading="Spesialistutdanning for leger"
          lead="Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse."
        />
      </div>
      <div>
        <NavList
          list={[
            {
              title: 'Akutt og mottaksmedisin',
              url: '#'
            },
            {
              title: 'Allmenmedisin',
              url: '#'
            },
            {
              title: 'Anestesiologi',
              url: '#'
            }
          ]}
        />
      </div>
      <div className="l-mt-3">
        <hr className="b-hr b-hr--less-thick b-hr--black" />
        <NavList list={[{ title: 'LIS del 1', url: '#' }]} />
      </div>

      <article className="l-mt-4">
        <div className="l-mb-3">
          <h2 className="l-mb-3">Velg spesialitet</h2>
          <NavList
            heading="A"
            columns
            list={[
              {
                title: 'Akutt og mottaksmedisin',
                url: '#'
              },
              {
                title: 'Allmenmedisin',
                url: '#'
              },
              {
                title: 'Anestesiologi',
                url: '#'
              },
              {
                title: 'Arbeidsmedisin',
                url: '#'
              }
            ]}
          />
        </div>
        <div className="l-mb-3">
          <NavList
            heading="B"
            columns
            list={[
              {
                title: 'Barne- og ungdomspsykiatri',
                url: '#'
              },
              {
                title: 'Barnekirurgi',
                url: '#'
              },
              {
                title: 'Barnesykdommer',
                url: '#'
              }
            ]}
          />
        </div>
        <div className="l-mb-3">
          <NavList
            heading="G"
            columns
            list={[
              {
                title: 'Gastrosentrisk kirurgi',
                url: '#'
              },
              {
                title: 'Geriatri',
                url: '#'
              }
            ]}
          />
        </div>
        <div className="l-mb-3">
          <NavList
            heading="H"
            columns
            list={[
              {
                title: 'Hjertesykdommer',
                url: '#'
              },
              {
                title: 'Hud- og veneriske sykdommer',
                url: '#'
              }
            ]}
          />
        </div>
        <div className="l-mb-3">
          <NavList
            heading="I"
            columns
            list={[
              {
                title: 'Immunologi og transfusjonsmedisin',
                url: '#'
              },
              {
                title: 'Indremedisin',
                url: '#'
              }
            ]}
          />
        </div>
      </article>
      <article className="col-md-8 col-xs-12 col-md-offset-1 t-body-text">
        <div className="l-mt-4">
          <PageMeta publishDate="11.08.2008" editDate="11.08.2018" />
        </div>
      </article>
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
  </div>
);

export default LisFrontPage;
