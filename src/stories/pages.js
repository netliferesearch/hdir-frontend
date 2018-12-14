import React from 'react';
import { storiesOf } from '@storybook/react';
import { HashRouter } from 'react-router-dom';

import { checkA11y } from '@storybook/addon-a11y';

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

storiesOf('Pages', module)
  .addDecorator(checkA11y)
  .addWithStaticMarkup('Hdir Front page', () => (
    <HashRouter>
      <FrontPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Helfo Front page', () => (
    <HashRouter>
      <FrontPageHelfo />
    </HashRouter>
  ))
  .addWithStaticMarkup('Article page', () => (
    <HashRouter>
      <ArticlePage />
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
  .addWithStaticMarkup('FrontPageHdir', () => (
    <HashRouter>
      <FrontPageHdir />
    </HashRouter>
  ))
  .addWithStaticMarkup('Hdir Tema', () => (
    <HashRouter>
      <HdirTema />
    </HashRouter>
  ))
  .addWithStaticMarkup('Hearing page', () => (
    <HashRouter>
      <HearingPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('LIS front page', () => (
    <HashRouter>
      <LisFrontPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('LIS learning', () => (
    <HashRouter>
      <LisLearning />
    </HashRouter>
  ))
  .addWithStaticMarkup('LIS speciality', () => (
    <HashRouter>
      <LisSpeciality />
    </HashRouter>
  ))
  .addWithStaticMarkup('LISLearningActivities', () => (
    <HashRouter>
      <LisLearningActivities />
    </HashRouter>
  ))
  .addWithStaticMarkup('Memo page', () => (
    <HashRouter>
      <MemoPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Normative content page', () => (
    <HashRouter>
      <NormativeContentPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Parent memo page', () => (
    <HashRouter>
      <ParentMemoPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('ProfessionSelector', () => (
    <HashRouter>
      <ProfessionSelector />
    </HashRouter>
  ))
  .addWithStaticMarkup('Product page', () => (
    <HashRouter>
      <ProductPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('ReportWithoutImage', () => (
    <HashRouter>
      <ReportPageWithoutImage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Recommendation page', () => (
    <HashRouter>
      <RecommendationPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Search result page', () => (
    <HashRouter>
      <SearchResultPage />
    </HashRouter>
  ));
