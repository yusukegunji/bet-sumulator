import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSheetRoutingModule } from './create-sheet-routing.module';
import { CreateSheetComponent } from './create-sheet/create-sheet.component';
import { SelectorsModule } from '../selectors/selectors.module';

@NgModule({
  declarations: [CreateSheetComponent],
  imports: [CommonModule, CreateSheetRoutingModule, SelectorsModule],
})
export class CreateSheetModule {}
