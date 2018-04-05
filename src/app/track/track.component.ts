import { Component, OnInit } from "@angular/core";
import { SpotiflyService } from "../spotify.service";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-track",
  templateUrl: "./track.component.html",
  styleUrls: ["./track.component.css"]
})
export class TrackComponent implements OnInit {
  id: string;
  track: Object;
  constructor(
    private spotiflySerice: SpotiflyService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => (this.id = params["id"]));
  }

  ngOnInit() {
    this.search();
  }

  renderTrack(response: Object) {
    this.track = response;
  }

  back() {
    this.location.back();
  }

  search() {
    this.spotiflySerice
      .getTrack(this.id)
      .subscribe((response :any) => this.renderTrack(response));
  }
}
