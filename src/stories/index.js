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

// Components
import Alert from '../components/Alert';
import ArticleIntro from '../components/ArticleIntro';
import ChapterHeading from '../components/ChapterHeading';
import Collapsible from '../components/Collapsible';
import AlertBar from '../components/AlertBar';
import FilterList from '../components/FilterList';
// import Footer from '../components/Footer';
import Heading from '../components/Heading';
import LongShortHeading from '../components/LongShortHeading';
// import MainHeader from '../components/MainHeader';
import PageMeta from '../components/PageMeta';
import Select from '../components/Select';
import Link from '../components/Link';
import Questionnaire from '../components/Questionnaire';
import ListHeading from '../components/ListHeading';
import PressRelease from '../components/PressRelease';
import Box from '../components/Box';
import Button from '../components/Button';
import Quote from '../components/Quote';
import SearchOptions from '../components/SearchOptions';
import SearchResultSection from '../components/SearchResultSection';
import SearchResultSectionSimple from '../components/SearchResultSectionSimple';
import Card from '../components/Card';
import Statistics from '../components/Statistics';
import SquareImage from '../components/SquareImage';
import CheckboxGroup from '../components/CheckboxGroup';
import RadioButtonGroup from '../components/RadioButtonGroup';
import InputSearch from '../components/InputSearch';
import LinkList from '../components/LinkList';

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Alert
      status={select(
        'Status',
        {
          none: 'none',
          success: 'success',
          warning: 'warning',
          danger: 'danger',
          info: 'info'
        },
        'success'
      )}
      small={boolean('Small', false)}
      inline={boolean('Inline', false)}
      title={text('Title', '')}
    >
      {text('Content', 'This is some content, it can be anything')}
    </Alert>
  ));

storiesOf('AlertBar', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <AlertBar
      heading={text(
        'Heading',
        'WHO erklærer Public Health Emergency of International Concern (PHEIC) i forbindelse med influensautbrudd.'
      )}
      lastUpdated={text('Text', 'Mandag 06. oktober 08:15')}
      alertLevel={select(
        'Alert level',
        {
          high: 'high',
          medium: 'medium',
          low: 'low'
        },
        'high'
      )}
    >
      {text('Text', 'This is some content, probably from rich text.')}
    </AlertBar>
  ))
  .addWithStaticMarkup('With content', () => (
    <AlertBar
      heading={text(
        'Heading',
        'WHO erklærer Public Health Emergency of International Concern (PHEIC) i forbindelse med influensautbrudd.'
      )}
      lastUpdated={text('Last updated', 'Mandag 06. oktober 08:15')}
      alertLevel={select(
        'Alert level',
        {
          high: 'high',
          medium: 'medium',
          low: 'low'
        },
        'high'
      )}
    >
      <Link href="#a" buttonInherit>
        Les mer
      </Link>
    </AlertBar>
  ));

storiesOf('ArticleIntro', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup(
    'Basic',
    () => (
      <div className="l-container">
        <div className="row">
          <div className="col-xs-12">
            <ArticleIntro
              heading={text('Heading', 'Arbeid og psykisk helse')}
              lead={text(
                'Lead',
                'Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse.'
              )}
              image={text(
                'Image url (empty string will change the layout)',
                './photo.jpg'
              )}
              imageDescription={text('Image description', 'Bildetekst')}
              feature={boolean('Feature', false)}
            />
          </div>
        </div>
      </div>
    ),
    {
      notes:
        'The row and col classes are used here to show of the "feature" property breaking out of the grid'
    }
  );

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Button arrow={boolean('Arrow', false)} small={boolean('Small', false)}>
      {text('Content', 'Submit')}
    </Button>
  ));

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Box
      color={select(
        'Color',
        {
          none: 'None',
          green: 'Green',
          white: 'White',
          blue: 'Blue',
          blueDark: 'Blue dark',
          yellow: 'Yellow'
        },
        'none'
      )}
      square={boolean('Square', false)}
    >
      {text('Text', 'Here is some content, even HTML')}
    </Box>
  ));

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Card
      heading={text('Heading', 'This is a heading')}
      text={text('Text', 'This is some text')}
      url={text('URL', '#')}
      arrow={select(
        'Arrow',
        { none: '', left: 'left', right: 'right' },
        'right'
      )}
    >
      {text(
        'Content',
        'This is some content, it can be anything, even an image'
      )}
    </Card>
  ))
  .addWithStaticMarkup('With statistics', () => (
    <Card
      heading={text('Heading', 'This is a heading')}
      text={text('Text', 'This is some text')}
      url={text('URL', '#')}
      arrow={select(
        'Arrow',
        { none: '', left: 'left', right: 'right' },
        'right'
      )}
    >
      <Statistics
        bigText={text('Statistics: Big text', '99.9%')}
        smallText={text(
          'Statistics: Small text',
          "This is some text that is smaller, and it doesn't really make any sense here. This is some more text to make it longer."
        )}
        icon={text('Statistics: Icon', './icons/pie.svg')}
      />
    </Card>
  ));

storiesOf('CheckboxGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <CheckboxGroup
      heading={text('Heading', 'Heading')}
      name={text('Name', 'usedForForms')}
      options={object('Options', [
        {
          value: 'a',
          label: 'A',
          disabled: false
        },
        {
          value: 'b',
          label: 'B',
          disabled: true
        },
        {
          value: 'c',
          label: 'C',
          disabled: false
        },
        {
          value: 'd',
          label: 'D'
        }
      ])}
    />
  ));

storiesOf('ChapterHeading', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <ChapterHeading
      heading={text('Heading', 'Heading')}
      subheading={text('Subheading', 'Subheading')}
      line={select(
        'Line',
        { top: 'Top', bottom: 'Bottom', none: 'None' },
        'top'
      )}
      h={select('H', { h1: 'h1', h2: 'h2' }, 'h2')}
      url={text('URL', '')}
    />
  ));

storiesOf('Collapsible', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Collapsible
      heading={text('Heading', 'Heading')}
      subheading={text('Subheading', 'SVAK ANBEFALING')}
      subheadingContent={text('Subheading Content', 'Bla bla bla bla')}
      subtle={boolean('Subtle', false)}
      smallContent={boolean('Small content', false)}
      size={select(
        'Size',
        {
          large: 'large',
          medium: 'medium',
          small: 'small'
        },
        'large'
      )}
      alert={text('Alert', '')}
    >
      {text('Text', 'You can place any content in here.')}
    </Collapsible>
  ));

storiesOf('FilterList', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <FilterList
      list={object('List', [
        'Alt',
        'Retningslinjer',
        'Pakkeforløp',
        'Rundskriv'
      ])}
    />
  ));

storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Heading
      h={select(
        'H(eading)',
        {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6'
        },
        'h1'
      )}
    >
      {text('Text', 'Heading')}
    </Heading>
  ));

storiesOf('InputSearch', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <InputSearch dark={boolean('Dark mode', false)} />
  ));

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Link
      href={text('href', '#')}
      icon={text('Icon', './icons/method.svg')}
      button={boolean('Button', false)}
      buttonSecondary={boolean('Button secondary', false)}
      buttonInherit={boolean('Button inherit', false)}
      small={boolean('Small', false)}
      secondary={boolean('Secondary', false)}
      arrow={boolean('Arrow', false)}
      color={select('Color', { none: '', purple: 'purple' }, '')}
      wideButton={boolean('Wide button', false)}
    >
      {text('Content', 'Skriv ut')}
    </Link>
  ));

storiesOf('SearchOptions', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => <SearchOptions />);

storiesOf('SearchResultSection', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => <SearchResultSection />);

storiesOf('SearchResultSectionSimple', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => <SearchResultSectionSimple />);

import './listItemType';
import './list';

storiesOf('ListHeading', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <ListHeading
      heading={text('Heading', '250 rapporter')}
      selectLabel={text('Sort', 'SORTÉR')}
      selectOptions={object('Options', [
        'Sist publisert',
        'Først publisert',
        'Alfabetisk rekkefølge'
      ])}
    />
  ));

storiesOf('LinkList', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <LinkList
      list={object('Options', [
        {
          href: '#a',
          text: 'Sykdom, tilstand og behandling',
          image: 'http://placehold.it/120x120',
          imageAlt: 'image alt text'
        },
        {
          href: '#a',
          text: 'Autorisasjon og spesialistutdanning',
          image: 'http://placehold.it/120x120',
          imageAlt: 'image alt text',
          active: true
        },
        {
          href: '#a',
          text: 'Psykisk helse',
          image: 'http://placehold.it/120x120',
          imageAlt: 'image alt text'
        },
        {
          href: '#a',
          text: 'Tilskudd og finansiering',
          image: 'http://placehold.it/120x120',
          imageAlt: 'image alt text'
        },
        {
          href: '#a',
          text: 'Folkehelse, ernæring og fysisk aktivitet',
          image: 'http://placehold.it/120x120',
          imageAlt: 'image alt text'
        },
        {
          href: '#a',
          text: 'Statistikk, registre og rapporter',
          image: 'http://placehold.it/120x120',
          imageAlt: 'image alt text'
        },
        {
          href: '#a',
          text: 'Lover og forskrifter',
          image: 'http://placehold.it/100x100',
          imageAlt: 'image alt text'
        }
      ])}
    />
  ));

storiesOf('LongShortHeading', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <LongShortHeading
      long={text(
        'Long heading',
        'Nasjonal faglig retningslinje for svangerskapsdiabetes'
      )}
      short={text('Short heading', 'Svangerskapsdiabetes')}
      icon={text('Icon path', 'https://placehold.it/64x64')}
    />
  ));

import './navList';
import './pages';

storiesOf('PageMeta', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <PageMeta
      publishDate={text('Publish date', '01.01.2015')}
      editDate={text('Edit date', '01.01.2018')}
      url={text('URL', '#')}
    />
  ));

storiesOf('PressRelease', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <div className="row">
      <div className="col-xs-12 col-md-6">
        <PressRelease
          title={text(
            'Title',
            'Barns miljø og sikkerhet / når barnet skader seg'
          )}
          info={text('Info', 'Plakat (pdf)')}
          releaseDate={text('Release date', '01.06.2009')}
          url={text('url', '#')}
          image={text(
            'Image',
            'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png'
          )}
          imageAlt={text('Image alt', 'Some monster that looks scary')}
        />
      </div>
      <div className="col-xs-12 col-md-6">
        <PressRelease
          title={text(
            'Title',
            'Barns miljø og sikkerhet / når barnet skader seg'
          )}
          info={text('Info', 'Plakat (pdf)')}
          releaseDate={text('Release date', '01.06.2009')}
          url={text('url', '#')}
          image={text(
            'Image',
            'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png'
          )}
          imageAlt={text('Image alt', 'Some monster that looks scary')}
        />
      </div>
    </div>
  ));

storiesOf('Quote', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Quote>{text('Text', 'nasjonal faglig retningslinje')}</Quote>
  ));

storiesOf('Questionnaire', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => <Questionnaire />)
  .addWithStaticMarkup('With layout', () => (
    <Box color="grey" square noPadding>
      <div className="l-container">
        <Questionnaire />
      </div>
    </Box>
  ));

storiesOf('References', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <ol>
      <li>
        <a href="#a">I read it on Wikipedia, so it must be true</a>
      </li>
      <li>
        Some book I don't remember the name of, the IBAN number starts with 5.
      </li>
      <li>
        <a href="#b">Just Google it</a>
      </li>
    </ol>
  ));

storiesOf('RadioButtonGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <RadioButtonGroup
      heading={text('Heading', 'Heading')}
      name={text('Name', 'usedForForms')}
      options={object('Options', [
        {
          value: 'a',
          label: 'A',
          disabled: false
        },
        {
          value: 'b',
          label: 'B',
          disabled: true
        },
        {
          value: 'c',
          label: 'C',
          disabled: false
        },
        {
          value: 'd',
          label: 'D'
        }
      ])}
    />
  ));

storiesOf('Statistics', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Statistics
      bigText={text('Big text', '99.9%')}
      smallText={text(
        'Small text',
        "This is some text that is smaller, and it doesn't really make any sense here. This is some more text to make it longer."
      )}
      icon={text('Icon', './icons/pie.svg')}
    />
  ));

storiesOf('SquareImage', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <div style={{ width: '100%', height: '100%' }}>
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
  ));

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Select
      label={text('Label', 'Tilpass siden til meg')}
      placeholder={text('Placeholder', 'Velg')}
      stacked={boolean('Stacked', false)}
      simple={boolean('Simple', false)}
      options={object('Options', [
        'Lege',
        'Kommune',
        'Fysioterapaut',
        'Apotek/bandasjist',
        'Psykolog',
        'Logoped',
        'Kiropraktor',
        'Sykehus/poliklinikk',
        'Tannpleier'
      ])}
    />
  ));
