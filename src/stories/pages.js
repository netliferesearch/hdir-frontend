import React from 'react';
import { storiesOf } from '@storybook/react';
import { HashRouter } from 'react-router-dom';

// Pages
import ArticlePage from '../pages/ArticlePage';
import ArticlePageNoH2 from '../pages/ArticlePageNoH2';
import AuthorizationFrontPage from '../pages/AuthorizationFrontPage';
import AuthorizationStepPage from '../pages/AuthorizationStepPage';
import AuthorizationStepPage2 from '../pages/AuthorizationStepPage2';
import ChapterPage from '../pages/ChapterPage';
import ChapterPageReport from '../pages/ChapterPageReport';
import EarlierVersionsPage from '../pages/EarlierVersionsPage';
import FrontPageHdir from '../pages/FrontPageHdir';
import FrontPageHelfo from '../pages/FrontPageHelfo';
import GrantsPage from '../pages/GrantsPage';
import GrantsSubPage from '../pages/GrantsSubPage';
import HearingPage from '../pages/HearingPage';
import JobPostingPage from '../pages/JobPostingPage';
import LisFrontPage from '../pages/LisFrontPage';
import LisLearning from '../pages/LisLearning';
import LisLearningActivities from '../pages/LisLearningActivities';
import LisSpeciality from '../pages/LisSpeciality';
import MemoPage from '../pages/MemoPage';
import NewsListPage from '../pages/NewsListPage';
import NormativeContentPage from '../pages/NormativeContentPage';
import ParentHearingPage from '../pages/ParentHearingPage';
import ParentMemoPage from '../pages/ParentMemoPage';
import PressReleasePage from '../pages/PressReleasePage';
import ProductPage from '../pages/ProductPage';
import ProfessionSelector from '../pages/ProfessionSelector';
import RecommendationPage from '../pages/RecommendationPage';
import ReportListPage from '../pages/ReportListPage';
import ReportPage from '../pages/ReportPage';
import ReportPageWithoutImage from '../pages/ReportPageWithoutImage';
import SearchResultPage from '../pages/SearchResultPage';
import StatisticsPage from '../pages/StatisticsPage';
import StatisticsSubpage from '../pages/StatisticsSubpage';
import StatisticsSubpage2 from '../pages/StatisticsSubpage2';
import SubscriptionSettingsPage from '../pages/SubscriptionSettingsPage';
import ThemePage from '../pages/ThemePage';
import TransportPage from '../pages/TransportPage';

storiesOf('Pages', module)
  .addWithStaticMarkup('Hdir Front page', () => (
    <HashRouter>
      <FrontPageHdir />
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
  .addWithStaticMarkup('Article page no H2', () => (
    <HashRouter>
      <ArticlePageNoH2 />
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
  .addWithStaticMarkup('EarlierVersionsPage', () => (
    <HashRouter>
      <EarlierVersionsPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('FrontPageHdir', () => (
    <HashRouter>
      <FrontPageHdir />
    </HashRouter>
  ))
  .addWithStaticMarkup('Hdir Tema', () => (
    <HashRouter>
      <ThemePage />
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
  ))
  .addWithStaticMarkup('AuthorizationFrontPage', () => (
    <HashRouter>
      <AuthorizationFrontPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('AuthorizationStepPage', () => (
    <HashRouter>
      <AuthorizationStepPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('AuthorizationStepPage2', () => (
    <HashRouter>
      <AuthorizationStepPage2 />
    </HashRouter>
  ))
  .addWithStaticMarkup('GrantsPage', () => (
    <HashRouter>
      <GrantsPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('GrantsSubPage', () => (
    <HashRouter>
      <GrantsSubPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('JobPostingPage', () => (
    <HashRouter>
      <JobPostingPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('NewsListPage', () => (
    <HashRouter>
      <NewsListPage />
    </HashRouter>
  ))

  .addWithStaticMarkup('ParentHearingPage', () => (
    <HashRouter>
      <ParentHearingPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('PressReleasePage', () => (
    <HashRouter>
      <PressReleasePage />
    </HashRouter>
  ))
  .addWithStaticMarkup('ReportListPage', () => (
    <HashRouter>
      <ReportListPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('ReportPage', () => (
    <HashRouter>
      <ReportPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('StatisticsPage', () => (
    <HashRouter>
      <StatisticsPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('StatisticsSubpage', () => (
    <HashRouter>
      <StatisticsSubpage />
    </HashRouter>
  ))
  .addWithStaticMarkup('StatisticsSubpage2', () => (
    <HashRouter>
      <StatisticsSubpage2 />
    </HashRouter>
  ))
  .addWithStaticMarkup('SubscriptionSettingsPage', () => (
    <HashRouter>
      <SubscriptionSettingsPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('TransportPage', () => (
    <HashRouter>
      <TransportPage />
    </HashRouter>
  ));
