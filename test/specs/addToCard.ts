import * as assert from 'assert';

import {productList} from '../../data/pageobj/productList';

describe('site', function () {
   
    it('should be add to card', async function () {
       await browser.url('/group?type=recommend')
     const productListPage =  new productList()
     const productCard =  await productListPage.getProductCardsByName('Note8')  
     await productCard[0].addToCart()

     await browser.pause(10000)
      
       
      
    })


})