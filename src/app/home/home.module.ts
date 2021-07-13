import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SelectorsModule } from '../selectors/selectors.module';
import { HeaderComponent } from './header/header.component';
import { TanshoComponent } from './tansho/tansho.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { FukushoComponent } from './fukusho/fukusho.component';
import { UmarenComponent } from './umaren/umaren.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    TanshoComponent,
    ResultComponent,
    FukushoComponent,
    UmarenComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SelectorsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
  ],
})
export class HomeModule {}
