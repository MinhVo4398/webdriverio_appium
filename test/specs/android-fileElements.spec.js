describe("Android Element Tests", () => {
  it("Find element by accessibility id", async () => {
    // Find element by accessibility
    const appOption = await $("~App");
    // Click on element
    await appOption.click();
    // Assertion
    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });

  it("Find element by class name", async () => {
    // find element by class name
    const className = await $("android.widget.TextView");
    console.log(await className.getText());

    // Assertion
    await expect(className).toHaveText("API Demos");
  });

  it("Find element by Xpath", async () => {
    // xpath - (//tagname[@attribute=value])
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
    // Find by resourceId
    await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();

    // Find by text
    await $(
      '//android.widget.TextView[@resource-id="android:id/text1" and @text="Command two"]'
    ).click();

    // Find by class
    const textAssertion = await $("//android.widget.TextView");
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });
});
