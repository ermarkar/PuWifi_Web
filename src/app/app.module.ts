import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routings
import { routing } from './app.routes';

// import components
import { AppComponent } from './app.component';
import { AboutAppComponent } from "./components/about-app/about-app.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { AppEventsComponent } from "./components/app-events/app-events.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutAppComponent,
    AboutUsComponent,
    AppEventsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
