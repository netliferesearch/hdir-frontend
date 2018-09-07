import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import ContentLabel from '../components/ContentLabel';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('ContentLabel', module)
  .add('basic', () => (
    <ContentLabel>This is some content my dude!</ContentLabel>
  ))
  .addWithStaticMarkup('see markup', () => (
    <ContentLabel>Check out the markup!</ContentLabel>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .addWithStaticMarkup('with a "shortcut" method', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
