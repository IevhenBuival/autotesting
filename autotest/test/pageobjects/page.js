const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open () {
        browser.setWindowSize(1370, 780)
        return browser.url(`https://bt.rozetka.com.ua/ua/washing_machines/c80124/`)
    }
}
