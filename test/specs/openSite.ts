import * as assert from 'assert';

describe('site', function () {
    it('should be open', async function () {
       await browser.url('/')
       
       const img= await $('img[alt="Интернет-магазин"]')
     
        assert(await img.isDisplayed(), 'logo wasn`t show')
       
      
    })


})