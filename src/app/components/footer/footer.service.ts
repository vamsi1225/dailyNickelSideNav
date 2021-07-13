import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http: HttpClient) { }

  url = 'https://stg2.dailynickel.com/api/get-products';

  getProducts(): Observable<any> {
    // const payload = {
    //   server_key: '9f1c90293f914071950e63cc6be50e75',
    //   pageNo: 1,
    //   access_token: 'dca01463b28685e872f58266ec3c76d0acc4ce80e46c414677bbde34dc364616c21a57a0982708247bb7a62681a8a0f94ab424b06d172ca3',
    //   limit: 10,
    //   category_id: '',
    //   price_min: '',
    //   price_max: '',
    //   group_id: '',
    //   groupsingle: '',
    //   excludedids: '',
    //   skillsSelected: '["1","2","3","6"]',
    //   goodsSelected: '["1","2","26","33"]',
    //   milesSelected: '["25","10","5"]'
    // }
    let formdata=new FormData();
    formdata.append('server_key', "9f1c90293f914071950e63cc6be50e75");
    formdata.append('accesstoken', "3e6bf755a33a0aab18671b6d89720c0f3bb854014711db2d1c60d9da206cde29633e2a6c29557447e1226495c14f1a62ae17aa76c1f0d457");
    return this.http.post(
      this.url,
      formdata
      );
  }

}
