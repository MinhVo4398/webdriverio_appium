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

  it("Working with Dialog Boxes", async () => {
    // access acitivity
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );

    // click on first dialog
    await $(
      '//*[@resource-id="io.appium.android.apis:id/two_buttons"]'
    ).click();

    // Accept Alert
    // await driver.acceptAlert();

    // Dismiss Alert
    // await driver.dismissAlert();

    // Get Alert Text
    console.log("ALERT TEXT----->", await driver.getAlertText());

    // Or can click on OK button
    await $(
      '//android.widget.Button[@resource-id="android:id/button1"]'
    ).click();

    // Assertion - alert box is no longer visible
    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
  });

  it("Vertical Scrolling", async () => {
    await $("~App").click();
    await $("~Activity").click();

    //scroll to the end (not stable if element)
    //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

    // scrollTextIntoView - more stable
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
    ).click();
    //await $('~Secure Surfaces').click();

    //assertion
    await expect($("~Secure Dialog")).toExist();
  });

  it("Horizontal Scrolling", async () => {
    // Access directly to screen
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.Gallery1"
    );

    // Horizontal scrolling
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    ).click();

    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()"
    ).click();

    await driver.pause();
  });

  it.only("Working with a date picker", async () => {
    // access the date picker
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.DateWidgets1"
    );

    // get current date
    const date = await $(
      '//*[@resource-id="io.appium.android.apis:id/dateDisplay"]'
    );
    const currentDate = date.getText();

    // click on change the date button
    await $("~change the date").click();

    // scroll right to the next month
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    )
    // select the 10th date
    await $('//*[@text="10"]').click();

    // click on ok button
    await $('//android.widget.Button[@resource-id="android:id/button1"]').click();

    // verify the updated date
    await expect(await date.getText()).not.toEqual(currentDate)
  });
});
