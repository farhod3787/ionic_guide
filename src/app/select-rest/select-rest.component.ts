import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RestarountService } from '../shared/restarauntService';


@Component({
  selector: 'app-select-rest',
  templateUrl: './select-rest.component.html',
  styleUrls: ['./select-rest.component.scss'],
})
export class SelectRestComponent implements OnInit {

  restaraun = {}
  private id : string
  constructor(
    public route: ActivatedRoute,
    private restService: RestarountService

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.id = paramMap.get("id");
        this.restService.getRest(this.id).subscribe(postData => {
          this.restaraun = postData.json();
          console.log(this.restaraun)
        });
      } else {
        this.id = null;
      }
    });

  }

}
