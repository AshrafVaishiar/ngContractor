import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css'],
})
export class AddAssetComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onBackClick() {
    this.router.navigate(['/']);
  }
}
