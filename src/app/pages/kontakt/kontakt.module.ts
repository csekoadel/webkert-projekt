import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KontaktRoutingModule } from './kontakt-routing.module';
import { KontaktComponent } from './kontakt.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    KontaktComponent
  ],
  imports: [
    CommonModule,
    KontaktRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class KontaktModule { }
