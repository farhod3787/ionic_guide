import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
  })
  export class RestarountService {
    constructor(private http: Http) {

    }

    url = "http://localhost:5000/api/restoran";
    // url = "/api/categories";
    // url = "https://online-pharmacy1.herokuapp.com/api/categories"


    get() {
        return this.http.get(this.url + '/getall');
    }

    post(body) {
        return this.http.post(this.url + '/create', body);
    }
    getRest (id) {
        return this.http.get(this.url + '/get/' + id)
    }
}