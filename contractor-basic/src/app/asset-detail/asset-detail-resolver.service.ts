import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Asset } from '../model/asset';
import { CbaseService } from '../Service/cbase.service';

@Injectable({
  providedIn: 'root',
})
export class AssetDetailResolverService implements Resolve<Asset | undefined> {
  constructor(private cbase: CbaseService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Asset | undefined> | Promise<Asset | undefined> | undefined {
    const assetID = route.params['id'];
    return this.cbase.getAsset(+assetID).pipe(
      catchError((err : any) => {
         this.router.navigate(['/']);
         return of()
      })
    );
  }
}
