import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HotelService } from '../shared/hotelService';

@Component({
  selector: 'app-select-hotel',
  templateUrl: './select-hotel.component.html',
  styleUrls: ['./select-hotel.component.scss'],
})
export class SelectHotelComponent implements OnInit {

  hotel = {}
  private id : string
  constructor(
    public route: ActivatedRoute,
    private hotelService: HotelService

  ) {
   }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.id = paramMap.get("id");
        this.hotelService.getHotel(this.id).subscribe(postData => {
          this.hotel = postData.json();
          console.log(this.hotel)
        });
      } else {
        this.id = null;
      }
    });
  }

}
