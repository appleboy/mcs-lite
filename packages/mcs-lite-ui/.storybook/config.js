import { configure, addDecorator, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import centered from './decorator-centered';

const context = require.context('../src/', true, /\.example\.js$/);

setAddon(infoAddon);
addDecorator(centered);
setOptions({
  name: 'MCS Lite',
  url: 'https://github.com/MCS-Lite/mcs-lite',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true,
});

function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);
