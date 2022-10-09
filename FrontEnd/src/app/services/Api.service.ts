import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ApitestService {
  constructor(private httpclient: HttpClient) {}

  getProducts(category: ProductCategory = 'all') {
    return new Promise<Product[]>((resolve, reject) => {
      const endPoint =
        category === 'all' ? '/product' : `/product?category=${category}`;
      try {
        this.httpclient
          .get(environment.apiURL + endPoint)
          .subscribe((response: any) => {
            resolve(response.data);
          });
      } catch {
        reject();
      }
    });
  }
  getProductById(id: string): any {
    return this.httpclient.get(`${environment.apiURL}/products/${id}`);
  }
}