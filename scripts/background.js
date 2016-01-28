'use strict';
var Buzztitle = "";
chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});
chrome.browserAction.setBadgeText({ text: Buzztitle });
console.log('\'lafa \'lafa! Event Page for Browser Action');