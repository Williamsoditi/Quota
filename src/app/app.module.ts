import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { HighlightDirective } from './highlight.directive';
import { DateCreatedPipe } from './date-created.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QuoteComponent,
    QuoteDetailComponent,
    HighlightDirective,
    DateCreatedPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
