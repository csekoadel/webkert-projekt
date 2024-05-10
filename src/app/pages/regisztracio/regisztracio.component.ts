import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import {AuthService} from '../../shared/services/auth.service';
import {User} from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';


@Component({
  selector: 'app-regisztracio',
  templateUrl: './regisztracio.component.html',
  styleUrl: './regisztracio.component.scss'
})
export class RegisztracioComponent {

  signUpForm=new FormGroup({
    email:new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name:new FormGroup({
      firstname:new FormControl(''),
      lastname:new FormControl(''),

    })
  });

  constructor(private location:Location, private authService:AuthService,private userService:UserService){

  }

  onSubmit() {
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;
    const firstname = this.signUpForm.get('name.firstname')?.value;
    const lastname = this.signUpForm.get('name.lastname')?.value;
  
    if (email && password && firstname && lastname) {
      this.authService.signup(email, password).then(vissza =>{
        console.log(vissza);
        const username = email.split('@')[0];
        const user: User ={
          id: vissza.user?.uid as string,
          email: email,
          username:username,
          name:{
            firstname:firstname,
            lastname: lastname
          }
        }
        this.userService.create(user).then(_ =>{
          console.log("felhasznaló hozzáadva")
        }).catch(error =>{
          console.error(error);
        })
      }).catch(error =>{
        console.error(error);
      });
    }
  }
  
  goBack(){
    this.location.back();
  }

}
