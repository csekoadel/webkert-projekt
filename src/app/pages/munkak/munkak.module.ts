import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunkakRoutingModule } from './munkak-routing.module';
import { MunkakComponent } from './munkak.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormField, MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    MunkakComponent,
  ],
  imports: [
    CommonModule,
    MunkakRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatFormField,
    HttpClientModule
  ]
})
export class MunkakModule { }
