import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient [] = [
    new Ingredient('Apples', 5),
    new Ingredient('Pumpkin', 1),
    new Ingredient('Carrot', 3.5)
  ];


  constructor() { }

  ngOnInit() {
  }

}
