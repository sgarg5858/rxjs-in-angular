import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SearchbarComponent,
    ForkJoinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
