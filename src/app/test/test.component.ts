import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { HotelService } from '../shared/hotelService';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  hotels = []
  constructor(
    private hotelService: HotelService
    ) {
      this.get()
   }

   get() {
     this.hotelService.get().subscribe( res => {
       this.hotels = res.json()
       console.log(this.hotels)
     })
   }

  ngOnInit() {}


}
