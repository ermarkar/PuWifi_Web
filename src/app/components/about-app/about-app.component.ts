import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: "about-app",
  templateUrl: "about-app.component.html"
})
export class AboutAppComponent implements AfterViewInit {

  @ViewChild("carousel")
  elCarousel: ElementRef;


  ngAfterViewInit() {
    let iCarousel = new M.Carousel(this.elCarousel.nativeElement, {});
  }
}
