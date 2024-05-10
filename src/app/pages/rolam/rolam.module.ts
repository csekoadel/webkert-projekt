import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolamRoutingModule } from './rolam-routing.module';
import { RolamComponent } from './rolam.component';


@NgModule({
  declarations: [
    RolamComponent
  ],
  imports: [
    CommonModule,
    RolamRoutingModule
  ]
})
export class RolamModule { }
