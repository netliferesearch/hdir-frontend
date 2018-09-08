import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Welcome } from '@storybook/react/demo';
import ContentLabel from '../components/ContentLabel';
import FeatureList from '../components/FeatureList';

import { featureListHeading, featureListData } from '../testData.js';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('FeatureList', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('Basic', () => (
    <FeatureList
      heading={text('Heading', featureListHeading)}
      list={featureListData}
      icon={boolean('Show icon', true)}
    />
  ));

storiesOf('ContentLabel', module)
  .addDecorator(withKnobs)
  .addWithStaticMarkup('Basic', () => (
    <ContentLabel>{text('Text', 'nasjonal faglig retningslinje')}</ContentLabel>
  ));
