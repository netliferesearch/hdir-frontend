import { configure, setAddon, addDecorator, addParameters } from '@storybook/react';
import 'loki/configure-react';
import staticMarkup from 'react-storybook-addon-static-markup';

require('../src/styles/App.scss'); // For dev mode: Toggle between App.scss and Helfo.scss here

setAddon(staticMarkup);

addParameters({
  options: {
    name: 'HDIR/Helfo designmanual',
    isFullscreen: false,
    showPanel: true,
    // more configuration here
  },
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);