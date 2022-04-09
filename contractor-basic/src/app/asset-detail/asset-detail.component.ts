import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asset } from '../model/asset';
import { CbaseService } from '../Service/cbase.service';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css'],
})
export class AssetDetailComponent implements OnInit {
  public assetID: number;
  asset = new Asset();
  constructor(
    private currActiveRoute: ActivatedRoute,
    private router: Router,
    private cbase: CbaseService
  ) {
    this.assetID = 0;
  }

  ngOnInit() {
    this.assetID = +this.currActiveRoute.snapshot.params['id'];
    this.currActiveRoute.data.subscribe((data) => {
      this.asset = data['ars'];
    });
  }
}
