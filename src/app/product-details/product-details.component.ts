import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
//import cart service
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

//class , name ProductDetailsComponent and variable any
export class ProductDetailsComponent implements OnInit {

  public product:any;


//Define the addToCart() method...Receives the current product...Uses the cart service's #addToCart() method to add the product to the cart...Displays a message
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }



// ask for it and injected into the contructor, passed in as activatedRoute object
//injected activatedRoute object called route and declaring it as private or public and can use it later on in functions 
  constructor(
      private route: ActivatedRoute,
      //inject the cart service
      private cartService: CartService
  ) { }

  //funtion that initializes after constructor and just before display
  ngOnInit() {
    // calls params function when data changed as long as subscribe function is called.
    // doesn't have to name function becuase it is only being called there. Writes function there and then.
    // => is an arrow function. Which is a function that passes though something.
    // passes params function though subscribe function.
    // paramMap is observable function because it has subscibe function (monitors changes and you have            subscribed to the changes) when it changes it calls params function. When paramater change get me the      value of paramater productId. goes to variable product and goes to the array. Then html displays
    // + converts string to number.  
    this.route.paramMap.subscribe(params => {
        this.product = products[+params.get('productId')];
    });
  }

}