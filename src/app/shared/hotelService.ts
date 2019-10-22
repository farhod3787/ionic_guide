import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
  })
  export class HotelService {
    constructor(private http: Http) {

    }

    url = "http://localhost:5000/api/hotel";
    // url = "/api/categories";
    // url = "https://online-pharmacy1.herokuapp.com/api/categories"


    get() {
        return this.http.get(this.url + '/getall');
    }

    post(body) {
        return this.http.post(this.url + '/create', body);
    }
    getHotel (id) {
        return this.http.get(this.url + '/get/' + id)
    }
}