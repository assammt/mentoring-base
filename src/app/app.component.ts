import { NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UsersListComponent } from './users-list/users-list.component';

const newPages = [5, 4, 3, 2, 1];



newPages.forEach((item) => item);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, NgClass, HeaderComponent, RouterLink, RouterLinkActive, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';

  newPages = newPages;

  isShowImage = true;

  
}     
