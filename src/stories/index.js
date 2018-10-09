import React from 'react';
import { storiesOf } from '@storybook/react';
// import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';

// Components
import ContentLabel from '../components/ContentLabel';
import FeatureList from '../components/FeatureList';
import NavList from '../components/NavList';
// import Footer from '../components/Footer';
// import MainHeader from '../components/MainHeader';
import PortableArticle from '../components/PortableArticle';
import ArticleIntro from '../components/ArticleIntro';
import SearchOptions from '../components/SearchOptions';
import SearchResultSection from '../components/SearchResultSection';
import SearchResultSectionSimple from '../components/SearchResultSectionSimple';

// Pages
import FrontPage from '../pages/FrontPage';
import SearchResultPage from '../pages/SearchResultPage';
import SimpleSerp from '../pages/SimpleSerp';
import ArticlePage from '../pages/ArticlePage';

// React specific
import InputSearch from '../components/InputSearch';

// Test data
import { featureListHeading, featureListData } from '../testData.js';

// TODO: The Storybook-devs are working on an official css toggle addon
// Also remember to remove the copy function in the NPM storybook building script
const changeStyle = name => {
  const style = document.getElementById('main-style');
  console.log('click my dude');
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
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Front page', () => <FrontPage />)
  .addWithStaticMarkup('Search result page', () => <SearchResultPage />)
  .addWithStaticMarkup('Simple search result page', () => <SimpleSerp />)
  .addWithStaticMarkup('Article page', () => <ArticlePage />);

storiesOf('FeatureList', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup(
    'Basic',
    withNotes('A very simple component')(() => (
      <FeatureList
        heading={text('Heading', featureListHeading)}
        list={featureListData}
        icon={boolean('Show icon', true)}
      />
    ))
  );

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
        list={[
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
        ]}
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
        list={[
          {
            title:
              'Diagnostisk pakkeforløp for pasienter med uspesifikke symptomer på alvorlig sykdom som kan være kreft',
            url: '#',
            type: 'nasjonale-faglige-retningslinjer'
          },
          {
            title: 'DEF',
            url: '#',
            type: 'rundskriv'
          },
          {
            title:
              'Behandling og rehabilitering av rusmiddelproblemer og avhengighet. Behandling og rehabilitering av rusmiddelproblemer og avhengighet',
            url: '#',
            type: 'nasjonale-faglige-retningslinjer'
          }
        ]}
      />
    ))
  );

/*
storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => <Footer />);

storiesOf('MainHeader', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => <MainHeader />);
*/

storiesOf('PortableArticle', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Basic', () => <PortableArticle />);

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
  .addWithStaticMarkup('Basic', () => (
    <ArticleIntro
      heading={text('Heading', 'Arbeid og psykisk helse')}
      lead={text(
        'Lead',
        'Arbeidslivet bidrar til mange helsefremmende faktorer for de fleste. Arbeid er med på å sikre personlig økonomi, gi struktur i hverdagen, skape tilhørighet og gi økt selvfølelse.'
      )}
      publishDate={text('Publish date', '11.08.2008')}
      editDate={text('Edit date', '11.08.2018')}
      image={text(
        'Image url (empty string will change the layout)',
        './photo.jpg'
      )}
      imageDescription={text('Image description', 'Bildetekst')}
    />
  ));
{
  boolean('Anchor links', false);
}
{
  text('Heading', 'Overskrift');
}
