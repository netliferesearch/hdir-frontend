import React from 'react';
import { hydrate, render } from 'react-dom';
import '@babel/polyfill';
import 'whatwg-fetch';
import App from './App';
import MainHeader from '../src/components/MainHeader';
import InputSearch from '../src/components/InputSearch';
import SectionSidebar from '../src/components/SectionSidebar';

const rootElement = document.getElementById('root');
const headerElement = document.getElementById('header');
const searchElement = document.getElementById('search');
const sectionSidebarElement = document.getElementById('sectionSidebar');

// If we build for Enonic, we don't want all the content.
// When publishing to Netlify, we want to show everything in this project.
if (!process.env.REACT_APP_ENONICXP) {
  if (rootElement) {
    const name = rootElement.getAttribute('data-name');
    const hideSearch = Boolean(
      rootElement.getAttribute('data-hide-search') !== null
    );
    const links = JSON.parse(rootElement.getAttribute('data-links'));

    if (rootElement.hasChildNodes()) {
      hydrate(
        <App
          name={name}
          hideSearch={hideSearch}
          links={links}
          inputSearchLabel="Søk etter reningslinjer, anbefalinger, lover, statistikk, tilskudd..."
        />,
        rootElement
      );
    } else {
      render(
        <App
          name={name}
          hideSearch={hideSearch}
          links={links}
          inputSearchLabel="Søk etter reningslinjer, anbefalinger, lover, statistikk, tilskudd..."
        />,
        rootElement
      );
    }
  }
}

if (headerElement) {
  const name = headerElement.getAttribute('data-name');
  const hideSearch = Boolean(
    headerElement.getAttribute('data-hide-search') !== null
  );
  const links = JSON.parse(headerElement.getAttribute('data-links'));

  const exampleSuggestions =
    JSON.parse(headerElement.getAttribute('data-example-suggestions')) || [];

  const label = headerElement.getAttribute('data-label') || '';

  render(
    <MainHeader
      name={name}
      hideSearch={hideSearch}
      links={links}
      inputSearchLabel={label}
      exampleSuggestions={exampleSuggestions}
    />,
    headerElement
  );
}
if (searchElement) {
  const hideSuggestions = Boolean(
    searchElement.getAttribute('data-hide-suggestions') !== null
  );

  const dark = Boolean(searchElement.getAttribute('data-dark') !== null);

  const label = searchElement.getAttribute('data-label') || '';

  const exampleSuggestions =
    JSON.parse(headerElement.getAttribute('data-example-suggestions')) || [];

  render(
    <InputSearch
      hideSuggestions={hideSuggestions}
      dark={dark}
      label={label}
      exampleSuggestions={exampleSuggestions}
    />,
    searchElement
  );
}

if (sectionSidebarElement) {
  const heading = sectionSidebarElement.getAttribute('data-heading');
  const icon = sectionSidebarElement.getAttribute('data-icon');
  const headingUrl = sectionSidebarElement.getAttribute('data-heading-url');
  const list =
    sectionSidebarElement.getAttribute('data-list') === null
      ? []
      : JSON.parse(sectionSidebarElement.getAttribute('data-list'));

  render(
    <SectionSidebar
      heading={heading}
      icon={icon}
      list={list}
      headingUrl={headingUrl}
    />,
    sectionSidebarElement
  );
}
