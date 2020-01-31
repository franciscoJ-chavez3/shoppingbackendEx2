import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartItems: IProduct[] = [];
  public $cartItems = new BehaviorSubject<IProduct[]>(this.cartItems);
  
  cartTotal = 0;
  $cartTotal = new BehaviorSubject<number>(this.cartTotal);

  cartQty = 0;
  $cartQty = new BehaviorSubject<number>(this.cartQty);

  constructor() { }

  addItemsToCart(item: IProduct) {

    //check if item exists
    let cartItem = this.cartItems.find(x => x.id === item.id);

    if(cartItem) {
      //increment qty 
      cartItem.qty++;
    } else {
      item.qty = 1;
      //push item into cartItems
      this.cartItems.push(item);
    }

    

    console.log(this.cartItems);

    //behavior mathes reference
    this.$cartItems.next(this.cartItems);

    //update price ~ convert string to number
    this.cartTotal += +item.price;

    //behavior match ref
    this.$cartTotal.next(this.cartTotal);

    //behavior match ref
    this.cartQty++;
    this.$cartQty.next(this.cartQty);

  }

  removeItemFromCart(item, index) {
    //splice cartItems
    this.cartItems.splice(index, 1);

    //update total
    const totalPrice = item.qty * +item.price;
    this.cartTotal -= totalPrice;

    //update qty
    this.cartQty -= item.qty;

    this.broadcastSubjects();
  }

  broadcastSubjects(){
    //update behavior ref
    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
    this.$cartQty.next(this.cartQty);
  }
}
