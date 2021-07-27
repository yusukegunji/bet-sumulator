import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  members$: Observable<User[]> = this.memberService.getMembers();
  constructor(
    private authService: AuthService,
    private memberService: MemberService
  ) {}

  ngOnInit() {}

  deleteUser(uid: string) {
    this.authService.deleteUser(uid);
  }
}
