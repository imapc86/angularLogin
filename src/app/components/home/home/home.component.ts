import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usersList:User[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.obtenerUsuarios();

  }

  obtenerUsuarios(){

    this.authService.getUsers().subscribe(data =>{

      console.log(data);
      this.usersList = data;

    }, error =>{

      console.log(error)

    })

  }

}
