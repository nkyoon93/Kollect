//alert('hello kollectors')
//chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  //  const re = new RegExp ('ETH', 'KLP')
    //const matches =
    //document.documentElement.innerHTML.match(re)
    //sendResponse({count: matches.length})
    //alert('hello kollectors')
//})

const re = new RegExp ('ETH', 'KLP')
const matches = document.documentElement.innerHTML.match(re)
chrome.runtime.sendMessage({
    url: window.location.href,
    count: matches.length
})