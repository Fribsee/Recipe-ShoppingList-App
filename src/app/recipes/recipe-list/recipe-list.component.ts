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
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nJw9Bp8CeukwrnplKwtPEmg8G9xcIKfLc_YZSyf9XDO1Kp4M2A'),
    new Recipe('Recipe Name 2', 'Another example description',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nJw9Bp8CeukwrnplKwtPEmg8G9xcIKfLc_YZSyf9XDO1Kp4M2A')
  ];

  constructor() { }

  ngOnInit() {
  }

}
