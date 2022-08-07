import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CombineLatestAndZipComponent } from './combine-latest-and-zip/combine-latest-and-zip.component';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SearchbarComponent,
    ForkJoinComponent,
    TakeUntilComponent,
    CombineLatestAndZipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
