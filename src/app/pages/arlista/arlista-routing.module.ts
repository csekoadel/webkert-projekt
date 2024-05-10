import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArlistaComponent } from './arlista.component';

const routes: Routes = [{ path: '', component: ArlistaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArlistaRoutingModule { }
