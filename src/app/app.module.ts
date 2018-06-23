import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// routings
import { routing } from './app.routes';

// import components
import { AppComponent } from './app.component';
import { AboutAppComponent } from "./components/about-app/about-app.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { AppEventsComponent } from "./components/app-events/app-events.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { MailService } from "./services/common/mail.service";
import { EventService } from "./services/event.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutAppComponent,
    AboutUsComponent,
    AppEventsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [MailService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
