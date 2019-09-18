import React, { useState } from 'react';
import Alert from './Alert';
import Button from './Button';
import Bowser from "bowser";

const browser = Bowser.getParser(window.navigator.userAgent);
const browserName = browser.getBrowserName();
const browserVersion = parseInt(browser.getBrowser().version, 10);

const supportedBrowserVersion = {
  'Firefox': 65, // Current 68
  'Microsoft Edge': 15, // Current 18
  'Chrome': 73, // Current 76
  'Internet Explorer': 12, // Last and latest 11
  'Safari': 9, // Current 12
}

const checkIfOldBrowser = browserVersion < supportedBrowserVersion[browserName];

const BrowserWarning = () => {
  const [showBrowserWarning, setClosed] = useState(checkIfOldBrowser);
  return(
    <React.Fragment>
      {showBrowserWarning &&
        <div className="l-container">
          <Alert status="danger">
              <p>
                Din nettleser <strong>{browserName} versjon {browserVersion}</strong> er gammel. Du bør oppgradere til en nyere nettleser for en raskere, tryggere og bedre brukeropplevelse.
              </p>
              <div className=" l-mt-1">
                <Button secondary small onClick={() => setClosed(!showBrowserWarning)}>
                  Lukk
                </Button>
              </div>
          </Alert>
        </div>
      }
    </React.Fragment>
  )
};

export default BrowserWarning;
