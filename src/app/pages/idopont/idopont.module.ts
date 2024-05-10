import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdopontRoutingModule } from './idopont-routing.module';
import { IdopontComponent } from './idopont.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    IdopontComponent
  ],
  imports: [
    CommonModule,
    IdopontRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule
   
  ]
})
export class IdopontModule { }
