import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CbaseService } from '../Service/cbase.service';
import { Iasset } from './Iasset.Interface';
@Component({
  selector: 'app-listing',
  templateUrl: 'listing.component.html',
  styleUrls: ['listing.component.css'],
})
export class ListingComponent implements OnInit {
  SellRent = 'S';
  assets: Array<Iasset> = [];
  constructor(
    private cbase: CbaseService,
    private currActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    if (this.currActivatedRoute.snapshot.url.toString()) {
      console.log(this.currActivatedRoute.snapshot.url.toString());
      this.SellRent = 'R';
    }
    this.cbase.getAllAssets(this.SellRent).subscribe(
      (data) => {
        this.assets = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
