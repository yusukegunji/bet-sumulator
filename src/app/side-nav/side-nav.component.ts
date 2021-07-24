import { Component, OnInit } from '@angular/core';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor(private uiService: UiService) {}

  ngOnInit(): void {}

  toggleNav() {
    this.uiService.isSidenavOpen = !this.uiService.isSidenavOpen;
  }
}
