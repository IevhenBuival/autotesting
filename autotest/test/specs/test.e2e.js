const { expect } = require('@wdio/globals')
const FilterPage = require('../pageobjects/filter.page')

describe('Check basic filter functionality', () => {
    it('Check that filer by brand can be enabled', async () => {
        await FilterPage.open();
        await FilterPage.AEGFilter.click();
        await expect(FilterPage.filterHeading).toHaveText('Пральні машини AEG');
        
    })
    it('Check that filer by brand can be disabled', async () => {
        await FilterPage.open();
        await FilterPage.AEGFilter.click();
        await expect(FilterPage.filterHeading).toHaveText('Пральні машини AEG');
        await FilterPage.AEGFilterFilter.click();
        await expect(FilterPage.filterHeading).toHaveText('Пральні машини');
        
    })
})

