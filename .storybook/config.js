import { configure, setAddon } from '@storybook/react';
import staticMarkup from 'react-storybook-addon-static-markup';
import '../src/App.css';

setAddon(staticMarkup);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
