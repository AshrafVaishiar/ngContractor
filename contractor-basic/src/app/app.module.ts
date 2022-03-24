import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListItemComponent } from './listing/list-item/list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CbaseService } from './Service/cbase.service';
import { RouterModule, Routes } from '@angular/router';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { AssetDetailComponent } from './asset-detail/asset-detail.component';

const appRoute: Routes = [
  {
    path: '',
    component: ListingComponent,
  },
  {
    path: 'addAsset',
    component: AddAssetComponent,
  },
  {
    path: 'assetDetail/:id',
    component: AssetDetailComponent,
  },
  {
    path: 'rent-asset',
    component: ListingComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    NavBarComponent,
    ListItemComponent,
    AddAssetComponent,
    AssetDetailComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [CbaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
