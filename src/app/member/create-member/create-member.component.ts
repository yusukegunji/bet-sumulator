import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { PasswordService } from 'src/app/services/password.service';
import { PasswordValidators } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss'],
})
export class CreateMemberComponent implements OnInit {
  hide = true;
  passwordLength = 8;
  signUpForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(this.passwordLength),
        PasswordValidators.password,
      ],
    ],
  });

  get emailControl(): FormControl {
    return this.signUpForm.get('email') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private passwordService: PasswordService
  ) {}

  signUp() {
    this.authService.createUser(this.signUpForm.value);
  }

  generatetPassword() {
    this.passwordControl.setValue(this.passwordService.generatePassword());
    this.hide = false;
  }

  ngOnInit() {}
}
