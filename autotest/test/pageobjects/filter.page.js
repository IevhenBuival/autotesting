const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FilterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get rozetkaFilter () {
        return $('[data-id="Rozetka"]');
    }
    get AEGFilter () {
        return $('[data-id="AEG"]');
    }
    get filterHeading () {
        return $('.catalog-heading');
    }
    

    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new FilterPage();
