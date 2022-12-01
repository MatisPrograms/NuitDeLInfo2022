import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {GamesComponent} from './games/games.component';
import {ErrorpageComponent} from './errorpage/errorpage.component';
import {HeaderComponent} from './header/header.component';
import { SlidesComponent } from './homepage/slides/slides.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GamesComponent,
    ErrorpageComponent,
    HeaderComponent,
    SlidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
