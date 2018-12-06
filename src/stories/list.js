import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { object } from '@storybook/addon-knobs/dist/base';
import { select } from '@storybook/addon-knobs/dist/react';

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
            heading:
              'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
            publishDate: '03.12.2018',
            lead:
              'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.'
          }
        },
        {
          type: 'news',
          url: '#1',
          fields: {
            heading: '– Legg til rette for influensavaksinering',
            publishDate: '03.12.2018',
            lead:
              '– Det er viktig at arbeidsgiverne legger til rette for at helsepersonell skal kunne ta influensavaksine, sier helsedirektør Bjørn Guldvog.'
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
            heading:
              'Nasjonalt råd for ernæring foreslår nye tiltak for å øke inntaket av vitamin D',
            publishDate: '03.12.2018',
            lead:
              'Vitamin D er nødvendig for kalsiumopptak. Anbefalingene for inntak av vitamin D ble økt i 2014, og nå foreslår Nasjonalt råd for ernæring nye tiltak for å sikre at befolkningen skal få i seg nok.'
          }
        },
        {
          type: 'person',
          fields: {
            name: 'Ole Magnus Støvern',
            email: 'ole.stovern@netlife.com',
            reverseEmail: 'moc.efilten@nrevots.elo',
            phoneNumber: '+47 123 45 678',
            position: 'Developer',
            department: 'Oslo'
          }
        },
        {
          type: 'grantFunding',
          url: '#2',
          fields: {
            heading: 'Kommunalt kompetanse- og innovasjonstilskudd',
            deadline: 'Søknadsfrist: 11.10.2018',
            topic:
              'If this module is shown on a search page, it might have a text like this for topics'
          }
        },
        {
          type: 'pressRelease',
          url: '#3',
          fields: {
            heading: 'Hvordan sjonglere (illustrert)',
            category: 'Brosjyre',
            image:
              'https://cf5.s3.souqcdn.com/item/2017/04/19/77/74/24/6/item_XL_7774246_30779294.jpg',
            publishDate: '01.01.2003'
          }
        }
      ])}
    />
  ));
