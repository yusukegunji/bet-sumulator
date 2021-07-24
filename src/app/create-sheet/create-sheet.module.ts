import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSheetRoutingModule } from './create-sheet-routing.module';
import { CreateSheetComponent } from './create-sheet/create-sheet.component';
import { SelectorsModule } from '../selectors/selectors.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CreateSheetComponent],
  imports: [
    CommonModule,
    CreateSheetRoutingModule,
    SelectorsModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class CreateSheetModule {}
