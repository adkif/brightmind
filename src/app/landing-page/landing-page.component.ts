import { Component, OnInit } from '@angular/core';
import { IVideo } from '../ivideo';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  recents: IVideo[] | undefined;
  grad12: IVideo[] | undefined;
  grad11: IVideo[] | undefined;
  grad10: IVideo[] | undefined;
  slides = [
    {src:"/assets/images/cpp_s3fs-public_2020-03_aspect_xl_large_Hero Banner-4.png"},
    {src:"/assets/images/cpp_s3fs-public_2020-03_aspect_xl_large_Hero Banner-5 (1).png"}
  ]
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.recents = this.dataService.getRecentVideos().sort((a,b) => a.date - b.date);
    this.grad12 = this.dataService.getGrade12().sort((a,b) => a.date - b.date);
    this.grad11 = this.dataService.getGrade11().sort((a,b) => a.date - b.date);
    this.grad10 = this.dataService.getGrade10().sort((a,b) => a.date - b.date);
  }

}
