import { NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const aboutCompanyFn = (nameItem: string) => nameItem;
const aboutCompany = aboutCompanyFn('О компании');

const newPages = [5, 4, 3, 2, 1];

newPages.forEach((item) => item);

const menuItems = [
  'Каталог',
  'Стройматериалы',
  'Инструменты',
  'Электрика',
  'Интерьер и одежда',
];

const upperCaseMenuItems = menuItems.map((item) => {
  return item.toUpperCase();
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-first-project';

  newPages = newPages;

  isShowImage = true;

  readonly abaoutCompany = aboutCompany;

  readonly header2Item1 = upperCaseMenuItems[0];

  menuItems = upperCaseMenuItems;

  isUpperCase = true;

  changeMenutext() {
    this.menuItems = upperCaseMenuItems.map((item) =>
      this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }
}
