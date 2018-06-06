import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutAppComponent } from "./components/about-app/about-app.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { AppEventsComponent } from "./components/app-events/app-events.component";

// Route Configuration
export const routes: Routes = [
    {
        path: "",
        component: AboutAppComponent
    },
    { path: "about-app", component: AboutAppComponent },
    { path: "about-us", component: AboutUsComponent },
    { path: "app-events", component: AppEventsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);