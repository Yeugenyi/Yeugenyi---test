import * as assert from 'assert';
import  {searchData} from '../../data/ForSearch';

let search=async function (searchProduct){
      
        await $('input[name="search"]').setValue(searchProduct)
        await $('button[class="c-button c-search__button"]').click()
        await $('h1[class="c-title"]').waitForDisplayed() 
     
    }


    describe('Search for', function () {
        before(async()=>{
            await  browser.url('/')
        })
        searchData.map(data=>{
            it(`'${data.query}' query should show ${data.searchResult} in result description`, async function () {
           
                await search(data.query)
                const searchResult = await $('h1[class="c-title"]').getText()
                assert(searchResult.includes(data.searchResult), `wrong search result for ${data.query}` )
    
            })
        })
    })
                

            
    //     })
    //     for (let key in dataforsearch) {
    //     it('must find a product/s '+key, async function () {
      
   
    //         assert((await search(key)).includes(dataforsearch[key]), key+'  gave wrong result')


       
      
    //     })
    // }
    // })

