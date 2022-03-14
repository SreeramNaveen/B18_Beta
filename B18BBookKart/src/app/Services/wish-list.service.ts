import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private http: HttpClient) { }

  getBooks(){
    return this.http.get('https://bookcart.azurewebsites.net/api/Wishlist/518')
  }
}
