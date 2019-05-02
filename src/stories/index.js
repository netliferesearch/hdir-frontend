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
import AlertBar from '../components/AlertBar';
import ArticleIntro from '../components/ArticleIntro';
import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import Card from '../components/Card';
import MainHeader from '../components/MainHeader';
import ChapterHeading from '../components/ChapterHeading';
import CheckboxGroup from '../components/CheckboxGroup';
import Collapsible from '../components/Collapsible';
import FilterList from '../components/FilterList';
import Footer from '../components/Footer';
import FooterHelfo from '../components/FooterHelfo';
import Heading from '../components/Heading';
import IconCategory from '../components/IconCategory';
import IconWithText from '../components/IconWithText';
import Image from '../components/Image';
import InputSearch from '../components/InputSearch';
import Link from '../components/Link';
import LinkList from '../components/LinkList';
import ListHeading from '../components/ListHeading';
import LongShortHeading from '../components/LongShortHeading';
import MultiSelector from '../components/MultiSelector';
import PageMeta from '../components/PageMeta';
import PressRelease from '../components/PressRelease';
import Questionnaire from '../components/Questionnaire';
import Quote from '../components/Quote';
import RadioButtonGroup from '../components/RadioButtonGroup';
import SectionSidebar from '../components/SectionSidebar';
import Select from '../components/Select';
import SquareImage from '../components/SquareImage';
import Statistics from '../components/Statistics';
import TableExample from '../components/TableExample';
import TransportBlock from '../components/TransportBlock';
import TreatmentsDuration from '../components/TreatmentsDuration';

import './listItemType';
import './list';
import './navList';
import './pages';

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <div className="l-container grid-example">
      <p>
        <code>.l-container</code> is not needed for the grid to work.
      </p>
      <p>
        <code>.grid-example</code> only helps showing the grid visually.
      </p>
      <p>
        The columns always need the row wrapper. A row can not be a direct
        descendant of a row.
      </p>
      <p>
        Unlike the bootstrap-grid and other typical 12 column grids, this grid
        needs to specify the smallest column width. With xs or no specified size
        (i.e. col-xs).
      </p>
      <div className="row">
        <div className="col-xs-12">xs 12</div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6">xs 12, sm-6</div>
        <div className="col-xs-12 col-sm-6">xs 12, sm-6</div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">xs 12, sm-6, md-4</div>
        <div className="col-xs-12 col-sm-6 col-md-4">xs 12, sm-6, md-4</div>
        <div className="col-xs-12 col-sm-6 col-md-4">xs 12, sm-6, md-4</div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          xs 12, sm-6, md-4, lg-3
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          xs 12, sm-6, md-4, lg-3
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          xs 12, sm-6, md-4, lg-3
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          xs 12, sm-6, md-4, lg-3
        </div>
      </div>
    </div>
  ));

storiesOf('IconCategory', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <div style={{ overflow: 'hidden' }}>
      <IconCategory
        heading={text('Text', 'Pakkeforløp')}
        icon={text('Icon', './icons/Pakkeforløp.svg')}
      />
    </div>
  ))
  .addWithStaticMarkup('With url', () => (
    <div style={{ overflow: 'hidden' }}>
      <IconCategory
        heading={text('Text', 'Konferanser')}
        icon={text('Icon', './icons/Konferanser.svg')}
        url={text('Text', '#a')}
      />
    </div>
  ));

storiesOf('IconWithText', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <div style={{ overflow: 'hidden' }}>
      <IconWithText
        icon={text('Icon', './icons/clock.svg')}
        alt={text('alt', 'Time is on my side')}
        text={text('Text', 'Time is on my side')}
      />
    </div>
  ));

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <div style={{ overflow: 'hidden' }}>
      <Image
        src={text('src', 'http://placehold.it/100x100')}
        alt={text('alt', 'Some image')}
        ratio={select('Ratio', ['', '16:9'])}
      />
    </div>
  ));

storiesOf('Breadcrumbs', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Breadcrumbs
      paths={object('Paths', [
        {
          name: 'Forsiden',
          href: '#a'
        },
        {
          name: 'Konferanse',
          href: '#a'
        },
        {
          name: 'Arbeid og psykisk helse',
          href: '#a'
        }
      ])}
    />
  ));

storiesOf('MainHeader', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <MainHeader
      name={text('Name', 'Helsedirektoratet')}
      hideSearch={boolean('Hide search', false)}
      links={object('List', [
        { name: 'Om Helsedirektoratet', href: '#' },
        { name: 'English', href: '#' }
      ])}
      inputSearchLabel={text('Input search label', 'Søk')}
      exampleSuggestions={object('List', ['aaa', 'bbbb', 'ccccc'])}
    />
  ));

storiesOf('TransportBlock', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <TransportBlock
      title={text('Title', 'Tittel')}
      text={text('Text', 'Her er det noe tekst')}
    />
  ));

storiesOf('SectionSidebar', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <SectionSidebar
      heading={text('Heading', 'Some heading')}
      headingUrl={text('Heading Url', '#a')}
      icon={text('Icon', 'http://placehold.it/50x50')}
      list={object('List', [
        {
          title: 'KAPITTEL 1',
          url: '#',
          description: 'Kost og fysisk aktivitet ved svangerskaps-diabetes',
          children: [
            {
              description: 'Underkapittel',
              url: '#',
              prefix: '1.1'
            },
            {
              description: 'Underkapittel',
              active: true,
              url: '#',
              prefix: '1.2'
            }
          ]
        },
        {
          title: 'KAPITTEL 2',
          url: '#',
          description: 'Diagnostikk og tiltak'
        },
        {
          title: 'KAPITTEL 3',
          url: '#',
          description: 'Nytt kapittel'
        }
      ])}
    />
  ));

storiesOf('Vertical spacing (example)', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <>
      <Box>0</Box>
      <div className="l-mt-1">
        <Box>1 top</Box>
      </div>
      <div className="l-mt-2">
        <Box>2 top</Box>
      </div>
      <div className="l-mt-3">
        <Box>3 top</Box>
      </div>
      <div className="l-mt-4">
        <Box>4 top</Box>
      </div>
      <div className="l-mt-5">
        <Box>5 top</Box>
      </div>
    </>
  ));

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
  .addWithStaticMarkup('Basic', () => (
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
  ));

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Button
      arrow={boolean('Arrow', false)}
      download={boolean('Download', false)}
      secondary={boolean('Secondary', false)}
      secondaryDark={boolean('Secondary dark', false)}
      plain={boolean('Plain', false)}
      small={boolean('Small', false)}
    >
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
  ))
  .addWithStaticMarkup('Horizontal', () => (
    <Card
      heading={text('Heading', 'This is a heading')}
      text={text('Text', 'This is some text')}
      url={text('URL', '#')}
      arrow={select(
        'Arrow',
        { none: '', left: 'left', right: 'right' },
        'right'
      )}
      horizontal={boolean('Horizontal', true)}
      content={<p>This is some text</p>}
    >
      <Box color="blueDark" square>
        <img
          src={text('Statistics: Icon', './icons/pie.svg')}
          alt="Illustrasjon av et kakediagram"
          className="b-icon b-icon--large"
        />
      </Box>
    </Card>
  ))
  .addWithStaticMarkup('With image', () => (
    <Card
      url={text('URL', '#')}
      arrow={select(
        'Arrow',
        { none: '', left: 'left', right: 'right' },
        'right'
      )}
      mainContent={
        <>
          <h3>De minste tåler minst</h3>
          <p>Hva skjer hvis antibiotika ikke lenger virker?</p>
        </>
      }
    >
      <img src="http://placehold.it/500x150" alt="alt..." />
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
      subheading={text('Subheading', 'Svak anbefaling')}
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
  ))
  .addWithStaticMarkup('With treatment duration', () => (
    <Collapsible
      heading={text('Heading', 'Heading')}
      treatmentsDuration={text('Treatments duration', '13 hours and 37 minutes')}
      smallContent={boolean('Small content', true)}
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

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Box square color="blueDark">
      <div className="l-container">
        <Footer />
      </div>
    </Box>
  ));

storiesOf('FooterHelfo', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Box square color="blueDark">
      <div className="l-container">
        <FooterHelfo />
      </div>
    </Box>
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
    <InputSearch dark={boolean('Dark mode', false)} label={text('Label', '')} />
  ));

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
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
  ));

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
          image: 'http://placehold.it/64x64',
          imageAlt: 'image alt text'
        },
        {
          href: '#a',
          text: 'Autorisasjon og spesialistutdanning',
          image: 'http://placehold.it/64x64',
          imageAlt: 'image alt text',
          active: true
        },
        {
          href: '#a',
          text: 'Psykisk helse',
          image: 'http://placehold.it/64x64',
          imageAlt: 'image alt text'
        },
        {
          href: '#a',
          text: 'Tilskudd og finansiering',
          image: 'http://placehold.it/64x64',
          imageAlt: 'image alt text'
        },
        {
          href: '#a',
          text: 'Folkehelse, ernæring og fysisk aktivitet',
          image: 'http://placehold.it/64x64',
          imageAlt: 'image alt text'
        },
        {
          href: '#a',
          text: 'Statistikk, registre og rapporter',
          image: 'http://placehold.it/64x64',
          imageAlt: 'image alt text'
        },
        {
          href: '#a',
          text: 'Lover og forskrifter',
          image: 'http://placehold.it/64x64',
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

storiesOf('MultiSelector', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <MultiSelector
      buttonText={text('Button text', 'Velg tema')}
      confirmText={text('Confirm text', 'Bekreft tema')}
      handleChange={arg => {
        console.table(arg);
      }}
      options={object('Options', [
        {
          value:
            'Kommunalt pasient- og brukerregister sdfgs dfgsd fgsd fgdfg dsfg sdfg',
          label:
            'Kommunalt pasient- og brukerregister sdfgs dfgsd fgsd fgdfg dsfg sdfg',
          checked: true
        },
        {
          value: 'Kvalitetsindikator',
          label: 'Kvalitetsindikator',
          checked: false
        },
        {
          value: 'Norsk pasientregister',
          label: 'Norsk pasientregister',
          checked: false
        },
        {
          value: 'Kommunalt pasient- og brukerregister',
          label: 'Kommunalt pasient- og brukerregister',
          checked: false
        },
        {
          value: 'Kvalitetsindikator',
          label: 'Kvalitetsindikator',
          checked: false
        },
        {
          value: 'Norsk pasientregister',
          label: 'Norsk pasientregister',
          checked: false
        },
        {
          value: 'Kommunalt pasient- og brukerregister',
          label: 'Kommunalt pasient- og brukerregister',
          checked: false
        },
        {
          value: 'Kvalitetsindikator',
          label: 'Kvalitetsindikator',
          checked: false
        },
        {
          value: 'Norsk pasientregister',
          label: 'Norsk pasientregister',
          checked: false
        }
      ])}
    />
  ));

storiesOf('PageMeta', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <PageMeta
      publishDate={text('Publish date', '01. januar 2015')}
      editDate={text('Edit date', '1. januar 2018')}
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
          releaseDate={text('Release date', '01. juni 2009')}
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
          releaseDate={text('Release date', '01. juni 2009')}
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
  ))
  .addWithStaticMarkup('With paragraphs', () => (
    <Quote>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>
      <ul>
        <li>a. abc</li>
        <li>b. def</li>
        <li>c. ghi</li>
      </ul>
      <ul>
        <li>1. abc</li>
        <li>2. def</li>
        <li>3. ghi</li>
      </ul>
      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
        ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam, nisi ut aliquid ex ea commodi consequatur?
      </p>
      <ol>
        <li>abc</li>
        <li>def</li>
        <li>ghi</li>
      </ol>
      <p>
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
      <p className="b-quote__footnote">
        Fotnote:
        <br />0 Tilføyd ved lov 24 juni 2011 nr. 30 (ikr. 1 jan 2012 iflg. res.
        16 des 2011 nr. 1252). Endres ved lov 16 juni 2017 nr. 55 (ikr. fra den
        tid Kongen bestemmer).
      </p>
    </Quote>
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

storiesOf('TableExample', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => <TableExample />);

storiesOf('TreatmentsDuration', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <TreatmentsDuration
      duration="13 hours and 37 minuts"
    />
  ));
