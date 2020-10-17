import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Bread', 1),
    new Ingredient('Milk', 1),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
