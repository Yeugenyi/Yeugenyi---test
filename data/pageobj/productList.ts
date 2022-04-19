import { productCard } from "./productCard"


export class productList {

  get products() {
    return $$('.js-catalog-item')
  }


  async getProductCardsByName(productName: string) {
    
    const predicate = async (elm) => {
        const card = new productCard(elm)
        const text = await card.getTitle()
       
        const result = text.includes(productName);
        if (result) {
             return card
          }

        }

    const elmArr = await this.products
    const result = await asyncFilter(elmArr,predicate)

    return result
   
  }
}



const asyncFilter = async (arr, predicate) => Promise.all(arr.map(predicate))
 .then((results) => results.filter(n=>n));









