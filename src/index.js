import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const rootElement2 = document.getElementById('root2');

if (rootElement) {
  const name = rootElement.getAttribute('data-name');
  const links = JSON.parse(rootElement.getAttribute('data-links'));

  ReactDOM.render(<App name={name} links={links} />, rootElement);
}
if (rootElement2) {
  //
}
