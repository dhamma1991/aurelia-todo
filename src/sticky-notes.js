export class StickyNotes {
    constructor(noteTitle, noteText) {
        this.noteTitle = noteTitle;
        this.noteText = noteText;
    }

    /* This is the activate life cycle hook
        This is used to access any parameters that are passed */
    activate(params) {
        this.noteTitle = params.noteTitle;
        this.noteDescription = params.noteDescription;
    }
}