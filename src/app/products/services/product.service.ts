import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts(limit?: string): Observable<Product[]> {
    let url = this.url;
    if(limit){
      url = `${url}?limit=${limit}`;
    }
    return this.http.get<Product[]>(url);
  }
  getProductById(id: number): Observable<Product> {
    const url = `${this.url}/${id}`;
    return this.http.get<Product>(url);
  }

  getCategories(): Observable<string[]> {
    const categoriesUrl = `${this.url}/categories`;
    return this.http.get<string[]>(categoriesUrl);
  }
getProductsByCategory(category: string, limit: number = 10): Observable<Product[]> {
  const url = `${this.url}/category/${category}?limit=${limit}`;
  return this.http.get<Product[]>(url);
}
}
