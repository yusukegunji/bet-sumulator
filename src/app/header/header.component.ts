import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService, private uiServide: UiService) {}

  ngOnInit(): void {}

  addShikibetuControl() {}

  toggleNav(): void {
    this.uiServide.isSidenavOpen = !this.uiServide.isSidenavOpen;
    console.log(this.uiServide.isSidenavOpen);
  }
}
