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
})