import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './static/App.css';

import FrontPage from './pages/FrontPage';
import SearchResultPage from './pages/SearchResultPage';
import SimpleSerp from './pages/SimpleSerp';
import ArticlePage from './pages/ArticlePage';
import NormativeContentPage from './pages/NormativeContentPage';
import ProductPage from './pages/ProductPage';
import ChapterPage from './pages/ChapterPage';
import HearingPage from './pages/HearingPage';
import ParentHearingPage from './pages/ParentHearingPage';
import MemoPage from './pages/MemoPage';
import ParentMemoPage from './pages/ParentMemoPage';
import RecommendationPage from './pages/RecommendationPage';
import NotFound from './pages/NotFound';
import LisSpeciality from './pages/LisSpeciality';
import MainHeader from './components/MainHeader';
import Footer from './components/Footer';
import LisLearning from './pages/LisLearning';
import LisFrontPage from './pages/LisFrontPage';
import LisLearningActivities from './pages/LisLearningActivities';
import AuthorizationFrontPage from './pages/AuthorizationFrontPage';
import ChapterPageReport from './pages/ChapterPageReport';
import ReportPage from './pages/ReportPage';
import ProfessionSelector from './pages/ProfessionSelector';
import ReportPageWithoutImage from './pages/ReportPageWithoutImage';
import AuthorizationStepPage from './pages/AuthorizationStepPage';
import AuthorizationStepPage2 from './pages/AuthorizationStepPage2';
import SubscriptionSettingsPage from './pages/SubscriptionSettingsPage';

// import { featureListHeading, featureListData } from './testData.js';

class App extends Component {
  componentDidMount() {
    document.addEventListener('keypress', event => {
      if (event.key === 'h') {
        document.querySelector('body').classList.toggle('block-hint');
      }
      if (event.key === 'j') {
        require('./static/Helfo.css');
      }
    });
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <div className="l-container">
              <MainHeader />
            </div>
            <Switch>
              <Route exact path="/" component={FrontPage} />
              <Route path="/produkt" component={ProductPage} />
              <Route path="/søkeresultat" component={SearchResultPage} />
              <Route path="/søkeresultat2" component={SimpleSerp} />
              <Route path="/artikkel" component={ArticlePage} />
              <Route
                path="/rapportside-uten-bilde"
                component={ReportPageWithoutImage}
              />
              <Route path="/kapittel" component={ChapterPage} />
              <Route path="/høringer" component={HearingPage} />
              <Route path="/høringer-forside" component={ParentHearingPage} />
              <Route path="/anbefaling" component={RecommendationPage} />
              <Route path="/rundskriv" component={MemoPage} />
              <Route path="/rundskriv-forside" component={ParentMemoPage} />
              <Route path="/rapport" component={ReportPage} />
              <Route
                path="/normerende-innhold"
                component={NormativeContentPage}
              />
              <Route path="/lis-spesialitet" component={LisSpeciality} />
              <Route path="/lis-læringsmål" component={LisLearning} />
              <Route path="/lis-forside" component={LisFrontPage} />
              <Route
                path="/lis-læringsaktiviteter"
                component={LisLearningActivities}
              />
              <Route path="/rapport-kapittel" component={ChapterPageReport} />
              <Route path="/yrke-velger" component={ProfessionSelector} />
              <Route
                path="/autorisasjon-forside"
                component={AuthorizationFrontPage}
              />
              <Route
                path="/autorisasjon-steg"
                component={AuthorizationStepPage}
              />
              <Route
                path="/autorisasjon-steg-2"
                component={AuthorizationStepPage2}
              />
              <Route
                path="/abonnement-tilpassing"
                component={SubscriptionSettingsPage}
              />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
