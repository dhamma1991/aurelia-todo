export class StickyNotes {
    constructor(note) {
        this.note = note;
    }

    /* This is the activate life cycle hook
        This is used to access any parameters that are passed */
    activate(params) {
        this.note = params.note;
    }
}