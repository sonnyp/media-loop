'use strict';

const pageMod = require('sdk/page-mod');
const cm = require("sdk/context-menu");
const l10n = require('sdk/l10n');
const data = require('sdk/self').data;

var menuItem = cm.Item({
  label: l10n.get('enable'),
  context: cm.SelectorContext('audio, video'),
  contentScriptFile: data.url('./menu.js'),
  image: data.url('icon.png'),
  //WTF jetpack, can't use l10n in content script
  onMessage: function(bool) {
    if (bool) {
      menuItem.label = l10n.get('disable');
      menuItem.accesskey = l10n.get('disable_accesskey');
    }
    else {
      menuItem.label = l10n.get('enable');
      menuItem.accesskey = l10n.get('enable_accesskey');
    }
  }
});
