import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  constructor(private http: HttpClient) { }

  getLocality(lat) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+lat+'ogun+state,Nigeria&key=AIzaSyBneTry7a6XDjUjSBLISxx7Fr6s0AePqVM');
  }
}
