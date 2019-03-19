import React from 'react';

import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import ArticleIntro from '../components/ArticleIntro';
import Card from '../components/Card';
import Box from '../components/Box';
import ChapterHeading from '../components/ChapterHeading';
import Alert from '../components/Alert';

const LisFrontPage = () => (
  <>
    <main id="main">
      <div className="l-container">
        <div className="l-mt-3">
          <ArticleIntro
            heading="Spesialistutdanning for leger"
            lead="Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse."
          />
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <Alert status="success">
              Dette er den nye ordningen som erstatter den gamle, den kan være
              <br />
              større
              <br />
              med linker
            </Alert>
          </div>
        </div>
        <div className="row l-mt-2">
          <div className="col-xs-12 col-md-4 l-mt-1">
            <Card
              heading="Generell informasjon om ny spesialistutdanning for leger"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
              url="#a"
              arrow="right"
            />
          </div>
          <div className="col-xs-12 col-md-4 l-mt-1">
            <Card
              heading="Overgangsordning - spesialutdanning for leger"
              text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
              url="#a"
              arrow="right"
            />
          </div>
          <div className="col-xs-12 col-md-4 l-mt-1">
            <Card
              heading="Godkjenning av utdannings-virksomhet for leger i sepsialiering"
              text="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
              url="#a"
              arrow="right"
            />
          </div>
        </div>
        <div className="l-mt-3">
          <ChapterHeading heading="LIS del 1" h="h3" line="none" url="#a" />
          <hr className="b-hr b-hr--link-color" />
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
      </div>
    </main>
    <div className="l-mt-5">
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
  </>
);

export default LisFrontPage;
