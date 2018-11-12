import React from 'react';

import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import ChapterHeading from '../components/ChapterHeading';
import Collapsible from '../components/Collapsible';
import ArticleIntro from '../components/ArticleIntro';
import Box from '../components/Box';
import Alert from '../components/Alert';

const LisFrontPage = () => (
  <div>
    <div className="l-container">
      <div className="l-mt-2">
        <ArticleIntro
          heading="Spesialistutdanning for leger"
          lead="Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse."
        />
      </div>
      <div className="l-mb-3">
        <Alert status="success">
          Dette er den nye ordningen som erstatter den gamle, den kan være
          <br />
          større
          <br />
          med linker
        </Alert>
      </div>
      <div className="row">
        <a href="#" className="col-md-4">
          <Box color="white">
            <h2>
              Diagnostikk og tiltak for å finne uoppdaget diabetes og
              svangerskapsdiabetes
            </h2>

            <p>
              Woooo ooooo ooopWoooo ooooo ooop Woooo oooooo oopW ooooooooo
              ooopWooo ooooo oooopW oooo oooo ooopWo ooooooo oooo pWoooooo
              oooooop Wooo oooooo ooop
            </p>
          </Box>
        </a>
        <a href="#" className="col-md-4">
          <Box color="white">
            <h2>
              Diagnostikk og tiltak for å finne uoppdaget diabetes og
              svangerskapsdiabetes
            </h2>

            <p>
              Woooooo oooooop Woooooooooooop Wooooo oooo ooopWoooooo oooooopWooo
              ooooo oooopWoo oo oo oooooopWo oooo ooooo oopWo ooo ooo ooooop
            </p>
          </Box>
        </a>
        <a href="#" className="col-md-4">
          <Box color="white">
            <h2>
              Diagnostikk og tiltak for å finne uoppdaget diabetes og
              svangerskapsdiabetes
            </h2>

            <p>
              Woo oooooo ooo opWoo ooooooo ooopWoooo ooooo ooo pWooo ooooo oo o
              opW ooooo ooooo oop Wooo oooo ooooop Wooo ooo oooo oopWoo oooo oo
              oooo pWoo oooo ooooo opWooo oooo oooo opW oooooo ooo ooop
            </p>
          </Box>
        </a>
      </div>
      <div className="l-mt-5">
        <hr className="b-hr b-hr--black" />
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
      <article className="col-md-8 col-xs-12 t-body-text">
        <div className="l-mt-4">
          <PageMeta publishDate="11.08.2008" editDate="11.08.2018" />
        </div>
      </article>
    </div>
    <div className="l-mt-4">
      <div className="b-bleed">
        <div className="l-container">
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
);

export default LisFrontPage;
