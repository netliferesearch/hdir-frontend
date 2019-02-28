import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  withKnobs,
  text,
  boolean,
  object,
  select
} from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';

import ListItemType from '../components/ListItemType';

storiesOf('ListItemType', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('News', () => (
    <ListItemType
      itemType={{
        type: 'news',
        fields: object('Fields', {
          heading: 'A new thing happened',
          publishDate: '3. desember 2018',
          lead: 'asdsdf'
        })
      }}
    />
  ))
  .addWithStaticMarkup('Conference', () => (
    <ListItemType
      itemType={{
        type: 'conference',
        fields: object('Fields', {
          heading: 'Christmas 2',
          dateFrom: '2. november 1990',
          dateTo: '3. november 1990',
          registrationDeadline: '3. februar 1990',
          address: 'Dronninggata 28, 3004 Drammen',
          lead: 'We can write some stuff in here too'
        })
      }}
    />
  ))
  .addWithStaticMarkup('Grant Funding', () => (
    <ListItemType
      itemType={{
        type: 'grantFunding',
        fields: object('Fields', {
          heading: 'A new thing happened',
          deadline: '3. desember 2018',
          topic: ''
        })
      }}
    />
  ))
  .addWithStaticMarkup('Press Release', () => (
    <ListItemType
      itemType={{
        type: 'pressRelease',
        fields: object('Fields', {
          heading: 'Hvordan sjonglere (illustrert)',
          category: 'Brosjyre',
          image: 'https://placehold.it/300x300',
          publishDate: '1. januar 2003'
        })
      }}
    />
  ))
  .addWithStaticMarkup('Person', () => (
    <ListItemType
      itemType={{
        type: 'person',
        fields: object('Fields', {
          name: 'Donald Trump',
          email: 'donald@whitehouse.gov',
          phoneNumber: '+1 123 456 789',
          position: 'President',
          department: 'The Cabinet '
        })
      }}
    />
  ));
