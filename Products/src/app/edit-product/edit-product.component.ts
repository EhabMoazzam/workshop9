import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  _id : any;
  id : Number;
  name : String;
  description : String;
  price : any;

  constructor(private _router: Router, private http: HttpClient) { 
    var fields = this._router.url.split('/')
    var _id = fields[2]

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    var data = '_id='+_id
    this.http.post('http://localhost:3000/product/read', data, {
        headers: headers
    }).subscribe((data : any) => {
      this._id = data._id
      this.id = data.id
      this.name = data.name
      this.description = data.description
      this.price = data.price.$numberDecimal
    })
  }

  ngOnInit() {
  }

  editProduct(id, name, description, price){
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    var data = '_id='+ this._id + '&id=' + id + '&name=' + name + '&description=' + description + '&price=' + price;
    
    this.http.post('http://localhost:3000/product/update', data, {
        headers: headers
    }).subscribe((data : any) => {
      this._router.navigateByUrl("/products")
    })
  }

}
