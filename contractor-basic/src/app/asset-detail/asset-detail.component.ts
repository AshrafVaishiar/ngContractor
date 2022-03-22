import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css'],
})
export class AssetDetailComponent implements OnInit {
  public assetID!: number;
  constructor(private currActiveRoute: ActivatedRoute) {}

  ngOnInit() {
    this.assetID = this.currActiveRoute.snapshot.params['id'];
  }
}
