import { Component, OnInit } from '@angular/core';
import { categorie } from 'src/app/interface/categorie.interface';
import { Product } from 'src/app/interface/product.interface';
import { CategorieService } from 'src/app/service/categorie.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  categoryList:string[] = []
 productlist:Product[] =[]
 prdlistbycat:Product[] =[]
 checkboxvalue:string |any
 pageselected:number =0


  constructor(categoryservice:CategorieService,private productservice:ProductService) { 

    categoryservice.getCategorie().subscribe(data =>{

      this.categoryList=data
      
   })



  }




  ngOnInit() {

    this.productservice.getProducts(10).subscribe(data =>{

      this.productlist=data
    }
      )

  }


  calculprice(price:number, discountPercentage:number):number {
    return  Math.round(price - (price * discountPercentage)/100);
    }

    pageOnChange(skip:number){

  console.log(skip)

this.productservice.getproductbypage(skip).subscribe(data =>{

  this.productlist=data
}
  )
    }



    checkValue(nom:string , isChecked: any){

      
      
      if(isChecked.currentTarget.checked)
      { 
        console.log(nom);
        this.productservice.getProductsbyCategorie(nom).subscribe(data =>{

          this.productlist=(data)
        }
          )  
      }
      else{

        this.ngOnInit();

      }
      
     

     
   }

}


