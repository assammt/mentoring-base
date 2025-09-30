import { NgIf } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";


@Component({
    selector: 'app-create-todo-form',
    templateUrl: './create-todo-form.component.html',
    styleUrls: ['./create-todo-form.component.scss'],   
    standalone: true,
    imports: [ReactiveFormsModule, NgIf],

})
export class CreateTodoFormComponent {
    @Output()
    createTodo = new EventEmitter();


    public form = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(3)]),
        completed: new FormControl(),
        userId: new FormControl('', [Validators.required, Validators.min(1)]),
    })

    public submitForm(): void {
        this.createTodo.emit(this.form.value);
        this.form.reset();
    }

}
