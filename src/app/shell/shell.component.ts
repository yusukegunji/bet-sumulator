import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  user$: Observable<User> = this.authService.user$;

  constructor(public uiService: UiService, private authService: AuthService) {}

  ngOnInit(): void {}
}
