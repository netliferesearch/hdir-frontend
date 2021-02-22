import React from 'react';
import { hydrate, render } from 'react-dom';
import '@babel/polyfill';
import 'whatwg-fetch';
import App from './App';
import MainHeader from '../src/components/MainHeader';
import InputSearch from '../src/components/InputSearch';
import ProductSearch from '../src/components/ProductSearch';
import GrantsSearch from '../src/components/GrantsSearch';
import ListSearch from '../src/components/ListSearch';
import SectionSidebar from '../src/components/SectionSidebar';
import MultiSelector from './components/MultiSelector';
import Loading from './components/Loading';
import GlobalScopeScripts from './components/GlobalScopeScripts';
import { checkboxFilter } from './js/searchFilter';

const rootElement = document.getElementById('root');
const headerElement = document.getElementById('header');
const searchElement = document.getElementById('search');
const listSearchElement = document.getElementById('list-search');
const grantsSearchElement = document.getElementById('grants-search');
const productSearchElement = document.getElementById('product-search');
const sectionSidebarElement = document.getElementById('sectionSidebar');
const multiSelectElements = document.querySelectorAll('.js-multi-selector');
const globalScopeScriptsElement = document.getElementById('globalScopeScripts');

// If we build for Enonic, we don't want all the content.
// When publishing to Netlify, we want to show everything in this project.
if (!process.env.REACT_APP_ENONICXP) {
  if (rootElement) {
    const name = rootElement.getAttribute('data-name');
    const hideSearch = Boolean(
      rootElement.getAttribute('data-hide-search') !== null
    );
    const links = JSON.parse(rootElement.getAttribute('data-links'));
    const linksMobile = JSON.parse(rootElement.getAttribute('data-links-mobile'));

    // For pre-rendering with React Snap
    if (rootElement.hasChildNodes()) {
      hydrate(
        <App
          name={name}
          hideSearch={hideSearch}
          links={links}
          linksMobile={linksMobile}
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
          linksMobile={linksMobile}
          inputSearchLabel="Søk etter reningslinjer, anbefalinger, lover, statistikk, tilskudd..."
        />,
        rootElement
      );
    }
  }
}

if (multiSelectElements.length) {
    // missing forEach on NodeList for IE11
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
  multiSelectElements.forEach(element => {
    const buttonText = element.getAttribute('data-button-text');
    const confirmText = element.getAttribute('data-confirm-text');
    const checkboxGroupName = element.getAttribute('data-checkbox-group-name');
    const options =
      element.getAttribute('data-options') === null
        ? []
        : JSON.parse(element.getAttribute('data-options'));

    render(
      <MultiSelector
        buttonText={buttonText}
        confirmText={confirmText}
        options={options}
        checkboxGroupName={checkboxGroupName}
        handleChange={checkboxFilter}
      />,
      element
    );
  });
}

if (headerElement) {
  const name = headerElement.getAttribute('data-name');
  const hideSearch = Boolean(
    headerElement.getAttribute('data-hide-search') !== null
  );
  const links = JSON.parse(headerElement.getAttribute('data-links'));
  const linksMobile = JSON.parse(headerElement.getAttribute('data-links-mobile'));
  const exampleSuggestions =
    JSON.parse(headerElement.getAttribute('data-example-suggestions')) || [];

  const label = headerElement.getAttribute('data-label') || '';
  const qaEnvironment = headerElement.getAttribute('data-qaenvironment') === 'true';

  render(
    <MainHeader
      name={name}
      hideSearch={hideSearch}
      links={links}
      linksMobile={linksMobile}
      inputSearchLabel={label}
      exampleSuggestions={exampleSuggestions}
      qaEnvironment={qaEnvironment}
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
if (productSearchElement) {
  const label = productSearchElement.getAttribute('data-label') || '';
  const productId = productSearchElement.getAttribute('data-content-id') || '';
  const collapsed = Boolean(productSearchElement.getAttribute('data-collapsed') === "true" || false);
  const malgruppe = productSearchElement.getAttribute('data-malgruppe') || '';
  const flatTree = productSearchElement.getAttribute('data-flatTree') || '';
  const endpoint = productSearchElement.getAttribute('data-endpoint') || '';

  render(
    <ProductSearch
      productId={productId}
      label={label}
      collapsed={collapsed}
      malgruppe={malgruppe}
      flatTree={flatTree}
      endpoint={endpoint}
    />,
    productSearchElement
  );
}
if (listSearchElement) {
  const label = listSearchElement.getAttribute('data-label') || '';
  const productId = listSearchElement.getAttribute('data-content-id') || '';
  const collapsed = listSearchElement.getAttribute('data-collapsed') || '';
  const malgruppe = listSearchElement.getAttribute('data-malgruppe') || '';
  const flatTree = listSearchElement.getAttribute('data-flatTree') || '';
  const tema = listSearchElement.getAttribute('data-type') || '';
  const type = listSearchElement.getAttribute('data-tema') || '';

  render(
    <ListSearch
      productId={productId}
      label={label}
      collapsed={collapsed}
      malgruppe={malgruppe}
      flatTree={flatTree}
      tema={tema}
      type={type}
    />,
    listSearchElement
  );
}
if (grantsSearchElement) {
  const id = grantsSearchElement.getAttribute('data-content-id') || '';
  const flatTree = grantsSearchElement.getAttribute('data-flattree') || [];
  const type = grantsSearchElement.getAttribute('data-type') || '';
  const contentId = grantsSearchElement.getAttribute('data-content-id') || '';
  const malgruppe = grantsSearchElement.getAttribute('data-malgruppe') || '';
  const categories = grantsSearchElement.getAttribute('data-categories') || [];
  const initial = grantsSearchElement.getAttribute('data-initial') || [];
  const collapsed = grantsSearchElement.getAttribute('data-collapsed') || false;
  const endpoint = grantsSearchElement.getAttribute('data-endpoint') || '';

  render(
    <GrantsSearch
      id={id}
      label="Vet du hvilket tilskudd du vil søke på?"
      flatTree={flatTree}
      type={type}
      contentId={contentId}
      malgruppe={malgruppe}
      categories={categories}
      collapsed={collapsed}
      initial={initial}
      endpoint={endpoint}
    />,
    grantsSearchElement
  );
}

if (sectionSidebarElement) {
  const heading = sectionSidebarElement.getAttribute('data-heading');
  const icon = sectionSidebarElement.getAttribute('data-icon');
  const iconAltText = sectionSidebarElement.getAttribute('data-icon-alt-text');
  const headingUrl = sectionSidebarElement.getAttribute('data-heading-url');
  const list =
    sectionSidebarElement.getAttribute('data-list') === null
      ? []
      : JSON.parse(sectionSidebarElement.getAttribute('data-list'));

  render(
    <SectionSidebar
      heading={heading}
      icon={icon}
      iconAltText={iconAltText}
      list={list}
      headingUrl={headingUrl}
    />,
    sectionSidebarElement
  );
}

if (globalScopeScriptsElement) {
  render(
    <>
      <GlobalScopeScripts/>
      <Loading message="PDF-versjon opprettes. Dette kan ta litt tid."/>
    </>,
    globalScopeScriptsElement
  );
}
