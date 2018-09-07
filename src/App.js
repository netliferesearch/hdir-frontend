import React, { Component } from 'react';
import './App.css';
import FeatureList from './components/FeatureList';

import { featureListHeading, featureListData } from './testData.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <br />
        <br />
        <div className="col-xs">
          <div className="row center-xs">
            <div
              className="col-xs-12
              col-sm-8
              col-md-6"
            >
              <FeatureList
                heading={featureListHeading}
                list={featureListData}
                icon="x"
              />
              <br />
              <FeatureList
                heading={featureListHeading}
                list={featureListData}
                secondary
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
