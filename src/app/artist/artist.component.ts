import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiflyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistId: string;
  artist: Object;
  constructor(private route: ActivatedRoute, private spotifyService: SpotiflyService) {
    this.route.params.subscribe(params => { this.artistId = params["id"]})
  }

  search(){
      this.spotifyService.getArtist(this.artistId).subscribe(res=> this.renderView(res));
  }

  renderView(respone: Object){
    this.artist = null;
    this.artist = respone;
  }
  ngOnInit() {
    this.search();
  }

}
