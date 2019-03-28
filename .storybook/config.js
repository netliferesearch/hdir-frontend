import { configure, setAddon, addDecorator } from '@storybook/react';
import 'loki/configure-react';
import staticMarkup from 'react-storybook-addon-static-markup';

require('../src/styles/App.scss'); // For dev mode: Toggle between App.scss and Helfo.scss here

setAddon(staticMarkup);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
