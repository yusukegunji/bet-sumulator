import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule, REGION } from '@angular/fire/functions';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectorsModule } from './selectors/selectors.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    SelectorsModule,
    MatButtonModule,
  ],
  providers: [{ provide: REGION, useValue: 'asia-northeast1' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
