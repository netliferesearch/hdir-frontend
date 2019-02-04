import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import App from './App';
import MainHeader from '../src/components/MainHeader';

const rootElement = document.getElementById('root');
const headerElement = document.getElementById('header');

if (rootElement) {
  const name = rootElement.getAttribute('data-name');
  const hideSearch = Boolean(
    rootElement.getAttribute('data-hide-search') !== null
  );
  const links = JSON.parse(rootElement.getAttribute('data-links'));

  ReactDOM.render(
    <App name={name} hideSearch={hideSearch} links={links} />,
    rootElement
  );
}
if (headerElement) {
  const name = headerElement.getAttribute('data-name');
  const hideSearch = Boolean(
    headerElement.getAttribute('data-hide-search') !== null
  );
  const links = JSON.parse(headerElement.getAttribute('data-links'));

  ReactDOM.render(
    <MainHeader name={name} hideSearch={hideSearch} links={links} />,
    headerElement
  );
}
