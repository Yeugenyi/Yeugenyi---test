import * as assert from 'assert';
export class productCard {
    private root:WebdriverIO.Element
   
    constructor(root:WebdriverIO.Element) {
        this.root = root
    }

    getTitle() {
      const title= this.root.getText()
      return title
    }

    async addToCart() {
        const addToCartDivButton = await this.root.$('div [class ="c-buy__buttons"]') 
        await browser.waitUntil(()=>{
            return  addToCartDivButton.isDisplayed()
        }) 
       await addToCartDivButton.click()
    } 
}

