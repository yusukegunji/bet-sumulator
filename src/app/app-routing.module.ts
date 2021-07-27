import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'create-sheet',
        loadChildren: () =>
          import('./create-sheet/create-sheet.module').then(
            (m) => m.CreateSheetModule
          ),
      },
      {
        path: 'workspace',
        loadChildren: () =>
          import('./workspace/workspace.module').then((m) => m.WorkspaceModule),
      },
      {
        path: 'members',
        loadChildren: () =>
          import('./member/member.module').then((m) => m.MemberModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
