import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="h1">Rundskriv og veiledere til lov og forskrift</h1>
        <p>Dette er noe tekst som er under.</p>
        <div className="col-xs">
          <div className="row center-xs">
            <div
              className="col-xs-12
              col-sm-8
              col-md-6
              col-lg-4"
            >
              <div className="box">Responsive</div>
            </div>
          </div>
        </div>
        <div className="col-xs">
          <div className="row">
            <div className="col-xs-12">
              <div className="box2">Wide</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
