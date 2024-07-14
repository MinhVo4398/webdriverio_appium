describe('Todo Item', ()=>{
    it('Create a Todo Item', async ()=>{
        // Create TODO List
        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue('Things to do');
        await $('~Create').click();

        await expect(await $('~Things to do')).toBeExisting();
        
        // Create Todo Item
        await $('~Things to do').click();
        await $("//*[@name='Create item']").click();
        await $("//*[@value='Title']").addValue("Buy groceries");
        await $("//*[@value='Due']").click();
        await $('~Date Picker').click();
        await $('~28').click();
        await $("//XCUIElementTypeWindow[@index=2]").click();
        await $("~Create").click();

        // Assertion
        await expect(await $('~Buy groceries')).toBeExisting();
        await expect(await $('~Due 28 July 2024')).toBeExisting();
    })
})  