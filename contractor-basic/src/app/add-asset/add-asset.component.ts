import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Iasset } from '../listing/Iasset.Interface';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css'],
})
export class AddAssetComponent implements OnInit {
  @ViewChild('Form') addAssetForm!: NgForm;
  @ViewChild('formTabs', { static: false }) formTabs?: TabsetComponent;
  assetType = ['Apartment', 'Villa', 'Duplex'];
  furnishType = ['Fully', 'Semi', 'Unfurnished'];
  assetView: Iasset = {
    id: 0,
    Name: '',
    Price: 0,
    SellRent: "",
    PType: "",
    FType: "",
    BHK: 0,
    BuiltArea: 0,
    City: "",
    RTM: 0,
    Contact: ""
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  onBackClick() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log(this.addAssetForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
