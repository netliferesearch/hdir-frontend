import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';

// Components
import ContentLabel from '../components/ContentLabel';
import FeatureList from '../components/FeatureList';
import NavList from '../components/NavList';

// Pages
import FrontPage from '../pages/FrontPage';
import SearchResultPage from '../pages/SearchResultPage';
import ArticlePage from '../pages/ArticlePage';

// React specific
import InputSearch from '../components/InputSearch';

// Test data
import { featureListHeading, featureListData } from '../testData.js';

storiesOf('Welcome', module).add('to Storybook', () => (
  <div>
    <h1 className="h2">
      Digitial design guide for DIP - Digital Innholdsplattform
    </h1>
    <p>Velg stilsett:</p>
    <ul>
      <li>
        <a href="#">Helsedirektoratet</a>
      </li>
      <li>
        <a href="#">Helfo</a>
      </li>
    </ul>
  </div>
));

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

storiesOf('Pages', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Front page', () => <FrontPage />)
  .addWithStaticMarkup('Search result page', () => <SearchResultPage />)
  .addWithStaticMarkup('Article page', () => <ArticlePage />);

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
            title: 'DEF',
            url: '#'
          },
          {
            title: 'GHI',
            url: '#'
          }
        ]}
      />
    ))
  );
