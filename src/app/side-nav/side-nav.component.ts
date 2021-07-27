import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor(private uiService: UiService, private router: Router) {}

  ngOnInit(): void {}

  toggleNav() {
    this.uiService.isSidenavOpen = !this.uiService.isSidenavOpen;
  }

  navigate(param: string) {
    this.router.navigateByUrl(param).finally(() => this.toggleNav());
  }
}
