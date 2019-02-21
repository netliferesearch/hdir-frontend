import React from 'react';
import NavList from '../components/NavList';
import ChapterHeading from '../components/ChapterHeading';
import Button from '../components/Button';
import Box from '../components/Box';
import Link from '../components/Link';
import LongShortHeading from '../components/LongShortHeading';

const ProductPage = () => (
  <div className="l-container l-mt-3">
    <div className="row">
      <div className="col-xs-12">
        <LongShortHeading
          long="Nasjonal faglig retningslinje"
          short="Svangerskapsdiabetes"
          icon={'./icons/Retningslinjer_Veiledere_Faglige_råd.svg'}
          url="#a"
          linkText="Hva er nasjonal faglig retningslinje"
        />
      </div>
      <div className="col-xs-12 l-mt-4">
        <ChapterHeading
          heading="Diagnostikk og tiltak for å finne uoppdaget diabetes og svangerskapsdiabetes"
          subheading="kapittel 1"
          url="/kapittel"
        />
        <hr className="b-hr b-hr--blue" />
        <div className="l-hide-to-md">
          <div className="js-expand-list" data-start-limit="2">
            <NavList
              small
              list={[
                {
                  description: 'STERK ANBEFALING',
                  title: 'Anbefaling 1',
                  url: '#'
                },
                {
                  description: 'STERK ANBEFALING',
                  title:
                    'Det foreslås at HbA1c tas ved første svangerskapskonsultasjon for å oppdage udiagnostisert diabetes/hyperglykemi',
                  url: '/kapittel#anbefaling1'
                },
                {
                  description: 'STERK ANBEFALING',
                  title: 'Anbefaling 3',
                  url: '#'
                }
              ]}
            />
            <div className="l-mt-2 t-sm-center">
              <button className="b-button b-button--secondary b-button--small">
                ↓ Vis alle (3)
              </button>
            </div>
          </div>
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
          <div className="js-expand-list">
            <NavList
              small
              list={[
                {
                  description: 'Kapittel 2.1',
                  title: 'Det foreslås at HbA1c tas ved',
                  url: '#a'
                },
                {
                  description: 'Kapittel 2.2',
                  title:
                    'Tilby glukosebelastning til gravide i uke 24-28 med en eller flere karakteristika (alder, etnisitet, arvelighet, kroppsmasseindeks og hendelser i tidligere svangerskap)',
                  url: '#a'
                }
              ]}
            />
            <div className="l-mt-2 t-sm-center">
              <button className="b-button b-button--secondary b-button--small ">
                ↓ Vis alle (7)
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xs-12 l-mt-4">
        <Box>
          <h4>RELATERTE PRODUKTER</h4>
          <div className="l-mt-1">
            <NavList
              small
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
          </div>
        </Box>
      </div>
      <div className="col-xs-12 l-mt-4">
        <Box color="green">
          <ChapterHeading
            heading="Materiell til helsekontorer"
            subheading="LAST NED TRYKKSAKER"
            line="none"
          />
          <NavList
            small
            list={[
              {
                title: 'Det foreslås at HbA1c tas ved',
                url: '#',
                meta: 'Plakat',
                infoText: 'PDF (1,0 MB)',
                file: true
              },
              {
                title:
                  'Tilby glukosebelastning til gravide i uke 24-28 med en eller flere karakteristika (alder, etnisitet, arvelighet, kroppsmasseindeks og hendelser i tidligere svangerskap)',
                url: '#a',
                meta: 'Brosjyre',
                infoText: 'PDF (3,5 MB)',
                file: true
              }
            ]}
          />
          <div className="l-mt-2">
            <Button>Last ned alle</Button>
          </div>
        </Box>
      </div>

      <div className="col-xs-12 l-mt-4 l-mb-5">
        <Link href="#a" wideButton arrow color="purple">
          For å lese om symptomer, kostholdsråd og andre tips ved
          svangerskapsdiabetes, kan du gå til helsenorge.no.
        </Link>
      </div>
    </div>
  </div>
);

export default ProductPage;
