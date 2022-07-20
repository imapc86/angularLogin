import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
    ) {
    this.userForm =this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  createUser(){

    console.log(this.userForm);

    const USER: User ={
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value,
      role: this.userForm.get('role')?.value,
    }

    this.authService.postUser(USER).subscribe(data =>{
  
      this.toastr.success('El usuario fue registrado correctamente', '¡Registro correcto!');
      this.router.navigate(['login']);

    }, error=>{

      this.toastr.error('No se pudo realizar el registro.', '¡Error al intentar hacer el registro!');
      this.router.navigate(['register']);
      this.userForm.reset();

    });

  }

}
