import React, { Component } from 'react';
import {
  BrowserRouter as HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css';

import FrontPage from './pages/FrontPage';
import SearchResultPage from './pages/SearchResultPage';
import ArticlePage from './pages/ArticlePage';
import NotFound from './pages/NotFound';

import InputSearch from './components/InputSearch';

// import { featureListHeading, featureListData } from './testData.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter hashType="noslash">
          <div>
            <ul>
              <li>
                <Link to="/">Forsiden</Link>
              </li>
              <li>
                <Link to="/søkeresultat">Søkeresultat</Link>
              </li>
              <li>
                <Link to="/artikkel">Artikkel</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={FrontPage} />
              <Route path="/søkeresultat" component={SearchResultPage} />
              <Route path="/artikkel" component={ArticlePage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
        <div className="col-xs">
          <div className="row center-xs">
            <div
              className="col-xs-12
              col-sm-10
              col-md-8"
            >
              <div className="is-wrapper">
                <p className="some-label">
                  Søk etter reningslinjer, anbefalinger, lover, statistikk,
                  tilskudd... (Prøv å skrive "diabetes")
                </p>
                <InputSearch id="x" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
