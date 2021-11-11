import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }

  getRecentVideos(){
    return [{date: 5, url:'/assets/videos/vid1.png'},{date: 6, url:'/assets/videos/vid3.png'},{date: 4, url:'/assets/videos/vid4.png'},{date: 1, url:'/assets/videos/vid5.png'}, {date: 3, url:'/assets/videos/vid6.png'}]
  }

  getGrade12(){
    return [{date: 1, url:'/assets/videos/1.png'},{date: 2, url:'/assets/videos/2.png'},{date: 3, url:'/assets/videos/3.png'},{date: 4, url:'/assets/videos/4.png'}, {date: 5, url:'/assets/videos/5.png'},{date: 6, url:'/assets/videos/6.png'}]
  }

  getGrade11(){
    return [{date: 1, url:'/assets/videos/1.png'},{date: 2, url:'/assets/videos/2.png'},{date: 3, url:'/assets/videos/3.png'},{date: 4, url:'/assets/videos/4.png'}]
  }

  getGrade10(){
    return [{date: 1, url:'/assets/videos/1.png'},{date: 4, url:'/assets/videos/4.png'}, {date: 5, url:'/assets/videos/5.png'},{date: 6, url:'/assets/videos/6.png'}]
  }
}
