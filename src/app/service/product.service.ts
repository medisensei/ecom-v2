import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpc:HttpClient) { }

  getProducts(limit:number) : Observable<Product[]>{

return this.httpc.get<any>('https://dummyjson.com/products?limit='+limit).pipe(
  map(data => data.products))
  }



getProductsbyCategorie(category:string):Observable<Product[]> {
  return this.httpc.get<any>('https://dummyjson.com/products/category/'+category).pipe(
    map(data => data.products))

}


getproductbypage(skip:number):Observable<Product[]> {
  return this.httpc.get<any>(`https://dummyjson.com/products?limit=10&skip=${skip}`).pipe(
    map(data => data.products))

}
}
