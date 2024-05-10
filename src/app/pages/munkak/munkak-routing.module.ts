import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MunkakComponent } from './munkak.component';

const routes: Routes = [{ path: '', component: MunkakComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MunkakRoutingModule { }
