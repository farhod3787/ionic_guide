import { Component, OnInit } from '@angular/core';
import { RestarountService } from '../shared/restarauntService';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {

  restarounts = []
  constructor( private restaraountService: RestarountService ) {
    this.get()
   }

   get() {
     this.restaraountService.get().subscribe(res =>{
       this.restarounts = res.json()
       console.log(this.restarounts)
     })
  }

  ngOnInit() {}

}
