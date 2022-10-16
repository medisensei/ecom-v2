import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {

  productlist : Product []   = [];


  constructor(private productservice:ProductService) {


   }

  ngOnInit(): void {

    this.productservice.getProducts(6).subscribe((data )=>{

      this.productlist=data
      
      console.log(this.productlist)
        }
       )
    
  }

}
