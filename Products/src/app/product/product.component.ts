import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : any = []

  constructor(private _router: Router, private http: HttpClient) { }

  ngOnInit() {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('http://localhost:3000/product/read_all', {
        headers: headers
    }).subscribe((data : any) => {
      data.forEach(element => {
        this.products.push(element)
      });
    })
  }

  deleteProduct(_id){
    var r = confirm("Are you sure delete this item?");
    if (r == true) {
      alert(_id)
    }
    
  }

  editProduct(_id){
    alert(_id)
  }

}
