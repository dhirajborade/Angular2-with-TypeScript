import { AuthorsService } from './authors/authors.service';
import { CoursesService } from './courses/courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { VoteComponent } from './vote/vote.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetService } from "./tweet/tweet.service";
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { TitleCasingPipe } from "./title-casing/title-casing.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    LikeComponent,
    VoteComponent,
    TweetComponent,
    TitleCasingComponent,
    TitleCasingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService, AuthorsService, TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
