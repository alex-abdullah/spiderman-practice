import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpidermenComponent } from './spidermen/spidermen.component';
import { FormsModule } from '@angular/forms';
import { SpidermanDetailComponent } from './spiderman-detail/spiderman-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SpidermanSearchComponent } from './spiderman-search/spiderman-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SpidermenComponent,
    SpidermanDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SpidermanSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
