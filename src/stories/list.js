import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, text, object } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';

import List from '../components/List';

storiesOf('List', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('News', () => (
    <List
      heading={text('Heading', '')}
      list={object('List', [
        {
          type: 'news',
          url: '#1',
          fields: {
            download: 'true',
            category: '',
            heading:
              'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
            publishDate: '3. desember 2018',
            lead:
              'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
            topic: ''
          }
        },
        {
          type: 'news',
          url: '#1',
          fields: {
            download: 'true',
            category: '',
            heading: '– Legg til rette for influensavaksinering',
            publishDate: '3. desember 2018',
            lead:
              '– Det er viktig at arbeidsgiverne legger til rette for at helsepersonell skal kunne ta influensavaksine, sier helsedirektør Bjørn Guldvog.',
            topic: ''
          }
        }
      ])}
    />
  ))
  .addWithStaticMarkup('All types', () => (
    <List
      heading={text('Heading', '')}
      list={object('List', [
        {
          type: 'news',
          url: '#1',
          fields: {
            category: '',
            heading:
              'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
            publishDate: '3. desember 2018',
            lead:
              'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
            topic: ''
          }
        },
        {
          type: 'news',
          url: '#1',
          fields: {
            download: 'true',
            category: '',
            heading:
              'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
            publishDate: '3. desember 2018',
            lead:
              'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.',
            topic: ''
          }
        },
        {
          type: 'person',
          fields: {
            category: '',
            name: 'Ole Magnus Støvern',
            email: 'ole.stovern@netlife.com',
            phoneNumber: '+47 123 45 678',
            position: 'Developer',
            department: 'Oslo',
            topic: ''
          }
        },
        {
          type: 'grantFunding',
          url: '#2',
          fields: {
            download: 'true',
            category: '',
            heading: 'Kommunalt kompetanse- og innovasjonstilskudd',
            deadline: 'Søknadsfrist: 11. oktober 2018',
            topic:
              'If this module is shown on a search page, it might have a text like this for topics'
          }
        },
        {
          type: 'grantFunding',
          url: '#2',
          fields: {
            category: '',
            heading: 'Kommunalt kompetanse- og innovasjonstilskudd',
            deadline: 'Søknadsfrist: 11. oktober 2018',
            topic:
              'If this module is shown on a search page, it might have a text like this for topics'
          }
        },
        {
          type: 'pressRelease',
          url: '#3',
          fields: {
            download: 'true',
            category: 'Brosjyre',
            heading: 'Hvordan sjonglere (illustrert)',
            image:
              'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
            publishDate: '01. januar 2003',
            topic: ''
          }
        },
        {
          type: 'pressRelease',
          url: '#3',
          fields: {
            category: 'Brosjyre',
            heading: 'Hvordan sjonglere (illustrert)',
            image:
              'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
            publishDate: '01. januar 2003',
            topic: ''
          }
        },
        {
          type: 'conference',
          url: '#4',
          fields: {
            download: 'true',
            category: '',
            heading: 'Kurs i hendelsesanalyse og pasientsikkerhet',
            dateFrom: '3. november 1990',
            dateTo: '6. desember 2018',
            location: 'Oslo',
            registrationDeadline: '15. oktober',
            lead: 'This is some text describing the event. It is nice to have.',
            topic: ''
          }
        }
      ])}
    />
  ));
