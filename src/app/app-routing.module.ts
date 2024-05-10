import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/services/auth.guard';


//lazy-loading
const routes: Routes = [
  {
    path:'munkak',
    loadChildren: ()=>import('./pages/munkak/munkak.module').then(m => m.MunkakModule),
    canActivate : [authGuard]
  },
  { 
    path: 'regisztracio', 
    loadChildren: () => import('./pages/regisztracio/regisztracio.module').then(m => m.RegisztracioModule) 
  },
  {
    path:'kontakt',
    loadChildren: ()=>import('./pages/kontakt/kontakt.module').then(m => m.KontaktModule)

  },
  {
    path:'rolam',
    loadChildren: ()=>import('./pages/rolam/rolam.module').then(m => m.RolamModule),
    canActivate : [authGuard]
  },
  {
    path:'fooldal',
    loadChildren: ()=>import('./pages/fooldal/fooldal.module').then(m => m.FooldalModule)
    
  },
  {
    path:'idopont',
    loadChildren: ()=>import('./pages/idopont/idopont.module').then(m => m.IdopontModule)
  },
  { 
    path: 'belepes', 
    loadChildren: () => import('./pages/belepes/belepes.module').then(m => m.BelepesModule) 
  },
  {
    path:'arlista',
    loadChildren: () => import('./pages/arlista/arlista.module').then(m => m.ArlistaModule) 
  },
  {
    path:'',
    redirectTo:'/fooldal',
    pathMatch: 'full'

  },
  
  
  {
    path:'**',
    redirectTo:'/not-found'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
