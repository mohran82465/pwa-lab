import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductCardDirective } from '../../Directives/product-card.directive';
import { CreditCardFormatePipe } from '../../Pipes/credit-card-formate.pipe';
import { ProductsServicesService } from '../../Services/products-services.service';
import { Router, RouterLink } from '@angular/router';
import { ProductsAPIService } from '../../Services/products-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ FormsModule, CommonModule, ProductCardDirective, CreditCardFormatePipe, RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnDestroy{

  clientName:string = 'Ali'
  // productList:Iproduct[];
  // categoriesList:Icategory[];
  flag:boolean=true;
  productsFilterd:Iproduct[]=[];
  date:Date = new Date();
  creditCard:string = '0000000000000000';
  @Output() addToCartEvent:EventEmitter<Iproduct> = new EventEmitter<Iproduct>();
  sup!:Subscription

  product:Iproduct = {} as Iproduct;

  constructor(private productsServicesService:ProductsServicesService, private router:Router, private productsAPIService:ProductsAPIService){}
  
  ngOnInit(){
    // this.productsFilterd = this.productsServicesService.getProducts();
    this.sup = this.productsAPIService.getAllProducts().subscribe({next:(allData)=>{
      // console.log(allData)
      this.productsFilterd = allData;
    }})
  }
  
  ngOnDestroy(): void {
    this.sup.unsubscribe()
  }

  // decrementTheQuantity(prd:Iproduct):void{
  //   --prd.quantity
  //   this.flag = !this.flag;
  // }

  addToCart(product:Iproduct){
    this.addToCartEvent.emit(product)
  }
  
  @Input() set findProdByCatID(val:number){
    // console.log(val)
    // this.productsFilterd = this.filterProductsByCatID(val)

    this.productsAPIService.getAllProducts().subscribe({
      next:(allData)=>{
        this.productsFilterd = allData.filter((prd:Iproduct) => prd.catID == val)
      }
    })
  }

  ////  filterProductsByCatID(catId:number):Iproduct[]{
  ////    return this.productsServicesService.getProducts().filter((prd:Iproduct)=>prd.catID==catId)
  ////  }

  @Input() set findProdByPrice(val:number){
    // console.log(val)
    // this.productsFilterd = this.filterProductsByPrice(val)
    this.productsAPIService.getAllProducts().subscribe({
      next:(allData)=>{
        this.productsFilterd = allData.filter((prd:Iproduct)=>prd.price.toString().includes(val.toString()))
      }
    })
  }


  //// filterProductsByPrice(productPrice:number):Iproduct[]{
  //   // return this.productList.filter((prd:Iproduct)=>prd.price == productPrice) // this return the exactly price which match the comming price
  // //  return this.productsServicesService.getProducts().filter((prd:Iproduct)=>prd.price.toString().includes(productPrice.toString()))
  //// }

  goToProductDetails(prdId:number){
    this.router.navigate(['/products',prdId])
  }

  updateProduct(product:Iproduct){
    this.router.navigateByUrl('Products/add')
    this.productsAPIService.updateProduct(product).subscribe((res)=>console.log(res))
  }
  
  deleteProduct(prdID:string){
    console.log(prdID)
    this.productsAPIService.deleteProduct(prdID).subscribe(()=>{console.log('deleted product')})
    // this.router.navigate(['Products/add'])
    window.location.reload();
  }
}
