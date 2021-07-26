import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  hide: boolean = true;

  signinForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  get emailControl() {
    return this.signinForm.get('email') as FormControl;
  }

  get passwordControl() {
    return this.signinForm.get('password') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private uiServive: UiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  openResetDialog(): void {}

  signin(): void {
    this.uiServive.isLoading = true;
    this.authService.signinWithEmail(this.signinForm.value);
  }
}
