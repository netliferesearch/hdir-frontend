/*
  Credit: https://stackoverflow.com/questions/49986720/how-to-detect-internet-explorer-11-and-below-versions/49986758
*/

import React, { useEffect } from 'react';
import Alert from './Alert';

const IeBrowserWarning = () => {

  useEffect(()=>{
    // This code can be copied into a main.js at seeds. It should work out of the box. Just remember to change className to class in the html :)
    // Get elements
    const ieWarninElement = document.getElementById('js_ie-warning');
    const ieWarninElementText = document.getElementById('js_ie_warning_text');
    // Get userAgent
    const ua = window.navigator.userAgent;
    const isIeBrowser = ua.match(/MSIE|Trident/) !== null;
    const msie = ua.indexOf('MSIE '); // IE 10 or older
    const trident = ua.indexOf('Trident/'); // IE 11
    // IF ie 10 or older, set text accordingly
    if (msie !== -1) {
      ieWarninElementText.innerHTML = "Din nettleser: Microsoft Internet Explorer v.10 eller eldre"
    }
    // IF ie 11, set text accordingly
    if (trident !== -1) {
      ieWarninElementText.innerHTML ="Din nettleser: Microsoft Internet Explorer v.11"
    }
    // Set display to block IF using IE 11 or older
    if (isIeBrowser) ieWarninElement.classList.toggle('hide');
  }, [])

  return(
    <div id="js_ie-warning" className="hide">
      <div className="l-container">
          <Alert status="warning">
            <div>
              <p> <b> Du benytter en nettleser vi ikke støtter.<a href="#!">Se informasjon om nettlesere</a></b></p>
              <div id="js_ie_warning_text"></div>
            </div>
          </Alert>
        </div>
    </div>
  )
};

export default IeBrowserWarning;


