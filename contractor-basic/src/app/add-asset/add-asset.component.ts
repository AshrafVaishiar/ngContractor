import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Iasset } from '../listing/Iasset.Interface';
import { Asset } from '../model/asset';
import { AlertifyService } from '../Service/alertify.service';
import { CbaseService } from '../Service/cbase.service';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css'],
})
export class AddAssetComponent implements OnInit {
  addAssetForm!: FormGroup;
  nextClicked!: boolean;
  @ViewChild('formTabs', { static: false }) formTabs?: TabsetComponent;
  assetType = ['Apartment', 'Villa', 'Duplex'];
  furnishType = ['Fully', 'Semi', 'Unfurnished'];
  asset = new Asset();
  assetView: Iasset = {
    id: 0,
    Name: '',
    Price: null,
    SellRent: '',
    AType: '',
    FType: '',
    BHK: null,
    BuiltArea: null,
    City: '',
    RTM: null,
    Contact: '',
    Address: '',
  };

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cbase: CbaseService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {
    this.createAddAssetForm();
  }

  createAddAssetForm() {
    this.addAssetForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: [null, Validators.required],
        AType: [null, Validators.required],
        Name: [null, Validators.required],
        BHK: [null, Validators.required],
        City: [null, Validators.required],
        FType: [null, Validators.required],
      }),
      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        Security: [null],
        Maintenance: [null],
        CarpetArea: [null],
      }),
      AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
      }),
      OtherInfo: this.fb.group({
        RTM: [null, Validators.required],
        PossessionOn: [null],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null],
      }),
    });
  }

  //#region getFormGroup
  get basicInfo() {
    return this.addAssetForm.controls['BasicInfo'] as FormGroup;
  }

  get PriceInfo() {
    return this.addAssetForm.controls['PriceInfo'] as FormGroup;
  }

  get AddressInfo() {
    return this.addAssetForm.controls['AddressInfo'] as FormGroup;
  }

  get OtherInfo() {
    return this.addAssetForm.controls['OtherInfo'] as FormGroup;
  }
  //#endregion

  // #region getFormControls
  get SellRent() {
    return this.basicInfo.controls['SellRent'] as FormControl;
  }

  get Price() {
    return this.PriceInfo.controls['Price'] as FormControl;
  }

  get RTM() {
    return this.OtherInfo.controls['RTM'] as FormControl;
  }

  get BHK() {
    return this.basicInfo.controls['BHK'] as FormControl;
  }

  get AType() {
    return this.basicInfo.controls['AType'] as FormControl;
  }

  get Name() {
    return this.basicInfo.controls['Name'] as FormControl;
  }

  get Address() {
    return this.AddressInfo.controls['Address'] as FormControl;
  }

  get City() {
    return this.basicInfo.controls['City'] as FormControl;
  }

  get FType() {
    return this.basicInfo.controls['FType'] as FormControl;
  }

  get BuiltArea() {
    return this.PriceInfo.controls['BuiltArea'] as FormControl;
  }

  get Security() {
    return this.PriceInfo.controls['Security'] as FormControl;
  }

  get MainEntrance() {
    return this.OtherInfo.controls['MainEntrance'] as FormControl;
  }

  get LandMark() {
    return this.AddressInfo.controls['LandMark'] as FormControl;
  }

  get PossessionOn() {
    return this.OtherInfo.controls['PossessionOn'] as FormControl;
  }

  get FloorNo() {
    return this.AddressInfo.controls['FloorNo'] as FormControl;
  }

  get TotalFloor() {
    return this.AddressInfo.controls['TotalFloor'] as FormControl;
  }

  get CarpetArea() {
    return this.PriceInfo.controls['CarpetArea'] as FormControl;
  }

  get AOP() {
    return this.OtherInfo.controls['AOP'] as FormControl;
  }

  get Gated() {
    return this.OtherInfo.controls['Gated'] as FormControl;
  }

  get Maintenance() {
    return this.PriceInfo.controls['Maintenance'] as FormControl;
  }

  get Description() {
    return this.OtherInfo.controls['Description'] as FormControl;
  }
  //#endregion
  onBackClick() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    this.nextClicked = true;
    console.log(this.allTabsValid());
    if (this.allTabsValid()) {
      this.mapAssetDataFields();
      this.cbase.addAssetDetails(this.asset);
      if (this.SellRent.value === 'R') {
        this.router.navigate(['/rent-asset']);
      } else {
        this.router.navigate(['/']);
      }
      this.alertify.success("Congratulations, Your assest is now listed with us.");
    } else {
      this.alertify.error("error");
    }
    console.log(this.addAssetForm);
  }

  selectTab(tabId: number, tabValid: boolean) {
    this.nextClicked = true;
    if (tabValid) {
      console.log(tabId);
      this.formTabs?.tabs[tabId]
        ? (this.formTabs.tabs[tabId].active = true)
        : false;
    }
  }

  allTabsValid(): boolean {
    if (this.basicInfo.invalid) {
      this.formTabs?.tabs[0] ? (this.formTabs.tabs[0].active = true) : false;
      return false;
    }

    if (this.PriceInfo.invalid) {
      this.formTabs?.tabs[1] ? (this.formTabs.tabs[1].active = true) : false;
      return false;
    }

    if (this.AddressInfo.invalid) {
      this.formTabs?.tabs[2] ? (this.formTabs.tabs[2].active = true) : false;
      return false;
    }

    if (this.OtherInfo.invalid) {
      this.formTabs?.tabs[4] ? (this.formTabs.tabs[4].active = true) : false;
      return false;
    }
    return true;
  }

  mapAssetDataFields() {
    this.asset.id = this.cbase.getAssetID();
    this.asset.SellRent = this.SellRent.value;
    this.asset.BHK = this.BHK.value;
    this.asset.AType = this.AType.value;
    this.asset.Name = this.Name.value;
    this.asset.City = this.City.value;
    this.asset.FType = this.FType.value;
    this.asset.Price = this.Price.value;
    this.asset.Security = this.Security.value;
    this.asset.Maintenance = this.Maintenance.value;
    this.asset.BuiltArea = this.BuiltArea.value;
    this.asset.CarpetArea = this.CarpetArea.value;
    this.asset.FloorNo = this.FloorNo.value;
    this.asset.TotalFloor = this.TotalFloor.value;
    this.asset.Address = this.Address.value;
    this.asset.Address2 = this.LandMark.value;
    this.asset.RTM = this.RTM.value;
    this.asset.AOP = this.AOP.value;
    this.asset.Gated = this.Gated.value;
    this.asset.MainEntrance = this.MainEntrance.value;
    this.asset.Possession = this.PossessionOn.value;
    this.asset.Description = this.Description.value;
    this.asset.PostedOn = new Date().toString();
  }
}
