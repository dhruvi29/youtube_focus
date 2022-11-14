const defaultFilters = [

  //add blocker
  "*://*.doubleclick.net/*",
  "*://partner.googleadservices.com/*",
  "*://*.googlesyndication.com/*",
  "*://*.google-analytics.com/*",
  "*://creative.ak.fbcdn.net/*",
  "*://*.adbrite.com/*",
  "*://*.exponential.com/*",
  "*://*.quantserve.com/*",
  "*://*.scorecardresearch.com/*",
  "*://*.zedo.com/*",
  //youtube
  "*://*.youtube.com/youtubei/v1/att/get?key=*",
  "*://*.youtube.com/generate_204",
  "*://*.youtube.com/youtubei/v1/next?key=*",
  // "https://*.youtube.com/youtubei/v1/browse?key=*",
  // "https://i.ytimg.com/*",
  // "https://*.youtube.com/youtubei/v1/guide?key=*"
  // "https://*.youtube.com/static/r/*/*/*_polyfill.js"
];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: defaultFilters },
  ["blocking"]
);
