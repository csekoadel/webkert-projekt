import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArlistaRoutingModule } from './arlista-routing.module';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArlistaRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    
  ]
})
export class ArlistaModule { }
