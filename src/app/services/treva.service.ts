import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrevaService {

  url='https://api.backendless.com/466210C5-1949-A11E-FFB9-F64FE2D96500/FF40EEBD-E561-4437-A5D9-290B506F8376/data/tb_treva';
  constructor(private http: HttpClient) { }

  getDataTreva(judul: string): Observable<any> {
    return this.http.get(`${this.url}/?judul=${encodeURI(judul)}`).pipe (
      map(results => results['data'])
    );
  }
}
