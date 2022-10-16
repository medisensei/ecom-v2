import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/service/product.service';




@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

productlist : Product [] = [];




calculprice(price:number, discountPercentage:number):number {

  
return  Math.round(price - (price * discountPercentage)/100);


}

  constructor(private productservice:ProductService) {

productservice.getProducts(6).subscribe(data =>{

this.productlist=data

console.log(this.productlist)
  }


  )  
  
   }



  ngOnInit(): void {
  }

}
