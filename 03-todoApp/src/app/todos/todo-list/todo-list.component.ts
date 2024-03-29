import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppSate } from '../../app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private store: Store<AppSate>) { }

  ngOnInit(): void {
    this.store.select('todos')
        .subscribe( todos => this.todos = todos);
  }

}
