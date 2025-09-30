import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-create-user-form',
    templateUrl: './create-user-form.component.html',
    styleUrls: ['./create-user-form.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, MatCheckboxModule],

})  
export class CreateUserFormComponent {
    @Output()
    createUser = new EventEmitter();

    public form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        website: new FormControl('', [Validators.required, Validators.minLength(3)]),
        company_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })

    public submitForm(): void {
        this.createUser.emit(this.form.value);
        this.form.reset();
    }

}
