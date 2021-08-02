import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ShikibetuSelectorsComponent } from './shikibetu-selectors/shikibetu-selectors.component';
import { SelectorsModule } from '../selectors/selectors.module';
import { TanshoFormsComponent } from './tansho-forms/tansho-forms.component';
import { FukushoFormsComponent } from './fukusho-forms/fukusho-forms.component';
import { UmarenFormsComponent } from './umaren-forms/umaren-forms.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UmatanFormsComponent } from './umatan-forms/umatan-forms.component';
import { ResultComponent } from './result/result.component';
import { TwoHorseOptionComponent } from './two-horse-option/two-horse-option.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { HotTableModule } from '@handsontable/angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    WorkspaceComponent,
    ShikibetuSelectorsComponent,
    TanshoFormsComponent,
    FukushoFormsComponent,
    UmarenFormsComponent,
    UmatanFormsComponent,
    ResultComponent,
    TwoHorseOptionComponent,
  ],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SelectorsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    HotTableModule,
  ],
})
export class WorkspaceModule {}
