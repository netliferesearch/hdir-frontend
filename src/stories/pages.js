import React from 'react';
import { storiesOf } from '@storybook/react';
import { HashRouter } from 'react-router-dom';

// Pages
import ArticlePage from '../pages/ArticlePage';
import ArticlePageNoH2 from '../pages/ArticlePageNoH2';
import ArticlePageWithIframe from '../pages/ArticlePageWithIframe';
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
import MedicinePage from '../pages/MedicinePage';
import MedicineListPage from '../pages/MedicineListPage';
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



storiesOf('Malverk/Abonnerings-innstillinger', module)
  .addWithStaticMarkup('Abonnerings-innstillinger', () => (
    <HashRouter>
      <SubscriptionSettingsPage />
    </HashRouter>
  ));
  
  
storiesOf('Malverk/Anbefaling', module)  
.addWithStaticMarkup('Anbefalingsside', () => (
  <HashRouter>
    <RecommendationPage />
  </HashRouter>
))


storiesOf('Malverk/Artikkel', module)
.addWithStaticMarkup('Artikkelside', () => (
  <HashRouter>
    <ArticlePage />
  </HashRouter>
))
.addWithStaticMarkup('Artikkelside ingen h2', () => (
  <HashRouter>
    <ArticlePageNoH2 />
  </HashRouter>
))
.addWithStaticMarkup('Artikkelside med iframe', () => (
  <HashRouter>
    <ArticlePageWithIframe />
  </HashRouter>
));


storiesOf('Malverk/Autorisering', module)
.addWithStaticMarkup('Autorisering', () => (
  <HashRouter>
    <AuthorizationFrontPage />
  </HashRouter>
))
.addWithStaticMarkup('Autorisering steg', () => (
  <HashRouter>
    <AuthorizationStepPage />
  </HashRouter>
))
.addWithStaticMarkup('Autorisering steg 2', () => (
  <HashRouter>
    <AuthorizationStepPage2 />
  </HashRouter>
));

storiesOf('Malverk/Forsider', module)
  .addWithStaticMarkup('Hdir forside', () => (
    <HashRouter>
      <FrontPageHdir />
    </HashRouter>
  ))
  .addWithStaticMarkup('Helfo forside', () => (
    <HashRouter>
      <FrontPageHelfo />
    </HashRouter>
  ));

storiesOf('Malverk/Høringer', module)
  .addWithStaticMarkup('Høring', () => (
    <HashRouter>
      <HearingPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Høring forelderside', () => (
    <HashRouter>
      <ParentHearingPage />
    </HashRouter>
  ));
  
  
storiesOf('Malverk/Kapittelside', module)
  .addWithStaticMarkup('Kapittelside', () => (
    <HashRouter>
      <ChapterPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Kapittelside rapport', () => (
    <HashRouter>
      <ChapterPageReport />
    </HashRouter>
  ));


storiesOf('Malverk/LIS', module)
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
  ));
  
storiesOf('Malverk/Medisiner', module)
  .addWithStaticMarkup('Medisinside', () => (
    <HashRouter>
      <MedicinePage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Liste over medisiner', () => (
    <HashRouter>
      <MedicineListPage />
    </HashRouter>
  ));
  
storiesOf('Malverk/Memo', module)
  .addWithStaticMarkup('Memoside', () => (
    <HashRouter>
      <MemoPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Forelder memoside', () => (
    <HashRouter>
      <ParentMemoPage />
    </HashRouter>
  ));
  
storiesOf('Malverk/Normativt', module)
  .addWithStaticMarkup('Normative innhold side', () => (
    <HashRouter>
      <NormativeContentPage />
    </HashRouter>
  ));
  
  
storiesOf('Malverk/Nyhetsliste', module)
  .addWithStaticMarkup('Nyhetsliste', () => (
    <HashRouter>
      <NewsListPage />
    </HashRouter>
  ));

  
storiesOf('Malverk/Profesjonsvelger', module)
  .addWithStaticMarkup('Profesjonsvelger', () => (
    <HashRouter>
      <ProfessionSelector />
    </HashRouter>
  ));
  
storiesOf('Malverk/Pressemeldinger', module)
  .addWithStaticMarkup('Pressemelding', () => (
    <HashRouter>
      <PressReleasePage />
    </HashRouter>
  ));
  
storiesOf('Malverk/Produktside', module)
  .addWithStaticMarkup('Produktside', () => (
    <HashRouter>
      <ProductPage />
    </HashRouter>
  ));
  
storiesOf('Malverk/Rapport', module)
  .addWithStaticMarkup('Rapport listeside', () => (
    <HashRouter>
      <ReportListPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Rapport', () => (
    <HashRouter>
      <ReportPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Rapportside uten bilde', () => (
    <HashRouter>
      <ReportPageWithoutImage />
    </HashRouter>
  ));
  
  
  
  storiesOf('Malverk/Statistikk', module)
    .addWithStaticMarkup('Statistikkside', () => (
      <HashRouter>
        <StatisticsPage />
      </HashRouter>
    ))
    .addWithStaticMarkup('Statistikk underside', () => (
      <HashRouter>
        <StatisticsSubpage />
      </HashRouter>
    ))
    .addWithStaticMarkup('Statistikk underside 2', () => (
      <HashRouter>
        <StatisticsSubpage2 />
      </HashRouter>
    ));
    
  
storiesOf('Malverk/Stillingsutlysning', module)
  .addWithStaticMarkup('JobPostingPage', () => (
    <HashRouter>
      <JobPostingPage />
    </HashRouter>
  ));
  
storiesOf('Malverk/Søk', module)
  .addWithStaticMarkup('Søkeresultater', () => (
    <HashRouter>
      <SearchResultPage />
    </HashRouter>
  ))
  
  storiesOf('Malverk/Temasider', module)
  .addWithStaticMarkup('Hdir temaside', () => (
    <HashRouter>
    <ThemePage />
    </HashRouter>
  ));
    
  storiesOf('Malverk/Tidligere versjoner', module)
    .addWithStaticMarkup('Tidligere versjoner', () => (
      <HashRouter>
        <EarlierVersionsPage />
      </HashRouter>
    ));
  
  
storiesOf('Malverk/Tilskudd', module)
  .addWithStaticMarkup('Tilskudd side', () => (
    <HashRouter>
      <GrantsPage />
    </HashRouter>
  ))
  .addWithStaticMarkup('Tilskudd underside', () => (
    <HashRouter>
      <GrantsSubPage />
    </HashRouter>
  ));
  
  
storiesOf('Malverk/Transportside', module)
  .addWithStaticMarkup('Transportside', () => (
    <HashRouter>
      <TransportPage />
    </HashRouter>
  ));
