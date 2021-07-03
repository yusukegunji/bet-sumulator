import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectorsRoutingModule } from './selectors-routing.module';
import { SelectComponent } from './select/select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    SelectorsRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [SelectComponent],
})
export class SelectorsModule {}
