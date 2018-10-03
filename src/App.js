import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './static/App.css';

import FrontPage from './pages/FrontPage';
import SearchResultPage from './pages/SearchResultPage';
import SimpleSerp from './pages/SimpleSerp';
import ArticlePage from './pages/ArticlePage';
import NotFound from './pages/NotFound';

import MainHeader from './components/MainHeader';

// import { featureListHeading, featureListData } from './testData.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <div className="l-container">
              <MainHeader />
            </div>
            <div>
              <Switch>
                <Route exact path="/" component={FrontPage} />
                <Route path="/søkeresultat" component={SearchResultPage} />
                <Route path="/søkeresultat2" component={SimpleSerp} />
                <Route path="/artikkel" component={ArticlePage} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
