import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const aboutCompanyFn = (nameItem: string) => nameItem;
const aboutCompany = aboutCompanyFn('О компании');

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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [NgFor, RouterLink]
})
export class HeaderComponent {
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
