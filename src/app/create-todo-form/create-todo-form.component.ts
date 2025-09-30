import { NgIf } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule, } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-create-todo-form',
    templateUrl: './create-todo-form.component.html',
    styleUrls: ['./create-todo-form.component.scss'],   
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule , MatCheckboxModule],

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
