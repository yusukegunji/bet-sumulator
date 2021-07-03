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

@NgModule({
  declarations: [HomeComponent, HeaderComponent, TanshoComponent, ResultComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SelectorsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
