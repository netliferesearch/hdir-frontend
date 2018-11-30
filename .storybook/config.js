import { configure, setAddon } from '@storybook/react';
import 'loki/configure-react';
import staticMarkup from 'react-storybook-addon-static-markup';
import '../src/static/App.css';

setAddon(staticMarkup);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
