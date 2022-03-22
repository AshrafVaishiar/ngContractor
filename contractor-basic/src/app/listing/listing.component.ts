import { Component, OnInit } from '@angular/core';
import { CbaseService } from '../Service/cbase.service';
import { Iasset } from './Iasset.Interface';
@Component({
  selector: 'app-listing',
  templateUrl: 'listing.component.html',
  styleUrls: ['listing.component.css'],
})
export class ListingComponent implements OnInit {
  assets: Array<Iasset> = [];
  constructor(private cbase: CbaseService) {}
  ngOnInit(): void {
    this.cbase.getAllAssets().subscribe(
      (data) => {
        this.assets = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
