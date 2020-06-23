import React from 'react';

import List from '../components/List';
import Button from '../components/Button';
import Box from '../components/Box';
import CheckboxGroup from '../components/CheckboxGroup';

const PressReleasePage = () => (
  <main id="main">
    <div className="l-container">
      <div className="row l-mt-3">
        <div className="col-xs-12">
          <h1>Brosjyrer</h1>
        </div>
      </div>
      <div className="row l-mt-2">
        <aside className="col-md-3 col-xs-12 l-mb-4">
          <div className="h4">Filter</div>
          <div className="l-mt-1">
            <hr className="b-hr b-hr--thick" />
          </div>
          <div className="l-mt-1">
            <CheckboxGroup
              heading="Velg tema"
              name="statistikktype"
              options={[
                {
                  value: 'Abort',
                  label: 'Abort'
                },
                {
                  value: 'Akuttmedisin',
                  label: 'Akuttmedisin'
                },
                {
                  value: 'antibiotika',
                  label: 'antibiotika'
                },
                {
                  value: 'CFS/ME',
                  label: 'CFS/ME'
                },
                {
                  value: 'Diabetes',
                  label: 'Diabetes'
                },
                {
                  value: 'Fødsel og barsel',
                  label: 'Fødsel og barsel'
                },
                {
                  value: 'Hjerneslag',
                  label: 'Hjerneslag'
                },
                {
                  value: 'Kols',
                  label: 'Kols'
                },
                {
                  value: 'Overvekt og fedme',
                  label: 'Overvekt og fedme'
                }
              ]}
            />
          </div>
        </aside>
        <section className="col-xs-12 col-md-8 col-md-offset-1">
          <div className="js-expand-list" data-start-limit="10">
            <List
              list={[
                {
                  type: 'pressRelease',
                  url: '#3',
                  fields: {
                    category: 'Brosjyrer, plakater og opplæringsmateriell',
                    heading: 'Barns miljø og sikkerhet / når barnet skader seg',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '1. juni 2009',
                    download: true
                  }
                },
                {
                  type: 'pressRelease',
                  url: '#4',
                  fields: {
                    category: 'Brosjyrer, plakater og opplæringsmateriell',
                    heading:
                      'Hva kan det være? Svangerskapsdiabetes? Disse symptomene må du være obs på.',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '1. juni 2009'
                  }
                },
                {
                  type: 'pressRelease',
                  url: '#3',
                  fields: {
                    category: 'Brosjyrer, plakater og opplæringsmateriell',
                    heading: 'Barns miljø og sikkerhet / når barnet skader seg',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '1. juni 2009'
                  }
                },
                {
                  type: 'pressRelease',
                  url: '#4',
                  fields: {
                    category: 'Brosjyrer, plakater og opplæringsmateriell',
                    heading:
                      'Hva kan det være? Svangerskapsdiabetes? Disse symptomene må du være obs på.',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '1. juni 2009'
                  }
                },
                {
                  type: 'pressRelease',
                  url: '#3',
                  fields: {
                    category: 'Brosjyrer, plakater og opplæringsmateriell',
                    heading: 'Barns miljø og sikkerhet / når barnet skader seg',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '1. juni 2009'
                  }
                },
                {
                  type: 'pressRelease',
                  url: '#4',
                  fields: {
                    category: 'Brosjyrer, plakater og opplæringsmateriell',
                    heading:
                      'Hva kan det være? Svangerskapsdiabetes? Disse symptomene må du være obs på.',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '1. juni 2009'
                  }
                },
                {
                  type: 'pressRelease',
                  url: '#3',
                  fields: {
                    category: 'Brosjyrer, plakater og opplæringsmateriell',
                    heading: 'Barns miljø og sikkerhet / når barnet skader seg',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '1. juni 2009'
                  }
                },
                {
                  type: 'pressRelease',
                  url: '#4',
                  fields: {
                    category: 'Brosjyrer, plakater og opplæringsmateriell',
                    heading:
                      'Hva kan det være? Svangerskapsdiabetes? Disse symptomene må du være obs på.',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '1. juni 2009'
                  }
                },
                {
                  type: 'pressRelease',
                  url: '#3',
                  fields: {
                    category: 'Brosjyrer, plakater og opplæringsmateriell',
                    heading: 'Barns miljø og sikkerhet / når barnet skader seg',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '1. juni 2009'
                  }
                },
                {
                  type: 'pressRelease',
                  url: '#4',
                  fields: {
                    category: 'Brosjyrer, plakater og opplæringsmateriell',
                    heading:
                      'Hva kan det være? Svangerskapsdiabetes? Disse symptomene må du være obs på.',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '1. juni 2009'
                  }
                },
                {
                  type: 'pressRelease',
                  url: '#3',
                  fields: {
                    category: 'Brosjyrer, plakater og opplæringsmateriell',
                    heading: 'Barns miljø og sikkerhet / når barnet skader seg',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '1. juni 2009'
                  }
                },
                {
                  type: 'pressRelease',
                  url: '#4',
                  fields: {
                    category: 'Brosjyrer, plakater og opplæringsmateriell',
                    heading:
                      'Hva kan det være? Svangerskapsdiabetes? Disse symptomene må du være obs på.',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '1. juni 2009'
                  }
                },
                {
                  type: 'pressRelease',
                  url: '#3',
                  fields: {
                    category: 'Brosjyrer, plakater og opplæringsmateriell',
                    heading: 'Barns miljø og sikkerhet / når barnet skader seg',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '1. juni 2009'
                  }
                },
                {
                  type: 'pressRelease',
                  url: '#4',
                  fields: {
                    category: 'Brosjyrer, plakater og opplæringsmateriell',
                    heading:
                      'Hva kan det være? Svangerskapsdiabetes? Disse symptomene må du være obs på.',
                    image:
                      'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
                    publishDate: '1. juni 2009'
                  }
                }
              ]}
            />
            <div className="l-mt-2 l-mb-5 t-sm-center">
              <Button secondary>↓ Vis alle</Button>
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
