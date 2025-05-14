import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodosApiService } from '../todos-api.service';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { TodosService } from '../todos.service';
import { Todo } from '../interfaces/todos.interface';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  standalone: true,
  imports: [TodoCardComponent, NgFor, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  readonly todosService = inject(TodosService);

  constructor() {
    this.todosApiService.getTodos().subscribe((response: any) => {
      this.todosService.setTodos(response);
    });
  }

  deleteTodo(todo: Todo) {
    this.todosService.deleteTodos(todo.id);
  }
  editTodo(editedTodo: Todo) {
    this.todosService.editTodos(editedTodo);
  }
  createTodo(todo: Todo) {
    this.todosService.createTodos(todo);
  }
}
export { Todo };

