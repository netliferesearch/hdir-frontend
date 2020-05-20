import React from 'react';
import List from '../components/List';
import Button from '../components/Button';
import ListHeading from '../components/ListHeading';
import CheckboxGroup from '../components/CheckboxGroup';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import ArticleIntro from '../components/ArticleIntro';
import ProductSearch from '../components/ProductSearch';
import { dummyFlatTree } from '../components/dummyFlatTree';

const ListBrochures = () => (
  <div className="l-container">
    <Breadcrumbs
      paths={[
        {
          name: 'Forsiden',
          href: '#a'
        }
      ]}
    />
    <main id="main">
        <div className="row l-mt-2">
          <div className="col-xs-12">
            <ArticleIntro
              heading="Brosjyrer"
            />
          </div>
        </div>
      <div className="l-layout l-mt-1">
        <aside className="l-hide-to-lg l-sidebar l-bleed-right">
          <hr className="b-hr b-hr--thick" />
          <div className="l-mt-2">
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
                  label: 'Akuttmedisin',
                  checked: true
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
        <article className="l-article l-article--topline">
          <div className="l-mt-1 l-mb-2">
            <ProductSearch
              label="brosjyrer"
              productId="0e87de78-2cb4-4a70-93a7-0d687443b71e"
              flatTree={dummyFlatTree}
              malGruppe={''}
              collapsed
            />
          </div>
          <div className="js-expand-list" data-start-limit="10">
            <h2 className=" l-mb-1 l-mt-1">10 brosjyrer innen «akuttmedisin»</h2>
            <hr className="b-hr b-hr--thick" />
            <List
              list={[
                {
                  type: 'pressRelease',
                  url: '#3',
                  fields: {
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
        </article>
      </div>
    </main>
  </div>

);

export default ListBrochures;
