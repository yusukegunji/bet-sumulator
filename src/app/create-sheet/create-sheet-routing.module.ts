import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSheetComponent } from './create-sheet/create-sheet.component';

const routes: Routes = [
  {
    path: '',
    component: CreateSheetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSheetRoutingModule {}
