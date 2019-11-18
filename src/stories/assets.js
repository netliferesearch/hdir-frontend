import React from 'react';
import { storiesOf } from '@storybook/react';
import { HashRouter } from 'react-router-dom';
import Wrapper from './components/Wrapper.js'

import {
  withKnobs,
  text,
  boolean,
  object,
  select
} from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';

import SquareImage from '../components/SquareImage';
import Image from '../components/Image';
import IconWithText from '../components/IconWithText';

storiesOf('Bilder og ikoner/Bilde', module)
.addDecorator(withKnobs)
.addDecorator(checkA11y)
  .addWithStaticMarkup('Stort', () => (
    <Wrapper title="Bilde stort">
    <div style={{ width: '50%', height: '100%', padding: '3%' }}>
      This text and the div-wrapper is not part of the component. It's only here
      to make the visual regression tester happy, for this component. It's an
      exception.
      <SquareImage
        src={text(
          'src',
          'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png'
        )}
        alt={text('alt', 'Picture of some monster dude')}
      />
    </div>
    </Wrapper>
  ))
  .addWithStaticMarkup('Lite kvadratisk', () => (
    <Wrapper title="Lite kvadratisk bilde">
      <div style={{ overflow: 'hidden' }}>
        <Image
          src={text('src', 'http://placehold.it/100x100')}
          alt={text('alt', 'Some image')}
          ratio={select('Ratio', ['', '16:9'])}
        />
      </div>
    </Wrapper>
  ));
  
storiesOf('Bilder og ikoner/Ikon med tekst', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Standard', () => (
    <Wrapper title="Ikon med tekst">
      <IconWithText
        icon={text('Icon', './icons/clock.svg')}
        text={text('Text', 'Time is on my side')}
        size={select('Size', { small: 'small', medium: 'medium' }, 'medium')}
      />
    </Wrapper>
  ));