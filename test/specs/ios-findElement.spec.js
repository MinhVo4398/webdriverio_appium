describe('iOS Find Element', ()=>{
    it('find element by accessibility id', async ()=>{
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    });

    it('find by tag name', async ()=>{
        // single element
        console.log(await $('XCUIElementTypeStaticText').getText());

        // multiple elements
        const textEls = await $$('XCUIElementTypeStaticText');
        
        for (const ele of textEls) {
            console.log(await ele.getText());
        }
    })

    it.only('find element by xpath ', async ()=>{
        // xpath - (//tagname[@attribute=value])
        await $('//*[@name="Alert Views"]').click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
    } )
});