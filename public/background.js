chrome.runtime.onInstalled.addListener(async () => {
    chrome.contextMenus.create({
        id: 'dragWord',
        title: 'Search On Github 🚀', /* what appears in the menu */
        type: 'normal',
        contexts: ['selection']  /* to make this appear only when user selects something on page */
    });
});