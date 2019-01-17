import { configure, setAddon, addDecorator } from '@storybook/react';
import 'loki/configure-react';
import staticMarkup from 'react-storybook-addon-static-markup';
import { withNotes } from '@storybook/addon-notes';
import { withCssResources } from '@storybook/addon-cssresources';

if (process.env.NODE_ENV === 'development') {
  require('../src/styles/App.scss'); // For dev mode: Toggle between App.scss and Helfo.scss here
}

setAddon(staticMarkup);

addDecorator(withNotes);

addDecorator(
  withCssResources({
    cssresources: [
      {
        name: `hdir`,
        code: `<link rel="stylesheet" href="/App.css"></link>`,
        picked: true
      },
      {
        name: `helfo`,
        code: `<link rel="stylesheet" href="/Helfo.css"></link>`,
        picked: false
      }
    ]
  })
);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
