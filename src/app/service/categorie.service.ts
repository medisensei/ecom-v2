import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categorie } from '../interface/categorie.interface';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor( private http:HttpClient) {

   }

   getCategorie() : Observable<string[]>{

    return this.http.get<string[]>('https://dummyjson.com/products/categories')
    }


}
