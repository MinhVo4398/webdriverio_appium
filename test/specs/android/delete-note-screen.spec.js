const EditNoteScreen = require("../../screenobjects/android/edit-note.screen");

describe("Add Notes", () => {
  it("Skip tutorial", async () => {
    await EditNoteScreen.skipTutorial();
  });

  it("add a note, save changes & verify notes", async () => {
    await EditNoteScreen.addAndSaveNote(
      "TV shows",
      "Friends\nBreakingBad\nPeakyBlinders"
    );
  });

  it("Delete a note & check the note in trash can", async () => {
    await driver.back();
    const note = await EditNoteScreen.firstNote.getText();

    // Click on the note
    await EditNoteScreen.firstNote.click();

    // Click on more icon
    await EditNoteScreen.moreIcon.click();

    // Click on delete item
    await EditNoteScreen.deleteIcon.click();

    //accept alert
    await driver.acceptAlert();

    // click nav icon
    await EditNoteScreen.navIcon.click();

    // Click on trash can item
    await EditNoteScreen.trashCanItem.click();

    // Assertion
    const trashCanItem = await EditNoteScreen.firstNote;

    await expect(trashCanItem).toHaveText(note);
  });
});
