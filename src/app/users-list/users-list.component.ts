import { AsyncPipe, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject} from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "../users.service";
import { User } from "../interfaces/users.interface";
import { CreateUserFormComponent } from "../create-user-form/create-user-form.component";





@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, RouterLink, RouterOutlet, UserCardComponent, AsyncPipe, CreateUserFormComponent],
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

        this.usersService.users$.subscribe(
            users => console.log( users)
        )

    }

    deleteUser(id: number) {
        this.usersService.deleteUser(id);
    }

    editUser(editedUser: User) {
        this.usersService.editUser(editedUser);
    }

    public createUser(formData: any): void {
        this.usersService.createUser({
            id: new Date().getTime(),
            name: formData.name,
            email: formData.email,
            website: formData.website,
            company: {
                name: formData.company_name
            }
        });
        console.log('dates of form: ', formData);
    }

}   

export { User };
