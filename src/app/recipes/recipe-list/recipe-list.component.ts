import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Potato Leaking on Bacon', 'A thoroughly gross concoction', 
    'https://pixabay.com/photos/broccoli-potato-casserole-cheese-1804446/')
  ];

  constructor() { }

  ngOnInit() {
  }

}
