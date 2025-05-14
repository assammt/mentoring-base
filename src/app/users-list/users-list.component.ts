import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject} from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { User } from "../interfaces/users.interface";





@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, RouterLink, RouterOutlet, UserCardComponent, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush 
})
export class UsersListComponent {
    readonly usersApiService = inject(UsersApiService);
    readonly usersService = inject(UsersService)

    

    constructor(){
        this.usersApiService.getUsers().subscribe(
            (response: User[]) => {
                this.usersService.setUsers(response);
            }
        )

    }

    deleteUser(id: number) {
        this.usersService.deleteUser(id);
    }

    editUser(editedUser: User) {
        this.usersService.editUser(editedUser);
    }

    createUser(user: User) {
        this.usersService.createUser(user);
    }

}   

export { User };
