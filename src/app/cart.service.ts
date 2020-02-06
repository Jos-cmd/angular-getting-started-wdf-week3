import { Injectable } from '@angular/core';

@Injectable({

  //what does this do??
  providedIn: 'root'
})
export class CartService {

// define an items property to store the list (array) of the current products in the cart.
  items = [];


//Define methods in class add, return, clear cart

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  constructor() {}

}