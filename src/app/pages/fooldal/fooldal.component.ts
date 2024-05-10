import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fooldal',
  templateUrl: './fooldal.component.html',
  styleUrl: './fooldal.component.scss'
})
export class FooldalComponent {

  constructor(private router:Router){

  }

booking():void{
  this.router.navigateByUrl("/idopont");

}


}
