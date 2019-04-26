import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';

import NavList from '../components/NavList';

storiesOf('NavList', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('All properties', () => (
    <NavList
      heading={text('Heading', '')}
      columns={boolean('Columns', false)}
      noArrow={boolean('No arrow', false)}
      small={boolean('Small', false)}
      ordered={boolean('Ordered', false)}
      list={object('List', [
        {
          title: 'KAPITTEL 1',
          url: '#',
          meta: 'Nasjonale faglige retningslinjer'
        },
        {
          title: 'KAPITTEL 2',
          url: '#',
          meta: 'Nasjonale faglige retningslinjer',
          infoText: 'PDF (3,5 MB)',
          file: true
        },
        {
          title: 'KAPITTEL 3',
          url: '#',
          infoText: 'This is infoText: more text in another column',
          meta: 'Nasjonale faglige retningslinjer',
          active: true
        }
      ])}
    />
  ));
