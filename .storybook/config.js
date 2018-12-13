import { configure, setAddon, addDecorator } from '@storybook/react';
import staticMarkup from 'react-storybook-addon-static-markup';
import { withNotes } from '@storybook/addon-notes';
import '../src/static/App.scss';

setAddon(staticMarkup);

addDecorator(withNotes);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
