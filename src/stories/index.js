import React from 'react';
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';

// Components
import Alert from '../components/Alert';
import ArticleIntro from '../components/ArticleIntro';
import ChapterHeading from '../components/ChapterHeading';
import ContentLabel from '../components/ContentLabel';
import Collapsible from '../components/Collapsible';
import FeatureList from '../components/FeatureList';
import FilterList from '../components/FilterList';
// import Footer from '../components/Footer';
import Heading from '../components/Heading';
import LongShortHeading from '../components/LongShortHeading';
// import MainHeader from '../components/MainHeader';
import NavList from '../components/NavList';
import PageMeta from '../components/PageMeta';
import SelectInline from '../components/SelectInline';
import LinkWithIcon from '../components/LinkWithIcon';
import Quote from '../components/Quote';
import SearchOptions from '../components/SearchOptions';
import SearchResultSection from '../components/SearchResultSection';
import SearchResultSectionSimple from '../components/SearchResultSectionSimple';
import ChapterNavigation from '../components/ChapterNavigation';
import Card from '../components/Card';

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
// React specific
import InputSearch from '../components/InputSearch';

// Test data
// import { featureListHeading, featureListData } from '../testData.js';
import { object } from '@storybook/addon-knobs/dist/base';
import { select } from '@storybook/addon-knobs/dist/react';

// TODO: The Storybook-devs are working on an official css toggle addon
// Also remember to remove the copy function in the NPM storybook building script
const changeStyle = name => {
  const style = document.getElementById('main-style');

  if (name === 'hdir') style.setAttribute('href', 'static/hdir.css');
  else if (name === 'helfo') style.setAttribute('href', 'static/helfo.css');
  else {
    console.log('Undefined style name');
    return;
  }
  document.querySelector('head style') &&
    document.querySelector('head style').remove();
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
  .addWithStaticMarkup('Front page', () => <FrontPage />)
  .addWithStaticMarkup('Search result page', () => <SearchResultPage />)
  .addWithStaticMarkup('Simple search result page', () => <SimpleSerp />)
  .addWithStaticMarkup('Article page', () => <ArticlePage />)
  .addWithStaticMarkup('LIS speciality', () => <LisSpeciality />)
  .addWithStaticMarkup('LIS learning', () => <LisLearning />)
  .addWithStaticMarkup('LIS front page', () => <LisFrontPage />)
  .addWithStaticMarkup('ProfessionSelector', () => <ProfessionSelector />)
  .addWithStaticMarkup('LISLearningActivities', () => <LisLearningActivities />)
  .addWithStaticMarkup('Chapter page', () => <ChapterPage />)
  .addWithStaticMarkup('ChapterPageReport', () => <ChapterPageReport />)
  .addWithStaticMarkup('Hearing page', () => <HearingPage />)
  .addWithStaticMarkup('Memo page', () => <MemoPage />)
  .addWithStaticMarkup('Parent memo page', () => <ParentMemoPage />)
  .addWithStaticMarkup('Product page', () => <ProductPage />)
  .addWithStaticMarkup('Recommendation page', () => <RecommendationPage />)
  .addWithStaticMarkup('Normative content page', () => (
    <NormativeContentPage />
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

storiesOf('LinkWithIcon', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <LinkWithIcon
      href={text('href', '#')}
      icon="./icons/method.svg"
      small={boolean('Small', false)}
    >
      {text('Content', 'Skriv ut')}
    </LinkWithIcon>
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

storiesOf('SelectInline', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <SelectInline
      label="Tilpass siden til meg"
      placeholder="Velg"
      options={[
        'Lege',
        'Kommune',
        'Fysioterapaut',
        'Apotek/bandasjist',
        'Psykolog',
        'Logoped',
        'Kiropraktor',
        'Sykehus/poliklinikk',
        'Tannpleier'
      ]}
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

storiesOf('ChapterNavigation', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <ChapterNavigation
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
      {text('Header', 'This is some content, it can be anything')}
      {text('Text', 'nasjonal faglig retningslinje')}
    </ChapterNavigation>
  ));

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => (
    <Card
      heading={text('Heading', 'This is a heading')}
      text={text('Text', 'This is some text')}
      url={text('URL', '#')}
    >
      {text(
        'Content',
        'This is some content, it can be anything, even an image'
      )}
    </Card>
  ));
