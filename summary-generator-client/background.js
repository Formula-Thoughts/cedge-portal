console.log("background.js");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  chrome.runtime.sendMessage({ action: "updatePopup", message });
});

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    // This code will run only on initial installation
  }
});
