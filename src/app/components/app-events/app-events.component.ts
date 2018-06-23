import { Component } from '@angular/core';
import { EventService } from "../../services/event.service";

@Component({
  selector: "app-events",
  templateUrl: "app-events.component.html"
})
export class AppEventsComponent {

  events: any = [];
  constructor(private eventService: EventService) {
    this.initData();
  }

  initData() {
    this.eventService.getEvents().subscribe((appEvents: any) => {
      this.events = appEvents.data;

      // this.events = [{
      //   created_on: "2018-06-14T09:42:00.612115",
      //   description
      //     :
      //     "#PUAdmission It's that time of the year again! A long list of queries, confusions, misconceptions, doubts and what not.Let it all shun away as we are here to show you the right way. To put you under an umbrella of the right guidance and support, PU Mirror is available round the clock to help you make it through the PU Admissions 2018-19.",
      //   end_date
      //     :
      //     "2018-07-15T00:00:00+00:00",
      //   id
      //     :
      //     24,
      //   img_url
      //     :
      //     "https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/33576010_922863327885944_5303460878782300160_n.jpg?_nc_cat=0&oh=564cea3be061561e4cae7f79ff0f02e3&oe=5BBB8F2D",
      //   link
      //     :
      //     "https://www.facebook.com/pumirror1/photos/a.451444408361174.1073741829.440897942749154/922863324552611/?type=3",
      //   start_date
      //     :
      //     "2018-06-14T00:00:00+00:00",
      //   title
      //     :
      //     "PU Admissions 2018-2019"
      // }, {
      //   created_on: "2018-06-14T09:42:00.612115",
      //   description
      //     :
      //     "#PUAdmission It's that time of the year again! A long list of queries, confusions, misconceptions, doubts and what not.Let it all shun away as we are here to show you the right way. To put you under an umbrella of the right guidance and support, PU Mirror is available round the clock to help you make it through the PU Admissions 2018-19.",
      //   end_date
      //     :
      //     "2018-07-15T00:00:00+00:00",
      //   id
      //     :
      //     24,
      //   img_url
      //     :
      //     "https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/33576010_922863327885944_5303460878782300160_n.jpg?_nc_cat=0&oh=564cea3be061561e4cae7f79ff0f02e3&oe=5BBB8F2D",
      //   link
      //     :
      //     "https://www.facebook.com/pumirror1/photos/a.451444408361174.1073741829.440897942749154/922863324552611/?type=3",
      //   start_date
      //     :
      //     "2018-06-14T00:00:00+00:00",
      //   title
      //     :
      //     "PU Admissions 2018-2019"
      // }, {
      //   created_on: "2018-06-14T09:42:00.612115",
      //   description
      //     :
      //     "#PUAdmission It's that time of the year again! A long list of queries, confusions, misconceptions, doubts and what not.Let it all shun away as we are here to show you the right way. To put you under an umbrella of the right guidance and support, PU Mirror is available round the clock to help you make it through the PU Admissions 2018-19.",
      //   end_date
      //     :
      //     "2018-07-15T00:00:00+00:00",
      //   id
      //     :
      //     24,
      //   img_url
      //     :
      //     "https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/33576010_922863327885944_5303460878782300160_n.jpg?_nc_cat=0&oh=564cea3be061561e4cae7f79ff0f02e3&oe=5BBB8F2D",
      //   link
      //     :
      //     "https://www.facebook.com/pumirror1/photos/a.451444408361174.1073741829.440897942749154/922863324552611/?type=3",
      //   start_date
      //     :
      //     "2018-06-14T00:00:00+00:00",
      //   title
      //     :
      //     "PU Admissions 2018-2019"
      // }]
    });
  }
}
