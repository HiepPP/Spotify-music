import { Http, RequestOptionsArgs } from "@angular/http";
import "rxjs/Rx";
import { Injectable } from "@angular/core";
import { RequestOptions } from "@angular/http";
import { request } from "http";
import { Headers } from "@angular/http";
import { tap } from "rxjs/operators/tap";
import { catchError } from "rxjs/operators";
import { error } from "util";
import { Observable } from "rxjs/Observable";
import { environment } from "../environments/environment.prod";
import { query } from "@angular/core/src/animation/dsl";

@Injectable()
export class SpotiflyService {
  static BASE_URL = "https://api.spotify.com/v1";
  constructor(private http: Http) {}

  query(url: string, params?: Array<string>): Observable<any[]> {
    let query_url = `${SpotiflyService.BASE_URL}${url}`;
    if (params) {
      query_url = `${query_url}?${params.join("&")}`;
    }
      const apiKey = environment.SpotifyApiKey;
      const header = new Headers({
        Authorization: `Bearer ${apiKey}`
      });
      console.log(query_url)
      const requestOption = new RequestOptions({ headers: header });

      return this.http.request(query_url, requestOption).map(res => res.json());
  }

  search(query: string, type: string): Observable<any> {
    return this.query(`/search`, [`q=${query}`, `type=${type}`]);
  }
   searchTrack(query: string, type: string): Observable<any> {
      return this.search(query, 'track');
   }

   //track
   getTrack(id: string): Observable<any[]>{
     return this.query(`/tracks/${id}`);
   }
   //artist
   getArtist(id: string): Observable<any>{
    return this.query(`/artists/${id}`);
  }

  //albums
  getAlbums(id: string): Observable<any>{
    return this.query(`/albums/${id}`);
  }
}
