'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({ text: '\'lafa' });

console.log('\'lafa \'lafa! Event Page for Browser Action');
