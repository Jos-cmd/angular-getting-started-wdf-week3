import { Component, OnInit } from '@angular/core';
//Import the cart service.
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  //Define a shippingCosts property.
  shippingCosts;
//Inject the cart service into the ShippingComponent class:
  constructor(
    private cartService: CartService
    ) { }

//Set the shippingCosts property using the getShippingPrices() method from cart service.
  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}