describe('Android Native Feature Tests', ()=>{
    it('Access ac Activity directly', async()=>{
        // access acitivity
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");

        // pause 3s
        await driver.pause(3000);

        //assertion
        await expect($('//android.widget.TextView[@text="App/Alert Dialogs"]')).toExist();
    })
})