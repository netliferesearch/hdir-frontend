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
  .addWithStaticMarkup('Basic', () => (
    <ListItemType
      itemType={{
        type: select(
          'Type',
          ['news', 'conference', 'pressRelease', 'grantFunding', 'person'],
          'news'
        ),
        fields: object('Fields', {
          heading: 'A new thing happened',
          publishDate: '03.12.2018',
          lead: 'asdsdf'
        })
      }}
    />
  ));
