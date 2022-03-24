import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Obj } from '@popperjs/core';
import { map, Observable } from 'rxjs';
import { Iasset } from '../listing/Iasset.Interface';

@Injectable({
  providedIn: 'root',
})
export class CbaseService {
  constructor(private httpclient: HttpClient) {}
  getAllAssets(SellRent: String): Observable<Iasset[]> {
    return this.httpclient.get('assets/jsonData/jsonData.json').pipe(
      map((data) => {
        const assetsArray: Array<Iasset> = [];
        let dataArray: any = [];
        dataArray = data;
        for (const id in dataArray) {
          if (dataArray[id].SellRent === SellRent) {
            assetsArray.push(dataArray[id]);
          }
        }
        return assetsArray;
      })
    );
  }
}
