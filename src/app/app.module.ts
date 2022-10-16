import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content-products/content.component';
import { NewArivalComponent } from './components/new-arival/new-arival.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ShopexComponent } from './components/shopex/shopex.component';
import{HttpClientModule} from '@angular/common/http';
import { PagesComponent } from './components/pages/pages.component'
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    NewArivalComponent,
    BestSellerComponent,
    HomeComponent,
    FooterComponent,
    BlogsComponent,
    ShopexComponent,
    PagesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
