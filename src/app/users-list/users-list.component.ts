import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Inject, Injectable } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { UsersApiService } from "../users-api.service";
import { UserCardComponent } from "./user-card/user-card.component";


export interface User {
    id : number;
    name: string;
    userName: string;
    email: string;
    addres: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}


@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.scss',
    standalone: true,
    imports: [NgFor, RouterLink, RouterOutlet, UserCardComponent]
})
export class UsersListComponent {
    readonly usersApiService = inject(UsersApiService);
    users: User[] = [];

    constructor(){
        this.usersApiService.getUsers().subscribe(
            (response: any) => {
                this.users = response;
            }
        )
    }

    deleteUser(id: number) {
        this.users = this.users.filter(
            //@ts-ignore
            item => item.id !== id
        )
    }

}   