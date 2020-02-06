import { Injectable } from '@angular/core';
//Import HttpClient from the @angular/common/http package.
import { HttpClient } from '@angular/common/http';

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
//define a new getShippingPrices() method that uses the HttpClient#get() method to retrieve the shipping data 
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
//Inject HttpClient into the constructor of the CartService component class:
  constructor(
    private http: HttpClient
  ) {}

}