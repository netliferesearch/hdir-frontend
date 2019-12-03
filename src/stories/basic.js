import React from 'react';
import { storiesOf } from '@storybook/react';
import Wrapper from './components/Wrapper.js'
import {
  withKnobs,
  text,
  boolean,
  select
} from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';

import Box from '../components/Box';
import Link from '../components/Link';

storiesOf('Grunnstiler', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add('Farger', () => (
    <Wrapper noMarkup title="Farger" lead="Åpne Figma-filen for å se reglene for fargebruk.">
      <iframe style={{border: 0}} title="Farger iframe" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FSJQReaflejvdjUWtGpiv7F%2FHelsedirektoratet-Designmanual%3Fnode-id%3D61%253A196" allowFullScreen></iframe>
    </Wrapper>
  ))
  .add('Spacing', () => (
    <Wrapper noMarkup title="Spacing" lead="Åpne Figma-filen for å se reglene for spacing.">
      <>
        <iframe style={{border: 0}} title="Farger iframe" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FSJQReaflejvdjUWtGpiv7F%2FHelsedirektoratet-Designmanual%3Fnode-id%3D118%253A576" allowFullScreen></iframe>
        <h2>Vertikal spacing-klasser</h2>
        <div>
          <Box>0</Box>
          <div className="l-mt-1">
            <Box>l-mt-1</Box>
          </div>
          <div className="l-mt-2">
            <Box>l-mt-2</Box>
          </div>
          <div className="l-mt-3">
            <Box>l-mt-3</Box>
          </div>
          <div className="l-mt-4">
            <Box>l-mt-4</Box>
          </div>
          <div className="l-mt-5">
            <Box>l-mt-5</Box>
          </div>
        </div>
      </>
    </Wrapper>
  ))
  .add('Typografi', () => (
    <Wrapper noMarkup title="Typografi" lead="Åpne Figma-filen for å se reglene for typografi.">
      <iframe style={{border: 0}} title="Typografi iframe" width="100%" height="600" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FSJQReaflejvdjUWtGpiv7F%2FHelsedirektoratet-Designmanual%3Fnode-id%3D1%253A59" allowFullScreen></iframe>
    </Wrapper>
  ));
  
storiesOf('Grunnstiler/Lenke', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add('Alle', () => (
    <Wrapper title="Lenker" lead="Alle lenketyper">
      <div>
        <p><b>With 'icon' defined + 'small' set to 'true'</b></p>
        <Link
          href={text('href', '#')}
          icon={text('Icon', './icons/method.svg')}
          small={boolean('Small', true)}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
            )}
            >
          {text('Content', 'Skriv ut (small)')}
        </Link>
        <p><b>With 'icon' defined</b></p>
        <Link
          href={text('href', '#')}
          icon={text('Icon', './icons/method.svg')}
          secondary={boolean('Secondary', true)}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
        >
          {text('Content', 'Skriv ut (secondary)')}
        </Link>
        <Link
          href={text('href', '#')}
          icon={text('Icon', './icons/method.svg')}
          arrow={boolean('Arrow', false)}
          arrowLeft={boolean('Arrow left', false)}
          small={boolean('Small', false)}
          secondary={boolean('Secondary', false)}
          button={boolean('Button', false)}
          buttonSecondary={boolean('Button secondary', false)}
          buttonInherit={boolean('Button inherit', false)}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
          wideButton={boolean('Wide button', false)}
          heading={boolean('Button', false)}
          noUnderline={boolean('Button', false)}
        >
          {text('Content', 'Skriv ut (ikon [method])')}
        </Link>
        <Link
          href={text('href', '#')}
          icon={text('Icon', './icons/warning.svg')}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
        >
          {text('Content', 'Skriv ut (ikon [warning])')}
        </Link>
        <Link
          href={text('href', '#')}
          icon={text('Icon', './icons/share.svg')}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
        >
          {text('Content', 'Skriv ut (ikon [share])')}
        </Link>
        <Link
          href={text('href', '#')}
          icon={text('Icon', './icons/search.svg')}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
        >
          {text('Content', 'Skriv ut (ikon [search])')}
        </Link>
        <Link
          href={text('href', '#')}
          icon={text('Icon', './icons/qa.svg')}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
        >
          {text('Content', 'Skriv ut (ikon [qa]')}
        </Link>
        <Link
          href={text('href', '#')}
          icon={text('Icon', './icons/print.svg')}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
        >
          {text('Content', 'Skriv ut (ikon [print])')}
        </Link>
        <Link
          href={text('href', '#')}
          icon={text('Icon', './icons/pdf.svg')}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
        >
          {text('Content', 'Skriv ut (ikon [pdf])')}
        </Link>
        <Link
          href={text('href', '#')}
          icon={text('Icon', './icons/download.svg')}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
        >
          {text('Content', 'Skriv ut (ikon [download])')}
        </Link>
        <p><b>With 'arrow' set to 'true'</b></p>
        <Link
          href={text('href', '#')}
          arrow={boolean('Arrow', true)}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
        >
          {text('Content', 'Skriv ut')}
        </Link>
        <p><b>With 'arrow' set to 'true' + 'noUnderline' set to 'true'</b></p>
        <Link
          href={text('href', '#')}
          arrow={boolean('Arrow', true)}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
          noUnderline={boolean('Button', true)}
        >
          {text('Content', 'Skriv ut')}
        </Link>
        <p><b>With 'arrowLeft' set to 'true'</b></p>
        <Link
          href={text('href', '#')}
          arrowLeft={boolean('Arrow left', true)}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
        >
          {text('Content', 'Skriv ut')}
        </Link>
        <p><b>With 'arrowLeft' set to 'true' + 'noUnderline' set to 'true'</b></p>
        <Link
          href={text('href', '#')}
          arrowLeft={boolean('Arrow left', true)}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
          noUnderline={boolean('Button', true)}
        >
          {text('Content', 'Skriv ut')}
        </Link>
        <hr style={{margin: '30px 0'}}/>
        <h2>Link with 'button' formatting</h2>
        <p><b>button</b></p>
        <Link
          href={text('href', '#')}
          small={boolean('Small', false)}
          button={boolean('Button', true)}
          buttonSecondary={boolean('Button secondary', false)}
          buttonInherit={boolean('Button inherit', false)}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
          wideButton={boolean('Wide button', false)}
        >
          {text('Content', 'Skriv ut')}
        </Link>
        <p><b>button secondary</b></p>
        <Link
          href={text('href', '#')}
          small={boolean('Small', false)}
          button={boolean('Button', true)}
          buttonSecondary={boolean('Button secondary', true)}
          buttonInherit={boolean('Button inherit', false)}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
          wideButton={boolean('Wide button', false)}
        >
          {text('Content', 'Skriv ut')}
        </Link>
        <p><b>button inherit</b></p>
        <Link
          href={text('href', '#')}
          small={boolean('Small', false)}
          button={boolean('Button', true)}
          buttonSecondary={boolean('Button secondary', false)}
          buttonInherit={boolean('Button inherit', true)}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
          wideButton={boolean('Wide button', false)}
        >
          {text('Content', 'Skriv ut')}
        </Link>
        <p><b>button (small)</b></p>
        <Link
          href={text('href', '#')}
          small={boolean('Small', true)}
          button={boolean('Button', true)}
          buttonSecondary={boolean('Button secondary', false)}
          buttonInherit={boolean('Button inherit', false)}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
          wideButton={boolean('Wide button', false)}
        >
          {text('Content', 'Skriv ut')}
        </Link>
        <p><b>button secondary (small)</b></p>
        <Link
          href={text('href', '#')}
          small={boolean('Small', true)}
          button={boolean('Button', true)}
          buttonSecondary={boolean('Button secondary', true)}
          buttonInherit={boolean('Button inherit', false)}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
          wideButton={boolean('Wide button', false)}
        >
          {text('Content', 'Skriv ut')}
        </Link>
        <p><b>button inherit (small)</b></p>
        <Link
          href={text('href', '#')}
          small={boolean('Small', true)}
          button={boolean('Button', true)}
          buttonSecondary={boolean('Button secondary', false)}
          buttonInherit={boolean('Button inherit', true)}
          color={select(
            'Color',
            { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
            ''
          )}
          wideButton={boolean('Wide button', false)}
        >
          {text('Content', 'Skriv ut')}
        </Link>
      </div>
    </Wrapper>
  ))
  .add('Standard lenke', () => (
    <Wrapper title="Lenker" lead="Standard lenke">
      <Link
        href={text('href', '#')}
        icon={text('Icon', './icons/method.svg')}
        arrow={boolean('Arrow', false)}
        arrowLeft={boolean('Arrow left', false)}
        small={boolean('Small', false)}
        secondary={boolean('Secondary', false)}
        button={boolean('Button', false)}
        buttonSecondary={boolean('Button secondary', false)}
        buttonInherit={boolean('Button inherit', false)}
        color={select(
          'Color',
          { none: '', white: 'white', purple: 'purple', shadow: 'shadow' },
          ''
        )}
        wideButton={boolean('Wide button', false)}
        heading={boolean('Button', false)}
        noUnderline={boolean('Button', false)}
      >
        {text('Content', 'Skriv ut')}
      </Link>
    </Wrapper>
  ));