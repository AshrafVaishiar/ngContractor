import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Asset } from '../model/asset';

@Injectable({
  providedIn: 'root',
})
export class CbaseService {
  constructor(private httpclient: HttpClient) {}
  getAsset(id: number) {
    return this.getAllAssets().pipe(
      map((assetArray) => {
        return assetArray.find((d) => d.id === id);
      })
    );
  }
  getAllAssets(SellRent?: String): Observable<Asset[]> {
    return this.httpclient.get('assets/jsonData/jsonData.json').pipe(
      map((data) => {
        const assetsArray: Array<Asset> = [];
        const localAssetsArray = JSON.parse(
          localStorage.getItem('assetDetails') as string
        ) as Array<Asset>;
        let dataArray: any = [];
        dataArray = data;
        if (localAssetsArray) {
          for (const id in localAssetsArray) {
            if (SellRent) {
              if (localAssetsArray[id].SellRent === SellRent) {
                assetsArray.push(localAssetsArray[id]);
              }
            } else {
              assetsArray.push(localAssetsArray[id]);
            }
          }
        }
        for (const id in dataArray) {
          if (SellRent) {
            if (dataArray[id].SellRent === SellRent) {
              assetsArray.push(dataArray[id]);
            }
          } else {
            assetsArray.push(dataArray[id]);
          }
        }
        return assetsArray;
      })
    );

    return this.httpclient.get<Asset[]>('assets/jsonData/jsonData.json');
  }

  addAssetDetails(asset: Asset) {
    let newAsset = [asset];
    if (localStorage.getItem('assetDetails')) {
      newAsset = [
        asset,
        ...JSON.parse(localStorage.getItem('assetDetails') as string),
      ];
    }
    localStorage.setItem('assetDetails', JSON.stringify(newAsset));
  }

  getAssetID() {
    if (localStorage.getItem('aID')) {
      localStorage.setItem(
        'aID',
        String((localStorage.getItem('aID') as string as unknown as number) + 1)
      );
      return +(localStorage.getItem('aID') as unknown as string);
    } else {
      localStorage.setItem('aID', '1001');
      return +(localStorage.getItem('aID') as unknown as string);
    }
  }
}
