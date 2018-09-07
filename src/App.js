import React, { Component } from 'react';
import './App.css';
import FeatureList from './components/FeatureList';

const featureListHeading = 'Nasjonale faglige rettningslinjer og veiledere';
const featureListData = [
  {
    linkText: 'Bipolare lidingar',
    url: '#a',
    contentLabel: 'nasjonal faglig retningslinje'
  },
  {
    linkText: 'Forebygging av selvmord i psykisk helsevern',
    url: '#b',
    contentLabel: ''
  },
  {
    linkText: 'Hjemsendelse av alvorlig psykisk syke',
    url: '#c',
    contentLabel: ''
  }
];

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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
