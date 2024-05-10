import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import{NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './shared/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  page = '';
  routes: Array<string>=[];
  loggedINUser?: firebase.default.User | null;

  //route definciok
  //objektum adott kulcsa mogott levo adatot adja vissza :map

  constructor(private router:Router,private authService:AuthService){

  }
  ngOnInit(){
    this.routes=this.router.config.map(conf=>conf.path) as string[];
    //reaktív programozás
    //subscribe
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((evts: any)=>{
      const currentPage=(evts.urlAfterRedirects as string).split('/')[1] as string;
      if(this.routes.includes(currentPage)){
        this.page=currentPage;
      }
    });
    this.authService.UserLoggedIn().subscribe(user =>{
        this.loggedINUser=user;
        localStorage.setItem('user',JSON.stringify(this.loggedINUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user',JSON.stringify('null'));

    })

  }

  changePage(selectedPage:string){
    //this.page=selectedPage;
    this.router.navigateByUrl(selectedPage);
    

  }
  onToggleSideNav(sidenav:MatSidenav){
    sidenav.toggle();
  }

  onClose(event:any,sidenav:MatSidenav):void{
    if(event === true){
      sidenav.close();
    }
  }
  logout(_?: boolean){
    this.authService.logout().then(() =>{
      console.log('Kilépés sikeres');
    }).catch(error =>{
      console.error(error);
    });

  }

}
