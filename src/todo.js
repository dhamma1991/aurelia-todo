export class Todo {
    /* Every todo list item has some sort of description */
    constructor(description) {
        this.description = description;
        /* If you're creating a new todo, it's probably going to start with
            a done of false */
        this.done = false;
    }
}