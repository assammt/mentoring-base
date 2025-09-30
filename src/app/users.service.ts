import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './users-list/users-list.component';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject$.asObservable();

  setUsers(users: User[]) {
    this.usersSubject$.next(users);
  }

  editUser(editedUser: User) {
    this.usersSubject$.next(
      this.usersSubject$.value.map((user) => {
        if (user.id === editedUser.id) {
          return editedUser;
        }
        return user;
      })
    );
  }

  createUser(user: User) {
    const userIsExisting = this.usersSubject$.value.find(
      (item) => item.email === user.email
    );

    if (userIsExisting !== undefined) {
      alert('User with this email is already existing');
    } else {
      this.usersSubject$.next([...this.usersSubject$.value, user]);
      alert('User created successfully');
    }
  }

  deleteUser(id: number) {
    this.usersSubject$.next(
      this.usersSubject$.value.filter((item) => {
        if (id === item.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
