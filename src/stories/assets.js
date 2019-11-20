import React from 'react';
import { storiesOf } from '@storybook/react';
import Wrapper from './components/Wrapper.js'

import {
  withKnobs,
  text,
  select
} from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';

import SquareImage from '../components/SquareImage';
import Image from '../components/Image';
import IconWithText from '../components/IconWithText';

storiesOf('Bilder og ikoner/Bilde', module)
.addDecorator(withKnobs)
.addDecorator(checkA11y)
  .addWithStaticMarkup('Standard', () => (
    <Wrapper title="Bilde standard" lead="Bilde-komponent. Kan brukes i valgfri størrelse. Kan også ha en ratio-property satt til '16:9' som sørger for at bildet vises i fullbreddes 16:9 format.">
      <Image
        src={text('src', 'http://placehold.it/300x150')}
        alt={text('alt', 'Some image')}
        ratio={select('Ratio', ['', '16:9'])}
      />
    </Wrapper>
  ))
  .addWithStaticMarkup('Kvadratisk', () => (
    <Wrapper title="Bilde kvadratisk" lead="For å vise uniforme bilder i f.eks lister, bruker vi en komponent kalt SquareImage. Om bildet ikke er kvadratisk, brukes en bakgrunn som er basert på bildet, slik at det får en passende bakgrunn og totalt sett får en kvadratisk form. Denne bakgrunnen genereres automatisk.">
      <div style={{ width: '250px', height: '100%', padding: '3%' }}>
        <SquareImage
          src={text(
            'src',
            'https://upload.wikimedia.org/wikipedia/commons/9/90/George_H._W._Bush%2C_President_of_the_United_States%2C_1989_official_portrait_%28cropped%29.jpg'
          )}
          alt={text('alt', 'Picture of some monster dude')}
        />
        <br />
        <SquareImage
          src={text(
            'src',
            'https://miro.medium.com/max/3979/1*Ufl6QW9MSKXoq74Vv3n3jw.jpeg'
          )}
          alt={text('alt', 'Picture of some monster dude')}
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