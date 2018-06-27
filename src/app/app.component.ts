import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: "puwifi-app",
  templateUrl: "app.component.html"
})
export class AppComponent implements AfterViewInit {

  @ViewChild("menuDropdown")
  elDropdown: ElementRef;

  ngAfterViewInit() {
    let iDropdown = new M.Dropdown(this.elDropdown.nativeElement, {});
  }
}
