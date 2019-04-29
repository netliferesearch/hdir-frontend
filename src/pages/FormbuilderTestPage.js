import React from 'react';
import { default as LinkComp } from '../components/Link';

const formbuilderGeneratedMarkup = () => (
  <section data-portal-component-type="part">
    <h2>Testskjema</h2>
    <div id="xp-formbuilder-introtext"></div>
    <div id="xp-formbuilder-successmessage">
      <p>Takk for skjemaet</p>
    </div>
    <form id="testskjema" className="ajax-submit xp-formbuilder-form" action="/test/testskjema/_/component/main/0" method="Send inn skjema" enctype="multipart/form-data">
      <fieldset>
        <div className="xp-form-input">
          <label for="Navn">
            <span>Navn</span>
            <span className="required-star">*</span>
            <input type="text" id="Navn" name="Navn" value="" size="35" placeholder="Her skriver du navnet ditt" className="xp-input" required="required"/>
          </label>
        </div>
        <div className="xp-form-input">
          <label for="E-postadresse">
            <span>E-postadresse</span>
            <span className="required-star">*</span>
            <input type="email" id="E-postadresse" name="E-postadresse" value="" size="35" placeholder="Din e-postadresse" className="xp-input" required="required"/>
          </label>
        </div>
        <div className="xp-form-input">
          <label for="Fortell%20om%20deg%20selv">
            <span>Fortell om deg selv</span>
          </label>
          <textarea cols="10" rows="5" type="textarea" id="Fortell%20om%20deg%20selv" name="Fortell%20om%20deg%20selv" size="34" placeholder="Skriv litt om deg selv" className="xp-input"/>
        </div>
        <div className="xp-form-input">
          <label for="Hva%20er%20din%20rolle%20i%20prosjektet%3F">
            <span>Hva er din rolle i prosjektet?</span>
          </label>
          <div>
            <input type="radio" id="Hva%20er%20din%20rolle%20i%20prosjektet%3F" name="Hva%20er%20din%20rolle%20i%20prosjektet%3F" value="utvikler" text="option" checked="checked"/>Utvikler
            <br/>
          </div>
          <div>
            <input type="radio" id="Hva%20er%20din%20rolle%20i%20prosjektet%3F" name="Hva%20er%20din%20rolle%20i%20prosjektet%3F" value="prosjektleder" text="option"/>Prosjektleder
            <br/>
          </div>
        </div>
        <div className="xp-form-input">
          <label for="Hva%20er%20din%20alder%3F">
            <span>Hva er din alder?</span>
          </label>
          <select id="Hva%20er%20din%20alder%3F" name="Hva%20er%20din%20alder%3F">
            <option value="" selected="selected" disabled="disabled">Velg alder</option>
            <option value="1829" text="option">18-29</option>
            <option value="3039" text="option">30-39</option>
            <option value="4049" text="option">40-49</option>
            <option value="5059" text="option">50-59</option>
          </select>
        </div>
        <div className="xp-form-input">
          <label for="Jeg%20aksepterer%20at%20skjemaet%20sendes%20inn">
            <input type="checkbox" id="Jeg%20aksepterer%20at%20skjemaet%20sendes%20inn" name="Jeg%20aksepterer%20at%20skjemaet%20sendes%20inn" className="xp-form-checkbox"/>
            <span>Jeg aksepterer at skjemaet sendes inn</span>
          </label>
        </div>
        <div className="xp-form-input">
          <label for="Last%20opp%20CV">
            <span>Last opp CV</span>
            <input type="file" id="Last%20opp%20CV" name="Last%20opp%20CV" value="" size="34" className="xp-input" capture="false"/>
          </label>
        </div>
        <div className="xp-form-input">
          <label for="Hva%20er%20din%20arbeidserfaring%3F">
            <span>Hva er din arbeidserfaring?</span>
          </label>
          <div>
            <label>
              <input type="checkbox" id="Hva%20er%20din%20arbeidserfaring%3F" name="Hva%20er%20din%20arbeidserfaring%3F" value="html" text="option"/>Har erfaring med HTML og CSS
            </label>
            <label>
              <input type="checkbox" id="Hva%20er%20din%20arbeidserfaring%3F" name="Hva%20er%20din%20arbeidserfaring%3F" value="js" text="option"/>Har erfaring med JavaScript
            </label>
            <label>
              <input type="checkbox" id="Hva%20er%20din%20arbeidserfaring%3F" name="Hva%20er%20din%20arbeidserfaring%3F" value="cnet" text="option"/>Har erfaring med C# og .NET
            </label>
          </div>
        </div>
      </fieldset>
      <input id="xp-formbuilder-submit" className="btn btn-primary xp-submit" type="submit" value="Send inn skjema" data-captcha="false"/>
    </form>
  </section>
);

const FormbuilderTestPage = () => (
  <>
    <div className="l-container l-mt-3">
      <div className="l-mt-2">
        <LinkComp buttonSecondary href="/storybook">
          Go to Storybook
        </LinkComp>
      </div>
    </div>
    <div className="l-container l-mt-3 l-mb-5">
      {formbuilderGeneratedMarkup()}
    </div>
  </>
);

export default FormbuilderTestPage;
