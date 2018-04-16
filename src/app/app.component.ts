import { ApplicationRef, Component } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ProductComponent {
 model: Model  = new Model();

 constructor(ref: ApplicationRef) {
   (<any>window).appRef = ref;
   (<any>window).model = this.model;

 }

 getProductByPosition(position: number): Product {
   return this.model.getProducts()[position];

 }

 getClassesByPosition(position: number): string {
   let product = this.getProductByPosition(position);
   return ( product.price < 50 ? "bg-info" : "bg-warning");
 }

 getProduct(key: number): Product {
   return this.model.getProduct(key);
 }

 getProducts(): Product[] {
   return this.model.getProducts();
 }

 selectedProduct: string;

 getSelected(product: Product): boolean {
   return product.name == this.selectedProduct;
 }




}
