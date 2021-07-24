import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService, private uiService: UiService) {}

  ngOnInit(): void {}

  addShikibetuControl() {}

  toggleNav(): void {
    this.uiService.isSidenavOpen = !this.uiService.isSidenavOpen;
  }
}
