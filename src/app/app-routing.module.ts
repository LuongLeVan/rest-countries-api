import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { CardDetailComponent } from './component/card-detail/card-detail.component';
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: ':country', component: CardDetailComponent},
    {path: '**', component: HomeComponent}
   
  
  
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
  