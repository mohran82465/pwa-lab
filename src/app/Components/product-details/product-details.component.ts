import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsServicesService } from '../../Services/products-services.service';
import { Iproduct } from '../../Models/iproduct';
import { Location } from '@angular/common';
import { ProductsAPIService } from '../../Services/products-api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  productID:number=0;
  currentProduct:Iproduct|undefined=undefined;
  allIDs:number[]=[];
  currentIndex:number=0;
  productsAfterSearch:Iproduct[]=[]
  constructor(private activatedRoute: ActivatedRoute, private productsServices:ProductsServicesService, private router:Router, private location:Location, private productsAPIService:ProductsAPIService){}
  ngOnInit(): void {
    // this.productID = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    // console.log(this.productID)
    // let TheTargetPrd =  this.productsServicesService.getProductByID(this.productID)
    // console.log(TheTargetPrd)
    // if(TheTargetPrd){
    //   this.currentProduct = TheTargetPrd
    // }else{
    //   this.router.navigate(['/products'])
    // }
    
    // this.activatedRoute.paramMap.subscribe((prd)=>{
    //   this.productID = Number(prd.get('id'))||0
    //   let targetPrd = this.productsServices.getProductByID(this.productID);
    //   if(targetPrd) {
    //     this.currentProduct = targetPrd
    //   }
    //   else{
    //       this.router.navigate(['/products'])
    //   }
    // });

    this.activatedRoute.paramMap.subscribe((prd)=>{
      this.productID = Number(prd.get('id'))||0

      this.productsAPIService.getProductByID(this.productID.toString()).subscribe({
        next:(prd)=> this.currentProduct = prd
      })
    });

    this.allIDs = this.productsServices.getAllProductsIDs()
    // console.log(this.allIDs)
  }

  goBack(){
    this.location.back()
  }

  prev(){
    this.currentIndex = this.allIDs.indexOf(this.productID);
    this.router.navigate(['/products', this.allIDs[--this.currentIndex]])
  }
  next(){
    this.currentIndex = this.allIDs.indexOf(this.productID);
    this.router.navigate(['/products', this.allIDs[++this.currentIndex]])
  }

  materialSearch(material:string){
    this.productsAPIService.searchProductsMaterial(material).subscribe({
      next:(products)=>{
        this.productsAfterSearch = products;
        // console.log(products)
      }
    })
  }

}
