import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSheetRoutingModule } from './create-sheet-routing.module';
import { CreateSheetComponent } from './create-sheet/create-sheet.component';
import { SelectorsModule } from '../selectors/selectors.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [CreateSheetComponent],
  imports: [
    CommonModule,
    CreateSheetRoutingModule,
    SelectorsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class CreateSheetModule {}
