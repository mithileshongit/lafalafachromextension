'use strict';
var title = ""
chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});
chrome.browserAction.setBadgeText({ text: title });
console.log('\'lafa \'lafa! Event Page for Browser Action');
