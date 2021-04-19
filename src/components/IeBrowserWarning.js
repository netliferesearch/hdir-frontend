/*
  Credit: https://stackoverflow.com/questions/49986720/how-to-detect-internet-explorer-11-and-below-versions/49986758
*/

import React, { useEffect } from 'react';
import Alert from './Alert';

const IeBrowserWarning = () => {

  useEffect(()=>{
   // JS code for toggling the warning is now located in the vanilla-js repo
  }, [])

  return(
    <div id="js_ie-warning" className="hide">
      <div className="l-container l-mb-2">
          <Alert status="warning">
            <div>
              <p> <b> Du benytter en nettleser vi ikke støtter. <a href="#!">Se informasjon om nettlesere</a></b></p>
              <div id="js_ie_warning_text"></div>
            </div>
          </Alert>
        </div>
    </div>
  )
};

export default IeBrowserWarning;


