import { Component } from '@angular/core';
import { ProductsListComponent } from '../products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { Icategory } from '../../Models/icategory';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { ProductsServicesService } from '../../Services/products-services.service';

@Component({
  selector: 'app-products-parent',
  standalone: true,
  imports: [ProductsListComponent, FormsModule, CommonModule],
  templateUrl: './products-parent.component.html',
  styleUrl: './products-parent.component.css'
})
export class ProductsParentComponent {
  findProd:number=0;
  getProductByPrice:number=0
  categoriesList:Icategory[]
  totalOrderPrice:number=0
  productsInCart:Iproduct[]=[]
  constructor(private productServices:ProductsServicesService){
    this.categoriesList = this.productServices.getCategories();
  }

  cart(newProduct:Iproduct){
    if(this.productsInCart.includes(newProduct)){
      newProduct.count! +=1;
      newProduct.totalPrdPrice = newProduct.price * newProduct.count;
      this.totalOrderPrice += newProduct.price
    }else{
      this.productsInCart.push(newProduct);
      newProduct.totalPrdPrice = newProduct.price;
      this.totalOrderPrice += newProduct.price
    }
    
  }
} 
