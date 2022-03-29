import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/Service/alertify.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css'],
})
export class UserRegComponent implements OnInit {
  usrRegFormGroup!: FormGroup;
  User!: User;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private usrService: UserService,
    private alertify: AlertifyService
  ) {}

  private passwordMatchingValidator(
    valPassword: string,
    valConfirmPassword: string
  ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup;
      const password = formGroup.get(valPassword)?.value;
      const confirmPassword = formGroup.get(valConfirmPassword)?.value;

      if (password === confirmPassword) {
        return null;
      } else {
        return { valuesDoNotMatch: true };
      }
    };
  }

  createRegistrationForm() {
    this.usrRegFormGroup = this.formBuilder.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [
          null,
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
      },
      {
        validators: this.passwordMatchingValidator(
          'password',
          'confirmPassword'
        ),
      }
    );
  }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.usrRegFormGroup.valid) {
      console.log(this.usrRegFormGroup);
      this.usrService.addUser(this.userData());
      this.usrRegFormGroup.reset();
      this.isSubmitted = false;
      this.alertify.success('Registration successful');
    }
    else{
      this.alertify.error('Please provide th reqiuired details');
    }
  }

  userData(): User {
    return (this.User = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.mobile.value,
      mobile: this.mobile.value,
    });
  }
  // getters to each form control
  get userName() {
    return this.usrRegFormGroup.get('userName') as FormControl;
  }

  get password() {
    return this.usrRegFormGroup.get('password') as FormControl;
  }

  get email() {
    return this.usrRegFormGroup.get('email') as FormControl;
  }

  get confirmPassword() {
    return this.usrRegFormGroup.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.usrRegFormGroup.get('mobile') as FormControl;
  }
}
