import { Component, OnInit } from '@angular/core';
//Import the FormBuilder service from the @angular/forms package.
import { FormBuilder } from '@angular/forms';
 
//Import the CartService from the cart.service.ts file.
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
//Define the items property to store the products in the cart.
  items;
//define the checkoutForm property to store the form model.
  checkoutForm;

  constructor(
    //Inject the CartService to manage cart information.
    private cartService: CartService,
    //Inject the FormBuilder service.
    private formBuilder: FormBuilder,
  ) {
//set the checkoutForm property with a form model containing name and address fields, using the FormBuilder group() method
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    //process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}