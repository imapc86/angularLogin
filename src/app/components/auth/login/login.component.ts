import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authService: AuthService
  ) { 
    this.userForm =this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    }); 

  }

  ngOnInit(): void {
  }


  login(){

    const { email, password } = this.userForm.value;
    
    this.authService.login(email, password).subscribe(resp =>{

      console.log(resp)
      
    });

  }




}
