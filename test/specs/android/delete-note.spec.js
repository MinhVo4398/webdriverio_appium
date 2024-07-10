/*
describe('Add Notes', ()=>{
    it('Skip tutorial', async ()=>{
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    })

    it('add a note, save changes & verify notes', async()=>{
        await $('//*[@text="Add note"]').click();
        await $('//*[@text="Text"]').click();
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        // Add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        .addValue("Fav Anime List");

        // Add note body
       await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        .addValue("Naruto\nOnePiece\nAOT");

        //save the changes (click back twice)

        await driver.back();
        await driver.back();

        // assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')).toHaveText("Naruto\nOnePiece\nAOT");

    })

    it('Delete a note & check the note in trash can', async()=> {
        const note = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        // Click on the note
         await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').click();
        
         // Click on more icon
         await $(~'More').click();

         // Click on delete item
         await $('//[@text="Delete"]').click();

         //accept alert
         driver.acceptAlert();

        // click nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        
        // Click on trash can item
        await $('//*[@text="Trash Can"]').click();

        // Assertiion
        const trashCanItem =  await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText();

        await expect(trashCanItem).toHaveText(note);
    })
})

*/