describe('Android Element Tests', ()=>{
    it('Find element by accessibility id', async ()=> {
        // Find element by accessibility
       const appOption = await $('~App');
        // Click on element
        await appOption.click();
        // Assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })

    it.only('Find element by class name', async() =>{
        // find element by class name
        const className = await $('android.widget.TextView');
        console.log(await className.getText());

        // Assertion
        await expect(className).toHaveText('API Demos');
        
    })
})