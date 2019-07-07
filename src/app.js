import { PLATFORM } from "aurelia-framework";
import {Todo} from './todo';
import {StickyNotes} from './sticky-notes';

export class App {
  constructor() {
    /* Initialise todoList as an empty array */
    this.todoList = [];
    /* The string passed to Todo here is the description
      which is a parameter of the Todo class.
      So, this new instance of Todo will have a description of
      'Clean my room' and a done of false.
      New instances of Todo are pushed to the todoList array using .push() */
    this.todoList.push(new Todo('Clean my room'));
    this.todoList.push(new Todo('Walk the dog'));
    this.todoList.push(new Todo('Plot world domination'));

    this.newItem = "";

    /* Initialise notes array */
    this.notesList = [];
    /* Push an item as the first sticky note that will display in the ul */
    this.notesList.push(new StickyNotes('First note title', '1st blah blah blah.'));
    /* Initialise new note */
    this.newNoteTitle = "";
    this.newNoteDescription = "";
  }

  /* This method is called when the button in the view is clicked
    The value of newItem (determined by the input in the view) is used to create
    the description for the new todoList item */
  addTodo() {
    this.todoList.push(new Todo(this.newItem));
    /* Clear newItem, this ensures the value of the input on the frontend is empty
      after a new item is added */
    this.newItem = "";
  }

  /* Get the todoList array. Use splice to delete 1 item in the array (the 2nd argument)
    Get the index of the todo, and pass that in as the first argument of splice */
  removeTodo(todo) {
    this.todoList.splice(this.todoList.indexOf(todo), 1);
  }

  addNote() {
    this.notesList.push(new StickyNotes(this.newNoteTitle, this.newNoteDescription));
    /* Clear newItem, this ensures the value of the input on the frontend is empty
      after a new item is added */
    this.newNoteTitle = "";
    this.newNoteDescription = "";
  }

  /* Whenever you have the router-view element in your views you need to use the configureRouter method */
  configureRouter(config, router) {
    /* The html title */
    config.title = "Router Test";
    /* You pass config.map an array of routes */
    config.map([
      /* This first route is what users see by default (nothing appended to the url
        The moduleId maps to the component, in this case this is 'index' (remember the
        component is the html view and the .js view-model.
        title combines with the config.title to produce the full html title */
      {route: '', name: 'home', moduleId: PLATFORM.moduleName('index'), title: 'Home'},
      {route: 'todo', name: 'todo', moduleId: 'todo', title: 'My Todo'},
      /* THe :note is a parameter that can be passed through the url */
      {route: 'sticky-notes/:noteTitle', name: 'sticky-notes', moduleId: PLATFORM.moduleName('sticky-notes'), title: 'Notes'},
    ]);

    this.router = router;
  }
}
