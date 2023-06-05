import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { HomeComponent } from './home/home.component';
import { CardDetailComponent } from './component/card-detail/card-detail.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    CardDetailComponent,
    HeaderComponent,
 ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
