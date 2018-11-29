import React from 'react';
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { HashRouter } from 'react-router-dom';

// Components
import Alert from '../components/Alert';
import ArticleIntro from '../components/ArticleIntro';
import ChapterHeading from '../components/ChapterHeading';
import ContentLabel from '../components/ContentLabel';
import Collapsible from '../components/Collapsible';
import AlertBar from '../components/AlertBar';
import FilterList from '../components/FilterList';
// import Footer from '../components/Footer';
import Heading from '../components/Heading';
import LongShortHeading from '../components/LongShortHeading';
// import MainHeader from '../components/MainHeader';
import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import Select from '../components/Select';
import Link from '../components/Link';
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

// Pages
import ArticlePage from '../pages/ArticlePage';
import ChapterPage from '../pages/ChapterPage';
import FrontPage from '../pages/FrontPage';
import HearingPage from '../pages/HearingPage';
import MemoPage from '../pages/MemoPage';
import NormativeContentPage from '../pages/NormativeContentPage';
import ParentMemoPage from '../pages/ParentMemoPage';
import ProductPage from '../pages/ProductPage';
import RecommendationPage from '../pages/RecommendationPage';
import SearchResultPage from '../pages/SearchResultPage';
import SimpleSerp from '../pages/SimpleSerp';
import LisSpeciality from '../pages/LisSpeciality';
import LisLearning from '../pages/LisLearning';
import LisFrontPage from '../pages/LisFrontPage';
import LisLearningActivities from '../pages/LisLearningActivities';
import ChapterPageReport from '../pages/ChapterPageReport';
import ProfessionSelector from '../pages/ProfessionSelector';
import ReportPageWithoutImage from '../pages/ReportPageWithoutImage';
import FrontPageHelfo from '../pages/FrontPageHelfo';
import FrontPageHdir from '../pages/FrontPageHdir';
import HdirTema from '../pages/HdirTema';
// React specific
import InputSearch from '../components/InputSearch';

// Test data
import { object } from '@storybook/addon-knobs/dist/base';
import { select } from '@storybook/addon-knobs/dist/react';

// TODO: The Storybook-devs are working on an official css toggle addon
// Also remember to remove the copy function in the NPM storybook building script
const changeStyle = name => {
  if (name === 'helfo') require('../static/Helfo.css');
  else if (name === 'hdir') require('../static/App.css');
};

storiesOf('Welcome', module).add('Styles', () => (
  <div>
    <h1 className="h2">
      Digitial design guide for DIP - Digital Innholdsplattform
    </h1>
    <p>
      Press <strong>h</strong> to toggle the component hint helper.
    </p>
    <p>Velg stilsett:</p>
    <ul>
      <li>
        <button
          onClick={() => {
            changeStyle('hdir');
          }}
        >
          Helsedirektoratet
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            changeStyle('helfo');
          }}
        >
          Helfo
        </button>
      </li>
    </ul>
  </div>
));

storiesOf('Pages', module)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Front page', () => (
    <HashRouter>
      <FrontPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Search result page', () => (
    <HashRouter>
      <SearchResultPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Simple search result page', () => (
    <HashRouter>
      <SimpleSerp />
    </HashRouter>
  ))
  .addWithStaticMarkup('Article page', () => (
    <HashRouter>
      <ArticlePage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Hdir Tema', () => (
    <HashRouter>
      <HdirTema />
    </HashRouter>
  ))
  .addWithStaticMarkup('ReportWithoutImage', () => (
    <HashRouter>
      <ReportPageWithoutImage />
    </HashRouter>
  ))
  .addWithStaticMarkup('LIS speciality', () => (
    <HashRouter>
      <LisSpeciality />
    </HashRouter>
  ))
  .addWithStaticMarkup('FrontPageHdir', () => (
    <HashRouter>
      <FrontPageHdir />
    </HashRouter>
  ))
  .addWithStaticMarkup('LIS learning', () => (
    <HashRouter>
      <LisLearning />
    </HashRouter>
  ))
  .addWithStaticMarkup('LIS front page', () => (
    <HashRouter>
      <LisFrontPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('ProfessionSelector', () => (
    <HashRouter>
      <ProfessionSelector />
    </HashRouter>
  ))
  .addWithStaticMarkup('LISLearningActivities', () => (
    <HashRouter>
      <LisLearningActivities />
    </HashRouter>
  ))
  .addWithStaticMarkup('Chapter page', () => (
    <HashRouter>
      <ChapterPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('ChapterPageReport', () => (
    <HashRouter>
      <ChapterPageReport />
    </HashRouter>
  ))
  .addWithStaticMarkup('Hearing page', () => (
    <HashRouter>
      <HearingPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Memo page', () => (
    <HashRouter>
      <MemoPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Parent memo page', () => (
    <HashRouter>
      <ParentMemoPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Product page', () => (
    <HashRouter>
      <ProductPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Recommendation page', () => (
    <HashRouter>
      <RecommendationPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('FrontPageHelfo', () => (
    <HashRouter>
      <FrontPageHelfo />
    </HashRouter>
  ))
  .addWithStaticMarkup('Normative content page', () => (
    <HashRouter>
      <NormativeContentPage />
    </HashRouter>
  ));

storiesOf('ContentLabel', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <ContentLabel>{text('Text', 'nasjonal faglig retningslinje')}</ContentLabel>
  ));

storiesOf('InputSearch', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <InputSearch dark={boolean('Dark mode', false)} />
  ));

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
      overflow={boolean('Overflow', false)}
      url={text('URL', '')}
    />
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

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Button arrow={boolean('Arrow', false)} small={boolean('Small', false)}>
      {text('Content', 'Submit')}
    </Button>
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

storiesOf('ArticleIntro', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup(
    'Basic',
    withNotes(
      'The row and col classes are used here to show of the "feature" property breaking out of the grid'
    )(() => (
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
    ))
  );
{
  boolean('Anchor links', false);
}
{
  text('Heading', 'Overskrift');
}

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

storiesOf('Quote', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Quote>{text('Text', 'nasjonal faglig retningslinje')}</Quote>
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
      <Link href="#" buttonInherit>
        Les mer
      </Link>
    </AlertBar>
  ));

storiesOf('SquareImage', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <SquareImage
      src={text(
        'src',
        'https://about.canva.com/wp-content/uploads/sites/3/2015/01/children_bookcover.png'
      )}
      alt={text('alt', 'Picture of some monster dude')}
    />
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
    >
      {text('Content', 'This is some content, it can be anything')}
    </Alert>
  ));

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Card
      heading={text('Heading', 'This is a heading')}
      text={text('Text', 'This is some text')}
      url={text('URL', '#')}
      leftArrow={boolean('Left arrow', false)}
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
      leftArrow={boolean('Left arrow', false)}
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
