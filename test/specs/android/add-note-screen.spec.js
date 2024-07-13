const AddNoteScreen = require("../../screenobjects/android/add-note.screen");

describe("Add Notes", () => {
  it("Skip tutorial", async () => {
    await AddNoteScreen.skipBtn.click();

    await expect(AddNoteScreen.addNoteText).toBeDisplayed();
  });

  it("add a note, save changes & verify notes", async () => {
    await AddNoteScreen.addNoteText.click();
    await AddNoteScreen.textOption.click();
    await expect(AddNoteScreen.textEditing).toBeDisplayed();

    // Add note title
    await AddNoteScreen.noteHeading.addValue("Fav Anime List");

    // Add note body
    await AddNoteScreen.noteBody.addValue("Naruto\nOnePiece\nAOT");

    //save the changes (click back twice)
    await AddNoteScreen.saveNote();

    // assertion
    await expect(AddNoteScreen.editBtn).toBeDisplayed();
    await expect(AddNoteScreen.viewNote).toHaveText("Naruto\nOnePiece\nAOT");
  });
});
