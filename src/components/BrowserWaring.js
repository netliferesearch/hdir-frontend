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
  'Internet Explorer': 11, // Last and latest 11
  'Safari': 9, // Current 12
}

const checkIfOldBrowser = browserVersion < supportedBrowserVersion[browserName];

const BrowserWaring = () => {
  const [showBrowserWarning, setClosed] = useState(checkIfOldBrowser);
  return(
    <React.Fragment>
      {showBrowserWarning &&
        <div className="l-container">
          <Alert status="danger">
            <div className="row">
              <div className="">
                <b>Du kjører {`${browserName} version ${browserVersion}`}</b> <br/>
                Dette er en eldre nettleser. For din egen sikkerhet og brukeropplevelse oppfordrer vi deg til å oppdatere nettleseren din til en nyere versjon.
              </div>
              <div className=" l-mt-1">
                <Button secondary small onClick={() => setClosed(!showBrowserWarning)}>
                  Lukk
                </Button>
              </div>
            </div>
          </Alert>
        </div>
      }
    </React.Fragment>
  )
};

export default BrowserWaring;
