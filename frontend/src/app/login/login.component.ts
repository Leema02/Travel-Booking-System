import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isSubmitted = false;
  serverErrors: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(
        response => {
          console.log('Login successful!', response);

          // Store user ID in localStorage
          if (response.success) {
            localStorage.setItem('userId', response.user.id);
          }

          // Redirect to home page on success
          this.router.navigate(['/home']);
        },
        error => {
          if (error.status === 401) {
            this.serverErrors = error.message;
            console.log(this.serverErrors);
            this.cdr.detectChanges();
          } else {
            console.error('Login failed', error);
          }
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
