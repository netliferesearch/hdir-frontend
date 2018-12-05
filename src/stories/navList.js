import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { object } from '@storybook/addon-knobs/dist/base';
import { select } from '@storybook/addon-knobs/dist/react';

import NavList from '../components/NavList';

storiesOf('NavList', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup(
    'Basic',
    withNotes(
      'The links are an array of objects containing the props "title" and "url" as strings.'
    )(() => (
      <NavList
        anchor={boolean('Anchor links', false)}
        heading={text('Heading', 'Overskrift')}
        list={object('List', [
          {
            title: 'ABC',
            url: '#'
          },
          {
            title:
              'Behandling og rehabilitering av x og avhengighet. Behandling og rehabilitering av x og avhengighet. Behandling og rehabilitering av x og avhengighet.',
            url: '#'
          },
          {
            title: 'GHI',
            url: '#'
          }
        ])}
      />
    ))
  )
  .addWithStaticMarkup(
    'With types',
    withNotes(
      'The links are an array of objects containing the props "title" and "url" as strings.'
    )(() => (
      <NavList
        anchor={boolean('Anchor links', false)}
        heading={text('Heading', 'Overskrift')}
        list={object('List', [
          {
            title:
              'Diagnostisk pakkeforløp for pasienter med uspesifikke symptomer på alvorlig sykdom som kan være kreft',
            url: '#',
            meta: 'nasjonale-faglige-retningslinjer'
          },
          {
            title: 'DEF',
            url: '#',
            meta: 'rundskriv'
          },
          {
            title:
              'Behandling og rehabilitering av rusmiddelproblemer og avhengighet. Behandling og rehabilitering av rusmiddelproblemer og avhengighet',
            url: '#',
            meta: 'nasjonale-faglige-retningslinjer'
          }
        ])}
      />
    ))
  )
  .addWithStaticMarkup(
    'Nested list',
    withNotes(
      'The links are an array of objects containing the props "title" and "url" as strings.'
    )(() => (
      <NavList
        noArrow
        small
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
            active: true,
            children: [
              {
                title: 'Bla bla bla',
                url: '#',
                meta: '2.1'
              },
              {
                title: 'Lorum ipsum',
                url: '#',
                meta: '2.2',
                active: true
              }
            ]
          },
          {
            title: 'KAPITTEL 3',
            url: '#',
            meta: 'Nasjonale faglige retningslinjer'
          }
        ])}
      />
    ))
  )
  .addWithStaticMarkup(
    'All properties',
    withNotes(
      'The links are an array of objects containing the props "title" and "url" as strings.'
    )(() => (
      <NavList
        heading={text('Heading', '')}
        anchor={boolean('Anchor', false)}
        columns={boolean('Columns', false)}
        hideMeta={boolean('Hide meta', false)}
        noArrow={boolean('No arrow', false)}
        small={boolean('Small', false)}
        sticky={boolean('Sticky', false)}
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
            meta: 'Nasjonale faglige retningslinjer'
          },
          {
            title: 'KAPITTEL 3',
            url: '#',
            infoText: 'This is infoText: more text in another column',
            meta: 'Nasjonale faglige retningslinjer'
          }
        ])}
      />
    ))
  );
