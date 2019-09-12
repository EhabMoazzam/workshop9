import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private _router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  addProduct(id, name, description, price){
    console.log(id + "," + name)
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    var data = 'id=' + id + '&name=' + name + '&description=' + description + '&price=' + price;

    this.http.post('http://localhost:3000/product/add', data, {
        headers: headers
    }).subscribe((data : any) => {
      this._router.navigateByUrl("/products")
    })
  }

}
