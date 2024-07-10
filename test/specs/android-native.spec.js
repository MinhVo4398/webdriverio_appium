describe("Android Native Feature Tests", () => {
  it("Access ac Activity directly", async () => {
    // access acitivity
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );

    // pause 3s
    await driver.pause(3000);

    //assertion
    await expect(
      $('//android.widget.TextView[@text="App/Alert Dialogs"]')
    ).toExist();
  });

  it.only("Working with Dialog Boxes", async () => {
    // access acitivity
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );

    // click on first dialog
    await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

    // Accept Alert
   // await driver.acceptAlert();

    // Dismiss Alert
    // await driver.dismissAlert();

    // Get Alert Text
    console.log('ALERT TEXT----->', await driver.getAlertText());

    // Or can click on OK button
    await $('//android.widget.Button[@resource-id="android:id/button1"]').click();


    // Assertion - alert box is no longer visible
    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
  });
});
