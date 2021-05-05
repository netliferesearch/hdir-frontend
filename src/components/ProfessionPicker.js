import React from 'react';
/*
  Reload the js so the external vanilla-js can find the elements after router change
*/
const reloadExternalJs = () => {
  const addScript = document.createElement('script');
  addScript.setAttribute('src', './javascript/hdir-vanilla.js');
  document.body.appendChild(addScript);
}

const ProfessionPicker = ({frontPage}) => {
  reloadExternalJs()
  return (
    frontPage ? (
      <div className="b-profession-picker">
        <label htmlFor="profession-selector" className="b-profession-picker__label"><button className="b-button--clean b-profession-picker__button" id="profession-picker">Tilpass innholdet til meg</button></label>
        <div className="b-select l-mt-1 l-mb-3 col-md-6 hide" id="profession-picker__content" hidden>
          <select id="profession-selector" className="b-select__select" aria-hidden="true">
            <option disabled="" className="b-select__option">Velg målgruppe</option>
            <option className="b-select__option">Lege</option>
          </select>
        </div>
      </div>
    ) : (
        <div className="b-profession-picker b-profession-picker--negative-margin">
          <label
            htmlFor="profession-selector"
            className="b-profession-picker__label"
          >
            <button
              className="b-button--clean b-profession-picker__button"
              id="profession-picker"
            >
              Tilpass innholdet til meg
                  </button>
          </label>
          <div
            className="b-select l-mt-1 l-mb-3 col-md-6 hide"
            id="profession-picker__content"
            hidden
          >
            <select
              id="profession-selector"
              className="b-select__select"
              aria-hidden="true"
            >
              <option disabled="" className="b-select__option">
                Velg målgruppe
                    </option>
              <option className="b-select__option">Lege</option>
            </select>
          </div>
        </div>
    )
    
  )
};

ProfessionPicker.propTypes = {
};

export default ProfessionPicker;
