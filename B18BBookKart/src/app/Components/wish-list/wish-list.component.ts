import { Component, OnInit } from '@angular/core';
import { WishListService } from 'src/app/Services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  public wishlistbooks: any=[];

  constructor(private service:WishListService) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe(res =>{
      this.wishlistbooks= res;})
  }
  removeItem(index:any){
    this.wishlistbooks.splice(index, 1);
  }
  emptyCart(){   
    this.wishlistbooks = [];  
  }
}
