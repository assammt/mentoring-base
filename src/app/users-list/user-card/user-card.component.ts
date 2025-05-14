import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../../interfaces/users.interface";

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.scss'],
    standalone: true,
})
export class UserCardComponent {    
    @Input()
    user!: User;

    @Output()
    deleteUser = new EventEmitter<User>();

    onDeleteUser(userId: User) {    
        this.deleteUser.emit(userId);
    }
}