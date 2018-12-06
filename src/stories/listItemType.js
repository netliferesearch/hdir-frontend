import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { object } from '@storybook/addon-knobs/dist/base';
import { select } from '@storybook/addon-knobs/dist/react';

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
          publishDate: '03.12.2018',
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
          dateFrom: '02.11.1990',
          dateTo: '03.11.1990',
          registrationDeadline: '03.02.1990',
          address: 'Dronninggata 28, 3004 Drammen'
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
          deadline: '03.12.2018',
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
          publishDate: '01.01.2003'
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
