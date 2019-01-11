import React from 'react';
import NavList from '../components/NavList';
import ChapterHeading from '../components/ChapterHeading';
import PageMeta from '../components/PageMeta';
import Box from '../components/Box';
import Link from '../components/Link';
import LongShortHeading from '../components/LongShortHeading';

const ProductPage = () => (
  <div className="l-container">
    <div className="row">
      <div className="col-xs-12 l-mt-3">
        <LongShortHeading
          long="Nasjonal faglig retningslinje for svangerskapsdiabetes"
          short="Svangerskapsdiabetes"
          icon={'https://placehold.it/64x64'}
          url="#a"
          linkText="Hva er nasjonal faglig retningslinje"
        />
      </div>
      <div className="col-xs-12 l-mt-4">
        <ChapterHeading
          heading="Diagnostikk og tiltak for å finne uoppdaget diabetes og svangerskapsdiabetes"
          subheading="kapittel 1"
          url="#a"
        />
        <hr className="b-hr b-hr--blue" />
        <div className="l-hide-to-md">
          <NavList
            list={[
              {
                description: 'SVAK ANBEFALING',
                title:
                  'Det foreslås at HbA1c tas ved første svangerskapskonsultasjon for å oppdage udiagnostisert diabetes/hyperglykemi',
                url: '#'
              },
              {
                description: 'STERK ANBEFALING',
                title:
                  'Tilby glukosebelastning til gravide i uke 24-28 med en eller flere karakteristika (alder, etnisitet, arvelighet, kroppsmasseindeks og hendelser i tidligere svangerskap)',
                url: '#'
              }
            ]}
          />
        </div>
      </div>
      <div className="col-xs-12 l-mt-4">
        <ChapterHeading
          heading="Diagnostikk og tiltak"
          subheading="kapittel 2"
          url="#a"
        />
        <hr className="b-hr b-hr--blue" />
        <div className="l-hide-to-md">
          <NavList
            list={[
              {
                description: 'Kapittel 2.1',
                title: 'Det foreslås at HbA1c tas ved',
                url: '#'
              },
              {
                description: 'Kapittel 2.2',
                title:
                  'Tilby glukosebelastning til gravide i uke 24-28 med en eller flere karakteristika (alder, etnisitet, arvelighet, kroppsmasseindeks og hendelser i tidligere svangerskap)',
                url: '#'
              }
            ]}
          />
        </div>
      </div>

      <div className="col-xs-12 l-mt-3">
        <Box>
          <ChapterHeading subheading="RELATERTE PRODUKTER" line="none" />
          <NavList
            list={[
              {
                description: 'Svangerskapsomsorgen',
                title: 'Nasjonale faglige retningslinjer',
                url: '#'
              },
              {
                description: 'BROSJYRE (PDF)',
                title:
                  'Hva kan det være? Svangerskapsdiabetes? Disse symptomene må du være obs på.',
                url: '#'
              }
            ]}
          />
        </Box>
      </div>
      <div className="col-xs-12 l-mt-3">
        <Box color="green">
          <ChapterHeading
            heading="Materiell til helsekontorer"
            subheading="LAST NED TRYKKSAKER"
            line="none"
          />
          <NavList
            list={[
              {
                description: 'PLAKAT (PDF)',
                title: 'Det foreslås at HbA1c tas ved',
                url: '#',
                infoText: 'PDF'
              },
              {
                description: 'BROSJYRE (PDF)',
                title:
                  'Tilby glukosebelastning til gravide i uke 24-28 med en eller flere karakteristika (alder, etnisitet, arvelighet, kroppsmasseindeks og hendelser i tidligere svangerskap)',
                url: '#',
                infoText: 'PDF'
              }
            ]}
          />
          <div className="l-mt-2">
            <Link href="#a" arrow>
              Last ned alle (2 MB)
            </Link>
          </div>
        </Box>
      </div>

      <div className="col-xs-12 col-md-10 col-md-offset-1 l-mt-4">
        <Link href="#a" wideButton arrow color="purple">
          For å lese om symptomer, kostholdsråd og andre tips ved
          svangerskapsdiabetes, kan du gå til helsenorge.no.
        </Link>
      </div>

      <div className="col-xs-12 l-mt-3">
        <PageMeta publishDate="01.01.2008" editDate="01.01.2018" url="#a" />
      </div>

      <div className="col-xs-12 l-mt-4">
        <Link href="#a" small icon="../icons/method.svg">
          Om metode og prosess
        </Link>
        <br />
        <Link href="#a" small icon="../icons/print.svg">
          Skriv ut hele retningslinjen
        </Link>
      </div>
    </div>
  </div>
);

export default ProductPage;
