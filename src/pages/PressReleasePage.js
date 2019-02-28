import React from 'react';

import List from '../components/List';
import Link from '../components/Link';
import Box from '../components/Box';

const PressReleasePage = () => (
  <main>
    <div className="l-container">
      <div className="row l-mt-3">
        <div className="col-xs-12">
          <h1>Trykksaker</h1>
        </div>
      </div>
      <div className="row l-mt-2">
        <section className="col-xs-12">
          <List
            list={[
              {
                type: 'pressRelease',
                url: '#3',
                fields: {
                  category: 'Plakat',
                  heading: 'Barns miljø og sikkerhet / når barnet skader seg',
                  image:
                    'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                  publishDate: '01. juni 2009',
                  download: true
                }
              },
              {
                type: 'pressRelease',
                url: '#4',
                fields: {
                  category: 'Brosjyre (PDF)',
                  heading:
                    'Hva kan det være? Svangerskapsdiabetes? Disse symptomene må du være obs på.',
                  image:
                    'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                  publishDate: '01. juni 2009'
                }
              },
              {
                type: 'pressRelease',
                url: '#3',
                fields: {
                  category: 'Plakat',
                  heading: 'Barns miljø og sikkerhet / når barnet skader seg',
                  image:
                    'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                  publishDate: '01. juni 2009'
                }
              },
              {
                type: 'pressRelease',
                url: '#4',
                fields: {
                  category: 'Brosjyre (PDF)',
                  heading:
                    'Hva kan det være? Svangerskapsdiabetes? Disse symptomene må du være obs på.',
                  image:
                    'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                  publishDate: '01. juni 2009'
                }
              },
              {
                type: 'pressRelease',
                url: '#3',
                fields: {
                  category: 'Plakat',
                  heading: 'Barns miljø og sikkerhet / når barnet skader seg',
                  image:
                    'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                  publishDate: '01. juni 2009'
                }
              },
              {
                type: 'pressRelease',
                url: '#4',
                fields: {
                  category: 'Brosjyre (PDF)',
                  heading:
                    'Hva kan det være? Svangerskapsdiabetes? Disse symptomene må du være obs på.',
                  image:
                    'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                  publishDate: '01. juni 2009'
                }
              }
            ]}
          />
          <div className="l-mt-3 l-mb-5 t-sm-center">
            <div className="row between-xs">
              <div className="col-xs t-sm-left">
                <Link href="#" arrowLeft>
                  Forrige side
                </Link>
              </div>
              <div className="col-xs t-sm-right">
                <Link href="#" arrow>
                  Neste side
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
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
  </main>
);

export default PressReleasePage;
