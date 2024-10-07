import { Component, OnInit } from '@angular/core';
import { Icategory } from '../../Models/icategory';
import { CategoryService } from '../../Services/category.service';
import { Iproduct } from '../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { ProductsAPIService } from '../../Services/products-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.css'
})
export class AddNewProductComponent implements OnInit{

  categoriesList:Icategory[]=[] as Icategory[];
  product:Iproduct = {} as Iproduct;

  constructor(private categoryService:CategoryService, private productsAPIService:ProductsAPIService, private router: Router){}
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next:(cats)=>{
        this.categoriesList = cats;
      },
      error:(err)=>{console.log(err)}
    })
  }


  addNewProduct(){
    this.productsAPIService.addnewProduct(this.product).subscribe((res)=>{
      this.router.navigateByUrl("products")
    })
  }

}
