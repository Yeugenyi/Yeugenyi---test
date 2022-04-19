import * as assert from 'assert';

describe('user', function () {
    it('should be registrated', async function () {
     await   browser.url('/registration')
        
     const email= 'test'+new Date().getTime()/1000+'@test.com'
        
     await   Promise.all([
            $('input[name="email"]').setValue(email),
            $('input[name="pass"]').setValue(email),
            $('input[name="pass2"]').setValue(email),
            $('input[name="name"]').setValue(email)
        ])
    await $('button[name="registration"]').click()
    await $('span[class="succes-reg"]').waitForDisplayed()                                           

    const epected='Вы успешно зарегистрировались!'
    const results= $('span[class="succes-reg"]').getText()       

    assert((await results).includes(epected), 'something wrong')
    
          
    })
})