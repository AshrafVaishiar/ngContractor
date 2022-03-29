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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegComponent } from './user/user-reg/user-reg.component';
import { UserService } from './user/user.service';
import { AlertifyService } from './Service/alertify.service';
import { AuthService } from './Service/Auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

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
  {
    path: 'user/register',
    component: UserRegComponent,
  },
  {
    path: 'user/login',
    component: UserLoginComponent,
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
    UserLoginComponent,
    UserRegComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    TabsModule,
    ButtonsModule,
    BsDatepickerModule
  ],
  providers: [CbaseService, UserService, AlertifyService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
