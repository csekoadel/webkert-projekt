import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-belepes',
  templateUrl: './belepes.component.html',
  styleUrl: './belepes.component.scss'
})
export class BelepesComponent {

  loading: boolean=false;

  //Formcontrolok letrehozasa
  email = new FormControl('');
  password = new FormControl('');


  constructor(private router: Router,private authService:AuthService){

  }


  login(){
    this.loading=true;
      this.authService.login(this.email.value || '', this.password.value || '').then(vissza =>{
          console.log(vissza);
          this.router.navigateByUrl('/fooldal');
          this.loading=false;
    }).catch(error =>{
      console.error(error);
      this.loading=false;
    });

 
    

  }
}
