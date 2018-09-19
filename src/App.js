import React, { Component } from 'react';
import './App.css';
import InputSearch from './components/InputSearch';

// import { featureListHeading, featureListData } from './testData.js';

class App extends Component {
  render() {
    return (
      <div className="App">
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
