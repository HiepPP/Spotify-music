import { Http, RequestOptionsArgs } from "@angular/http";
import "rxjs/Rx";
import { Injectable } from "@angular/core";
import { RequestOptions } from '@angular/http';
import { request } from "http";
import { Headers } from "@angular/http";

@Injectable()
export class SpotiflyService {
  constructor(private http: Http) {}

  searchTrack(query: string) {
    let myHeaders = new Headers;
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', 'Bearer BQCQb5wctCRVEoFNowSTh-5xvYnjCt99O63pvKISWJmbUbpYYwilCD8P63HcUOZaMW9MEtrw2AoOo8EodGZKIZzrU70f4mCYQBjdfBC_q0aEB5P0XzBbEpWHjTbHxDoNQGWIDmKd3JjhyY7LCDlRXSjFi__lKoX_ShI8CH_dd1SPEOFixSDUE0JXvZWMdodcCTlBY26TjftbLF9Ij6Y_qtSUL_xJE7a6EN6kWAv9dy8mVyuwRSNQ0Kurkb8-nb4swCG466GtTAWVKsG1_cOOcR3TxQg');

    let options = new RequestOptions({headers : myHeaders});



    let params = [`q=${query}`, `type=track`, `limit=5`].join("&");

    let queryURL: string = `https://api.spotify.com/v1/search?${params}`;
    return this.http.get(queryURL, options).map(response => response.json());
  }
}
