import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AreachartComponent } from './areachart/areachart.component';

import { ComponentsComponent } from './components/components.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { ChartComponent } from './chart/chart.component';
import { TablesComponent } from './tables/tables.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchbarComponent,
    AreachartComponent,
  
    ComponentsComponent,
    DashboardComponent,
    UtilitiesComponent,
    NotfoundComponent,
    PagesComponent,
    ChartComponent,
    TablesComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
