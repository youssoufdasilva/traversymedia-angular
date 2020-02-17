import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "../../models/Todo";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit(): void {}

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    };
    return classes;
  }

  //Created Events
  // onToggle
  onToggle(todo) {
    console.log("toggle");
    todo.completed = !todo.completed;
  }

  // onDelete
  onDelete(todo) {
    console.log("delete: " + todo.title);
    alert("Yay!!");
  }
}
