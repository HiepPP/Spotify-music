import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiflyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albumsId: string;
  album: Object;
  constructor(private route: ActivatedRoute, private spotifyService: SpotiflyService) {
    this.route.params.subscribe(param => this.albumsId = param["id"])
  }

  ngOnInit() {
    this.search(this.albumsId);
  }

  search(id: string) {
    this.spotifyService.getAlbums(this.albumsId).subscribe(res => { this.renderView(res); console.log(res) });
  }

  renderView(res: Object) {
    this.album = null;
    this.album = res;
  }

}
