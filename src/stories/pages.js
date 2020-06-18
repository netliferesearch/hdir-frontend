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
import ListBrochures from '../pages/ListBrochures';
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



storiesOf('Malverk', module)
  .add('Abonnerings-innstillinger', () => (
    <HashRouter>
      <SubscriptionSettingsPage />
    </HashRouter>
  ));
  
  
storiesOf('Malverk', module)  
.add('Anbefalingsside', () => (
  <HashRouter>
    <RecommendationPage />
  </HashRouter>
))


storiesOf('Malverk/Artikkel', module)
.add('Artikkelside', () => (
  <HashRouter>
    <ArticlePage />
  </HashRouter>
))
.add('Artikkelside ingen h2', () => (
  <HashRouter>
    <ArticlePageNoH2 />
  </HashRouter>
))
.add('Artikkelside med iframe', () => (
  <HashRouter>
    <ArticlePageWithIframe />
  </HashRouter>
));


storiesOf('Malverk/Autorisering', module)
.add('Autorisering', () => (
  <HashRouter>
    <AuthorizationFrontPage />
  </HashRouter>
))
.add('Autorisering steg', () => (
  <HashRouter>
    <AuthorizationStepPage />
  </HashRouter>
))
.add('Autorisering steg 2', () => (
  <HashRouter>
    <AuthorizationStepPage2 />
  </HashRouter>
));

storiesOf('Malverk/Forsider', module)
  .add('Hdir forside', () => (
    <HashRouter>
      <FrontPageHdir />
    </HashRouter>
  ))
  .add('Helfo forside', () => (
    <HashRouter>
      <FrontPageHelfo />
    </HashRouter>
  ));

storiesOf('Malverk/Høringer', module)
  .add('Høring', () => (
    <HashRouter>
      <HearingPage />
    </HashRouter>
  ))
  .add('Høring forelderside', () => (
    <HashRouter>
      <ParentHearingPage />
    </HashRouter>
  ));
  
  
storiesOf('Malverk/Kapittelside', module)
  .add('Kapittelside', () => (
    <HashRouter>
      <ChapterPage />
    </HashRouter>
  ))
  .add('Kapittelside rapport', () => (
    <HashRouter>
      <ChapterPageReport />
    </HashRouter>
  ));


storiesOf('Malverk/LIS', module)
  .add('LIS front page', () => (
    <HashRouter>
      <LisFrontPage />
    </HashRouter>
  ))
  .add('LIS learning', () => (
    <HashRouter>
      <LisLearning />
    </HashRouter>
  ))
  .add('LIS speciality', () => (
    <HashRouter>
      <LisSpeciality />
    </HashRouter>
  ))
  .add('LISLearningActivities', () => (
    <HashRouter>
      <LisLearningActivities />
    </HashRouter>
  ));
  
storiesOf('Malverk/Medisiner', module)
  .add('Medisinside', () => (
    <HashRouter>
      <MedicinePage />
    </HashRouter>
  ))
  .add('Liste over medisiner', () => (
    <HashRouter>
      <MedicineListPage />
    </HashRouter>
  ));
  
storiesOf('Malverk/Memo', module)
  .add('Memoside', () => (
    <HashRouter>
      <MemoPage />
    </HashRouter>
  ))
  .add('Forelder memoside', () => (
    <HashRouter>
      <ParentMemoPage />
    </HashRouter>
  ));
  
storiesOf('Malverk', module)
  .add('Normativt', () => (
    <HashRouter>
      <NormativeContentPage />
    </HashRouter>
  ));
  
  
storiesOf('Malverk', module)
  .add('Nyhetsliste', () => (
    <HashRouter>
      <NewsListPage />
    </HashRouter>
  ));

  
storiesOf('Malverk', module)
  .add('Profesjonsvelger', () => (
    <HashRouter>
      <ProfessionSelector />
    </HashRouter>
  ));
  
storiesOf('Malverk', module)
  .add('Brosjyrer liste', () => (
    <HashRouter>
      <ListBrochures />
    </HashRouter>
  ));
  
storiesOf('Malverk', module)
  .add('Produktside', () => (
    <HashRouter>
      <ProductPage />
    </HashRouter>
  ));
  
storiesOf('Malverk/Rapport', module)
  .add('Rapport listeside', () => (
    <HashRouter>
      <ReportListPage />
    </HashRouter>
  ))
  .add('Rapport', () => (
    <HashRouter>
      <ReportPage />
    </HashRouter>
  ))
  .add('Rapportside uten bilde', () => (
    <HashRouter>
      <ReportPageWithoutImage />
    </HashRouter>
  ));
  
  
  
  storiesOf('Malverk/Statistikk', module)
    .add('Statistikkside', () => (
      <HashRouter>
        <StatisticsPage />
      </HashRouter>
    ))
    .add('Statistikk underside', () => (
      <HashRouter>
        <StatisticsSubpage />
      </HashRouter>
    ))
    .add('Statistikk underside 2', () => (
      <HashRouter>
        <StatisticsSubpage2 />
      </HashRouter>
    ));
    
  
storiesOf('Malverk', module)
  .add('Stillingsutlysning', () => (
    <HashRouter>
      <JobPostingPage />
    </HashRouter>
  ));
  
storiesOf('Malverk', module)
  .add('Søkeresultater', () => (
    <HashRouter>
      <SearchResultPage />
    </HashRouter>
  ))
  
  storiesOf('Malverk', module)
  .add('Temaside HDIR', () => (
    <HashRouter>
    <ThemePage />
    </HashRouter>
  ));
    
  storiesOf('Malverk', module)
    .add('Tidligere versjoner', () => (
      <HashRouter>
        <EarlierVersionsPage />
      </HashRouter>
    ));
  
  
storiesOf('Malverk/Tilskudd', module)
  .add('Tilskudd side', () => (
    <HashRouter>
      <GrantsPage />
    </HashRouter>
  ))
  .add('Tilskudd underside', () => (
    <HashRouter>
      <GrantsSubPage />
    </HashRouter>
  ));
  
  
storiesOf('Malverk', module)
  .add('Transportside', () => (
    <HashRouter>
      <TransportPage />
    </HashRouter>
  ));
