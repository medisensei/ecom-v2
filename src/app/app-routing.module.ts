import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { PagesComponent } from './components/pages/pages.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'pages',component:PagesComponent},
  {path:'**', component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
