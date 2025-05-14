import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todos-list/todos-list.component';

@Injectable({ providedIn: 'root' })
export class TodosService {
  private todosSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject$.asObservable();

  setTodos(todos: Todo[]) {
    this.todosSubject$.next(todos);
  }

  editTodos(editedTodo: Todo) {
    this.todosSubject$.next(
      this.todosSubject$.value.map((todo) => {
        if (todo.id === editedTodo.id) {
          return editedTodo;
        }
        return todo;
      })
    );
  }

  createTodos(todo: Todo) {
    this.todosSubject$.next([...this.todosSubject$.value, todo]);
  }

  deleteTodos(id: number) {
    this.todosSubject$.next(
      this.todosSubject$.value.filter((item) => {
        return item.id !== id ? true : false;
      })
    );
  }
}
