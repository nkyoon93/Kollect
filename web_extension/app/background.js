window.ETH = {}
chrome.runtime.onMessage.addListner(function (request,sender, sendResponse) {
    window.ETH[request.url] = request.count
})

chrome.browserAction.onClicked.addListner(function (tab) {
    chrome.tabs.create({url: 'popup.html'})
})