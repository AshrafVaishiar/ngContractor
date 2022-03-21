import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-listing',
  templateUrl: 'listing.component.html',
  styleUrls: ['listing.component.css'],
})
export class ListingComponent implements OnInit{
  assets: Array<any> = [
    {
      Name: '2BHK House',
    },
    { Name: 'Contemporary House' },
  ];

  constructor() { }
  ngOnInit(): void {
  }
}
