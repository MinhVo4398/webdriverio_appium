const AddNoteScreen = require("./add-note.screen");

class EditNoteScreen {
  get firstNote() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    );
  }

  get moreIcon() {
    return $("~More");
  }

  get deleteIcon() {
    return $('//*[@text="Delete"]');
  }

  get navIcon() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]'
    );
  }

  get trashCanItem() {
    return $('//*[@text="Trash Can"]')
  }
  async skipTutorial() {
    await AddNoteScreen.skipBtn.click();
    await expect(AddNoteScreen.addNoteText).toBeDisplayed();
  }

  async addAndSaveNote(noteHeading, noteBody) {
    await AddNoteScreen.addNoteText.click();
    await AddNoteScreen.textOption.click();
    await expect(AddNoteScreen.textEditing).toBeDisplayed();

    // Add note title
    await AddNoteScreen.noteHeading.addValue(noteHeading);

    // Add note body
    await AddNoteScreen.noteBody.addValue(noteBody);

    // save the changes
    await AddNoteScreen.saveNote();
  }
}

module.exports = new EditNoteScreen();
