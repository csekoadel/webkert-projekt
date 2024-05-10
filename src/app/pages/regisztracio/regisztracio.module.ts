import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisztracioRoutingModule } from './regisztracio-routing.module';
import { RegisztracioComponent } from './regisztracio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    RegisztracioComponent
  ],
  imports: [
    CommonModule,
    RegisztracioRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule

  ]
})
export class RegisztracioModule { }
