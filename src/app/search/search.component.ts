import { Component, OnInit } from "@angular/core";
import { SpotiflyService } from "../spotify.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor(
    private spotiflyService: SpotiflyService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.query = params["query"] || "";
    });
  }

  search(): void {
    if (!this.query) {
      return;
    }

    this.spotiflyService
      .searchTrack(this.query)
      .subscribe(res => this.renderResult(res));
  }

  renderResult(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }

  submit(query: string) {
    this.router
      .navigate(["search"], { queryParams: { query: query } })
      .then(_ => this.search());
  }
  ngOnInit() {
    this.search();
  }
}
