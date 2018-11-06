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
import ChapterPageReport from './pages/ChapterPageReport';
// import { featureListHeading, featureListData } from './testData.js';

class App extends Component {
  componentDidMount() {
    document.addEventListener('keypress', event => {
      if (event.key === 'h') {
        document.querySelector('body').classList.toggle('block-hint');
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
              <Route path="/kapittel" component={ChapterPage} />
              <Route path="/høringer" component={HearingPage} />
              <Route path="/høringer-forside" component={ParentHearingPage} />
              <Route path="/anbefaling" component={RecommendationPage} />
              <Route path="/rundskriv" component={MemoPage} />
              <Route path="/rundskriv-forside" component={ParentMemoPage} />
              <Route
                path="/normerende-innhold"
                component={NormativeContentPage}
              />
              <Route path="/LIS-spesialitet" component={LisSpeciality} />
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
