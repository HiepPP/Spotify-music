import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { RouterModule, Routes } from "@angular/router";
import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from "@angular/common";
import { AlbumComponent } from "./album/album.component";
import { ArtistComponent } from "./artist/artist.component";
import { SearchComponent } from "./search/search.component";
import { TrackComponent } from "./track/track.component";
import { SpotiflyService } from "./spotify.service";
import { HttpModule } from "@angular/http";

const routes: Routes = [
  { path: "", redirectTo: "search", pathMatch: "full" },
  { path: "search", component: SearchComponent },
  { path: "tracks/:id", component: TrackComponent },
  { path: "artists/:id", component: ArtistComponent },
  { path: "albums/:id", component: AlbumComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistComponent,
    SearchComponent,
    TrackComponent
  ],
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: "/" },
    SpotiflyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
