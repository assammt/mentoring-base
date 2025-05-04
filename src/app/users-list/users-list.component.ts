import { NgFor } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, Inject, Injectable } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";



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
    imports: [NgFor, RouterLink, RouterOutlet]
})
export class UsersListComponent {
    readonly apiService = inject(HttpClient);
    users: User[] = [];

    constructor(){
        this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(
            (response: any) => {
                this.users = response;
            }
        )
    }

    deletUser(id: number) {
        this.users = this.users.filter(
            //@ts-ignore
            item => item.id !== id
        )
    }

}   