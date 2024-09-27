import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsComponent } from './components/components.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { PagesComponent } from './pages/pages.component';
import { ChartComponent } from './chart/chart.component';
import { TablesComponent } from './tables/tables.component';
const routes: Routes = [
  {
    path: '',
    component:DashboardComponent,
    pathMatch:'full'
  },
  
  {
    path:'components',
    component:ComponentsComponent
  },
  {
    path:'utilities',
    component:UtilitiesComponent
  },
  {
    path:'pages',
    component:PagesComponent
  },
  {
    path:'chart',
    component:ChartComponent
  },
  {
    path:'tables',
    component:TablesComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
