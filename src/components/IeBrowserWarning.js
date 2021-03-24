import React, { useEffect } from 'react';
import Alert from './Alert';

const style = {
  display:'none',
}

const IeBrowserWarning = () => {

  useEffect(()=>{
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
      ieWarninElementText.innerHTML ="Din nettleser <strong> Microsoft Internet Explorer versjon 10 eller eldre</strong> er gammel. Du bør oppgradere til en nyere nettleser for en raskere, tryggere og bedre brukeropplevelse."

    }
    // IF ie 11, set text accordingly
    if (trident !== -1) {
      ieWarninElementText.innerHTML ="Din nettleser <strong> Microsoft Internet Explorer versjon 11</strong> er gammel. Du bør oppgradere til en nyere nettleser for en raskere, tryggere og bedre brukeropplevelse."
    }
    // Set display to block IF using IE 11 or older
    if (isIeBrowser) ieWarninElement.style.display = "block";
  }, [])


  return(
    <div id="js_ie-warning" style={style}>
    <div className="l-container">
        <Alert status="danger">
            <p>
              <span id="js_ie_warning_text"></span>
            </p>
        </Alert>
      </div>
  </div>
  )
};

export default IeBrowserWarning;


