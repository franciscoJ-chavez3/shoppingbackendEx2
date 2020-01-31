import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: IProduct[] = [
    {
      id: '1',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: '5.00',
      qty: 0
    },
    {
      id: '2',
      pName: 'Stars',
      pNameURL: 'Stars',
      pDesc: 'Not a Paper Ninja Star',
      additionalInfo: '! Cause Paper Cuts',
      price: '6.00',
      qty: 0
    },
    {
      id: '3',
      pName: 'zzzNinja Starszzz',
      pNameURL: 'zzzNinjaStars',
      pDesc: 'zzzPaper Ninja Star',
      additionalInfo: 'zzzzMay Cause Paper Cuts',
      price: '7.00',
      qty: 0
    },
    {
      id: '4',
      pName: 'yyyyNinja Starsyyyyy',
      pNameURL: 'yyyyNinjaStarsyyyy',
      pDesc: 'yyyyPaper Ninja Staryyyy',
      additionalInfo: 'yyyMay Cause Paper Cutsyyy',
      price: '8.00',
      qty: 0
    }
  ];
  constructor() { }

  getProducts(): IProduct[] {
    return this.products;
  }

  getProduct(sku: string): Observable<IProduct> {
    return of(
    this.products.find(
      somethingElse => somethingElse.id === sku
    ));
  }
}
