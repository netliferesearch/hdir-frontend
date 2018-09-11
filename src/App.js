import React, { Component } from 'react';
import './App.css';
import InputText from './components/InputText';

// import { featureListHeading, featureListData } from './testData.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-xs">
          <div className="row center-xs">
            <div
              className="col-xs-12
              col-sm-8
              col-md-6"
            >
              <InputText id="x" label="This is a label" search />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
